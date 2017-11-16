import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [{
  path: '',
  component: ProductComponent,
  children: [{
    path: 'add',
    component: AddProductComponent,
  }, {
    path: 'view',
    component: ViewProductComponent,
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
export class ProductRoutingModule {

}

export const routedComponents = [
  ProductComponent,
  AddProductComponent,
  ViewProductComponent,
];
