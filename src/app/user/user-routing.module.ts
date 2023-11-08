import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './compoents/users/users.component';
import { AddComponent } from './compoents/add/add.component';
import { UserDetalisComponent } from './compoents/user-detalis/user-detalis.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { UpdateComponent } from './compoents/update/update.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UsersComponent },
  { path: 'add-User', component: AddComponent },
  { path: 'user-edit/:id', component: UpdateComponent },
  { path: 'user-Detalis/:id', component: UserDetalisComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
