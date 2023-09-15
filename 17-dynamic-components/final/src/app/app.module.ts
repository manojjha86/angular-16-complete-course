import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ConfirmDeleteComponent } from './users/confirm-delete/confirm-delete.component';
import { RoutingModule } from './routing.module';
import { ViewContainer } from './viewContainer.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ConfirmDeleteComponent,
    ViewContainer
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDeleteComponent]
})
export class AppModule { }
