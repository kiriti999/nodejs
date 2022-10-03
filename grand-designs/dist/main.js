(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/address/address.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address/address.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"address\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">My Shipping Address</h4>\n    <hr>\n    <app-message></app-message>\n    <div *ngIf=\"!currentAddress\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"currentAddress\" class=\"card bg-light\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"shippingForm\" (ngSubmit)=\"onSubmit(shippingForm)\">\n          <div class=\"form-group\">\n            <div class=\"form-edit\">\n              <label>Address 1</label>\n              <button *ngIf=\"checkoutButton\" type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"editAddress()\"\n                [disabled]=\"btnDisabled\">Edit\n                address</button>\n            </div>\n            <input type=\"text\" formControlName=\"address1\" class=\"form-control form-edit-input\"\n              [(ngModel)]=\"currentAddress.addr1\">\n          </div>\n          <div class=\"form-group\">\n            <label>Address 2</label>\n            <input type=\"text\" formControlName=\"address2\" class=\"form-control\" [(ngModel)]=\"currentAddress.addr2\">\n          </div>\n          <div class=\"form-group\">\n            <label>Mobile</label>\n            <input type=\"number\" formControlName=\"mobile\" class=\"form-control\" required\n              [(ngModel)]=\"currentAddress.mobile\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>City</label>\n                <input type=\"text\" formControlName=\"city\" class=\"form-control\" [(ngModel)]=\"currentAddress.city\">\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>State</label>\n                <input type=\"text\" formControlName=\"state\" class=\"form-control\" [(ngModel)]=\"currentAddress.state\">\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>Postal Code</label>\n                <input type=\"number\" formControlName=\"postalCode\" class=\"form-control\"\n                  [(ngModel)]=\"currentAddress.postalCode\">\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"form-group\">\n            <label>Country</label>\n            <input type=\"text\" formControlName=\"country\" class=\"form-control\" [(ngModel)]=\"currentAddress.country\">\n          </div> -->\n          <div class=\"edit-footer-buttons\">\n\n            <button *ngIf=\"checkoutButton\" type=\"button\" class=\"btn btn-sm btn-danger\"\n              (click)=\"checkout()\">Checkout</button>\n\n            <button *ngIf=\"!checkoutButton && !editButtons\" type=\"submit\" class=\"btn btn-sm btn-danger\">Change\n              Address</button>\n\n            <button *ngIf=\"editButtons\" type=\"submit\" class=\"btn btn-sm btn-danger\">Save</button>\n            <button *ngIf=\"editButtons\" type=\"button\" class=\"btn btn-sm btn-danger\"\n              (click)=\"cancelEdit()\">Cancel</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-main\">\n  <div class=\"header-logo\">\n    <svg routerLink=\"/\" alt=\"logo\" viewBox=\"0 0 482.0110168457031 91.14653778076172\" preserveAspectRatio=\"xMidYMid meet\"\n      class=\" logo\" style=\"height: 100%;\">\n      <defs id=\"SvgjsDefs1027\"></defs>\n      <g id=\"SvgjsG1028\" featurekey=\"root\" fill=\"#2d3440\"></g>\n      <g id=\"SvgjsG1029\" featurekey=\"symbol1\" fill=\"#ffffff\"\n        transform=\"matrix(0.7905170760421555,0,0,0.7905170760421555,6.067156889944477,6.0474146197892225)\">\n        <path fill=\"#fff\"\n          d=\"M83.22,28.485c-6.138-9.724-13.995-16.732-23.353-20.827C55.787,5.87,51.33,5,46.244,5  c-0.662,0-1.35,0.015-2.045,0.044c-1.764,0.073-3.669,0.239-5.823,0.509c-3.393,0.424-6.462,1.412-9.122,2.939  c-2.661,1.524-5.046,3.661-7.089,6.351c-2.596,3.416-4.572,7.483-6.042,12.432c-1.777,5.984-2.56,11.88-2.327,17.525  c0.189,4.595,1.057,9.142,2.579,13.515c1.156,3.322,2.756,6.192,4.756,8.53c1.327,1.552,2.862,2.901,4.578,4.024  c-2.11,1.34-4.377,2.373-6.753,3.456c-0.606,0.276-1.215,0.554-1.826,0.839l-0.024,0.011l-0.023,0.013  C4.099,82.13,4.958,90.976,5.001,91.349L5.421,95l1.442-3.38c0.039-0.09,4.084-9.227,15.62-13.272  c7.227-2.534,7.77-2.946,9.145-4.477c0.285-0.317,0.608-0.677,1.093-1.137c2.872-2.713,4.545-6.322,4.972-10.725  c1.941,0.946,3.995,1.425,6.122,1.425c0.198,0,0.397-0.004,0.596-0.013c0.806-0.033,1.626-0.135,2.45-0.305  c0.243,3.508,1.523,6.607,3.717,8.987c2.384,2.596,5.819,4.269,9.931,4.839c4.059,0.566,7.018,1.74,9.395,2.683  c0.322,0.128,0.634,0.251,0.936,0.369c8.487,1.849,7.437,14.528,7.437,14.528l0.28,0.001c0,0,15.083-18.86,14.967-35.277  C93.095,48.83,89.725,38.78,83.22,28.485z M29.858,27.716c0.753-2.336,1.948-4.269,3.551-5.744c1.422-1.304,3.127-2.246,5.19-2.865  c0.188,2.552,1.056,4.873,1.863,6.862c1.694,4.153,4.184,7.882,7.614,11.403c2.37,2.433,5.17,4.743,8.771,7.235  c-0.489,2.21-1.317,4.393-2.412,6.355c-1.398,2.508-3.2,4.688-5.212,6.305c-2.097,1.685-4.321,2.619-6.432,2.703l-0.315,0.006  c-1.214,0-2.352-0.268-3.48-0.819c-1.315-0.646-2.54-1.665-3.64-3.028c-4.417-5.489-6.794-11.401-7.064-17.571  C28.143,35.057,28.669,31.409,29.858,27.716z M52.078,58.259l0.348-1.529c1.429-1.507,2.677-3.249,3.713-5.184  c0.755-1.413,1.378-2.908,1.859-4.458c2.692,1.958,5.533,3.556,8.078,4.987c0.621,0.348,1.234,0.694,1.844,1.041  c2.168,1.396,4.481,2.903,6.72,4.476c0.5,0.351,1.006,0.716,1.511,1.091l0.14,0.119c2.372,2.127,4.03,3.938,5.2,5.683  c1.446,2.159,2.194,4.273,2.287,6.465c0.014,0.366,0.028,0.75-0.011,1.118c-0.419,4.007-2.195,9.047-3.469,12.108  c-0.656-2.07-2.013-4.802-4.813-6.947c-3.467-2.531-8.275-4.234-14.309-5.075c-3.029-0.426-5.398-1.545-7.041-3.325  c-1.527-1.662-2.358-3.825-2.47-6.427C51.611,61.092,51.75,59.697,52.078,58.259z M70.44,48.988  c-4.379-2.822-14.387-10.052-20.278-14.65c-2.349-2.528-4.05-5.184-5.198-8.116c-0.596-1.516-1.156-3.123-1.214-4.621  c-0.006-0.143-0.008-0.282-0.005-0.42c0.003-0.152,0.001-0.302-0.004-0.451c-0.023-0.516-0.094-0.943-0.225-1.351  c-0.127-0.393-0.308-0.748-0.538-1.056c-0.369-0.507-0.931-0.922-1.534-1.128c-0.388-0.137-0.8-0.205-1.25-0.205l-0.189,0.004  c-0.563,0.026-1.033,0.132-1.466,0.239c-2.84,0.708-5.258,2.006-7.189,3.859c-1.911,1.828-3.317,4.169-4.176,6.957  c-1.135,3.675-1.636,7.329-1.489,10.859c0.256,6.278,2.535,12.24,6.776,17.719c0.312,0.404,0.654,0.798,1.034,1.193  c-0.246,0.479-0.334,0.92-0.378,1.219c-0.052,0.362-0.067,0.74-0.05,1.195l0.006,0.12v0.002c-0.004,0.047-0.015,0.117-0.033,0.21  l-0.032,0.165c-0.039,0.199-0.094,0.471-0.127,0.796c-0.173,1.73-0.557,3.205-1.174,4.514c-0.337,0.713-0.739,1.366-1.219,1.98  c-2.235-1.053-4.099-2.469-5.679-4.314c-1.605-1.875-2.905-4.222-3.864-6.976c-1.366-3.926-2.145-8.006-2.315-12.126  c-0.211-5.108,0.506-10.475,2.131-15.951c1.3-4.379,3.019-7.939,5.258-10.884c1.674-2.201,3.52-3.864,5.644-5.082  c2.13-1.22,4.523-1.984,7.315-2.335c2.018-0.253,3.791-0.408,5.421-0.475c0.627-0.026,1.246-0.039,1.839-0.039  c4.463,0,8.177,0.715,11.689,2.251c8.569,3.756,15.505,9.964,21.204,18.98c6.039,9.565,9.166,18.837,9.56,28.345  c0.059,1.398-0.21,4.131-0.506,6.458c-0.893-2.149-2.102-4.424-3.035-5.524c-1.533-1.811-3.428-3.537-5.962-5.43  C76.444,52.523,73.364,50.653,70.44,48.988z\">\n        </path>\n      </g>\n      <g id=\"SvgjsG1030\" featurekey=\"text1\" fill=\"#ffffff\"\n        transform=\"matrix(3.31491670788717,0,0,3.31491670788717,96.3535919374592,-16.817670982191686)\">\n        <path\n          d=\"M10.1 16.56 c0.16 0 0.28 0.12 0.28 0.3 l0 3.08 c0 2.8 -1.46 4.16 -4.02 4.16 l-1.24 0 c-2.56 0 -4.02 -1.36 -4.02 -4.16 l0 -5.88 c0 -2.8 1.46 -4.16 4.02 -4.16 l1.24 0 c2.48 0 3.9 1.26 4.02 3.94 c0 0.18 -0.12 0.28 -0.28 0.28 l-0.44 0 c-0.18 0 -0.3 -0.1 -0.3 -0.28 c-0.08 -2.08 -0.96 -2.98 -3 -2.98 l-1.24 0 c-2.12 0 -3 0.98 -3 3.2 l0 5.88 c0 2.22 0.88 3.2 3 3.2 l1.24 0 c2.14 0 3 -0.98 3 -3.2 l0 -2.44 l-2.26 0 c-0.16 0 -0.28 -0.1 -0.28 -0.28 l0 -0.36 c0 -0.18 0.12 -0.3 0.28 -0.3 l3 0 z M18.240000000000002 14.88 c-0.08 0.18 -0.22 0.2 -0.38 0.14 c-0.28 -0.1 -0.6 -0.16 -1.02 -0.16 l-0.24 0 c-1.66 0 -2.62 1.04 -2.94 1.58 l0 7.26 c0 0.2 -0.1 0.3 -0.3 0.3 l-0.38 0 c-0.2 0 -0.3 -0.1 -0.3 -0.3 l0 -9.4 c0 -0.2 0.1 -0.3 0.3 -0.3 l0.38 0 c0.2 0 0.3 0.1 0.3 0.3 l0 1.26 c0.78 -1.14 1.92 -1.64 3.26 -1.64 c0.44 0 0.9 0.06 1.3 0.16 c0.18 0.08 0.24 0.2 0.18 0.38 z M27.48 23.82 c0.02 0.08 0.04 0.18 -0.06 0.18 l-0.64 0 c-0.22 0 -0.32 -0.2 -0.32 -0.48 l0 -1.2 c-0.62 1.04 -1.56 1.78 -3.02 1.78 l-0.92 0 c-1.8 0 -2.9 -1 -2.9 -2.98 c0 -2 1.14 -2.88 2.86 -2.88 l3.98 0 l0 -0.62 c0 -2.14 -0.52 -2.76 -2.44 -2.76 l-0.38 0 c-1.06 0 -1.78 0.18 -2.48 0.54 c-0.18 0.1 -0.36 0.14 -0.42 -0.02 l-0.22 -0.42 c-0.06 -0.12 -0.04 -0.22 0.16 -0.34 c0.8 -0.52 1.86 -0.7 2.96 -0.7 l0.38 0 c2.48 0 3.42 1.14 3.42 3.68 l0 5.92 c0 0.1 0.02 0.22 0.04 0.3 z M23.36 23.14 c1.62 0 2.68 -0.9 3.1 -2.22 l0 -1.78 l-3.94 0 c-1.24 0 -1.92 0.48 -1.92 1.98 s0.68 2.02 1.92 2.02 l0.84 0 z M34.04 13.92 c2.38 0 3.18 1.2 3.18 3.54 l0 6.24 c0 0.2 -0.1 0.3 -0.3 0.3 l-0.38 0 c-0.2 0 -0.3 -0.1 -0.3 -0.3 l0 -6.18 c0 -1.74 -0.4 -2.66 -2.18 -2.66 l-0.34 0 c-1.66 0 -2.62 1.04 -2.94 1.58 l0 7.26 c0 0.2 -0.1 0.3 -0.3 0.3 l-0.38 0 c-0.2 0 -0.3 -0.1 -0.3 -0.3 l0 -9.4 c0 -0.2 0.1 -0.3 0.3 -0.3 l0.38 0 c0.2 0 0.3 0.1 0.3 0.3 l0 1.26 c0.78 -1.12 1.9 -1.64 3.1 -1.64 l0.16 0 z  M46.980000000000004 10 c0.2 0 0.3 0.1 0.3 0.3 l0 13.4 c0 0.2 -0.1 0.3 -0.3 0.3 l-0.38 0 c-0.2 0 -0.3 -0.1 -0.3 -0.3 l0 -1.22 c-0.42 1 -1.24 1.62 -2.72 1.62 l-0.72 0 c-2.08 0 -3.54 -1.34 -3.54 -3.68 l0 -2.86 c0 -2.38 1.46 -3.64 3.54 -3.64 l0.72 0 c1.48 0 2.3 0.52 2.72 1.5 l0 -5.12 c0 -0.2 0.1 -0.3 0.3 -0.3 l0.38 0 z M43.72 23.14 c1.66 0 2.58 -0.92 2.58 -2.64 l0 -2.88 c0 -1.86 -0.92 -2.76 -2.58 -2.76 l-0.84 0 c-1.66 0 -2.58 0.9 -2.58 2.76 l0 2.88 c0 1.72 0.92 2.64 2.58 2.64 l0.84 0 z  M60.86000000000001 10 c2.44 0 3.9 1.26 3.9 3.98 l0 6.04 c0 2.72 -1.46 3.98 -3.9 3.98 l-4.48 0 l-0.3 0 c-0.2 0 -0.3 -0.1 -0.3 -0.3 l0 -13.4 c0 -0.2 0.1 -0.3 0.3 -0.3 l0.42 0 l4.36 0 z M63.74 20.02 l0 -6.04 c0 -2.14 -0.88 -3.02 -2.88 -3.02 l-4.06 0 l0 12.08 l4.06 0 c2 0 2.88 -0.88 2.88 -3.02 z M70.82 13.92 c1.72 0 3.48 1.28 3.48 3.62 l0 1.26 c0 0.38 -0.26 0.62 -0.66 0.62 l-6.06 0 l0 1.18 c0 1.62 0.92 2.54 2.58 2.54 l0.66 0 c1.4 0 1.78 -0.58 2.4 -1.32 c0.14 -0.16 0.22 -0.2 0.42 -0.06 l0.26 0.18 c0.2 0.14 0.18 0.26 0.06 0.42 c-0.72 0.88 -1.44 1.74 -3.14 1.74 l-0.66 0 c-2.1 0 -3.6 -1.32 -3.6 -3.56 l0 -2.98 c0 -2.38 1.5 -3.64 3.6 -3.64 l0.66 0 z M73.28 18.52 l0 -0.9 c0 -1.86 -1.06 -2.76 -2.46 -2.76 l-0.66 0 c-1.66 0 -2.58 0.9 -2.58 2.74 l0 0.92 l5.7 0 z M79.78 18.48 c2.06 0.26 3.76 0.5 3.76 2.74 c0 2.08 -1.58 2.88 -3.4 2.88 l-0.8 0 c-1.84 0 -3.02 -0.9 -3.32 -2.48 c-0.04 -0.18 0.06 -0.3 0.26 -0.3 l0.5 0 c0.16 0 0.26 0.1 0.28 0.28 c0.26 1.08 0.96 1.54 2.28 1.54 l0.8 0 c1.36 0 2.42 -0.42 2.42 -1.92 s-1.3 -1.66 -2.78 -1.84 c-2.16 -0.24 -3.6 -0.6 -3.6 -2.78 c0 -1.9 1.28 -2.66 3.26 -2.66 l0.58 0 c1.86 0 3.12 0.84 3.2 2.66 c0 0.2 -0.06 0.32 -0.28 0.32 l-0.44 0 c-0.18 0 -0.3 -0.12 -0.3 -0.32 c-0.1 -1.2 -0.84 -1.76 -2.22 -1.76 l-0.5 0 c-1.44 0 -2.32 0.42 -2.32 1.78 c0 1.44 1.04 1.68 2.62 1.86 z M85.78 10.3 c0 -0.2 0.1 -0.3 0.3 -0.3 l0.32 0 c0.2 0 0.3 0.1 0.3 0.3 l0 0.44 c0 0.2 -0.1 0.3 -0.3 0.3 l-0.32 0 c-0.2 0 -0.3 -0.1 -0.3 -0.3 l0 -0.44 z M85.74000000000001 14.3 c0 -0.2 0.1 -0.3 0.3 -0.3 l0.38 0 c0.2 0 0.3 0.1 0.3 0.3 l0 9.4 c0 0.2 -0.1 0.3 -0.3 0.3 l-0.38 0 c-0.2 0 -0.3 -0.1 -0.3 -0.3 l0 -9.4 z M96.68 14 c0.2 0 0.3 0.1 0.3 0.3 l0 10.28 c0 2.3 -1.42 3.42 -4.14 3.42 c-0.64 0 -1.12 -0.02 -1.78 -0.18 c-0.12 -0.02 -0.18 -0.08 -0.18 -0.18 l0 -0.6 c0 -0.12 0.06 -0.18 0.18 -0.16 c0.66 0.16 1.14 0.18 1.78 0.18 c1.94 0 3.16 -0.42 3.16 -2.44 l0 -2.14 c-0.42 1 -1.24 1.62 -2.72 1.62 l-0.72 0 c-2.08 0 -3.54 -1.34 -3.54 -3.68 l0 -2.86 c0 -2.38 1.46 -3.64 3.54 -3.64 l0.72 0 c1.48 0 2.3 0.52 2.72 1.5 l0 -1.12 c0 -0.2 0.1 -0.3 0.3 -0.3 l0.38 0 z M93.42 23.14 c1.66 0 2.58 -0.92 2.58 -2.64 l0 -2.88 c0 -1.86 -0.92 -2.76 -2.58 -2.76 l-0.84 0 c-1.66 0 -2.58 0.9 -2.58 2.76 l0 2.88 c0 1.72 0.92 2.64 2.58 2.64 l0.84 0 z M103.62 13.92 c2.38 0 3.18 1.2 3.18 3.54 l0 6.24 c0 0.2 -0.1 0.3 -0.3 0.3 l-0.38 0 c-0.2 0 -0.3 -0.1 -0.3 -0.3 l0 -6.18 c0 -1.74 -0.4 -2.66 -2.18 -2.66 l-0.34 0 c-1.66 0 -2.62 1.04 -2.94 1.58 l0 7.26 c0 0.2 -0.1 0.3 -0.3 0.3 l-0.38 0 c-0.2 0 -0.3 -0.1 -0.3 -0.3 l0 -9.4 c0 -0.2 0.1 -0.3 0.3 -0.3 l0.38 0 c0.2 0 0.3 0.1 0.3 0.3 l0 1.26 c0.78 -1.12 1.9 -1.64 3.1 -1.64 l0.16 0 z  M112.58 18.48 c2.06 0.26 3.76 0.5 3.76 2.74 c0 2.08 -1.58 2.88 -3.4 2.88 l-0.8 0 c-1.84 0 -3.02 -0.9 -3.32 -2.48 c-0.04 -0.18 0.06 -0.3 0.26 -0.3 l0.5 0 c0.16 0 0.26 0.1 0.28 0.28 c0.26 1.08 0.96 1.54 2.28 1.54 l0.8 0 c1.36 0 2.42 -0.42 2.42 -1.92 s-1.3 -1.66 -2.78 -1.84 c-2.16 -0.24 -3.6 -0.6 -3.6 -2.78 c0 -1.9 1.28 -2.66 3.26 -2.66 l0.58 0 c1.86 0 3.12 0.84 3.2 2.66 c0 0.2 -0.06 0.32 -0.28 0.32 l-0.44 0 c-0.18 0 -0.3 -0.12 -0.3 -0.32 c-0.1 -1.2 -0.84 -1.76 -2.22 -1.76 l-0.5 0 c-1.44 0 -2.32 0.42 -2.32 1.78 c0 1.44 1.04 1.68 2.62 1.86 z\">\n        </path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"header-search-bar\">\n    <div class=\"input-group\">\n      <input type=\"text\" name=\"search\" class=\"form-control\" [(ngModel)]=\"searchTerm\" (keyup.enter)=\"search()\">\n      <span id=\"searchBtn\" class=\"bg-warning\" (click)=\"search()\">\n        <i class=\"fa fa-search\"></i>\n      </span>\n    </div>\n  </div>\n  <div class=\"header-categories\">\n    <a (click)=\"collapse()\" routerLink=\"/categories\" routerLinkActive=\"active\" class=\"nav-link\">Categories</a>\n  </div>\n  <div class=\"header-account-drop-down\">\n    <div class=\"dropdown\">\n      <button class=\"dropbtn bg-main\">Account</button>\n      <div class=\"dropdown-content form-control\">\n        <a *ngIf=\"token\" routerLink=\"/profile\" class=\"dropdown-item\">\n          <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i> Profile\n        </a>\n        <a *ngIf=\"!token\" routerLink=\"/login\" class=\"dropdown-item\">\n          <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Login\n        </a>\n        <a *ngIf=\"token\" (click)=\"logout();\" class=\"dropdown-item\">\n          <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Logout\n        </a>\n        <a *ngIf=\"!token\" routerLink=\"/register\" class=\"dropdown-item\">\n          <i class=\"fa fa-group\" aria-hidden=\"true\"></i> Register\n        </a>\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"header-cart\">\n    <a (click)=\"collapse()\" routerLink=\"/cart\" routerLinkActive=\"active\" class=\"nav-link\">\n      <i class=\"fa fa-shopping-cart mr-1\"></i>\n      Cart\n      <span *ngIf=\"data.cartItems\" class=\"badge badge-warning ml-1\">{{ data.cartItems }}</span>\n    </a>\n  </div>\n  <div class=\"mobile-header-search-bar\">\n    <div class=\"input-group\">\n      <input type=\"text\" name=\"search\" class=\"form-control\" [(ngModel)]=\"searchTerm\" (keyup.enter)=\"search()\">\n      <span id=\"searchBtn\" class=\"bg-warning\" (click)=\"search()\">\n        <i class=\"fa fa-search\"></i>\n      </span>\n    </div>\n  </div>\n\n</div>\n\n<!-- mobile menu -->\n<div href=\"javascript:void(0);\" class=\"icon\" (click)=\"openMobileMenu()\">\n  <i class=\"fa fa-bars my-hamburger\"></i>\n\n  <div class=\"mobile-links\" id='mobile-links'>\n    <!-- categories  -->\n    <a (click)=\"collapse()\" routerLink=\"/categories\" routerLinkActive=\"active\" class=\"nav-link\">Categories</a>\n\n    <a *ngIf=\"token\" routerLink=\"/profile\" class=\"dropdown-item\">\n      <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i> Profile\n    </a>\n    <a *ngIf=\"!token\" routerLink=\"/login\" class=\"dropdown-item\">\n      <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Login\n    </a>\n    <a *ngIf=\"token\" (click)=\"logout();\" class=\"dropdown-item\">\n      <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Logout\n    </a>\n    <a *ngIf=\"!token\" routerLink=\"/register\" class=\"dropdown-item\">\n      <i class=\"fa fa-group\" aria-hidden=\"true\"></i> Register\n    </a>\n\n    <!-- Account dropdown  -->\n    <!-- <div class=\"subnav\">\n      <button class=\"subnavbtn\" (click)='openSubNav()'>Account <i class=\"fa fa-caret-down\"></i></button>\n      <div class=\"subnav-content\" id='subnav-content'>\n        <a *ngIf=\"token\" routerLink=\"/profile\" class=\"dropdown-item\">\n          <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i> Profile\n        </a>\n        <a *ngIf=\"!token\" routerLink=\"/login\" class=\"dropdown-item\">\n          <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Login\n        </a>\n        <a *ngIf=\"token\" (click)=\"logout();\" class=\"dropdown-item\">\n          <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Logout\n        </a>\n        <a *ngIf=\"!token\" routerLink=\"/register\" class=\"dropdown-item\">\n          <i class=\"fa fa-group\" aria-hidden=\"true\"></i> Register\n        </a>\n      </div>\n    </div> -->\n    <a (click)=\"collapse()\" routerLink=\"/cart\" routerLinkActive=\"active\" class=\"nav-link\">\n      <i class=\"fa fa-shopping-cart mr-1\"></i>Cart\n      <span *ngIf=\"data.cartItems\" class=\"badge badge-warning ml-1\">{{ data.cartItems }}</span>\n    </a>\n  </div>\n</div>\n\n\n<router-outlet></router-outlet>\n\n\n<footer id=\"main-footer\" class=\"bg-main text-white mt-5 p-1\">\n  <div class=\"container\">\n    <p class=\"lead text-center mb-0\">Copyright &copy; 2020 Grand Designs</p>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"cart\">\n  <div class=\"container-fluid p-5\">\n    <app-message></app-message>\n    <h3 *ngIf=\"!cartItems.length\" class=\"display-2 text-center mt-5\">Cart is Empty</h3>\n    <div *ngIf=\"cartItems.length\" class=\"row\">\n      <div class=\"col-md-9\">\n        <p class=\"lead font-weight-bold\">Shopping Cart</p>\n        <div class=\"row\">\n          <div class=\"offset-8 col-2 d-none d-md-block\">\n            <p>\n              <small class=\"text-muted\">Price</small>\n            </p>\n          </div>\n          <div class=\"col-2 d-none d-md-block\">\n            <p>\n              <small class=\"text-muted\">Quantity</small>\n            </p>\n          </div>\n        </div>\n        <hr class=\"mt-0\">\n        <div *ngFor=\"let item of cartItems; let i=index; trackBy: trackByCartItems;\" class=\"cartItem\">\n          <div class=\"row\">\n            <div class=\"col-4 col-md-2\">\n              <a routerLink=\"/product/{{ item._id }}\">\n                <img src=\"{{ item.image }}\" alt=\"productImage\" class=\"img-fluid img-thumbnail\">\n              </a>\n            </div>\n            <div class=\"col-5 col-md-6\">\n              <h5>\n                <a routerLink=\"/product/{{ item._id }}\">{{ item.title }}</a>\n              </h5>\n              <p class=\"m-0\">\n                <small class=\"text-muted\">{{ item.owner.name }}</small>\n              </p>\n              <p class=\"m-0\">\n                <small class=\"text-muted\">{{ item.category.name }}</small>\n              </p>\n              <a class=\"text-danger\" (click)=\"removeProduct(i, item)\">Delete</a>\n            </div>\n            <div class=\"col-1 col-md-2\">\n              <h6 class=\"font-weight-bold text-danger\">{{ item.price | currency: 'INR' }}</h6>\n            </div>\n            <div class=\"col-1 mt-5 mt-md-0 p-0\">\n              <input type=\"number\" class=\"form-control\" min=\"1\" max=\"99\" [(ngModel)]=\"quantities[i]\">\n            </div>\n          </div>\n          <hr>\n        </div>\n        <h5 class=\"text-right\">Total:\n          <span class=\"ml-1 font-weight-bold text-danger\">{{ cartTotal | currency: 'INR' }}</span>\n        </h5>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"card bg-light\">\n          <div class=\"card-body\">\n            <h5>Total:\n              <span class=\"ml-1 font-weight-bold text-danger\">{{ cartTotal | currency: 'INR' }}</span>\n            </h5>\n            <br>\n            <!-- <button class=\"btn btn-warning btn-block\" (click)=\"checkout()\" [disabled]=\"btnDisabled\">Checkout</button> -->\n            <button *ngIf=\"token\" class=\"btn btn-warning btn-block\" (click)='goToAddressPage()'\n              [disabled]=\"btnDisabled\">Checkout</button>\n\n            <button *ngIf=\"!token\" routerLink=\"/login\" class=\"btn btn-warning btn-block\"\n              [disabled]=\"btnDisabled\">Checkout</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"categories\">\n  <div class=\"container p-5\">\n    <app-message></app-message>\n    <h4 class=\"display-4\">Categories</h4>\n    <hr>\n    <div *ngIf=\"!categories\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"categories\" class=\"list-group\">\n      <a *ngFor=\"let category of categories\" routerLink=\"/categories/{{ category._id }}\" class=\"list-group-item list-group-item-action\">\n      {{ category.name }}\n      </a>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"category\">\n  <div class=\"container p-3 p-md-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!category\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <h3 *ngIf=\"category && !category.products.length\" class=\"display-2 text-center mt-5\">No Products inside Category</h3>\n    <div *ngIf=\"category && category.products.length\">\n      <p>{{ lower }}-{{ upper }} of {{ category.totalProducts }} products in {{ category.categoryName }}</p>\n      <hr>\n      <div class=\"product\" *ngFor=\"let product of category.products\">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-2\">\n            <a routerLink=\"/product/{{ product._id }}\">\n              <img [src]=\"product.image\" alt=\"productImage\" class=\"img-fluid img-thumbnail\">\n            </a>\n          </div>\n          <div class=\"col-5 col-md-8\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-6\">\n                <h5>\n                  <a routerLink=\"/product/{{ product._id }}\">{{ product.title }}</a>\n                </h5>\n                <p>\n                  <small class=\"text-muted\">{{ product.category.id }}</small>\n                </p>\n                <p>{{ product.price | currency }}</p>\n              </div>\n              <div class=\"col-md-6\">\n                <ngb-rating [(rate)]=\"product.averageRating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr>\n      </div>\n      <ngb-pagination [collectionSize]=\"category.totalProducts\" [pageSize]=\"10\" [(page)]=\"page\" (pageChange)=\"getProducts($event)\"></ngb-pagination>\n    </div>\n  </div>\n</section>\n\n<ng-template #t let-fill=\"fill\">\n  <span *ngIf=\"fill === 100\" class=\"star full\">&#9733;</span>\n  <span *ngIf=\"fill === 0\" class=\"star\">&#9733;</span>\n  <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n  </span>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-product/edit-product.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-product/edit-product.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <form #editForm=\"ngForm\" (ngSubmit)=\"postChanges(editProduct)\" novalidate>\n    <div class=\"form-group\">\n      <label class=\"form-control-label\">Title</label>\n      <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"editProduct.title\" required>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"form-control-label\">Price</label>\n      <input type=\"number\" name=\"price\" class=\"form-control\" [(ngModel)]=\"editProduct.price\" required>\n    </div>\n    <div class=\"form-group\">\n      <label>Category</label>\n      <select name=\"categoryId\" [(ngModel)]=\"editProduct.category._id\" class=\"custom-select\" required>\n        <option *ngFor=\"let category of categories\" [value]=\"category._id\">\n          {{ category.name }}\n        </option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label>Description</label>\n      <textarea class=\"form-control\" name=\"description\" rows=\"5\" [(ngModel)]=\"editProduct.description\"\n        required></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>Upload Image</label>\n      <input type=\"file\" class=\"form-control-file\" accept=\"image/*\" name=\"file\" (change)=\"fileChange($event)\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!editForm.form.valid\">Post</button>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"home\">\n  <div class=\"container-fluid d-none d-md-block pd-0\">\n    <ngb-carousel>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image1.jpg\" alt=\"first\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image2.jpg\" alt=\"second\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image3.jpg\" alt=\"third\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image4.jpg\" alt=\"fourth\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image5.jpg\" alt=\"fifth\" class=\"item\">\n      </ng-template>\n    </ngb-carousel>\n  </div>\n  <div class=\"container p-5\">\n    <app-message></app-message>\n    <p class=\"lead\">\n      <b>Recommended Deals: Last-Minute Deals</b>\n    </p>\n    <div class=\"row\">\n      <div *ngIf=\"!products\" class=\"m-auto\">\n        <h1 class=\"text-center display-3 mt-5\">\n          <i class=\"fa fa-spinner fa-spin\"></i>\n        </h1>\n      </div>\n      <div *ngFor=\"let product of products\" class=\"col-md-3 mb-5\">\n        <a routerLink=\"/product/{{ product._id }}\">\n          <div class=\"card bg-light\">\n            <img src=\"{{ product.image }}\" alt=\"product\" class=\"card-img-top\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title product-title\">{{ product.title }}</h5>\n              <p class=\"card-text product-price\">{{ product.price | currency : 'INR' }}</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"loginPage\">\n  <div class=\"container p-5\">\n    <div class=\"row mt-5\">\n      <div class=\"col-lg-4 offset-lg-4\">\n        <app-message></app-message>\n        <div class=\"card bg-light\">\n          <div class=\"card-body\">\n            <h4 class=\"text-center\">Login</h4>\n            <hr>\n            <form>\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"email\">\n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\">\n              </div>\n              <hr>\n              <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"login()\" [disabled]=\"btnDisabled\">Login</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"data.message\">\n  <ngb-alert [type]=\"data.messageType\" [dismissible]=\"false\">\n    {{ data.message }}\n  </ngb-alert>\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-categories/my-categories.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-categories/my-categories.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"categories\">\n  <div class=\"container p-5\">\n    <app-message></app-message>\n    <h4 class=\"display-4\">Categories</h4>\n    <hr>\n    <div *ngIf=\"!categories\" class=\"m-auto\">\n      <h2 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h2>\n    </div>\n    <div *ngIf=\"categories\" class=\"list-group\">\n      <div *ngFor=\"let category of categories\" class=\"flex\">\n        <a routerLink=\"/categories/{{ category._id }}\" class=\"list-group-item list-group-item-action\" *ngIf=\"!editMode\">\n          {{ category.name }}\n        </a>\n        <input [(ngModel)]=\"category.name\" class=\"form-control\" *ngIf=\"editMode\" />\n        <button class=\"btn btn-sm btn-info btn-edit\" *ngIf=\"!editMode\" id=\"{{category._id}}\"\n          (click)=\"editName(category.name)\">Edit Name <i class=\"fa fa-edit\"></i></button>\n        <button *ngIf=\"editMode\" class=\"btn btn-sm btn-info btn-save\" (click)=\"saveEdit($event, category)\">Save</button>\n        <button *ngIf=\"editMode\" class=\"btn btn-sm btn-info btn-cancel\" (click)=\"cancelEdit()\">Cancel</button>\n        <!-- <button class=\"btn btn-sm btn-info btn-delete\" id=\"{{category._id}}\" (click)=\"deleteCategory($event)\">Delete\n          Category <i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Add New Category</h4>\n      <hr>\n      <div class=\"form\">\n        <div class=\"form-group\">\n          <label>Category</label>\n          <input type=\"text\" name=\"newCategory\" class=\"form-control\" [(ngModel)]=\"newCategory\">\n        </div>\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"addCategory()\" [disabled]=\"btnDisabled\">Add\n          Category</button>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-products/my-products.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-products/my-products.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"myProducts\">\n  <div class=\"container p-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!products\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <h3 *ngIf=\"products && !products.length\" class=\"display-2 text-center mt-5\">My Products is Empty</h3>\n    <div *ngIf=\"products && products.length\" class=\"row\">\n      <div class=\"col\">\n        <h4 class=\"display-4\">My Products</h4>\n        <div class=\"row\">\n          <div class=\"offset-10 col-2 d-none d-md-block\">\n            <p>\n              <small class=\"text-muted\">Price</small>\n            </p>\n          </div>\n        </div>\n        <hr class=\"mt-0\">\n\n        <div>\n          <div *ngFor=\"let product of products\" class=\"product\">\n            <div class=\"row\">\n              <div class=\"col-4 col-md-2\">\n                <a routerLink=\"/product/{{ product.id }}\">\n                  <img src=\"{{ product.image }}\" alt=\"image\" class=\"img-fluid img-thumbnail\">\n                </a>\n              </div>\n              <div class=\"col-5 col-md-8\">\n                <h5>\n                  <a routerLink=\"/product/{{ product.id }}\">{{ product.title || \"\" }}</a>\n                  <p class=\"m-0\">\n                    <small class=\"text-muted\">{{ product.category.name }}</small>\n                  </p>\n                </h5>\n              </div>\n              <div class=\"col-2\">\n                <h6 class=\"font-weight-bold text-danger\">{{ product.price | currency : 'INR' }}</h6>\n              </div>\n              <div class=\"col-2 mt-2\">\n                <button type=\"button\" class=\"btn btn-sm btn-info\" id=\"{{product.id}}\"\n                  (click)=\"getById($event)\">Edit</button>\n              </div>\n              <div class=\"col-2 mt-2\">\n                <button type=\"button\" class=\"btn btn-sm btn-info\" id=\"{{product.id}}\"\n                  (click)=\"deleteProduct($event)\">Delete</button>\n              </div>\n            </div>\n            <hr>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-product/post-product.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-product/post-product.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"postProduct\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">Post a Product for Sale</h4>\n    <hr>\n    <app-message></app-message>\n    <div *ngIf=\"!categories\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"categories\" class=\"card bg-light\">\n      <div class=\"card-body\">\n\n        <form>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Title</label>\n            <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"product.title\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Price</label>\n            <input type=\"number\" name=\"price\" class=\"form-control\" [(ngModel)]=\"product.price\">\n          </div>\n          <div class=\"form-group\">\n            <label>Category</label>\n            <select name=\"categoryId\" [(ngModel)]=\"product.categoryId\" class=\"custom-select\">\n              <option *ngFor=\"let category of categories\" [value]=\"category._id\">\n                {{ category.name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Description</label>\n            <textarea class=\"form-control\" name=\"description\" rows=\"5\" [(ngModel)]=\"product.description\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Upload Image</label>\n            <input type=\"file\" class=\"form-control-file\" accept=\"image/*\" name=\"file\" (change)=\"fileChange($event)\">\n          </div>\n          <button type=\"button\" class=\"btn btn-success post-product\" (click)=\"post()\"\n            [disabled]=\"btnDisabled\">Post</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"product\">\n  <div class=\"container-fluid p-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!product\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"product\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <img [src]=\"product.image\" alt=\"productImage\" class=\"image img-thumbnail\">\n        </div>\n        <div class=\"col-lg-5\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <h4>{{ product.title }}</h4>\n              <p class=\"m-0\">\n                <small>by {{ product.owner.name }}</small>\n              </p>\n              <p class=\"m-0\">\n                <small class=\"text-muted\">{{ product.category.name }}</small>\n              </p>\n            </div>\n            <div class=\"col-6\">\n              <ngb-rating [(rate)]=\"product.averageRating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n            </div>\n          </div>\n          <hr>\n          <p class=\"lead\">{{ product.description }}</p>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"card bg-light\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Price: {{ product.price | currency: 'INR' }}</h5>\n              <br>\n              <br>\n              <a class=\"btn btn-warning btn-block\" (click)=\"addToCart()\">Add to Cart</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div class=\"mt-5 ml-lg-5\">\n          <h4>Reviews</h4>\n          <hr>\n          <div class=\"reviews\">\n            <div *ngFor=\"let review of product.reviews\" class=\"review\">\n              <div class=\"p-3\">\n                <img [src]=\"review.owner.picture\" alt=\"\" width=\"75px\" class=\"rounded-circle\">\n                <p class=\"lead d-inline ml-3\">{{ review.owner.name }}</p>\n                <br>\n                <br>\n                <ngb-rating [(rate)]=\"review.rating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                <p class=\"ml-2 d-inline font-weight-bold\">{{ review.title }}</p>\n                <p class=\"mt-3\">{{ review.description }}</p>\n              </div>\n              <hr>\n            </div>\n            <div class=\"card bg-light my-5\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Add a review</h4>\n                <hr>\n                <div class=\"form\">\n                  <div class=\"form-group\">\n                    <label>Title</label>\n                    <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"myReview.title\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Description</label>\n                    <textarea class=\"form-control\" rows=\"5\" name=\"description\" [(ngModel)]=\"myReview.description\"></textarea>\n                  </div>\n                  <label>Rating</label>\n                  <br>\n                  <ngb-rating [(rate)]=\"myReview.rating\" [starTemplate]=\"t\" [readonly]=\"false\" max=\"5\"></ngb-rating>\n                  <br>\n                  <br>\n                  <button type=\"button\" class=\"btn btn-info\" (click)=\"postReview()\" [disabled]=\"btnDisabled\">Post Review</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #t let-fill=\"fill\">\n  <span *ngIf=\"fill === 100\" class=\"star full\">&#9733;</span>\n  <span *ngIf=\"fill === 0\" class=\"star\">&#9733;</span>\n  <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n  </span>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"profile\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">My Profile</h4>\n    <hr>\n    <div *ngIf=\"!data.user\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"data.user\" class=\"row mt-5\">\n      <div class=\"col-md-3\">\n        <img [src]=\"data.user.picture\" alt=\"userimage\" class=\"rounded-circle image\">\n      </div>\n      <div class=\"col-md-8 ml-3\">\n        <p id=\"name\" class=\"lead\">{{ data.user.name }}</p>\n        <a routerLink=\"/profile/orders\" class=\"btn btn-warning\">My Orders</a>\n        <br>\n        <br>\n        <a routerLink=\"/profile/settings\" class=\"btn btn-warning\">Change Account Settings</a>\n        <br>\n        <br>\n        <a routerLink=\"/profile/address\" class=\"btn btn-warning\">Change Shipping Address</a>\n        <br>\n        <br>\n        <div *ngIf=\"data.user.isSeller\">\n          <p class=\"lead\">Seller Actions</p>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-md-4 mb-3\">\n              <a routerLink=\"/profile/postproduct\" class=\"btn btn-outline-success btn-block\">Post Product for Sale</a>\n            </div>\n            <div class=\"col-md-4 mb-3\">\n              <a routerLink=\"/profile/myproducts\" class=\"btn btn-outline-info btn-block\">My Products</a>\n            </div>\n            <div class=\"col-md-4\">\n              <a routerLink=\"/profile/myproducts/mycategories\" class=\"btn btn-outline-info btn-block\">My Categories</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"registrationPage\">\n  <div class=\"container p-5\">\n    <div class=\"row mt-5\">\n      <div class=\"col-lg-4 offset-lg-4\">\n        <app-message></app-message>\n        <div class=\"card bg-light\">\n          <div class=\"card-body\">\n            <h4 class=\"text-center\">Registration</h4>\n            <hr>\n            <form>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Name</label>\n                <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"name\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Email</label>\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"email\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Password</label>\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Confirm Password</label>\n                <input type=\"password\" name=\"password1\" class=\"form-control\" [(ngModel)]=\"password1\">\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input type=\"checkbox\" name=\"isSeller\" class=\"form-check-input\" [(ngModel)]=\"isSeller\"> Register as Seller\n                </label>\n              </div>\n              <hr>\n              <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"register()\" [disabled]=\"btnDisabled\">Register</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"search\">\n  <div class=\"container p-3 p-md-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!content\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <h3 *ngIf=\"content && !content.nbHits\" class=\"display-2 text-center mt-5\">No Results</h3>\n    <div *ngIf=\"content && content.nbHits\">\n      <p>{{ lower }}-{{ upper }} of {{ content.nbHits }} results for\n        <span class=\"text-warning\">\"{{ query }}\"</span>\n      </p>\n      <hr>\n      <div class=\"product\" *ngFor=\"let product of content.hits\">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-2\">\n            <a routerLink=\"/product/{{ product.objectID }}\">\n              <img [src]=\"product.image\" alt=\"productImage\" class=\"img-fluid img-thumbnail\">\n            </a>\n          </div>\n          <div class=\"col-5 col-md-8\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-6\">\n                <h5>\n                  <a routerLink=\"/product/{{ product.objectID }}\">{{ product.title }}</a>\n                </h5>\n                <p>\n                  <!-- <small>by {{ product.owner.name }}</small> -->\n                </p>\n                <p>{{ product.price | currency : 'INR' }}</p>\n              </div>\n              <div class=\"col-md-6\">\n                <ngb-rating [(rate)]=\"product.averageRating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr>\n      </div>\n      <ngb-pagination [collectionSize]=\"content.nbHits\" [pageSize]=\"20\" [(page)]=\"page\" (pageChange)=\"getProducts()\">\n      </ngb-pagination>\n    </div>\n  </div>\n</section>\n\n<ng-template #t let-fill=\"fill\">\n  <span *ngIf=\"fill === 100\" class=\"star full\">&#9733;</span>\n  <span *ngIf=\"fill === 0\" class=\"star\">&#9733;</span>\n  <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n  </span>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"settings\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">My Account Settings</h4>\n    <hr>\n    <app-message></app-message>\n    <div *ngIf=\"!currentSettings\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"currentSettings\" class=\"card bg-light\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Name</label>\n            <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"currentSettings.name\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Email</label>\n            <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"currentSettings.email\">\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" name=\"isSeller\" class=\"form-check-input\" [(ngModel)]=\"currentSettings.isSeller\"> Is Seller\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">New Password</label>\n            <input type=\"password\" name=\"newPwd\" class=\"form-control\" [(ngModel)]=\"currentSettings.newPwd\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Confirm Password</label>\n            <input type=\"password\" name=\"pwdConfirm\" class=\"form-control\" [(ngModel)]=\"currentSettings.pwdConfirm\">\n          </div>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"update()\" [disabled]=\"btnDisabled\">Update</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/address/address.component.scss":
/*!************************************************!*\
  !*** ./src/app/address/address.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-edit {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.form-edit button {\n  margin-bottom: 15px;\n}\n.form-edit-input {\n  margin-top: 10px;\n}\n.edit-footer-buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpcml0aS9Eb2N1bWVudHMvVlNfQ09ERS9ncmFuZGRlc2lnbnMvc3JjL2FwcC9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDRjtBREFFO0VBQ0UsbUJBQUE7QUNFSjtBREVBO0VBQ0UsZ0JBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZWRpdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG5cbi5mb3JtLWVkaXQtaW5wdXQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZWRpdC1mb290ZXItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuIiwiLmZvcm0tZWRpdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mb3JtLWVkaXQgYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZWRpdC1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5lZGl0LWZvb3Rlci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59Il19 */");

/***/ }),

/***/ "./src/app/address/address.component.ts":
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var AddressComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function AddressComponent(data, globalService, rest, router, dataRoute, formBuilder) {
        this.data = data;
        this.globalService = globalService;
        this.rest = rest;
        this.router = router;
        this.dataRoute = dataRoute;
        this.formBuilder = formBuilder;
        this.btnDisabled = false;
        this.quantities = [];
        this.editButtons = false;
        this.createFormWithFormBuilder();
        this.shippingForm.disable();
    }
    AddressComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var routeData, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.shippingForm.disable();
                        if (this.dataRoute.snapshot.params.state) {
                            routeData = JSON.parse(this.dataRoute.snapshot.params.state);
                            this.checkoutButton = routeData.checkoutButton;
                        }
                        else {
                            this.shippingForm.enable();
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/accounts/address')];
                    case 2:
                        data = _a.sent();
                        if (JSON.stringify(data['address']) === '{}' &&
                            this.data.message === '') {
                            this.data.warning('You have not entered your shipping address. Please enter your shipping address.');
                        }
                        this.currentAddress = data['address'];
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddressComponent.prototype.createFormWithFormBuilder = function () {
        this.shippingForm = this.formBuilder.group({
            address1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address2: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mobile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            postalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AddressComponent.prototype.editAddress = function () {
        this.shippingForm.enable();
        this.editButtons = true;
        this.checkoutButton = false;
    };
    AddressComponent.prototype.cancelEdit = function () {
        this.shippingForm.disable();
        this.editButtons = false;
        this.checkoutButton = true;
    };
    AddressComponent.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.shippingForm.disable();
                this.editButtons = false;
                this.checkoutButton = true;
                this.updateAddress();
                return [2 /*return*/];
            });
        });
    };
    AddressComponent.prototype.updateAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.rest.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/accounts/address', this.currentAddress)];
                    case 1:
                        res = _b.sent();
                        if (!res['success']) return [3 /*break*/, 3];
                        this.data.success(res['message']);
                        return [4 /*yield*/, this.data.getProfile()];
                    case 2:
                        _a = (_b.sent());
                        return [3 /*break*/, 4];
                    case 3:
                        _a = this.data.error(res['message']);
                        _b.label = 4;
                    case 4:
                        _a;
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _b.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AddressComponent.prototype.checkout = function () {
        this.globalService.checkout(this.currentAddress);
    };
    AddressComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _services_global_service__WEBPACK_IMPORTED_MODULE_0__["GlobalService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-address',
            template: __importDefault(__webpack_require__(/*! raw-loader!./address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/address/address.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./address.component.scss */ "./src/app/address/address.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _services_global_service__WEBPACK_IMPORTED_MODULE_0__["GlobalService"], _rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _my_categories_my_categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-categories/my-categories.component */ "./src/app/my-categories/my-categories.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _post_product_post_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post-product/post-product.component */ "./src/app/post-product/post-product.component.ts");
/* harmony import */ var _my_products_my_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-products/my-products.component */ "./src/app/my-products/my-products.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


















var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
    },
    {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"],
    },
    {
        path: 'categories',
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"],
    },
    {
        path: 'categories/:id',
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_13__["CategoryComponent"],
    },
    {
        path: 'product/:id',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_14__["ProductComponent"],
    },
    {
        path: 'register',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]],
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]],
    },
    {
        path: 'profile/settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]],
    },
    {
        path: 'profile/address',
        component: _address_address_component__WEBPACK_IMPORTED_MODULE_9__["AddressComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]],
    },
    {
        path: 'profile/address/:checkout',
        component: _address_address_component__WEBPACK_IMPORTED_MODULE_9__["AddressComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]],
    },
    {
        path: 'profile/postproduct',
        component: _post_product_post_product_component__WEBPACK_IMPORTED_MODULE_11__["PostProductComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]],
    },
    {
        path: 'profile/myproducts',
        component: _my_products_my_products_component__WEBPACK_IMPORTED_MODULE_12__["MyProductsComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]],
    },
    {
        path: 'profile/myproducts/mycategories',
        component: _my_categories_my_categories_component__WEBPACK_IMPORTED_MODULE_0__["MyCategoriesComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]],
    },
    {
        path: 'profile/myproducts/edit',
        component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__["EditProductComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_17__["AuthGuardService"]],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#searchBtn {\n  cursor: pointer;\n  border: none;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.lead {\n  font-size: 14px;\n}\n\n.header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  /* The container <div> - needed to position the dropdown content */\n  /* Dropdown Content (Hidden by Default) */\n  /* Links inside the dropdown */\n  /* Change color of dropdown links on hover */\n  /* Show the dropdown menu on hover */\n  /* Change the background color of the dropdown button when the dropdown content is shown */\n}\n\n.header .logo {\n  width: 75%;\n}\n\n.header .header-logo {\n  flex-basis: 20%;\n}\n\n.header .header-logo svg {\n  cursor: pointer;\n}\n\n.header .header-search-bar {\n  align-self: center;\n  flex-basis: 40%;\n}\n\n.header .header-categories {\n  align-self: center;\n}\n\n.header .header-categories a {\n  color: white;\n  font-size: 14px;\n  line-height: 15px;\n  font-weight: 700;\n}\n\n.header .header-categories a:hover {\n  border: solid 1px white;\n}\n\n.header .header-account-drop-down ul.drop-menu {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.header .header-account-drop-down ul li {\n  display: none;\n  list-style: none;\n}\n\n.header .dropbtn {\n  border: none;\n  height: 50px;\n  color: white;\n  font-size: 14px;\n  line-height: 15px;\n  font-weight: 700;\n}\n\n.header .dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.header .dropdown-content {\n  display: none;\n  position: absolute;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.header .dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.header .dropdown-content a:hover {\n  background-color: #ddd;\n}\n\n.header .dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.header .dropdown:hover .dropbtn {\n  border: solid 1px white;\n}\n\n.header .header-cart {\n  align-self: center;\n}\n\n.header .header-cart .nav-link {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.header .header-cart a {\n  color: white;\n  font-size: 14px;\n  line-height: 15px;\n  font-weight: 700;\n}\n\n.header .header-cart a:hover {\n  border: solid 1px white;\n}\n\n.header .mobile-header-search-bar {\n  display: none;\n}\n\n.mobile-links {\n  display: none;\n}\n\n.mobile-links a {\n  color: white;\n}\n\n.my-hamburger {\n  display: none;\n}\n\n@media only screen and (max-width: 480px) {\n  .header {\n    flex-wrap: wrap;\n  }\n  .header .logo {\n    width: 55%;\n    stroke: white;\n    padding-top: 3px;\n  }\n  .header .header-logo {\n    padding-left: 8px;\n    flex-basis: 80%;\n  }\n  .header .icon {\n    color: white;\n    padding: 10px 16px;\n    text-decoration: none;\n    font-size: 17px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: end;\n            align-items: flex-end;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n  .header .mobile-header-search-bar {\n    display: block;\n    flex-basis: 100%;\n    padding: 3px 8px 8px 8px;\n    border-radius: 3px;\n  }\n\n  .header-search-bar,\n.header-categories,\n.header-account-drop-down,\n.header-cart {\n    display: none;\n  }\n\n  .mobile-links {\n    background: dimgrey;\n    text-align: end;\n  }\n  .mobile-links a,\n.mobile-links .mobile-search-bar {\n    padding: 14px 6px;\n    text-decoration: none;\n    font-size: 17px;\n    display: block;\n    color: white;\n  }\n\n  .my-hamburger {\n    display: block;\n    position: absolute;\n    right: 0;\n    top: 13px;\n    color: white;\n    padding: 0 15px;\n    font-size: 18px;\n  }\n\n  /* The subnavigation menu */\n  .subnav {\n    overflow: hidden;\n  }\n\n  /* Subnav button */\n  .subnav .subnavbtn {\n    font-size: 16px;\n    border: none;\n    outline: none;\n    color: white;\n    padding: 14px 16px;\n    background-color: inherit;\n    font-family: inherit;\n    margin: 0;\n  }\n\n  /* Style the subnav content - positioned absolute */\n  .subnav-content {\n    display: none;\n    position: absolute;\n    background-color: #333;\n    width: 100%;\n    z-index: 1;\n  }\n\n  /* Style the subnav links */\n  .subnav-content a {\n    color: white;\n    text-decoration: none;\n  }\n\n  /* When you move the mouse over the subnav container, open the subnav content */\n  .subnav:hover .subnav-content {\n    display: block;\n  }\n\n  .subnavbtn:hover .subnav-content {\n    display: block;\n  }\n\n  .subnav-content:hover {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpcml0aS9Eb2N1bWVudHMvVlNfQ09ERS9ncmFuZGRlc2lnbnMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRFNBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQXdEQSxrRUFBQTtFQU1BLHlDQUFBO0VBU0EsOEJBQUE7RUFRQSw0Q0FBQTtFQUtBLG9DQUFBO0VBS0EsMEZBQUE7QUN6RkY7O0FERUU7RUFDRSxVQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0FDREo7O0FERUk7RUFDRSxlQUFBO0FDQU47O0FER0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNESjs7QURJRTtFQUNFLGtCQUFBO0FDRko7O0FER0k7RUEzQkYsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDMkJGOztBREFJO0VBQ0UsdUJBQUE7QUNFTjs7QURPSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0xOOztBRFFJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDTk47O0FEYUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQTVERixZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNrREY7O0FEWUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDVko7O0FEY0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQ1pKOztBRGdCRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ2RKOztBRGtCRTtFQUNFLHNCQUFBO0FDaEJKOztBRG9CRTtFQUNFLGNBQUE7QUNsQko7O0FEc0JFO0VBQ0UsdUJBQUE7QUNwQko7O0FEdUJFO0VBS0Usa0JBQUE7QUN6Qko7O0FEcUJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7QUNuQk47O0FEc0JJO0VBNUdGLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3lGRjs7QURtQkk7RUFDRSx1QkFBQTtBQ2pCTjs7QURvQkU7RUFDRSxhQUFBO0FDbEJKOztBRHNCQTtFQUNFLGFBQUE7QUNuQkY7O0FEb0JFO0VBQ0UsWUFBQTtBQ2xCSjs7QURxQkE7RUFDRSxhQUFBO0FDbEJGOztBRHFCQTtFQUNFO0lBQ0UsZUFBQTtFQ2xCRjtFRG1CRTtJQUNFLFVBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUNqQko7RURtQkU7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUNqQko7RURtQkU7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxzQkFBQTtZQUFBLHFCQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDakJKO0VEb0JFO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0Esd0JBQUE7SUFDQSxrQkFBQTtFQ2xCSjs7RURzQkE7Ozs7SUFJRSxhQUFBO0VDbkJGOztFRHNCQTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQ25CRjtFRG9CRTs7SUFFRSxpQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0VDbEJKOztFRHFCQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDbEJGOztFRHFCQSwyQkFBQTtFQUNBO0lBQ0UsZ0JBQUE7RUNsQkY7O0VEcUJBLGtCQUFBO0VBQ0E7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLG9CQUFBO0lBQ0EsU0FBQTtFQ2xCRjs7RURvQkEsbURBQUE7RUFDQTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUNqQkY7O0VEb0JBLDJCQUFBO0VBQ0E7SUFDRSxZQUFBO0lBQ0EscUJBQUE7RUNqQkY7O0VEb0JBLCtFQUFBO0VBQ0E7SUFDRSxjQUFBO0VDakJGOztFRG9CQTtJQUNFLGNBQUE7RUNqQkY7O0VEb0JBO0lBQ0UsY0FBQTtFQ2pCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaEJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmxlYWQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbkBtaXhpbiBoZWRlci10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5sb2dvIHtcbiAgICB3aWR0aDogNzUlO1xuICB9XG5cbiAgLmhlYWRlci1sb2dvIHtcbiAgICBmbGV4LWJhc2lzOiAyMCU7XG4gICAgc3ZnIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbiAgLmhlYWRlci1zZWFyY2gtYmFyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZmxleC1iYXNpczogNDAlO1xuICB9XG5cbiAgLmhlYWRlci1jYXRlZ29yaWVzIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYSB7XG4gICAgICBAaW5jbHVkZSBoZWRlci10ZXh0KCk7XG4gICAgfVxuICAgIGE6aG92ZXIge1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci1hY2NvdW50LWRyb3AtZG93biB7XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgdWwuZHJvcC1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICB1bCBsaSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgLy8gdWw6aG92ZXIge1xuICAgIC8vICAgICBjb2xvcjogIzAwMDtcbiAgICAvLyB9XG4gIH1cblxuICAuZHJvcGJ0biB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBAaW5jbHVkZSBoZWRlci10ZXh0KCk7XG4gIH1cblxuICAvKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXG4gIC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xuICAuZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuICAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICB9XG5cbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBkcm9wZG93biBidXR0b24gd2hlbiB0aGUgZHJvcGRvd24gY29udGVudCBpcyBzaG93biAqL1xuICAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xuICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xuICB9XG5cbiAgLmhlYWRlci1jYXJ0IHtcbiAgICAubmF2LWxpbmsge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIH1cbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYSB7XG4gICAgICBAaW5jbHVkZSBoZWRlci10ZXh0KCk7XG4gICAgfVxuICAgIGE6aG92ZXIge1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XG4gICAgfVxuICB9XG4gIC5tb2JpbGUtaGVhZGVyLXNlYXJjaC1iYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLm1vYmlsZS1saW5rcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuLm15LWhhbWJ1cmdlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogXCI0ODBweFwiKSB7XG4gIC5oZWFkZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAubG9nbyB7XG4gICAgICB3aWR0aDogNTUlO1xuICAgICAgc3Ryb2tlOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgfVxuICAgIC5oZWFkZXItbG9nbyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgIGZsZXgtYmFzaXM6IDgwJTtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLm1vYmlsZS1oZWFkZXItc2VhcmNoLWJhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAzcHggOHB4IDhweCA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlci1zZWFyY2gtYmFyLFxuICAuaGVhZGVyLWNhdGVnb3JpZXMsXG4gIC5oZWFkZXItYWNjb3VudC1kcm9wLWRvd24sXG4gIC5oZWFkZXItY2FydCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tb2JpbGUtbGlua3Mge1xuICAgIGJhY2tncm91bmQ6IGRpbWdyZXk7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIGEsXG4gICAgLm1vYmlsZS1zZWFyY2gtYmFyIHtcbiAgICAgIHBhZGRpbmc6IDE0cHggNnB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG4gIC5teS1oYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAvKiBUaGUgc3VibmF2aWdhdGlvbiBtZW51ICovXG4gIC5zdWJuYXYge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAvKiBTdWJuYXYgYnV0dG9uICovXG4gIC5zdWJuYXYgLnN1Ym5hdmJ0biB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLyogU3R5bGUgdGhlIHN1Ym5hdiBjb250ZW50IC0gcG9zaXRpb25lZCBhYnNvbHV0ZSAqL1xuICAuc3VibmF2LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC8qIFN0eWxlIHRoZSBzdWJuYXYgbGlua3MgKi9cbiAgLnN1Ym5hdi1jb250ZW50IGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAvKiBXaGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIHRoZSBzdWJuYXYgY29udGFpbmVyLCBvcGVuIHRoZSBzdWJuYXYgY29udGVudCAqL1xuICAuc3VibmF2OmhvdmVyIC5zdWJuYXYtY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc3VibmF2YnRuOmhvdmVyIC5zdWJuYXYtY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc3VibmF2LWNvbnRlbnQ6aG92ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iLCIjc2VhcmNoQnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4ubGVhZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xuICAvKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xuICAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXG59XG4uaGVhZGVyIC5sb2dvIHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5oZWFkZXIgLmhlYWRlci1sb2dvIHtcbiAgZmxleC1iYXNpczogMjAlO1xufVxuLmhlYWRlciAuaGVhZGVyLWxvZ28gc3ZnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlciAuaGVhZGVyLXNlYXJjaC1iYXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZsZXgtYmFzaXM6IDQwJTtcbn1cbi5oZWFkZXIgLmhlYWRlci1jYXRlZ29yaWVzIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmhlYWRlciAuaGVhZGVyLWNhdGVnb3JpZXMgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5oZWFkZXIgLmhlYWRlci1jYXRlZ29yaWVzIGE6aG92ZXIge1xuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcbn1cbi5oZWFkZXIgLmhlYWRlci1hY2NvdW50LWRyb3AtZG93biB1bC5kcm9wLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmhlYWRlciAuaGVhZGVyLWFjY291bnQtZHJvcC1kb3duIHVsIGxpIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5oZWFkZXIgLmRyb3BidG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmhlYWRlciAuZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5oZWFkZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuLmhlYWRlciAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLmhlYWRlciAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkZXIgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XG59XG4uaGVhZGVyIC5oZWFkZXItY2FydCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5oZWFkZXIgLmhlYWRlci1jYXJ0IC5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuLmhlYWRlciAuaGVhZGVyLWNhcnQgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5oZWFkZXIgLmhlYWRlci1jYXJ0IGE6aG92ZXIge1xuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcbn1cbi5oZWFkZXIgLm1vYmlsZS1oZWFkZXItc2VhcmNoLWJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb2JpbGUtbGlua3Mge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1vYmlsZS1saW5rcyBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubXktaGFtYnVyZ2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuaGVhZGVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLmhlYWRlciAubG9nbyB7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBzdHJva2U6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gIH1cbiAgLmhlYWRlciAuaGVhZGVyLWxvZ28ge1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIGZsZXgtYmFzaXM6IDgwJTtcbiAgfVxuICAuaGVhZGVyIC5pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuaGVhZGVyIC5tb2JpbGUtaGVhZGVyLXNlYXJjaC1iYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgcGFkZGluZzogM3B4IDhweCA4cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuXG4gIC5oZWFkZXItc2VhcmNoLWJhcixcbi5oZWFkZXItY2F0ZWdvcmllcyxcbi5oZWFkZXItYWNjb3VudC1kcm9wLWRvd24sXG4uaGVhZGVyLWNhcnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLWxpbmtzIHtcbiAgICBiYWNrZ3JvdW5kOiBkaW1ncmV5O1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgfVxuICAubW9iaWxlLWxpbmtzIGEsXG4ubW9iaWxlLWxpbmtzIC5tb2JpbGUtc2VhcmNoLWJhciB7XG4gICAgcGFkZGluZzogMTRweCA2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAubXktaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLyogVGhlIHN1Ym5hdmlnYXRpb24gbWVudSAqL1xuICAuc3VibmF2IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLyogU3VibmF2IGJ1dHRvbiAqL1xuICAuc3VibmF2IC5zdWJuYXZidG4ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLyogU3R5bGUgdGhlIHN1Ym5hdiBjb250ZW50IC0gcG9zaXRpb25lZCBhYnNvbHV0ZSAqL1xuICAuc3VibmF2LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC8qIFN0eWxlIHRoZSBzdWJuYXYgbGlua3MgKi9cbiAgLnN1Ym5hdi1jb250ZW50IGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAvKiBXaGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIHRoZSBzdWJuYXYgY29udGFpbmVyLCBvcGVuIHRoZSBzdWJuYXYgY29udGVudCAqL1xuICAuc3VibmF2OmhvdmVyIC5zdWJuYXYtY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc3VibmF2YnRuOmhvdmVyIC5zdWJuYXYtY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc3VibmF2LWNvbnRlbnQ6aG92ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, data) {
        this.router = router;
        this.data = data;
        this.searchTerm = '';
        this.isCollapsed = true;
        this.data.cartItems = this.data.getCart().length;
        this.data.getProfile();
    }
    Object.defineProperty(AppComponent.prototype, "token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.collapse = function () {
        this.isCollapsed = true;
    };
    AppComponent.prototype.closeDropdown = function (dropdown) {
        dropdown.close();
    };
    AppComponent.prototype.logout = function () {
        this.data.user = {};
        this.data.cartItems = 0;
        localStorage.clear();
        this.router.navigate(['']);
    };
    AppComponent.prototype.search = function () {
        if (this.searchTerm) {
            this.collapse();
            this.router.navigate(['search', { query: this.searchTerm }]);
        }
    };
    AppComponent.prototype.openMobileMenu = function () {
        var x = document.getElementById('mobile-links');
        if (x.style.display === 'block') {
            x.style.display = 'none';
        }
        else {
            x.style.display = 'block';
        }
    };
    AppComponent.prototype.openSubNav = function () {
        var x = document.getElementById('subnav-content');
        if (x.style.display === 'block') {
            x.style.display = 'none';
        }
        else {
            x.style.display = 'block';
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _post_product_post_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./post-product/post-product.component */ "./src/app/post-product/post-product.component.ts");
/* harmony import */ var _my_products_my_products_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./my-products/my-products.component */ "./src/app/my-products/my-products.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");
/* harmony import */ var _my_categories_my_categories_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./my-categories/my-categories.component */ "./src/app/my-categories/my-categories.component.ts");
/* harmony import */ var _windowRef_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./windowRef.service */ "./src/app/windowRef.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_11__["MessageComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"],
                _address_address_component__WEBPACK_IMPORTED_MODULE_16__["AddressComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_17__["CategoriesComponent"],
                _post_product_post_product_component__WEBPACK_IMPORTED_MODULE_18__["PostProductComponent"],
                _my_products_my_products_component__WEBPACK_IMPORTED_MODULE_19__["MyProductsComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_20__["CategoryComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_21__["ProductComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_22__["SearchComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_23__["CartComponent"],
                _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_24__["EditProductComponent"],
                _my_categories_my_categories_component__WEBPACK_IMPORTED_MODULE_25__["MyCategoriesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ],
            providers: [_rest_api_service__WEBPACK_IMPORTED_MODULE_7__["RestApiService"], _data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"], _windowRef_service__WEBPACK_IMPORTED_MODULE_26__["WindowRef"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('token')) {
            return state.url.startsWith('/profile')
                ? true
                : (this.router.navigate(['/']), false);
        }
        else {
            return state.url.startsWith('/profile')
                ? (this.router.navigate(['/']), false)
                : true;
        }
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpcml0aS9Eb2N1bWVudHMvVlNfQ09ERS9ncmFuZGRlc2lnbnMvc3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbiIsImlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _services_global_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/global.service */ "./src/app/services/global.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CartComponent = /** @class */ (function () {
    function CartComponent(data, router, globalService) {
        this.data = data;
        this.router = router;
        this.globalService = globalService;
        this.btnDisabled = false;
        this.quantities = [];
    }
    CartComponent.prototype.trackByCartItems = function (index, item) {
        return item._id;
    };
    Object.defineProperty(CartComponent.prototype, "cartItems", {
        get: function () {
            return this.data.getCart();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartComponent.prototype, "cartTotal", {
        get: function () {
            var _this = this;
            var total = 0;
            this.globalService.cartItems().forEach(function (data, index) {
                total += data['price'] * _this.quantities[index];
            });
            return total;
        },
        enumerable: true,
        configurable: true
    });
    CartComponent.prototype.removeProduct = function (index, product) {
        this.quantities.splice(index, 1);
        this.data.removeFromCart(product);
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalService.cartItems().forEach(function (data) {
            _this.quantities.push(1);
        });
    };
    Object.defineProperty(CartComponent.prototype, "token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    CartComponent.prototype.goToAddressPage = function () {
        // tslint:disable-next-line:max-line-length
        this.router.navigate(['/profile/address', { state: JSON.stringify({ checkoutButton: true, quantities: this.quantities }) }]);
    };
    CartComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_global_service__WEBPACK_IMPORTED_MODULE_0__["GlobalService"] }
    ]; };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_global_service__WEBPACK_IMPORTED_MODULE_0__["GlobalService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.scss":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-group {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpcml0aS9Eb2N1bWVudHMvVlNfQ09ERS9ncmFuZGRlc2lnbnMvc3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4iLCIubGlzdC1ncm91cCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(data, rest) {
        this.data = data;
        this.rest = rest;
        this.newCategory = '';
        this.btnDisabled = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/categories')];
                    case 1:
                        data = _a.sent();
                        data['success']
                            ? (this.categories = data['categories'])
                            : this.data.error(data['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoriesComponent.prototype.addCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/categories', { category: this.newCategory })];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? this.data.success(data['message'])
                            : this.data.error(data['message']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 4];
                    case 4:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriesComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }
    ]; };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __importDefault(__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./categories.component.scss */ "./src/app/categories/categories.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.scss":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(data, activatedRoute, rest) {
        this.data = data;
        this.activatedRoute = activatedRoute;
        this.rest = rest;
        this.page = 1;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (res) {
            _this.categoryId = res['id'];
            _this.getProducts();
        });
    };
    Object.defineProperty(CategoryComponent.prototype, "lower", {
        get: function () {
            return 10 * (this.page - 1) + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryComponent.prototype, "upper", {
        get: function () {
            return Math.min(10 * this.page, this.category.totalProducts);
        },
        enumerable: true,
        configurable: true
    });
    CategoryComponent.prototype.getProducts = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            this.category = null;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + ("/api/categories/" + this.categoryId + "?page=" + (this.page - 1)))];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? (this.category = data)
                            : this.data.error(data['message']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }
    ]; };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __importDefault(__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./category.component.scss */ "./src/app/category/category.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest-api.service */ "./src/app/rest-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var DataService = /** @class */ (function () {
    function DataService(router, rest) {
        var _this = this;
        this.router = router;
        this.rest = rest;
        this.message = '';
        this.messageType = 'danger';
        this.cartItems = 0;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.message = '';
            }
        });
    }
    DataService.prototype.error = function (message) {
        this.messageType = 'danger';
        this.message = message;
    };
    DataService.prototype.success = function (message) {
        this.messageType = 'success';
        this.message = message;
    };
    DataService.prototype.warning = function (message) {
        this.messageType = 'warning';
        this.message = message;
    };
    DataService.prototype.getProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!localStorage.getItem('token')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rest.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/api/accounts/profile')];
                    case 1:
                        data = _a.sent();
                        this.user = data['user'];
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DataService.prototype.getCart = function () {
        var cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    };
    DataService.prototype.addToCart = function (item) {
        var cart = this.getCart();
        if (cart.find(function (data) { return JSON.stringify(data) === JSON.stringify(item); })) {
            return false;
        }
        else {
            cart.push(item);
            this.cartItems++;
            localStorage.setItem('cart', JSON.stringify(cart));
            return true;
        }
    };
    DataService.prototype.removeFromCart = function (item) {
        var cart = this.getCart();
        if (cart.find(function (data) { return JSON.stringify(data) === JSON.stringify(item); })) {
            cart = cart.filter(function (data) { return JSON.stringify(data) !== JSON.stringify(item); });
            this.cartItems--;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };
    DataService.prototype.clearCart = function () {
        this.cartItems = 0;
        localStorage.setItem('cart', '[]');
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] }
    ]; };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/edit-product/edit-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/edit-product/edit-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.ts ***!
  \********************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(data, rest, router, dataRoute) {
        this.data = data;
        this.rest = rest;
        this.router = router;
        this.dataRoute = dataRoute;
        this.editProduct = {
            title: '',
            price: 0,
            category: {
                _id: ''
            },
            description: '',
            product_picture: null,
            product_image_name: ''
        };
        this.readOnlyMode = true;
        this.editOnlyMode = false;
        this.btnDisabled = false;
        this.product = {
            title: '',
            price: 0,
            categoryId: '',
            description: '',
            product_picture: null,
            product_image_name: ''
        };
    }
    EditProductComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.editProduct = JSON.parse(this.dataRoute.snapshot.params.state);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/categories')];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? (this.categories = data['categories'])
                            : this.data.error(data['message']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditProductComponent.prototype.validate = function (product) {
        if (product.title) {
            if (product.price) {
                if (product.category._id) {
                    if (product.description) {
                        return true;
                    }
                    else {
                        this.data.error('Please enter description.');
                    }
                }
                else {
                    this.data.error('Please select category.');
                }
            }
            else {
                this.data.error('Please enter a price.');
            }
        }
        else {
            this.data.error('Please enter a title.');
        }
    };
    EditProductComponent.prototype.postChanges = function (editProduct) {
        return __awaiter(this, void 0, void 0, function () {
            var data_1, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!this.validate(editProduct)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.rest.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/seller/products/edit', editProduct)];
                    case 2:
                        data_1 = _a.sent();
                        if (data_1['success']) {
                            this.router.navigate(['/profile/myproducts'])
                                .then(function () { return _this.data.success(data_1['message']); })
                                .catch(function (error) { return _this.data.error(error); });
                            this.editOnlyMode = false;
                            this.readOnlyMode = true;
                        }
                        else {
                            this.data.error(data_1['message']);
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 5];
                    case 5:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProductComponent.prototype.fileChange = function (event) {
        var self = this;
        var file = event.target.files[0];
        // const fileSize = (file.size / 1024).toFixed(2);
        // if (file && parseInt(fileSize, 10) < 400) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
            self.editProduct.product_picture = e.target.result;
            self.editProduct.product_image_name = file.name;
        };
        reader.readAsDataURL(file);
        // } else {
        //   alert('File size too large OR No file');
        // }
    };
    EditProductComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-product/edit-product.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-product.component.css */ "./src/app/edit-product/edit-product.component.css")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ngb-carousel {\n  min-width: 1000px;\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.item {\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.pd-0 {\n  padding: 0px;\n}\n\n.product-title {\n  color: black;\n  font-size: 17px;\n}\n\n.product-title:hover {\n  font-weight: bold;\n}\n\n.product-price {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpcml0aS9Eb2N1bWVudHMvVlNfQ09ERS9ncmFuZGRlc2lnbnMvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nYi1jYXJvdXNlbCB7XG4gIG1pbi13aWR0aDogMTAwMHB4O1xuICBtYXgtd2lkdGg6IDE1MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLml0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCgtNTAlKSk7XG59XG5cbi5wZC0wIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucHJvZHVjdC10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ucHJvZHVjdC10aXRsZTpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvZHVjdC1wcmljZSB7XG4gIGNvbG9yOiByZWQ7XG59XG4iLCJuZ2ItY2Fyb3VzZWwge1xuICBtaW4td2lkdGg6IDEwMDBweDtcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnBkLTAge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5wcm9kdWN0LXRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5wcm9kdWN0LXRpdGxlOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(data, rest) {
        this.data = data;
        this.rest = rest;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/products')];
                    case 1:
                        data = _a.sent();
                        data['success']
                            ? (this.products = data['products'])
                            : this.data.error('Could not fetch products.');
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, rest, data) {
        this.router = router;
        this.rest = rest;
        this.data = data;
        this.email = '';
        this.password = '';
        this.btnDisabled = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.validate = function () {
        if (this.email) {
            if (this.password) {
                return true;
            }
            else {
                this.data.error('Password is not entered');
            }
        }
        else {
            this.data.error('Email is not entered.');
        }
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!this.validate()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.rest.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/accounts/login', {
                                email: this.email,
                                password: this.password,
                            })];
                    case 2:
                        data = _a.sent();
                        if (!data['success']) return [3 /*break*/, 4];
                        localStorage.setItem('token', data['token']);
                        return [4 /*yield*/, this.data.getProfile()];
                    case 3:
                        _a.sent();
                        this.router.navigate(['/']);
                        return [3 /*break*/, 5];
                    case 4:
                        this.data.error(data['message']);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 7];
                    case 7:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.scss":
/*!************************************************!*\
  !*** ./src/app/message/message.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(data) {
        this.data = data;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __importDefault(__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./message.component.scss */ "./src/app/message/message.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/my-categories/my-categories.component.scss":
/*!************************************************************!*\
  !*** ./src/app/my-categories/my-categories.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-group .flex {\n  display: -webkit-box;\n  display: flex;\n  margin: 2px 0px;\n}\n.list-group .flex .list-group-item {\n  padding: 3px 0 3px 20px !important;\n}\n.list-group .flex .btn-save,\n.list-group .flex .btn-cancel,\n.list-group .flex .btn-delete,\n.list-group .flex .btn-edit {\n  margin: 0px 0px 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpcml0aS9Eb2N1bWVudHMvVlNfQ09ERS9ncmFuZGRlc2lnbnMvc3JjL2FwcC9teS1jYXRlZ29yaWVzL215LWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL215LWNhdGVnb3JpZXMvbXktY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUlFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNISjtBRERJO0VBQ0Usa0NBQUE7QUNHTjtBRENJOzs7O0VBSUUsdUJBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL215LWNhdGVnb3JpZXMvbXktY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwIHtcbiAgLmZsZXgge1xuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgcGFkZGluZzogM3B4IDAgM3B4IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgLmJ0bi1zYXZlLFxuICAgIC5idG4tY2FuY2VsLFxuICAgIC5idG4tZGVsZXRlLFxuICAgIC5idG4tZWRpdCB7XG4gICAgICBtYXJnaW46IDBweCAwcHggMHB4IDVweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5saXN0LWdyb3VwIC5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAycHggMHB4O1xufVxuLmxpc3QtZ3JvdXAgLmZsZXggLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBhZGRpbmc6IDNweCAwIDNweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ubGlzdC1ncm91cCAuZmxleCAuYnRuLXNhdmUsXG4ubGlzdC1ncm91cCAuZmxleCAuYnRuLWNhbmNlbCxcbi5saXN0LWdyb3VwIC5mbGV4IC5idG4tZGVsZXRlLFxuLmxpc3QtZ3JvdXAgLmZsZXggLmJ0bi1lZGl0IHtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/my-categories/my-categories.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/my-categories/my-categories.component.ts ***!
  \**********************************************************/
/*! exports provided: MyCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCategoriesComponent", function() { return MyCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var MyCategoriesComponent = /** @class */ (function () {
    function MyCategoriesComponent(data, rest) {
        this.data = data;
        this.rest = rest;
        this.newCategory = '';
        this.btnDisabled = false;
        this.editMode = false;
    }
    MyCategoriesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loadCategories();
                return [2 /*return*/];
            });
        });
    };
    MyCategoriesComponent.prototype.loadCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/categories')];
                    case 1:
                        data = _a.sent();
                        data['success']
                            ? (this.categories = data['categories'])
                            : this.data.error(data['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyCategoriesComponent.prototype.addCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/categories', { category: this.newCategory })];
                    case 2:
                        data = _a.sent();
                        if (data['success']) {
                            this.loadCategories();
                            this.data.success(data['message']);
                        }
                        else {
                            this.data.error(data['message']);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 4];
                    case 4:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    MyCategoriesComponent.prototype.deleteCategory = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var data_1, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + ("/api/categories/delete/?id=" + e.target.id))];
                    case 1:
                        data_1 = _a.sent();
                        // tslint:disable-next-line:max-line-length
                        if (data_1['success']) {
                            this.categories = (this.categories.filter((function (e) { return e._id != (data_1['categories'].id); })));
                            this.loadCategories();
                        }
                        else {
                            this.data.error(data_1['message']);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.data.error(error_3['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyCategoriesComponent.prototype.editName = function () {
        this.editMode = true;
    };
    MyCategoriesComponent.prototype.saveEdit = function (e, category) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/categories/edit', category)];
                    case 2:
                        data = _a.sent();
                        if (data['success']) {
                            this.editMode = false;
                            this.loadCategories();
                        }
                        else {
                            this.data.error(data['message']);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        this.data.error(error_4['message']);
                        return [3 /*break*/, 4];
                    case 4:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    MyCategoriesComponent.prototype.cancelEdit = function () {
        this.editMode = false;
    };
    MyCategoriesComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }
    ]; };
    MyCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-categories',
            template: __importDefault(__webpack_require__(/*! raw-loader!./my-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-categories/my-categories.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./my-categories.component.scss */ "./src/app/my-categories/my-categories.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]])
    ], MyCategoriesComponent);
    return MyCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/my-products/my-products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/my-products/my-products.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXByb2R1Y3RzL215LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/my-products/my-products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/my-products/my-products.component.ts ***!
  \******************************************************/
/*! exports provided: MyProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductsComponent", function() { return MyProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var MyProductsComponent = /** @class */ (function () {
    function MyProductsComponent(data, rest, router) {
        this.data = data;
        this.rest = rest;
        this.router = router;
        this.btnDisabled = false;
        this.product = {
            title: '',
            price: 0,
            categoryId: '',
            description: '',
            product_picture: null,
            product_image_name: ''
        };
    }
    MyProductsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/seller/products')];
                    case 1:
                        data = _a.sent();
                        data['success'] ? (this.products = data['products']) : this.data.error(data['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyProductsComponent.prototype.deleteProduct = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var data_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + ("/api/seller/products/delete/?id=" + e.target.id))];
                    case 1:
                        data_1 = _a.sent();
                        data_1['success'] ? (this.products = this.products.filter(function (e) { return e._id != data_1['products'].id; })) : this.data.error(data_1['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyProductsComponent.prototype.getById = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + ("/api/seller/products/getById/?id=" + e.target.id))];
                    case 1:
                        data = _a.sent();
                        if (data['success']) {
                            this.router.navigate(['/profile/myproducts/edit', { state: JSON.stringify(data['products']) }]);
                        }
                        else {
                            this.data.error(data['message']);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.data.error(error_3['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyProductsComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    MyProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-products',
            template: __importDefault(__webpack_require__(/*! raw-loader!./my-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-products/my-products.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./my-products.component.scss */ "./src/app/my-products/my-products.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MyProductsComponent);
    return MyProductsComponent;
}());



/***/ }),

/***/ "./src/app/post-product/post-product.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/post-product/post-product.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-product {\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpcml0aS9Eb2N1bWVudHMvVlNfQ09ERS9ncmFuZGRlc2lnbnMvc3JjL2FwcC9wb3N0LXByb2R1Y3QvcG9zdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3N0LXByb2R1Y3QvcG9zdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1wcm9kdWN0L3Bvc3QtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LXByb2R1Y3Qge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4iLCIucG9zdC1wcm9kdWN0IHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/post-product/post-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/post-product/post-product.component.ts ***!
  \********************************************************/
/*! exports provided: PostProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostProductComponent", function() { return PostProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var PostProductComponent = /** @class */ (function () {
    function PostProductComponent(data, rest, router) {
        this.data = data;
        this.rest = rest;
        this.router = router;
        this.product = {
            title: '',
            price: 0,
            categoryId: '',
            description: '',
            product_picture: null,
            product_image_name: ''
        };
        this.btnDisabled = false;
    }
    PostProductComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/categories')];
                    case 1:
                        data = _a.sent();
                        data['success']
                            ? (this.categories = data['categories'])
                            : this.data.error(data['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostProductComponent.prototype.validate = function (product) {
        if (product.title) {
            if (product.price) {
                if (product.categoryId) {
                    if (product.description) {
                        if (product.product_picture) {
                            return true;
                        }
                        else {
                            this.data.error('Please select product image.');
                        }
                    }
                    else {
                        this.data.error('Please enter description.');
                    }
                }
                else {
                    this.data.error('Please select category.');
                }
            }
            else {
                this.data.error('Please enter a price.');
            }
        }
        else {
            this.data.error('Please enter a title.');
        }
    };
    PostProductComponent.prototype.fileChange = function (event) {
        var self = this;
        var file = event.target.files[0];
        // const fileSize = (file.size / 1024).toFixed(2);
        // if (file && parseInt(fileSize, 10) < 400) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
            self.product.product_picture = e.target.result;
            self.product.product_image_name = file.name;
        };
        reader.readAsDataURL(file);
        // } else {
        //   alert('File size too large OR No file');
        // }
    };
    PostProductComponent.prototype.post = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data_1, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!this.validate(this.product)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.rest.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/seller/products', this.product)];
                    case 2:
                        data_1 = _a.sent();
                        data_1['success']
                            ? this.router.navigate(['/profile/myproducts'])
                                .then(function () { return _this.data.success(data_1['message']); })
                                .catch(function (error) { return _this.data.error(error); })
                            : this.data.error(data_1['message']);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 5];
                    case 5:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    PostProductComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PostProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-product',
            template: __importDefault(__webpack_require__(/*! raw-loader!./post-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-product/post-product.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./post-product.component.scss */ "./src/app/post-product/post-product.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostProductComponent);
    return PostProductComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(activatedRoute, data, rest, router) {
        this.activatedRoute = activatedRoute;
        this.data = data;
        this.rest = rest;
        this.router = router;
        this.myReview = {
            title: '',
            description: '',
            rating: 0,
        };
        this.btnDisabled = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (res) {
            _this.rest
                .get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + ("/api/product/" + res['id']))
                .then(function (data) {
                data['success']
                    ? (_this.product = data['product'])
                    : _this.router.navigate(['/']);
            })
                .catch(function (error) { return _this.data.error(error['message']); });
        });
    };
    ProductComponent.prototype.addToCart = function () {
        this.data.addToCart(this.product)
            ? this.data.success('Product successfully added to cart.')
            : this.data.error('Product has already been added to cart.');
    };
    ProductComponent.prototype.postReview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/review', {
                                productId: this.product._id,
                                title: this.myReview.title,
                                description: this.myReview.description,
                                rating: this.myReview.rating,
                            })];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? this.data.success(data['message'])
                            : this.data.error(data['message']);
                        this.btnDisabled = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#name {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpcml0aS9Eb2N1bWVudHMvVlNfQ09ERS9ncmFuZGRlc2lnbnMvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYW1lIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuIiwiI25hbWUge1xuICBmb250LXNpemU6IDJyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(data) {
        this.data = data;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, data, rest) {
        this.router = router;
        this.data = data;
        this.rest = rest;
        this.name = '';
        this.email = '';
        this.password = '';
        this.password1 = '';
        this.isSeller = false;
        this.btnDisabled = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () { };
    RegistrationComponent.prototype.validate = function () {
        if (this.name) {
            if (this.email) {
                if (this.password) {
                    if (this.password1) {
                        if (this.password === this.password1) {
                            return true;
                        }
                        else {
                            this.data.error('Passwords do not match.');
                        }
                    }
                    else {
                        this.data.error('Confirmation Password is not entered');
                    }
                }
                else {
                    this.data.error('Password is not entered');
                }
            }
            else {
                this.data.error('Email is not entered.');
            }
        }
        else {
            this.data.error('Name is not entered.');
        }
    };
    RegistrationComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!this.validate()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.rest.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/accounts/signup', {
                                name: this.name,
                                email: this.email,
                                password: this.password,
                                isSeller: this.isSeller,
                            })];
                    case 2:
                        data = _a.sent();
                        if (!data['success']) return [3 /*break*/, 4];
                        localStorage.setItem('token', data['token']);
                        return [4 /*yield*/, this.data.getProfile()];
                    case 3:
                        _a.sent();
                        this.data.success('Registration successful!');
                        return [3 /*break*/, 5];
                    case 4:
                        this.data.error(data['message']);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 7];
                    case 7:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }
    ]; };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __importDefault(__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./registration.component.scss */ "./src/app/registration/registration.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/rest-api.service.ts":
/*!*************************************!*\
  !*** ./src/app/rest-api.service.ts ***!
  \*************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var RestApiService = /** @class */ (function () {
    function RestApiService(http) {
        this.http = http;
    }
    RestApiService.prototype.getHeaders = function () {
        var token = localStorage.getItem('token');
        return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', token) : null;
    };
    RestApiService.prototype.get = function (link) {
        return this.http.get(link, { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.post = function (link, body) {
        return this.http.post(link, body, { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RestApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestApiService);
    return RestApiService;
}());



/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(activatedRoute, data, rest) {
        this.activatedRoute = activatedRoute;
        this.data = data;
        this.rest = rest;
        this.page = 1;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (res) {
            _this.query = res['query'];
            _this.page = 1;
            _this.getProducts();
        });
    };
    Object.defineProperty(SearchComponent.prototype, "lower", {
        get: function () {
            return 1 + this.content.hitsPerPage * this.content.page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchComponent.prototype, "upper", {
        get: function () {
            return Math.min(this.content.hitsPerPage * (this.content.page + 1), this.content.nbHits);
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.content = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + ("/api/search?query=" + this.query + "&page=" + (this.page - 1)))];
                    case 2:
                        data = _a.sent();
                        if (data['success']) {
                            this.content = data['content'];
                            console.log('this.content ', this.content);
                        }
                        else {
                            this.data.error(data['message']);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] }
    ]; };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __importDefault(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/global.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/global.service.ts ***!
  \********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _windowRef_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../windowRef.service */ "./src/app/windowRef.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var GlobalService = /** @class */ (function () {
    function GlobalService(winRef, data, rest, router) {
        var _this = this;
        this.winRef = winRef;
        this.data = data;
        this.rest = rest;
        this.router = router;
        this.quantities = [];
        this.cartItems().forEach(function (data1) {
            _this.quantities.push(1);
        });
    }
    GlobalService.prototype.cartItems = function () {
        return this.data.getCart();
    };
    GlobalService.prototype.cartTotal = function () {
        var _this = this;
        var total = 0;
        this.cartItems().forEach(function (data, index) {
            total += data['price'] * _this.quantities[index];
        });
        console.log('total', total);
        return total;
    };
    GlobalService.prototype.validate = function () {
        var _this = this;
        if (!this.quantities.every(function (data) { return data > 0; })) {
            this.data.warning('Quantity cannot be less than one.');
        }
        else if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']).then(function () {
                _this.data.warning('You need to login before making a purchase.');
            });
        }
        else if (!this.data.user['address']) {
            this.router.navigate(['/profile/address']).then(function () {
                _this.data.warning('You need to login before making a purchase.');
            });
        }
        else {
            this.data.message = '';
            return true;
        }
    };
    GlobalService.prototype.checkout = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var user, data, options, rzp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!localStorage.getItem('token')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rest.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/accounts/profile')];
                    case 1:
                        data = _a.sent();
                        user = data['user'];
                        _a.label = 2;
                    case 2:
                        options = {
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
                        rzp = new this.winRef.nativeWindow.Razorpay(options);
                        rzp.open();
                        return [2 /*return*/];
                }
            });
        });
    };
    GlobalService.ctorParameters = function () { return [
        { type: _windowRef_service__WEBPACK_IMPORTED_MODULE_4__["WindowRef"] },
        { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_windowRef_service__WEBPACK_IMPORTED_MODULE_4__["WindowRef"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(data, rest) {
        this.data = data;
        this.rest = rest;
        this.btnDisabled = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!!this.data.user) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.data.getProfile()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.currentSettings = Object.assign({
                            newPwd: '',
                            pwdConfirm: ''
                        }, this.data.user);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SettingsComponent.prototype.validate = function (settings) {
        if (settings['name']) {
            if (settings['email']) {
                if (settings['newPwd']) {
                    if (settings['pwdConfirm']) {
                        if (settings['newPwd'] === settings['pwdConfirm']) {
                            return true;
                        }
                        else {
                            this.data.error('Passwords do not match.');
                        }
                    }
                    else {
                        this.data.error('Please enter confirmation password.');
                    }
                }
                else {
                    if (!settings['pwdConfirm']) {
                        return true;
                    }
                    else {
                        this.data.error('Please enter new password.');
                    }
                }
            }
            else {
                this.data.error('Please enter your email.');
            }
        }
        else {
            this.data.error('Please enter your name.');
        }
    };
    SettingsComponent.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!this.validate(this.currentSettings)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.rest.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/api/accounts/profile', {
                                name: this.currentSettings['name'],
                                email: this.currentSettings['email'],
                                password: this.currentSettings['newPwd'],
                                isSeller: this.currentSettings['isSeller']
                            })];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? (this.data.getProfile(), this.data.success(data['message']))
                            : this.data.error(data['message']);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 5];
                    case 5:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] }
    ]; };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __importDefault(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/windowRef.service.ts":
/*!**************************************!*\
  !*** ./src/app/windowRef.service.ts ***!
  \**************************************/
/*! exports provided: WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: true,
    // apiUrl: 'https://www.granddesigns.in'
    apiUrl: 'https://granddesigns.herokuapp.com'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    apiUrl: 'http://localhost:3030'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kiriti/Documents/VS_CODE/granddesigns/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map