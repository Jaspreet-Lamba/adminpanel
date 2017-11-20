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
categoryList : Object;	
buttontext : string;
	constructor(public rest : RestfullService, private fb : FormBuilder){

		this.ProductForm = this.fb.group({
			productId : [''],
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
		this.buttontext = "Submit";
		
		if(localStorage.getItem('productData')) {
			var productData = JSON.parse(localStorage.getItem('productData'));
			console.log(productData);
			this.ProductForm.setValue({
				'productId':productData.product_id,
				'productName':productData.product_name,
				'productCategory':productData.product_category,
				'productPrice':productData.product_price,
				'productImage':'',
				'productShortDesc':productData.product_shortdesc,
				'productFullDesc':productData.product_fulldesc,
				'productSplPrice':productData.product_splprice,
				'stock':productData.stock,
				'quantity':productData.quantity,
			});
			localStorage.setItem('productData','');
			this.buttontext = "Update";
		}
		if(localStorage.getItem('categoryData')) {
			this.categoryList = JSON.parse(localStorage.getItem('categoryData'));
		} else {
			this.getCategory();
		}
	}
	addProduct(){
		//console.log(this.ProductForm.value);
		var result = this.rest.addProduct(this.ProductForm.value).subscribe(
			res=>{
				//console.log(res);
				if(res.success) {
					alert("Product Added");
					this.refreshProductFormData();
				}
				else
					alert("Error while Adding Product");
				result.unsubscribe();
			},err=>{
				alert("Oops something went wrong!");
				result.unsubscribe();
			}
		);
	}
	updateProduct() {
		var result = this.rest.updateProduct(this.ProductForm.value).subscribe(
			res=>{
				//console.log(res);
				if(res.success) {
					alert("Product Updated");
					this.refreshProductFormData();
				}
				else
					alert("Error while Updating Product");
				result.unsubscribe();
			},err=>{
				alert("Oops something went wrong!");
				result.unsubscribe();
			}
		);
	}
	deleteProduct() {
		// Series.remove({
		// 	series_id: id1
		// }, function (err) {
		// 	if (err) {
		// 		res.json(err);
		// 	}

		// 	res.json("success");
		// })
	}
	refreshProductFormData() {
		this.ProductForm.setValue({
			'productId':'',
			'productName':'',
			'productCategory':'',
			'productPrice':'',
			'productImage':'',
			'productShortDesc':'',
			'productFullDesc':'',
			'productSplPrice':'',
			'stock':'',
			'quantity':''
		});
		this.buttontext = "Submit";
	}
	getCategory() {
		var result = this.rest.getAllCategory().subscribe(
			res=>{
		if(res.success && res.length > 0) {
			//console.log(res);
			localStorage.setItem('categoryData', JSON.stringify(res.data));
		}
		result.unsubscribe();
			},err=>{
				alert("Oops something went wrong!");
				result.unsubscribe();
			}
		);
	}
}
