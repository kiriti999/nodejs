import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';
import { WindowRef } from '../windowRef.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    handler: any;
    quantities = [];

    constructor(private winRef: WindowRef, private data: DataService, private rest: RestApiService, private router: Router) {
        this.cartItems().forEach(data1 => {
            this.quantities.push(1);
        });
    }

    cartItems() {
        return this.data.getCart();
    }

    cartTotal() {
        let total: any = 0;
        this.cartItems().forEach((data, index) => {
            total += data['price'] * this.quantities[index];
        });
        console.log('total', total);
        return total;
    }

    validate() {
        if (!this.quantities.every(data => data > 0)) {
            this.data.warning('Quantity cannot be less than one.');
        } else if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']).then(() => {
                this.data.warning('You need to login before making a purchase.');
            });
        } else if (!this.data.user['address']) {
            this.router.navigate(['/profile/address']).then(() => {
                this.data.warning('You need to login before making a purchase.');
            });
        } else {
            this.data.message = '';
            return true;
        }
    }

    async checkout(address) {
        let user;
        if (localStorage.getItem('token')) {
            const data = await this.rest.get(environment.apiUrl + '/api/accounts/profile');
            user = data['user'];
        }
        const options: any = {
            key: 'rzp_live_NXdoyPM0snarAK',
            amount: this.cartTotal() * 100,
            name: 'Grand Designs',
            description: '',
            image: './assets/images/logo.png',
            modal: {
                escape: false
            },
            prefill: {
                name: user.name,
                contact: '+91' + user.address.mobile,
                email: user.email,
                method: 'card',
                'card[number]': '',
                'card[expiry]': '',
                'card[cvv]': ''
            },
            notes: {
                // tslint:disable-next-line:max-line-length
                address: address.addr1 + ', ' + address.addr1 + ', ' + address.city + ', ' + address.state + '-' + address.postalCode + '-' + address.mobile
            },
            theme: {
                color: '#6fbc29'
            }
        };
        // options.handler = ((response) => {
        //   options['payment_response_id'] = response.razorpay_payment_id;
        //   this.paymentService.payWithRazor({ cart: {}, payment: options });
        // });
        // options.modal.ondismiss = (() => {
        //   this.loginService.SetLoader = false;
        // });
        const rzp = new this.winRef.nativeWindow.Razorpay(options);
        rzp.open();
    }
}
