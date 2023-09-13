import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  router: Router = inject(Router);

  OnSearchClicked(value: string){
    //console.log(value);
    this.router.navigate(['/Courses'], { queryParams: {search: value}});
  }
}
