import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingRoomComponent } from './booking-room/booking-room.component';
import {RouterModule, Routes} from "@angular/router";
import {MaterializeModule} from "angular2-materialize";
import {BookingRoomService} from "./services/booking-room.service";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const appRoutes: Routes = [
  {path: '', component : BookingRoomComponent}
];

export const firebaseConfig = {

  apiKey: "C86UmzIyI6RNo0Hqz8sT",
  authDomain: "booking-avail4568.firebaseapp.com",
  databaseURL: "https://booking-avail4568.firebaseio.com",
  storageBucket: "gs://booking-avail4568.appspot.com/",
  messagingSenderId: "39363426004"
};

@NgModule({
  declarations: [
    AppComponent,
    BookingRoomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [BookingRoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
