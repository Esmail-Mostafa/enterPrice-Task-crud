import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './compoents/users/users.component';
import { UpdateComponent } from './compoents/update/update.component';
import { AddComponent } from './compoents/add/add.component';
import { UserDetalisComponent } from './compoents/user-detalis/user-detalis.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    UsersComponent,
    UpdateComponent,
    AddComponent,
    UserDetalisComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TableModule,
    PaginatorModule,
    FormsModule,
    RouterModule,
    ToastModule,
    ReactiveFormsModule
  
  ]
})
export class UserModule { }
