import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editProduct = {
    title: '',
    price: 0,
    category: {
      _id: ''
    },
    description: '',
    product_picture: null,
    product_image_name: ''
  };

  products: any;
  categories: any;
  readOnlyMode = true;
  editOnlyMode = false;
  btnDisabled = false;

  product = {
    title: '',
    price: 0,
    categoryId: '',
    description: '',
    product_picture: null,
    product_image_name: ''
  };

  constructor(private data: DataService, private rest: RestApiService, private router: Router, private dataRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.editProduct = JSON.parse(this.dataRoute.snapshot.params.state);
    try {
      const data = await this.rest.get(
        environment.apiUrl + '/api/categories'
      );
      data['success']
        ? (this.categories = data['categories'])
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

  validate(product) {
    if (product.title) {
      if (product.price) {
        if (product.category._id) {
          if (product.description) {
            return true;
          } else {
            this.data.error('Please enter description.');
          }
        } else {
          this.data.error('Please select category.');
        }
      } else {
        this.data.error('Please enter a price.');
      }
    } else {
      this.data.error('Please enter a title.');
    }
  }

  async postChanges(editProduct) {
    this.btnDisabled = true;
    try {
      if (this.validate(editProduct)) {
        const data = await this.rest.post(environment.apiUrl + '/api/seller/products/edit', editProduct);
        if (data['success']) {
          this.router.navigate(['/profile/myproducts'])
            .then(() => this.data.success(data['message']))
            .catch(error => this.data.error(error));
          this.editOnlyMode = false;
          this.readOnlyMode = true;
        } else {
          this.data.error(data['message']);
        }
      }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }

  fileChange(event: any) {

    const self = this;
    const file = event.target.files[0];

    // const fileSize = (file.size / 1024).toFixed(2);
    // if (file && parseInt(fileSize, 10) < 400) {
    const reader = new FileReader();

    reader.onloadend = function (e: any) {
      self.editProduct.product_picture = e.target.result;
      self.editProduct.product_image_name = file.name;
    };

    reader.readAsDataURL(file);
    // } else {
    //   alert('File size too large OR No file');
    // }

  }

}
