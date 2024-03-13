import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteModule } from './route.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core.module';
import { CounterService } from './Services/counter.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouteModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  providers: [CounterService]
})
export class AppModule { }
