import { NgModule } from "@angular/core";
import { StatsComponent } from './stats/stats.component';
import { canActivate } from './../RouteGuards/authGuard';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', canActivate: [canActivate], children: [
        {path: 'overview', component: OverviewComponent},
        {path: 'stats', component: StatsComponent}
    ] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRouteModule{

}