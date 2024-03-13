import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpEventType } from '@angular/common/http';
import { Task } from "../Model/Task";
import { map, catchError, tap, take, exhaustMap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { LoggingService } from "./Logging.Service";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    http: HttpClient = inject(HttpClient);
    loggingService: LoggingService = inject(LoggingService);
    errorSubject = new Subject<HttpErrorResponse>();
    authService: AuthService = inject(AuthService);

    CreateTask(task: Task) {
        const headers = new HttpHeaders({ 'my-header': 'hello-world' })
        this.http.post<{ name: string }>(
            'https://angularhttpclient-f1d30-default-rtdb.firebaseio.com/tasks.json',
            task, { headers: headers }
        )
            .pipe(catchError((err) => {
                //Write the logic to log errors
                const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
                this.loggingService.logError(errorObj);
                return throwError(() => err);
            }))
            .subscribe({
                error: (err) => {
                    this.errorSubject.next(err);
                }
            });
    }

    DeleteTask(id: string | undefined) {
        this.http.delete('https://angularhttpclient-f1d30-default-rtdb.firebaseio.com/tasks/' + id + '.json')
            .pipe(catchError((err) => {
                //Write the logic to log errors
                const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
                this.loggingService.logError(errorObj);
                return throwError(() => err);
            }))
            .subscribe({
                error: (err) => {
                    this.errorSubject.next(err);
                }
            });
    }

    DeleteAllTasks() {
        this.http.delete('https://angularhttpclient-f1d30-default-rtdb.firebaseio.com/tasks.json', { observe: 'events', responseType: 'json' })
            .pipe(tap((event) => {
                console.log(event);
                if (event.type === HttpEventType.Sent) {

                }
            }), catchError((err) => {
                //Write the logic to log errors
                const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
                this.loggingService.logError(errorObj);
                return throwError(() => err);
            }))
            .subscribe({
                error: (err) => {
                    this.errorSubject.next(err);
                }
            })
    }

    GetAlltasks() {
        return this.http.get('https://angularhttpclient-f1d30-default-rtdb.firebaseio.com/tasks.json').pipe(map((response) => {
            //TRANSFORM DATA
            let tasks = [];
            console.log(response);
            for (let key in response) {
                if (response.hasOwnProperty(key)) {
                    tasks.push({ ...response[key], id: key });
                }
            }

            return tasks;
        }), catchError((err) => {
            //Write the logic to log errors
            const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
            this.loggingService.logError(errorObj);
            return throwError(() => err);
        }));
    }

    UpdateTask(id: string | undefined, data: Task) {
        this.http.put('https://angularhttpclient-f1d30-default-rtdb.firebaseio.com/tasks/' + id + '.json', data)
            .pipe(catchError((err) => {
                //Write the logic to log errors
                const errorObj = { statusCode: err.status, errorMessage: err.message, datetime: new Date() }
                this.loggingService.logError(errorObj);
                return throwError(() => err);
            }))
            .subscribe({
                error: (err) => {
                    this.errorSubject.next(err);
                }
            });
    }

    getTaskDetails(id: string | undefined) {
        return this.http.get('https://angularhttpclient-f1d30-default-rtdb.firebaseio.com/tasks/' + id + '.json')
            .pipe(map((response) => {
                console.log(response)
                let task = {};
                task = { ...response, id: id }
                return task;
            }))
    }
}