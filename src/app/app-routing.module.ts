import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'popular', component: MoviesComponent },
  { path: 'top_rated', component: MoviesComponent },
  { path: 'now_playing', component: MoviesComponent },
  { path: 'upcoming', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'popular' },
  { path: '**', redirectTo: 'popular' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
