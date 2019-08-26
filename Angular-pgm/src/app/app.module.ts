import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactusComponent,
    ViewdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NavbarComponent,AppComponent,ContactusComponent,ViewdataComponent]
})
export class AppModule { }
