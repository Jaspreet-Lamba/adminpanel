import { Component } from '@angular/core';
import { RestfullService } from '../../../restfull/restfull.service'
import './ckeditor.loader';
import 'ckeditor';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'ngx-add-product',
  styleUrls: ['./add-product.component.scss'],
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
ProductForm : FormGroup; 
	
	constructor(public rest : RestfullService, private fb : FormBuilder){

		this.ProductForm = this.fb.group({
			productName : ['', Validators.required],
			productCategory : ['', Validators.required],
			productPrice : [null, Validators.required],
			productImage : ['', Validators.required],
			productShortDesc : ['', Validators.required],
			productFullDesc : ['', Validators.required],
			productSplPrice : [null, Validators.required],
			stock : ['', Validators.required],
			quantity : [null, Validators.required],
		})

	}
	addProduct(){
		console.log(this.ProductForm.value);
		var result = this.rest.addProduct(this.ProductForm.value).subscribe(
			res=>{
				console.log(res);
				if(res.success)
					alert("Product Added");
				else
					alert("Error while Adding Product");
				result.unsubscribe();
			},err=>{
				alert("Oops something went wrong!");
				result.unsubscribe();
			}
		);
	}
}
