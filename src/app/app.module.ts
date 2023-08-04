import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { PepoleComponent } from './Components/pepole/pepole.component';
import { RegisterComponent } from './Components/register/register.component';
import { TvComponent } from './Components/tv/tv.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MoviesComponent,
    NavbarComponent,
    NotfoundComponent,
    PepoleComponent,
    RegisterComponent,
    TvComponent,
    MoviedetailsComponent,
    SeemorePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
