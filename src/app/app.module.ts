import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule }  from './app.routing.module';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './Header/header.component';
import { NavigationComponent } from './Navigation/navigation.component';
import { FoooterComponent } from './Footer/footer.component';
import { FilmListComponent } from './Film/film-list.component';
import { PeopleListComponent } from './People/people-list.component';

import { FilmService } from './Film/film-list.service';
import { PeopleService } from "./People/people-list.service";

import { FilmTitlePipe } from './Pipe/film-title/film-title.pipe';


@NgModule({

  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FoooterComponent,
    FilmListComponent,
    PeopleListComponent,
    FilmTitlePipe
  ],

  providers: [
    FilmService,
    PeopleService,
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
