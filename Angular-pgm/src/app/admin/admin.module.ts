import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddusersComponent } from './addusers/addusers.component';
import { EditusersComponent } from './editusers/editusers.component';
import { DeleteusersComponent } from './deleteusers/deleteusers.component';
import { Routes, RouterModule } from  '@angular/router';




const  routes:  Routes  = [
  {
  path:  'addusers',
  component:  AddusersComponent,
  children: [
  {
  path:  'edit',
  component:  EditusersComponent
  },
 
  {
  path:  'delete',
  component:  DeleteusersComponent
  }
  ]
  }
  ];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddusersComponent, EditusersComponent, DeleteusersComponent]
})
export class AdminModule { }
