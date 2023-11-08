import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
  
 
  ],exports:[
    NavBarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
