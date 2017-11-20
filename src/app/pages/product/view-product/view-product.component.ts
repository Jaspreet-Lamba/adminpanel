import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LocalDataSource } from 'ng2-smart-table';
import { RestfullService } from '../../../restfull/restfull.service'

import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-view-product',
  styles: ['./view-product.component.scss'],
  templateUrl: './view-product.component.html',
})
export class ViewProductComponent {
  settings = {
    add: {
      addButtonContent: '',
      createButtonContent: '',
      cancelButtonContent: '',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    mode : 'external',
    columns: {
      product_id: {
        title: 'Id',
        type: 'number',
      },
      product_name: {
        title: 'Name',
        type: 'string',
      },
      product_category: {
        title: 'Category',
        type: 'String',
      },
      product_price: {
        title: 'Price',
        type: 'number',
      },
      stock: {
        title: 'Stock',
        type: 'string',
      },
      quantity: {
        title: 'Quantity',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(public rest : RestfullService, private service: SmartTableService, private router: Router) {
    // const data = this.service.getData();
    // console.log(data);
    // this.source.load(data);
    var result = this.rest.getAllProducts().subscribe(
			res=>{
        if(res.success && res.length > 0) {
          console.log(res);
          this.source.load(res.data);
        }
        result.unsubscribe();
			},err=>{
				alert("Oops something went wrong!");
				result.unsubscribe();
			}
		);
  }

  onDeleteProduct(event): void {
    alert("onDeleteProduct");
  }

  onEditProduct(event): void {
    console.log(event.data);
    localStorage.setItem('productData',JSON.stringify(event.data));
    this.router.navigate(['/pages/product/add']);
  }

  onAddProduct(event): void {
    this.router.navigate(['/pages/product/add']);
  }
}
