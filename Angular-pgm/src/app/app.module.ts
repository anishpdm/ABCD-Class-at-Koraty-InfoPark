import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './contactus/contactus.component';

import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { LogInComponent } from './log-in/log-in.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AdminModule } from  './admin/admin.module';


const appRoutes:Routes=[
  {path:'',component:ContactusComponent},
  {path:'view',component:ViewComponent},
  {path:'search',component:SearchComponent},
  {path:'login',component:LogInComponent},
  {path:'welcome',component:WelcomeComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactusComponent,
    ViewComponent,
    SearchComponent,
    LogInComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
