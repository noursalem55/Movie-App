import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { PepoleComponent } from './Components/pepole/pepole.component';
import { RegisterComponent } from './Components/register/register.component';
import { TvComponent } from './Components/tv/tv.component';
import { AuthGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',canActivate:[AuthGuard],component: HomeComponent },
  { path: 'movies',canActivate:[AuthGuard], component: MoviesComponent },
  { path: 'people',canActivate:[AuthGuard], component: PepoleComponent },
  { path: 'tv',canActivate:[AuthGuard], component: TvComponent },
  { path: 'moviedetails/:id',canActivate:[AuthGuard], component: MoviedetailsComponent},

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', canActivate:[AuthGuard], component: NotfoundComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
