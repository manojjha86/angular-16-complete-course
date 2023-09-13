import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  course;

  ngOnInit(){
    // this.activeRoute.data.subscribe((data) => {
    //   this.course = data;
    // })

    //this.course = this.router.getCurrentNavigation().extras.state;
    this.course = history.state;
  }
}
