import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  coursesService = inject(CourseService);
  AllCourses: Course[];
  searchString: string;

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    // this.searchString = this.activeRoute.snapshot.queryParams['search'];
    // this.searchString = this.activeRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString);

    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search');

      if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
        // this.coursesService.getAllcourses().subscribe((data: Course[]) => {
        //   this.AllCourses = data;
        // });

        this.AllCourses = this.activeRoute.snapshot.data['courses'];
      }else{
        this.AllCourses = this.coursesService.courses
          .filter(x => x.title.toLowerCase()
          .includes(this.searchString.toLowerCase()));
      }
    })

    
  }
}
