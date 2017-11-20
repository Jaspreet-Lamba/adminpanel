import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: '',
    redirectTo: 'product/view',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
