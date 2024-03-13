import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared.module";
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from "@angular/router";
import { StatsComponent } from './stats/stats.component';
import { canActivate } from './../RouteGuards/authGuard';
import { DashboardRouteModule } from "./dashboard-route.module";



@NgModule({
    declarations: [
        DashboardComponent,
        CreateTaskComponent,
        TaskDetailsComponent,
        OverviewComponent,
        StatsComponent,
    ],
    exports: [
        // DashboardComponent,
        // CreateTaskComponent,
        // TaskDetailsComponent,
        SharedModule,
        DashboardRouteModule
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class DashBoardModule{

}