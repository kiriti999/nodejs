import { GlobalService } from './../services/global.service';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  btnDisabled = false;
  currentAddress: any;
  quantities = [];
  checkoutButton: boolean;
  handler: any;
  shippingForm: FormGroup;
  editButtons = false;

  // tslint:disable-next-line:max-line-length
  constructor(private data: DataService, private globalService: GlobalService, private rest: RestApiService, private router: Router, private dataRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.createFormWithFormBuilder();
    this.shippingForm.disable();
  }

  async ngOnInit() {
    this.shippingForm.disable();
    if (this.dataRoute.snapshot.params.state) {
      const routeData = JSON.parse(this.dataRoute.snapshot.params.state);
      this.checkoutButton = routeData.checkoutButton;
    } else {
      this.shippingForm.enable();
    }
    try {
      const data = await this.rest.get(
        environment.apiUrl + '/api/accounts/address'
      );

      if (
        JSON.stringify(data['address']) === '{}' &&
        this.data.message === ''
      ) {
        this.data.warning(
          'You have not entered your shipping address. Please enter your shipping address.'
        );
      }
      this.currentAddress = data['address'];
    } catch (error) {
      this.data.error(error['message']);
    }
  }

  createFormWithFormBuilder() {
    this.shippingForm = this.formBuilder.group({
      address1: [null, Validators.required],
      address2: [null, Validators.required],
      mobile: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      postalCode: [null, Validators.required],
    });
  }

  editAddress() {
    this.shippingForm.enable();
    this.editButtons = true;
    this.checkoutButton = false;
  }

  cancelEdit() {
    this.shippingForm.disable();
    this.editButtons = false;
    this.checkoutButton = true;
  }

  async onSubmit(form) {
    this.shippingForm.disable();
    this.editButtons = false;
    this.checkoutButton = true;
    this.updateAddress();
  }

  async updateAddress() {
    try {
      const res = await this.rest.post(
        environment.apiUrl + '/api/accounts/address',
        this.currentAddress
      );

      res['success']
        ? (this.data.success(res['message']), await this.data.getProfile())
        : this.data.error(res['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

  checkout() {
    this.globalService.checkout(this.currentAddress);
  }
}
