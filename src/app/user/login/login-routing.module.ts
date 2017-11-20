import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  children: [{
    path: 'add',
    component: AddProductComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ], 
  exports: [
    RouterModule,
  ],
})
export class LoginRoutingModule {

}

export const routedComponents = [
  LoginComponent,
  AddProductComponent
];
