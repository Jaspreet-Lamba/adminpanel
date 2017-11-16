import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';

const routes: Routes = [{
  path: '',
  component: CategoryComponent,
  children: [{
    path: 'view',
    component: ViewCategoryComponent,
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
export class CategoryRoutingModule {

}

export const routedComponents = [
  CategoryComponent,
  ViewCategoryComponent,
];
