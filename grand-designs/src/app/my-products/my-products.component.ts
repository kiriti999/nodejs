import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-my-products',
    templateUrl: './my-products.component.html',
    styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {
    products: any;
    categories: any;
    btnDisabled = false;

    product = {
        title: '',
        price: 0,
        categoryId: '',
        description: '',
        product_picture: null,
        product_image_name: ''
    };

    constructor(private data: DataService, private rest: RestApiService, private router: Router) {}

    async ngOnInit() {
        try {
            const data = await this.rest.get(environment.apiUrl + '/api/seller/products');
            data['success'] ? (this.products = data['products']) : this.data.error(data['message']);
        } catch (error) {
            this.data.error(error['message']);
        }
    }

    async deleteProduct(e) {
        try {
            const data = await this.rest.get(environment.apiUrl + `/api/seller/products/delete/?id=${e.target.id}`);
            data['success'] ? (this.products = this.products.filter(e => e._id != data['products'].id)) : this.data.error(data['message']);
        } catch (error) {
            this.data.error(error['message']);
        }
    }

    async getById(e) {
        try {
            const data = await this.rest.get(environment.apiUrl + `/api/seller/products/getById/?id=${e.target.id}`);
            if (data['success']) {
                this.router.navigate(['/profile/myproducts/edit', { state: JSON.stringify(data['products']) }]);
            } else {
                this.data.error(data['message']);
            }
        } catch (error) {
            this.data.error(error['message']);
        }
    }
}
