import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { RestfullService } from '../../../restfull/restfull.service'
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-view-category',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
  templateUrl: './view-category.component.html',
})
export class ViewCategoryComponent {
  buttontext : string;
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
    mode : 'external',
    actions: {
      add: false,
      delete: false
    },
    columns: {
      category_id: {
        title: 'Id',
        type: 'number',
      },
      category_name: {
        title: 'Category Name',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      category_gst: {
        title: 'GST',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  CategoryForm : FormGroup;
  
  constructor(private service: SmartTableService, public rest : RestfullService, private fb : FormBuilder) {
    // const data = this.service.getData();
    // this.source.load(data);
    this.buttontext = "Add Category";
    this.CategoryForm = this.fb.group({
      categoryId : [''],
      categoryName : ['', Validators.required],
			status : ['', Validators.required],
      categoryGst : ['', Validators.required],
    })
    this.getCategory();
    
  }
  getCategory() {
    var result = this.rest.getAllCategory().subscribe(
			res=>{
        if(res.success && res.length > 0) {
          localStorage.setItem('categoryData', JSON.stringify(res.data));
          this.source.load(res.data);
        }
        this.refreshCategoryFormData();
        result.unsubscribe();
			},err=>{
				alert("Oops something went wrong!");
				result.unsubscribe();
			}
		);
  }
  addCategory(){
		//console.log(this.CategoryForm.value);
		var result = this.rest.addCategory(this.CategoryForm.value).subscribe(
			res=>{
        //console.log(res);
				if(res.success){
          this.getCategory();
					alert("Category Added");
        }else
					alert("Error while Adding Category");
				result.unsubscribe();
			},err=>{
				alert("Oops something went wrong!");
				result.unsubscribe();
			}
		);
  }

  updateCategory() {
    var result = this.rest.updateCategory(this.CategoryForm.value).subscribe(
			res=>{
        //console.log(res);
				if(res.success){
          this.getCategory();
					alert("Category Updated");
        }else
					alert("Error while Updating Category");
				result.unsubscribe();
			},err=>{
				alert("Oops something went wrong!");
				result.unsubscribe();
			}
		);
  }
  
  onEditCategory(event): void {
    console.log(event.data);
    this.buttontext = "Update Category";
    this.CategoryForm.setValue({
      'categoryId':event.data.category_id,
      'categoryName':event.data.category_name,
      'status':event.data.status,
      'categoryGst':event.data.category_gst,
    });
  }

  onDeleteCategory(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  refreshCategoryFormData() {
		this.CategoryForm.setValue({
			'categoryId':'',
			'categoryName':'',
			'status':'',
      'categoryGst':'',
		});
		this.buttontext = "Add Category";
	}
}
