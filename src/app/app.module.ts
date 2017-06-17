import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
export const firebaseConfig = {
	apiKey: "AIzaSyDjfKxCVGpePxFqdYyNdPwBcxOvczYZyX4",
    authDomain: "myauth-74457.firebaseapp.com",
    databaseURL: "https://myauth-74457.firebaseio.com",
    projectId: "myauth-74457",
    storageBucket: "myauth-74457.appspot.com",
    messagingSenderId: "309150091554"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
