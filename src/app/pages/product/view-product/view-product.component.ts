import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { RestfullService } from '../../../restfull/restfull.service'

import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-view-product',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
  templateUrl: './view-product.component.html',
})
export class ViewProductComponent {
	settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
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

  constructor(public rest : RestfullService, private service: SmartTableService) {
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

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
