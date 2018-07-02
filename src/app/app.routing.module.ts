import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmListComponent } from './Film/film-list.component';
import { PeopleListComponent } from './People/people-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'film', pathMatch: 'full' },
  { path: 'film',  component: FilmListComponent},
  { path: 'people', component: PeopleListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
