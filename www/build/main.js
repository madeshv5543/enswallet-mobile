webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRewardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyRewardsPage = (function () {
    function MyRewardsPage(navCtrl, loadCtrl, webservice, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.webservice = webservice;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.credentials = {};
    }
    MyRewardsPage.prototype.changePassword = function (f) {
        var _this = this;
        var self = this;
        var loading = self.loadCtrl.create();
        loading.present();
        self.webservice.changepassword(self.credentials)
            .subscribe(function (res) {
            loading.dismissAll();
            if (res.status == 200) {
                _this.storage.clear();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                var toast = self.toastCtrl.create({ message: 'Password Changed Successfully. Please Login to continue', duration: 2000 });
                toast.present();
            }
            else {
                var toast = self.toastCtrl.create({ message: res.message, duration: 2000 });
                toast.present();
            }
        }, function (err) {
            loading.dismissAll();
            var toast = self.toastCtrl.create({ message: 'Something Went wrong try after sometime', duration: 2000 });
            toast.present();
        });
    };
    MyRewardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-rewards',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\my-rewards\my-rewards.html"*/'<!-- TradingView Widget BEGIN -->\n\n<ion-content>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n              </button>\n\n    <ion-title>Evens</ion-title>\n\n</ion-navbar>\n\n<div padding>\n\n    <div class="chare">\n\n        <form #f="ngForm" novalidate (ngSubmit)="changePassword(f)">\n\n            <ion-list>\n\n              <ion-item-group>\n\n                <ion-item>\n\n                  <ion-label stacked>Current Password</ion-label>\n\n                  <ion-input type="password" name="oldpassword" required [(ngModel)]="credentials.oldpassword"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label stacked>New Password</ion-label>\n\n                  <ion-input type="password" name="password" required validateEqual="confirmPassword" [(ngModel)]="credentials.password" reverse="true"\n\n                    #newpassword="ngModel">\n\n                  </ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-label stacked>Repeat Password</ion-label>\n\n                  <ion-input type="password" name="confirmpassword" required validateEqual="password" [(ngModel)]="credentials.confirmpassword"\n\n                    #confirmpassword="ngModel" reverse="false">\n\n                  </ion-input>\n\n                </ion-item>\n\n                <small [hidden]="(confirmpassword.valid) || (confirmpassword.pristine && !f.submitted)" class="text-danger error-msg">\n\n                 New Password and Repeat Password are not same.\n\n                </small>\n\n              </ion-item-group>\n\n              <div padding class="txt-cen">\n\n                <button style="width:80%" ion-button color="primary" round [disabled]="f.invalid" type="submit"> Change Password</button>\n\n              </div>\n\n            </ion-list>\n\n          </form>\n\n    </div>\n\n\n\n</div>\n\n</ion-content>\n\n\n\n<!-- TradingView Widget END -->'/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\my-rewards\my-rewards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], MyRewardsPage);
    return MyRewardsPage;
}());

//# sourceMappingURL=my-rewards.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebservicProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_timezone__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_timezone__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the WebservicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WebservicProvider = (function () {
    function WebservicProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        //  private serverUrl:any = 'http://192.168.1.4:3200/api';
        //  private serverUrl:any = 'http://localhost:3200/api';
        this.serverUrl = "http://wallet.evenscoin.io:3200/api";
        this.etherscanUrl = "https://api.etherscan.io/api?module=account&action=txlist&address=";
        this.params = "&startblock=0&endblock=99999999&page=1&offset=500&sort=desc&apikey=YourApiKeyToken";
        this.evensparams = "&startblock=0&endblock=99999999&page=1&offset=5&sort=desc&apikey=YourApiKeyToken";
        this.evenstokenUrl = "https://api.etherscan.io/api?module=account&action=tokentx&address=";
        this.topriceurl = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTT,ETH,INR,THB,KRW,USD';
        this.exploreUrl = 'http://explorer.evenscoin.io';
        this.USDvalue = {};
        //  this.updateCurrence();
    }
    WebservicProvider.prototype.setSelecetedcoin = function (coin) {
        var self = this;
        this.selectedCoin = coin;
        self.storage.set('selectedcoin', coin);
    };
    WebservicProvider.prototype.getEthTransaction = function (address) {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get("" + self.etherscanUrl + address + self.params)
                .subscribe(function (res) {
                var temarr = [];
                if (res.result) {
                    if (res.result.length) {
                        for (var j = 0; j < res.result.length; j++) {
                            if (temarr.length > 4) {
                                break;
                            }
                            var o = Object.assign({}, res.result[j]);
                            if (o.value != 0) {
                                //  console.log(o.timeStamp)
                                var mode = o.from.toUpperCase() == address.toUpperCase() ? 'Sent' : 'Received';
                                //  let status = o.txreceipt_status == 1?'Success':'Failure';
                                var amount = o.value / 1e18;
                                var time = new Date(parseInt(o.timeStamp));
                                console.log("time", time);
                                var obj = {
                                    amount: parseFloat(amount).toFixed(3),
                                    date: __WEBPACK_IMPORTED_MODULE_4_moment_timezone__["tz"](parseInt(o.timeStamp) * 1000, 'Asia/Kolkata').format('DD-MMM-YYYY'),
                                    mode: mode,
                                    //  status:status,
                                    receipt: o.hash,
                                    link: "http://etherscan.io/tx/" + o.hash
                                };
                                temarr.push(obj);
                            }
                        }
                        resolve(temarr);
                    }
                    else {
                        resolve([]);
                    }
                }
                else {
                    resolve([]);
                }
            }, function (err) {
                alert('Something Went Wrong.');
            });
            // self.storage.get('eth')
            // .then((val)=>{
            //   console.log("value data",val)
            //  if(!val){
            //    resolve([]) ;
            //  }else{
            //    resolve(JSON.parse(val))
            //  }
            // })
        });
        return promise;
    };
    WebservicProvider.prototype.getTokenTransaction = function (address) {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get("" + self.evenstokenUrl + address + self.evensparams)
                .subscribe(function (res) {
                if (res.result) {
                    if (res.result.length) {
                        var temarr = res.result.map(function (o) {
                            var mode = o.from.toUpperCase() == address.toUpperCase() ? 'Sent' : 'Received';
                            var status = o.txreceipt_status == 1 ? 'Success' : 'Failure';
                            var amount = o.value / 1e18;
                            //  amount = (amount * 100 ) / 100;
                            var obj = {
                                amount: parseFloat(amount).toFixed(3),
                                date: __WEBPACK_IMPORTED_MODULE_4_moment_timezone__["tz"](parseInt(o.timeStamp) * 1000, 'Asia/Kolkata').format('DD-MMM-YYYY'),
                                mode: mode,
                                status: status,
                                receipt: o.hash,
                                link: "https://etherscan.io/tx/" + o.hash
                            };
                            return obj;
                        });
                        resolve(temarr);
                    }
                    else {
                        resolve([]);
                    }
                }
                else {
                    resolve([]);
                }
            }, function (err) {
                alert('Something Went Wrong.');
            });
            // self.storage.get('eth')
            // .then((val)=>{
            //   console.log("value data",val)
            //  if(!val){
            //    resolve([]) ;
            //  }else{
            //    resolve(JSON.parse(val))
            //  }
            // })
        });
        return promise;
    };
    WebservicProvider.prototype.getSelectedcoinpromise = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (!_this.selectedCoin) {
                _this.storage.get('selectedcoin')
                    .then(function (res) {
                    _this.selectedCoin = res;
                    resolve(_this.selectedCoin);
                });
            }
            else {
                resolve(_this.selectedCoin);
            }
        });
        return promise;
    };
    WebservicProvider.prototype.getSelectedcoin = function () {
        var _this = this;
        if (!this.selectedCoin) {
            this.storage.get('selectedcoin')
                .then(function (res) {
                _this.selectedCoin = res;
                return _this.selectedCoin;
            });
        }
        else {
            return this.selectedCoin;
        }
    };
    WebservicProvider.prototype.getUsedValue = function () {
        return this.USDvalue.USD;
    };
    WebservicProvider.prototype.getBalance = function () {
        var self = this;
        return self.http.get(this.serverUrl + "/getBalance");
    };
    WebservicProvider.prototype.evensBalance = function () {
        var self = this;
        return self.http.get(this.serverUrl + "/evensBalance");
    };
    WebservicProvider.prototype.checkAddress = function (add) {
        var self = this;
        return self.http.get(this.serverUrl + "/checkAdddress/" + add);
    };
    WebservicProvider.prototype.Transfer = function (data) {
        var self = this;
        return self.http.post(self.serverUrl + "/transfer", data);
    };
    WebservicProvider.prototype.TransferEns = function (data) {
        var self = this;
        return self.http.post(self.serverUrl + "/sendEns", data);
    };
    WebservicProvider.prototype.getTodayPrice = function () {
        var self = this;
        return self.http.get(self.topriceurl);
    };
    WebservicProvider.prototype.getAllBalance = function () {
        var self = this;
        return self.http.get(self.serverUrl + "/allBalance");
    };
    WebservicProvider.prototype.getTokenOneBalance = function () {
        var self = this;
        return self.http.get(self.serverUrl + "/tokenOneBalance");
    };
    WebservicProvider.prototype.getTokenTwoBalance = function () {
        var self = this;
        return self.http.get(self.serverUrl + "/tokenTwoBalance");
    };
    WebservicProvider.prototype.getTokenThreeBalance = function () {
        var self = this;
        return self.http.get(self.serverUrl + "/tokenThreeBalance");
    };
    WebservicProvider.prototype.getTokenFourBalance = function () {
        var self = this;
        return self.http.get(self.serverUrl + "/tokenFourBalance");
    };
    WebservicProvider.prototype.TransferTokenOne = function (data) {
        var self = this;
        return self.http.post(self.serverUrl + "/sendTokenOne", data);
    };
    WebservicProvider.prototype.TransferTokenTwo = function (data) {
        var self = this;
        return self.http.post(self.serverUrl + "/sendTokenTwo", data);
    };
    WebservicProvider.prototype.TransferTokenThree = function (data) {
        var self = this;
        return self.http.post(self.serverUrl + "/sendTokenThree", data);
    };
    WebservicProvider.prototype.TransferTokenFour = function (data) {
        var self = this;
        return self.http.post(self.serverUrl + "/sendTokenFour", data);
    };
    WebservicProvider.prototype.createAccont = function (data) {
        var self = this;
        return self.http.post(self.serverUrl + "/signUp", data);
    };
    WebservicProvider.prototype.login = function (data) {
        var self = this;
        return self.http.post(self.serverUrl + "/login", data);
    };
    WebservicProvider.prototype.saveLocalData = function (data, token) {
        var self = this;
        self.storage.set('user', JSON.stringify(data));
        self.storage.set('token', token);
    };
    WebservicProvider.prototype.getStoredData = function () {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.storage.get('user')
                .then(function (val) {
                console.log("value data", val);
                if (!val) {
                    resolve(null);
                }
                else {
                    resolve(JSON.parse(val));
                }
            });
        });
        return promise;
    };
    WebservicProvider.prototype.getTokenTxList = function (tkaddr, addr) {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get(self.exploreUrl + "/tokenTransaction?tkaddr=" + tkaddr + "&addr=" + addr + "&length=5")
                .subscribe(function (res) {
                if (res && res.data) {
                    if (res.data.length) {
                        var temArr = res.data.map(function (o) {
                            var mode = o.from.toUpperCase() == addr.toUpperCase() ? 'Sent' : 'Received';
                            var obj = {
                                amount: parseFloat(o.value).toFixed(3),
                                date: __WEBPACK_IMPORTED_MODULE_4_moment_timezone__["tz"](parseInt(o.timestamp) * 1000, 'Asia/Kolkata').format('DD-MMM-YYYY'),
                                mode: mode,
                                receipt: o.hash,
                                link: self.exploreUrl + "/tx/" + o.hash
                            };
                            return obj;
                        });
                        resolve(temArr);
                    }
                }
                else {
                    resolve([]);
                }
            }, function (err) {
                resolve([]);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.getUserInfo = function () {
        var self = this;
        return self.http.get(self.serverUrl + "/user");
    };
    WebservicProvider.prototype.getChartDate = function () {
        var self = this;
        return self.http.get(self.serverUrl + "/ethusdprice");
    };
    WebservicProvider.prototype.changepassword = function (data) {
        var self = this;
        return self.http.post(self.serverUrl + "/changePassword", data);
    };
    WebservicProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
    ], WebservicProvider);
    return WebservicProvider;
    var _a, _b;
}());

//# sourceMappingURL=webservic.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card_add_card__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateAccountPage = (function () {
    function CreateAccountPage(navCtrl, WebService, menu, toastCtrl, loadCtrl) {
        this.navCtrl = navCtrl;
        this.WebService = WebService;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.gender = "male";
        this.newUser = {};
        this.countryChoice = [
            { "name": "Afghanistan", "code": "AF" },
            { "name": "Åland Islands", "code": "AX" },
            { "name": "Albania", "code": "AL" },
            { "name": "Algeria", "code": "DZ" },
            { "name": "American Samoa", "code": "AS" },
            { "name": "AndorrA", "code": "AD" },
            { "name": "Angola", "code": "AO" },
            { "name": "Anguilla", "code": "AI" },
            { "name": "Antarctica", "code": "AQ" },
            { "name": "Antigua and Barbuda", "code": "AG" },
            { "name": "Argentina", "code": "AR" },
            { "name": "Armenia", "code": "AM" },
            { "name": "Aruba", "code": "AW" },
            { "name": "Australia", "code": "AU" },
            { "name": "Austria", "code": "AT" },
            { "name": "Azerbaijan", "code": "AZ" },
            { "name": "Bahamas", "code": "BS" },
            { "name": "Bahrain", "code": "BH" },
            { "name": "Bangladesh", "code": "BD" },
            { "name": "Barbados", "code": "BB" },
            { "name": "Belarus", "code": "BY" },
            { "name": "Belgium", "code": "BE" },
            { "name": "Belize", "code": "BZ" },
            { "name": "Benin", "code": "BJ" },
            { "name": "Bermuda", "code": "BM" },
            { "name": "Bhutan", "code": "BT" },
            { "name": "Bolivia", "code": "BO" },
            { "name": "Bosnia and Herzegovina", "code": "BA" },
            { "name": "Botswana", "code": "BW" },
            { "name": "Bouvet Island", "code": "BV" },
            { "name": "Brazil", "code": "BR" },
            { "name": "British Indian Ocean Territory", "code": "IO" },
            { "name": "Brunei Darussalam", "code": "BN" },
            { "name": "Bulgaria", "code": "BG" },
            { "name": "Burkina Faso", "code": "BF" },
            { "name": "Burundi", "code": "BI" },
            { "name": "Cambodia", "code": "KH" },
            { "name": "Cameroon", "code": "CM" },
            { "name": "Canada", "code": "CA" },
            { "name": "Cape Verde", "code": "CV" },
            { "name": "Cayman Islands", "code": "KY" },
            { "name": "Central African Republic", "code": "CF" },
            { "name": "Chad", "code": "TD" },
            { "name": "Chile", "code": "CL" },
            { "name": "China", "code": "CN" },
            { "name": "Christmas Island", "code": "CX" },
            { "name": "Cocos (Keeling) Islands", "code": "CC" },
            { "name": "Colombia", "code": "CO" },
            { "name": "Comoros", "code": "KM" },
            { "name": "Congo", "code": "CG" },
            { "name": "Congo, The Democratic Republic of the", "code": "CD" },
            { "name": "Cook Islands", "code": "CK" },
            { "name": "Costa Rica", "code": "CR" },
            { "name": "Cote D\"Ivoire", "code": "CI" },
            { "name": "Croatia", "code": "HR" },
            { "name": "Cuba", "code": "CU" },
            { "name": "Cyprus", "code": "CY" },
            { "name": "Czech Republic", "code": "CZ" },
            { "name": "Denmark", "code": "DK" },
            { "name": "Djibouti", "code": "DJ" },
            { "name": "Dominica", "code": "DM" },
            { "name": "Dominican Republic", "code": "DO" },
            { "name": "Ecuador", "code": "EC" },
            { "name": "Egypt", "code": "EG" },
            { "name": "El Salvador", "code": "SV" },
            { "name": "Equatorial Guinea", "code": "GQ" },
            { "name": "Eritrea", "code": "ER" },
            { "name": "Estonia", "code": "EE" },
            { "name": "Ethiopia", "code": "ET" },
            { "name": "Falkland Islands (Malvinas)", "code": "FK" },
            { "name": "Faroe Islands", "code": "FO" },
            { "name": "Fiji", "code": "FJ" },
            { "name": "Finland", "code": "FI" },
            { "name": "France", "code": "FR" },
            { "name": "French Guiana", "code": "GF" },
            { "name": "French Polynesia", "code": "PF" },
            { "name": "French Southern Territories", "code": "TF" },
            { "name": "Gabon", "code": "GA" },
            { "name": "Gambia", "code": "GM" },
            { "name": "Georgia", "code": "GE" },
            { "name": "Germany", "code": "DE" },
            { "name": "Ghana", "code": "GH" },
            { "name": "Gibraltar", "code": "GI" },
            { "name": "Greece", "code": "GR" },
            { "name": "Greenland", "code": "GL" },
            { "name": "Grenada", "code": "GD" },
            { "name": "Guadeloupe", "code": "GP" },
            { "name": "Guam", "code": "GU" },
            { "name": "Guatemala", "code": "GT" },
            { "name": "Guernsey", "code": "GG" },
            { "name": "Guinea", "code": "GN" },
            { "name": "Guinea-Bissau", "code": "GW" },
            { "name": "Guyana", "code": "GY" },
            { "name": "Haiti", "code": "HT" },
            { "name": "Heard Island and Mcdonald Islands", "code": "HM" },
            { "name": "Holy See (Vatican City State)", "code": "VA" },
            { "name": "Honduras", "code": "HN" },
            { "name": "Hong Kong", "code": "HK" },
            { "name": "Hungary", "code": "HU" },
            { "name": "Iceland", "code": "IS" },
            { "name": "India", "code": "IN" },
            { "name": "Indonesia", "code": "ID" },
            { "name": "Iran, Islamic Republic Of", "code": "IR" },
            { "name": "Iraq", "code": "IQ" },
            { "name": "Ireland", "code": "IE" },
            { "name": "Isle of Man", "code": "IM" },
            { "name": "Israel", "code": "IL" },
            { "name": "Italy", "code": "IT" },
            { "name": "Jamaica", "code": "JM" },
            { "name": "Japan", "code": "JP" },
            { "name": "Jersey", "code": "JE" },
            { "name": "Jordan", "code": "JO" },
            { "name": "Kazakhstan", "code": "KZ" },
            { "name": "Kenya", "code": "KE" },
            { "name": "Kiribati", "code": "KI" },
            { "name": "Korea, Democratic People\"S Republic of", "code": "KP" },
            { "name": "Korea, Republic of", "code": "KR" },
            { "name": "Kuwait", "code": "KW" },
            { "name": "Kyrgyzstan", "code": "KG" },
            { "name": "Lao People\"S Democratic Republic", "code": "LA" },
            { "name": "Latvia", "code": "LV" },
            { "name": "Lebanon", "code": "LB" },
            { "name": "Lesotho", "code": "LS" },
            { "name": "Liberia", "code": "LR" },
            { "name": "Libyan Arab Jamahiriya", "code": "LY" },
            { "name": "Liechtenstein", "code": "LI" },
            { "name": "Lithuania", "code": "LT" },
            { "name": "Luxembourg", "code": "LU" },
            { "name": "Macao", "code": "MO" },
            { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" },
            { "name": "Madagascar", "code": "MG" },
            { "name": "Malawi", "code": "MW" },
            { "name": "Malaysia", "code": "MY" },
            { "name": "Maldives", "code": "MV" },
            { "name": "Mali", "code": "ML" },
            { "name": "Malta", "code": "MT" },
            { "name": "Marshall Islands", "code": "MH" },
            { "name": "Martinique", "code": "MQ" },
            { "name": "Mauritania", "code": "MR" },
            { "name": "Mauritius", "code": "MU" },
            { "name": "Mayotte", "code": "YT" },
            { "name": "Mexico", "code": "MX" },
            { "name": "Micronesia, Federated States of", "code": "FM" },
            { "name": "Moldova, Republic of", "code": "MD" },
            { "name": "Monaco", "code": "MC" },
            { "name": "Mongolia", "code": "MN" },
            { "name": "Montserrat", "code": "MS" },
            { "name": "Morocco", "code": "MA" },
            { "name": "Mozambique", "code": "MZ" },
            { "name": "Myanmar", "code": "MM" },
            { "name": "Namibia", "code": "NA" },
            { "name": "Nauru", "code": "NR" },
            { "name": "Nepal", "code": "NP" },
            { "name": "Netherlands", "code": "NL" },
            { "name": "Netherlands Antilles", "code": "AN" },
            { "name": "New Caledonia", "code": "NC" },
            { "name": "New Zealand", "code": "NZ" },
            { "name": "Nicaragua", "code": "NI" },
            { "name": "Niger", "code": "NE" },
            { "name": "Nigeria", "code": "NG" },
            { "name": "Niue", "code": "NU" },
            { "name": "Norfolk Island", "code": "NF" },
            { "name": "Northern Mariana Islands", "code": "MP" },
            { "name": "Norway", "code": "NO" },
            { "name": "Oman", "code": "OM" },
            { "name": "Pakistan", "code": "PK" },
            { "name": "Palau", "code": "PW" },
            { "name": "Palestinian Territory, Occupied", "code": "PS" },
            { "name": "Panama", "code": "PA" },
            { "name": "Papua New Guinea", "code": "PG" },
            { "name": "Paraguay", "code": "PY" },
            { "name": "Peru", "code": "PE" },
            { "name": "Philippines", "code": "PH" },
            { "name": "Pitcairn", "code": "PN" },
            { "name": "Poland", "code": "PL" },
            { "name": "Portugal", "code": "PT" },
            { "name": "Puerto Rico", "code": "PR" },
            { "name": "Qatar", "code": "QA" },
            { "name": "Reunion", "code": "RE" },
            { "name": "Romania", "code": "RO" },
            { "name": "Russian Federation", "code": "RU" },
            { "name": "RWANDA", "code": "RW" },
            { "name": "Saint Helena", "code": "SH" },
            { "name": "Saint Kitts and Nevis", "code": "KN" },
            { "name": "Saint Lucia", "code": "LC" },
            { "name": "Saint Pierre and Miquelon", "code": "PM" },
            { "name": "Saint Vincent and the Grenadines", "code": "VC" },
            { "name": "Samoa", "code": "WS" },
            { "name": "San Marino", "code": "SM" },
            { "name": "Sao Tome and Principe", "code": "ST" },
            { "name": "Saudi Arabia", "code": "SA" },
            { "name": "Senegal", "code": "SN" },
            { "name": "Serbia and Montenegro", "code": "CS" },
            { "name": "Seychelles", "code": "SC" },
            { "name": "Sierra Leone", "code": "SL" },
            { "name": "Singapore", "code": "SG" },
            { "name": "Slovakia", "code": "SK" },
            { "name": "Slovenia", "code": "SI" },
            { "name": "Solomon Islands", "code": "SB" },
            { "name": "Somalia", "code": "SO" },
            { "name": "South Africa", "code": "ZA" },
            { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
            { "name": "Spain", "code": "ES" },
            { "name": "Sri Lanka", "code": "LK" },
            { "name": "Sudan", "code": "SD" },
            { "name": "Suriname", "code": "SR" },
            { "name": "Svalbard and Jan Mayen", "code": "SJ" },
            { "name": "Swaziland", "code": "SZ" },
            { "name": "Sweden", "code": "SE" },
            { "name": "Switzerland", "code": "CH" },
            { "name": "Syrian Arab Republic", "code": "SY" },
            { "name": "Taiwan, Province of China", "code": "TW" },
            { "name": "Tajikistan", "code": "TJ" },
            { "name": "Tanzania, United Republic of", "code": "TZ" },
            { "name": "Thailand", "code": "TH" },
            { "name": "Timor-Leste", "code": "TL" },
            { "name": "Togo", "code": "TG" },
            { "name": "Tokelau", "code": "TK" },
            { "name": "Tonga", "code": "TO" },
            { "name": "Trinidad and Tobago", "code": "TT" },
            { "name": "Tunisia", "code": "TN" },
            { "name": "Turkey", "code": "TR" },
            { "name": "Turkmenistan", "code": "TM" },
            { "name": "Turks and Caicos Islands", "code": "TC" },
            { "name": "Tuvalu", "code": "TV" },
            { "name": "Uganda", "code": "UG" },
            { "name": "Ukraine", "code": "UA" },
            { "name": "United Arab Emirates", "code": "AE" },
            { "name": "United Kingdom", "code": "GB" },
            { "name": "United States", "code": "US" },
            { "name": "United States Minor Outlying Islands", "code": "UM" },
            { "name": "Uruguay", "code": "UY" },
            { "name": "Uzbekistan", "code": "UZ" },
            { "name": "Vanuatu", "code": "VU" },
            { "name": "Venezuela", "code": "VE" },
            { "name": "Viet Nam", "code": "VN" },
            { "name": "Virgin Islands, British", "code": "VG" },
            { "name": "Virgin Islands, U.S.", "code": "VI" },
            { "name": "Wallis and Futuna", "code": "WF" },
            { "name": "Western Sahara", "code": "EH" },
            { "name": "Yemen", "code": "YE" },
            { "name": "Zambia", "code": "ZM" },
            { "name": "Zimbabwe", "code": "ZW" }
        ];
        this.menu.enable(false);
    }
    CreateAccountPage.prototype.siguUP = function (f) {
        var self = this;
        var loading = self.loadCtrl.create();
        loading.present();
        self.WebService.createAccont(self.newUser)
            .subscribe(function (result) {
            loading.dismiss();
            if (result.status == 200) {
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__add_card_add_card__["a" /* AddCardPage */], { data: result.data, token: result.token });
            }
            else {
                var toast = self.toastCtrl.create({ message: result.message, duration: 2000 });
                toast.present();
            }
        }, function (err) {
            loading.dismiss();
            if ('error' in err) {
                if (err.error.status) {
                    var toast = self.toastCtrl.create({ message: err.error.message, duration: 2000 });
                    toast.present();
                }
            }
            else {
                var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
                toast.present();
            }
        });
    };
    CreateAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-account',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\create-account\create-account.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Create Account\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form #f="ngForm" novalidate (ngSubmit)="siguUP(f)">\n\n    <ion-list>\n\n      <ion-item-group>\n\n        <ion-item>\n\n          <ion-label stacked>First Name</ion-label>\n\n          <ion-input type="text" name="firstName" required [(ngModel)]="newUser.firstName"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Last Name</ion-label>\n\n          <ion-input type="text" name="lastName" required [(ngModel)]="newUser.lastName"></ion-input>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n            <ion-label stacked>Date of Birth</ion-label>\n\n            <ion-input type="date" name="dob" required [(ngModel)]="newUser.dob"></ion-input>\n\n          </ion-item> -->\n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="email" name="email" required [(ngModel)]="newUser.email"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="password" name="password" required validateEqual="confirmPassword" [(ngModel)]="newUser.password" reverse="true"\n\n            #password="ngModel">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Repeat Password</ion-label>\n\n          <ion-input type="password" name="confirmPassword" required validateEqual="password" [(ngModel)]="newUser.confirmPassword"\n\n            #confirmPassword="ngModel" reverse="false">\n\n          </ion-input>\n\n        </ion-item>\n\n        <small [hidden]="(confirmPassword.valid) || (confirmPassword.pristine && !f.submitted)" class="text-danger error-msg">\n\n          Password mismatch\n\n        </small>\n\n        <!-- <ion-item>\n\n            <ion-label stacked>Phone Number</ion-label>\n\n            <ion-input type="tel" name="phoneNumber" required [(ngModel)]="newUser.phoneNumber"></ion-input>\n\n          </ion-item> -->\n\n        <!-- <ion-item>\n\n            <ion-label stacked>City</ion-label>\n\n            <ion-input type="text" name="city" placeholder="optional" [(ngModel)]="newUser.city"></ion-input>\n\n          </ion-item> -->\n\n        <ion-item>\n\n          <ion-label stacked>Country</ion-label>\n\n          <ion-select name="country" [(ngModel)]="newUser.country" interface="action-sheet">\n\n            <ion-option *ngFor="let country of countryChoice " value="{{country.name}}">{{country.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-item-group>\n\n      <div padding>\n\n        <button ion-button color="primary" block [disabled]="f.invalid" type="submit"> Create Account</button>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\create-account\create-account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CreateAccountPage);
    return CreateAccountPage;
}());

//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_webservic_webservic__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCardPage = (function () {
    function AddCardPage(navCtrl, navParams, clipboard, menu, webService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clipboard = clipboard;
        this.menu = menu;
        this.webService = webService;
        this.data = {};
        this.data = this.navParams.get('data');
        this.token = this.navParams.get('token');
        this.menu.enable(false);
    }
    AddCardPage.prototype.copyToClipboard = function () {
        var self = this;
        this.clipboard.copy(self.data.seed);
    };
    AddCardPage.prototype.goToHome = function () {
        var self = this;
        self.webService.saveLocalData(self.data, self.token);
        self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
    };
    AddCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-card',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\add-card\add-card.html"*/'\n\n<ion-content padding>\n\n  <P class="ctc-content">These words are only way to restore your accounts. Save them somewhere safe and secret.</P>\n\n  <ion-card class="ctc">\n\n    <p>{{ data.seed }}</p>\n\n  </ion-card>\n\n  <div class="ctc-btn-box">\n\n    <button ion-button (click)="copyToClipboard()" >Copy to Clipboard</button>\n\n    <button ion-button (click)="goToHome()">I saved </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\add-card\add-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_webservic_webservic__["a" /* WebservicProvider */]])
    ], AddCardPage);
    return AddCardPage;
}());

//# sourceMappingURL=add-card.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topup_topup__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coupons_coupons__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__["a" /* WalletPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__topup_topup__["a" /* TopupPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__coupons_coupons__["a" /* CouponsPage */];
        this.mySelectedIndex = this.navParams.get('tabIndex');
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\tabs\tabs.html"*/'<ion-tabs class="enstabs" color="red" [selectedIndex]="mySelectedIndex">\n\n  <ion-tab class="enstab" [root]="tab3Root" tabTitle="Info" tabIcon="ens-info"></ion-tab>\n\n  <ion-tab class="enstab" [root]="tab1Root" tabTitle="Send" tabIcon="ens-send"></ion-tab>\n\n  <ion-tab class="enstab" [root]="tab2Root" tabTitle="Receive" tabIcon="ens-rec"></ion-tab>\n\n  <!-- <ion-tab class="enstab" [root]="tab4Root" tabTitle="Buy" tabIcon="ens-buy"></ion-tab> -->\n\n</ion-tabs>\n\n'/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



var WalletPage = (function () {
    function WalletPage(navCtrl, webserve) {
        this.navCtrl = navCtrl;
        this.webserve = webserve;
        this.account = {};
        this.showQr = false;
        this.value = "test";
        this.todayPrice = {
            "BTT": 1,
            "ETH": 1
        };
        this.getSelecetedCoin();
        this.gettodayPrice();
    }
    WalletPage.prototype.doRefresh = function (e) {
        this.getSelecetedCoin();
        this.gettodayPrice();
        setTimeout(function () {
            e.complete();
        }, 2000);
    };
    WalletPage.prototype.gettodayPrice = function () {
        var self = this;
        self.webserve.getTodayPrice()
            .subscribe(function (res) {
            self.todayPrice = res;
        }, function (err) {
            console.log(err);
        });
    };
    WalletPage.prototype.getSelecetedCoin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.webserve.getSelectedcoinpromise()];
                    case 1:
                        _a.selectedCur = _b.sent();
                        this.getBalance();
                        return [2 /*return*/];
                }
            });
        });
    };
    WalletPage.prototype.getBalance = function () {
        var _this = this;
        var self = this;
        var servicecall;
        switch (self.selectedCur) {
            case 'evenscoin':
                servicecall = self.webserve.evensBalance();
                break;
            case 'tokenOne':
                servicecall = self.webserve.getTokenOneBalance();
                break;
            case 'tokenTwo':
                servicecall = self.webserve.getTokenTwoBalance();
                break;
            case 'tokenThree':
                servicecall = self.webserve.getTokenThreeBalance();
                break;
            case 'tokenFour':
                servicecall = self.webserve.getTokenFourBalance();
                break;
            default:
                servicecall = self.webserve.getBalance();
        }
        servicecall
            .subscribe(function (res) {
            console.log('res', res);
            self.account = res;
            _this.showQr = true;
        }, function (err) {
            console.log("err", err);
        });
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'wallet',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\wallet\wallet.html"*/'  <ion-header class="ion-header">\n\n        <ion-navbar color="primary">\n\n                <button ion-button menuToggle>\n\n                  <ion-icon name="menu"></ion-icon>\n\n                </button>\n\n                <ion-title>\n\n                  Evens\n\n                </ion-title>\n\n              </ion-navbar>\n\n  </ion-header>\n\n  <ion-content >\n\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n\n                <ion-refresher-content\n\n                  pullingIcon="arrow-dropdown"\n\n                  pullingText="Pull to refresh"\n\n                  refreshingSpinner="circles"\n\n                  refreshingText="Refreshing...">\n\n                </ion-refresher-content>\n\n              </ion-refresher>\n\n        <div padding>\n\n            <div >\n\n                <img *ngIf="selectedCur == \'Etheriun\'" class="static_icon" src="assets/imgs/ethw-40.png">\n\n                <img *ngIf="selectedCur == \'evenscoin\'" class="static_icon" src="assets/imgs/evensw-40.png">\n\n                <img *ngIf="selectedCur == \'tokenOne\'" class="static_icon" src="assets/imgs/tk1w-40.png">\n\n                <img *ngIf="selectedCur == \'tokenThree\'" class="static_icon" src="assets/imgs/tk3w-40.png">\n\n                <img *ngIf="selectedCur == \'tokenTwo\'" class="static_icon" src="assets/imgs/tk2w-40.png">\n\n                <img *ngIf="selectedCur == \'tokenFour\'" class="static_icon" src="assets/imgs/tk4w-40.png">\n\n            </div>\n\n                <div *ngIf="showQr" class="adddiv">\n\n         \n\n                    </div>\n\n                  <div *ngIf="showQr" class="qr_code">\n\n                      <div class="qr_text" >QR CODE</div>\n\n                      <ngx-qrcode [qrc-value]="account.address"></ngx-qrcode>\n\n                      \n\n                  </div>\n\n                  <div *ngIf="showQr" class="adddiv">\n\n                      <span class="ow_address">{{account.address}}</span>\n\n                  </div>\n\n                  <ion-list class="" *ngIf="selectedCur == \'Etheriun\'">\n\n                      <ion-card class="card_tran">\n\n                              <ion-item  >  \n\n                                 <div class="texc">\n\n                                    <h2  class="balance">{{account.balance | number: \'.3\'}} ETH</h2>\n\n                                    <p class="colo  baltxt1">1 ETH = {{ 1 / todayPrice.ETH | number}} USD</p>\n\n                                 </div>\n\n                                      \n\n                                      <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                                  </ion-item>\n\n                      </ion-card>\n\n                      <ion-card class="card_tran">\n\n                              <ion-item >\n\n                                  <div class="texc">\n\n                                      <h2 class="balance qr_textitem">{{ account.balance / todayPrice.ETH | number:\'.3\' }} USD</h2>\n\n                                      </div>\n\n                                  </ion-item>\n\n                      </ion-card>\n\n                      \n\n              \n\n                  </ion-list>\n\n                  <ion-list *ngIf="selectedCur == \'evenscoin\'">\n\n                        <ion-card class="card_tran">\n\n                                <ion-item  >  \n\n                                   <div class="texc">\n\n                                      <h2   class="balance">{{account.balance | number}} ENS</h2>\n\n                                      <p class="colo  baltxt1"></p>\n\n                                   </div>\n\n                                        \n\n                                        <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        <ion-card class="card_tran">\n\n                                <ion-item >\n\n                                    <div class="texc">\n\n                                        <h2 class="balance qr_textitem">N.A</h2>\n\n                                        </div>\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        \n\n                \n\n                    </ion-list>\n\n                    <ion-list *ngIf="selectedCur == \'tokenOne\'">\n\n                        <ion-card class="card_tran">\n\n                                <ion-item  >  \n\n                                   <div class="texc">\n\n                                      <h2   class="balance">{{account.balance | number: \'.3\'}} {{account.tokenOneSym}}</h2>\n\n                                      <p class="colo  baltxt1">1 {{account.tokenOneSym}} = {{ 1 / todayPrice.INR | number: \'.3\'}} USD</p>\n\n                                   </div>\n\n                                        \n\n                                        <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        <ion-card class="card_tran">\n\n                                <ion-item >\n\n                                    <div class="texc">\n\n                                        <h2 class="balance qr_textitem">{{ account.balance / todayPrice.INR | number: \'.3\' }} USD</h2>\n\n                                        </div>\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        \n\n                \n\n                    </ion-list>\n\n                    <ion-list *ngIf="selectedCur == \'tokenTwo\'">\n\n                        <ion-card class="card_tran">\n\n                                <ion-item  >  \n\n                                   <div class="texc">\n\n                                      <h2   class="balance">{{account.balance | number:\'.3\'}} {{account.tokenTwoSym}}</h2>\n\n                                      <p class="colo  baltxt1">1 {{account.tokenTwoSym}} = {{ 1 / todayPrice.THB | number: \'.3\'}} USD</p>\n\n                                   </div>\n\n                                        \n\n                                        <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        <ion-card class="card_tran">\n\n                                <ion-item >\n\n                                    <div class="texc">\n\n                                        <h2 class="balance qr_textitem">{{ account.balance / todayPrice.THB | number: \'.3\' }} USD</h2>\n\n                                        </div>\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        \n\n                \n\n                    </ion-list>\n\n                    <ion-list *ngIf="selectedCur == \'tokenThree\'">\n\n                        <ion-card class="card_tran">\n\n                                <ion-item  >  \n\n                                   <div class="texc">\n\n                                      <h2   class="balance">{{account.balance | number: \'.3\'}} {{account.tokenThreeSym}}</h2>\n\n                                      <p class="colo  baltxt1">1 {{account.tokenThreeSym}} = {{ 1 / todayPrice.KRW | number: \'.3\'}} USD</p>\n\n                                   </div>\n\n                                        \n\n                                        <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        <ion-card class="card_tran">\n\n                                <ion-item >\n\n                                    <div class="texc">\n\n                                        <h2 class="balance qr_textitem">{{ account.balance / todayPrice.KRW | number: \'.3\' }} USD</h2>\n\n                                        </div>\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        \n\n                \n\n                    </ion-list>\n\n                    <ion-list *ngIf="selectedCur == \'tokenFour\'">\n\n                            <ion-card class="card_tran">\n\n                                    <ion-item  >  \n\n                                       <div class="texc">\n\n                                          <h2   class="balance">{{account.balance | number: \'.3\'}} {{account.tokenFourSym}}</h2>\n\n                                          <p class="colo  baltxt1">1 {{account.tokenFourSym}} = {{ 1 / todayPrice.USD | number: \'.3\'}} USD</p>\n\n                                       </div>\n\n                                            \n\n                                            <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                                        </ion-item>\n\n                            </ion-card>\n\n                            <ion-card class="card_tran">\n\n                                    <ion-item >\n\n                                        <div class="texc">\n\n                                            <h2 class="balance qr_textitem">{{ account.balance / todayPrice.USD | number: \'.3\' }} USD</h2>\n\n                                            </div>\n\n                                        </ion-item>\n\n                            </ion-card>\n\n                            \n\n                    \n\n                        </ion-list>\n\n        </div>\n\n\n\n  </ion-content>\n\n  \n\n\n\n  '/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\wallet\wallet.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopupPage = (function () {
    function TopupPage(navCtrl, navParams, webservice, iab, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webservice = webservice;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.selectedAccount = {
            address: '-',
            balance: 0
        };
        this.todayPrice = {
            "BTT": 1,
            "ETH": 1
        };
        this.ethTransaction = [];
        this.selectedCur = this.webservice.getSelectedcoin();
        this.getBalance();
        this.gettodayPrice();
    }
    TopupPage.prototype.doRefresh = function (e) {
        this.getBalance();
        this.gettodayPrice();
        setTimeout(function () {
            e.complete();
        }, 2000);
    };
    TopupPage.prototype.OpenUrl = function (url) {
        var browser = this.iab.create(url);
        browser.show();
    };
    TopupPage.prototype.getBalance = function () {
        var _this = this;
        var self = this;
        var servicecall;
        switch (self.selectedCur) {
            case 'evenscoin':
                servicecall = self.webservice.evensBalance();
                break;
            case 'tokenOne':
                servicecall = self.webservice.getTokenOneBalance();
                break;
            case 'tokenTwo':
                servicecall = self.webservice.getTokenTwoBalance();
                break;
            case 'tokenThree':
                servicecall = self.webservice.getTokenThreeBalance();
                break;
            case 'tokenFour':
                servicecall = self.webservice.getTokenFourBalance();
                break;
            default:
                servicecall = self.webservice.getBalance();
        }
        servicecall
            .subscribe(function (res) {
            self.selectedAccount = res;
            _this.getEtheriumTransaction(res.address);
        }, function (err) {
            var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
            toast.present();
        });
    };
    TopupPage.prototype.ionViewWillEnter = function () {
        this.getBalance();
    };
    TopupPage.prototype.getEtheriumTransaction = function (address) {
        var _this = this;
        var respromise;
        if (this.selectedCur == 'Etheriun') {
            respromise = this.webservice.getEthTransaction(address);
        }
        else if (this.selectedCur == 'evenscoin') {
            respromise = this.webservice.getTokenTransaction(address);
        }
        else {
            respromise = this.webservice.getTokenTxList(this.selectedAccount.tokenAddress, this.selectedAccount.address);
        }
        //  if(this.selectedCur == 'Etheriun' || this.selectedCur == 'evenscoin' ){
        respromise.then(function (res) {
            _this.ethTransaction = res;
        });
        //  }
    };
    TopupPage.prototype.gettodayPrice = function () {
        var self = this;
        self.webservice.getTodayPrice()
            .subscribe(function (res) {
            self.todayPrice = res;
        }, function (err) {
            var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
            toast.present();
        });
    };
    TopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topup',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\topup\topup.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title >\n\n      Evens\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n\n      refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <div>\n\n    <div *ngIf="selectedCur == \'Etheriun\'">\n\n      <div class="tophead">\n\n        <div padding>\n\n          <div class="centex">\n\n            <img class="tra_img" src="assets/imgs/eth-100.png">\n\n          </div>\n\n          <div class="centex">\n\n            <h1>Etherium</h1>\n\n          </div>\n\n          <div class="top">\n\n            <div class="wal-amount row" text-center>\n\n              <div class="col"><span class="strong">BALANCE <br></span> <span class="bal"><strong>{{selectedAccount.balance\n\n                    | number:\'.3\' }} ETH</strong></span></div>\n\n              <div class="v-div"></div>\n\n              <div class="col"><span class="strong">PRICE <br></span><span class="bal"> <strong>{{1 / todayPrice.ETH |\n\n                    number:\'.3\'}} USD</strong></span></div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n\n\n      </div>\n\n      <div class="topfoot">\n\n        <div class="recent">\n\n          <h4 text-center>Recent Activity</h4>\n\n          <ng-container>\n\n            <ion-card class="tran_card">\n\n\n\n              <!-- <div class="row header trans_date txn-data">\n\n                          <div class="col"><span style="color:#2f2f2f">DATE</span></div>\n\n                          <div class="col" text-right><span style="color:#ed2c53">AMOUNT</span></div>\n\n                          <div class="col" text-left><span style="color:#2f2f2f">STATUS</span></div>\n\n                        </div> -->\n\n              <div *ngIf="!ethTransaction.length" class="  row header trans_am txn-data " style="color: black"> No\n\n                Recent Activity Available. </div>\n\n              <div class="pad row header trans_am txn-data" *ngFor="let trans of ethTransaction" (click)="OpenUrl(trans.link)"\n\n                style="padding-top:1px;">\n\n                <div>\n\n                  <span class="date">{{trans.date}}</span>\n\n                  <span class="txs"> <strong [style.color]="trans.mode == \'Sent\'? \'#2962FF\':\'#ed2c53\'"><span *ngIf="trans.mode == \'Sent\'">-</span>\n\n                      <span *ngIf="trans.mode == \'Received\'">+</span>{{trans.amount | number:\'.3\'}}</strong></span>\n\n                </div>\n\n                <div>\n\n                  <span class="pos"><strong>{{trans.mode}}</strong></span>\n\n                </div>\n\n\n\n              </div>\n\n\n\n            </ion-card>\n\n\n\n          </ng-container>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <!-- <ion-list>\n\n                  <ion-card *ngFor="let trans of ethTransaction"  class="card_trans">\n\n                  <ion-item (click)="OpenUrl(trans.link)"> \n\n                      <p class="fontWhite">{{trans.amount | number}}</p>\n\n                      <p class="fontWhite">{{trans.date}}</p>\n\n                      <p class="fontWhite"> {{trans.mode}}</p>\n\n                      <p class="fontWhite">{{trans.status}}</p>\n\n                      <p class="fontWhite">{{trans.receipt}}</p>\n\n                     </ion-item>\n\n                     </ion-card>\n\n              </ion-list> -->\n\n\n\n\n\n    <div *ngIf="selectedCur == \'evenscoin\'">\n\n      <div class="tophead">\n\n        <div padding>\n\n          <div class="centex">\n\n            <img class="tra_img" src="assets/imgs/evens-100.png">\n\n          </div>\n\n          <div class="centex">\n\n            <h1> Evens </h1>\n\n          </div>\n\n          <div class="top">\n\n            <div class="wal-amount row" text-center>\n\n              <div class="col"><span class="strong">BALANCE<br></span> <span class="bal"><strong>{{selectedAccount.balance\n\n                    | number:\'.3\' }} ENS</strong></span></div>\n\n              <div class="v-div"></div>\n\n              <div class="col"><span class="strong">PRICE<br></span><span class="bal"><strong> N.A</strong></span> </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n\n\n      </div>\n\n      <div class="topfoot">\n\n        <div class="recent">\n\n          <h4 text-center>Recent Activity</h4>\n\n          <ng-container>\n\n            <ion-card class="tran_card">\n\n\n\n              <!-- <div class="row header trans_date txn-data">\n\n                                                <div class="col"><span class="strong">Date</span></div>\n\n                                                <div class="col" text-right><span class="strong">Amount</span></div>\n\n                                                <div class="col" text-left><span class="strong">Type</span></div>\n\n                                            </div> -->\n\n              <div *ngIf="!ethTransaction.length" class="  row header trans_am txn-data " style="color: black"> No\n\n                Recent Activity Available. </div>\n\n              <div class="pad row header trans_am txn-data" *ngFor="let trans of ethTransaction" (click)="OpenUrl(trans.link)"\n\n                style="padding-top:1px;">\n\n                <div>\n\n                  <span class="date">{{trans.date}}</span>\n\n                  <span class="txs"> <strong [style.color]="trans.mode == \'Sent\'? \'#2962FF\':\'#ed2c53\'"><span *ngIf="trans.mode == \'Sent\'">-</span>\n\n                      <span *ngIf="trans.mode == \'Received\'">+</span>{{trans.amount | number:\'.3\'}}</strong></span>\n\n                </div>\n\n                <div>\n\n                  <span class="pos"><strong>{{trans.mode}}</strong></span>\n\n                </div>\n\n\n\n              </div>\n\n\n\n            </ion-card>\n\n\n\n          </ng-container>\n\n        </div>\n\n      </div>\n\n\n\n\n\n    </div>\n\n    <div *ngIf="selectedCur == \'tokenOne\'">\n\n      <div class="tophead">\n\n        <div padding>\n\n          <div class="centex">\n\n            <img class="tra_img" src="assets/imgs/tk1-100.png">\n\n          </div>\n\n          <div class="centex">\n\n            <h1>{{selectedAccount.tokenOneSym}}</h1>\n\n          </div>\n\n          <div class="top">\n\n            <div class="wal-amount row" text-center>\n\n              <div class="col"><span class="strong">BALANCE<br></span> <span class="bal"><strong>{{selectedAccount.balance\n\n                    | number:\'.3\' }} {{selectedAccount.tokenOneSym}}</strong></span></div>\n\n              <div class="v-div"></div>\n\n              <div class="col"><span class="strong">PRICE<br></span><span class="bal"><strong>{{1 / todayPrice.INR |\n\n                    number:\'.3\'}} USD</strong></span> </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class="topfoot">\n\n        <div class="recent">\n\n          <h4 text-center>Recent Activity</h4>\n\n          <ng-container>\n\n            <ion-card class="tran_card">\n\n\n\n              <!-- <div class="row header trans_date txn-data">\n\n                                                    <div class="col"><span class="strong">Date</span></div>\n\n                                                    <div class="col" text-right><span class="strong">Amount</span></div>\n\n                                                    <div class="col" text-left><span class="strong">Type</span></div>\n\n                                                </div> -->\n\n              <div *ngIf="!ethTransaction.length" class="  row header trans_am txn-data " style="color: black"> No\n\n                Recent Activity Available. </div>\n\n              <div class="pad row header trans_am txn-data" *ngFor="let trans of ethTransaction" (click)="OpenUrl(trans.link)">\n\n                <div>\n\n                  <span class="date">{{trans.date}}</span>\n\n                  <span class="txs"> <strong [style.color]="trans.mode == \'Sent\'? \'#2962FF\':\'#ed2c53\'"><span *ngIf="trans.mode == \'Sent\'">-</span>\n\n                      <span *ngIf="trans.mode == \'Received\'">+</span>{{trans.amount | number:\'.3\'}}</strong></span>\n\n                </div>\n\n\n\n                <div>\n\n                  <span class="pos"><strong>{{trans.mode}}</strong></span>\n\n                </div>\n\n              </div>\n\n            </ion-card>\n\n\n\n          </ng-container>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n    <div *ngIf="selectedCur == \'tokenTwo\'">\n\n      <div class="tophead">\n\n        <div padding>\n\n          <div class="centex">\n\n            <img class="tra_img" src="assets/imgs/tk2-100.png">\n\n          </div>\n\n          <div class="centex">\n\n            <h1>{{selectedAccount.tokenTwoSym}}</h1>\n\n          </div>\n\n          <div class="top">\n\n            <div class="wal-amount row" text-center>\n\n              <div class="col"><span class="strong">BALANCE<br></span> <span class="bal"><strong>{{selectedAccount.balance\n\n                    | number:\'.3\' }} {{selectedAccount.tokenTwoSym}}</strong></span></div>\n\n              <div class="v-div"></div>\n\n              <div class="col"><span class="strong">PRICE<br></span> <span class="bal"><strong>{{1 / todayPrice.THB|\n\n                    number:\'.3\'}} USD</strong></span></div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class="topfoot">\n\n\n\n        <div class="recent">\n\n          <h4 text-center>Recent Activity</h4>\n\n          <ng-container>\n\n            <ion-card class="tran_card">\n\n\n\n              <!-- <div class="row header trans_date txn-data">\n\n                            <div class="col"><span class="strong">Date</span></div>\n\n                            <div class="col" text-right><span class="strong">Amount</span></div>\n\n                            <div class="col" text-left><span class="strong">Type</span></div>\n\n                        </div> -->\n\n              <div *ngIf="!ethTransaction.length" class="  row header trans_am txn-data " style="color: black"> No\n\n                Recent Activity Available. </div>\n\n              <div class=" pad row header trans_am txn-data" *ngFor="let trans of ethTransaction" (click)="OpenUrl(trans.link)">\n\n                <div>\n\n                  <span class="date">{{trans.date}}</span>\n\n                  <span class="txs"> <strong [style.color]="trans.mode == \'Sent\'? \'#2962FF\':\'#ed2c53\'"><span *ngIf="trans.mode == \'Sent\'">-</span>\n\n                      <span *ngIf="trans.mode == \'Received\'">+</span>{{trans.amount | number:\'.3\'}}</strong></span>\n\n                </div>\n\n                <div>\n\n                  <span class="pos"><strong>{{trans.mode}}</strong></span>\n\n                </div>\n\n              </div>\n\n\n\n            </ion-card>\n\n\n\n          </ng-container>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n    <div *ngIf="selectedCur == \'tokenThree\'">\n\n      <div class="tophead">\n\n        <div padding>\n\n          <div class="centex">\n\n            <img class="tra_img" src="assets/imgs/tk3-100.png">\n\n          </div>\n\n          <div class="centex">\n\n            <h1>{{selectedAccount.tokenThreeSym}}</h1>\n\n          </div>\n\n          <div class="top">\n\n            <div class="wal-amount row" text-center>\n\n              <div class="col"><span class="strong">BALANCE<br></span> <span class="bal"><strong>{{selectedAccount.balance\n\n                    | number: \'.3\' }} {{selectedAccount.tokenThreeSym}}</strong></span></div>\n\n              <div class="v-div"></div>\n\n              <div class="col"><span class="strong">PRICE<br></span><span class="bal"><strong>{{1 / todayPrice.KRW|\n\n                    number: \'.3\'}} USD</strong></span> </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <div class="topfoot">\n\n        <div class="recent">\n\n          <h4 text-center>Recent Activity</h4>\n\n          <ng-container>\n\n            <ion-card class="tran_card">\n\n\n\n              <!-- <div class="pad row header trans_date txn-data">\n\n                                                    <div class="col"><span class="date">Date</span></div>\n\n                                                    <div class="col" text-right><span class="strong">Amount</span></div>\n\n                                                    <div class="col" text-left><span class="strong">Type</span></div>\n\n                                                </div> -->\n\n              <div *ngIf="!ethTransaction.length" class="  row header trans_am txn-data " style="color: black"> No\n\n                Recent Activity Available. </div>\n\n              <div class=" pad row header trans_am txn-data" *ngFor="let trans of ethTransaction" (click)="OpenUrl(trans.link)">\n\n                <div>\n\n                  <span class="date">{{trans.date}}</span>\n\n                  <span class="txs"> <strong [style.color]="trans.mode == \'Sent\'? \'#2962FF\':\'#ed2c53\'"><span *ngIf="trans.mode == \'Sent\'">-</span>\n\n                      <span *ngIf="trans.mode == \'Received\'">+</span>{{trans.amount | number:\'.3\'}}</strong></span>\n\n                </div>\n\n                <div>\n\n                  <span class="pos"><strong>{{trans.mode}}</strong></span>\n\n                </div>\n\n              </div>\n\n\n\n            </ion-card>\n\n\n\n          </ng-container>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n    <div *ngIf="selectedCur == \'tokenFour\'">\n\n        <div class="tophead">\n\n          <div padding>\n\n            <div class="centex">\n\n              <img class="tra_img" src="assets/imgs/tk4-100.png">\n\n            </div>\n\n            <div class="centex">\n\n              <h1>{{selectedAccount.tokenFourSym}}</h1>\n\n            </div>\n\n            <div class="top">\n\n              <div class="wal-amount row" text-center>\n\n                <div class="col"><span class="strong">BALANCE<br></span> <span class="bal"><strong>{{selectedAccount.balance\n\n                      | number: \'.3\' }} {{selectedAccount.tokenFourSym}}</strong></span></div>\n\n                <div class="v-div"></div>\n\n                <div class="col"><span class="strong">PRICE<br></span><span class="bal"><strong>{{1 / todayPrice.USD|\n\n                      number: \'.3\'}} USD</strong></span> </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n\n  \n\n        <div class="topfoot">\n\n          <div class="recent">\n\n            <h4 text-center>Recent Activity</h4>\n\n            <ng-container>\n\n              <ion-card class="tran_card">\n\n  \n\n                <!-- <div class="pad row header trans_date txn-data">\n\n                                                      <div class="col"><span class="date">Date</span></div>\n\n                                                      <div class="col" text-right><span class="strong">Amount</span></div>\n\n                                                      <div class="col" text-left><span class="strong">Type</span></div>\n\n                                                  </div> -->\n\n                <div *ngIf="!ethTransaction.length" class="  row header trans_am txn-data " style="color: black"> No\n\n                  Recent Activity Available. </div>\n\n                <div class=" pad row header trans_am txn-data" *ngFor="let trans of ethTransaction" (click)="OpenUrl(trans.link)">\n\n                  <div>\n\n                    <span class="date">{{trans.date}}</span>\n\n                    <span class="txs"> <strong [style.color]="trans.mode == \'Sent\'? \'#2962FF\':\'#ed2c53\'"><span *ngIf="trans.mode == \'Sent\'">-</span>\n\n                        <span *ngIf="trans.mode == \'Received\'">+</span>{{trans.amount | number:\'.3\'}}</strong></span>\n\n                  </div>\n\n                  <div>\n\n                    <span class="pos"><strong>{{trans.mode}}</strong></span>\n\n                  </div>\n\n                </div>\n\n  \n\n              </ion-card>\n\n  \n\n            </ng-container>\n\n          </div>\n\n        </div>\n\n  \n\n      </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\topup\topup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], TopupPage);
    return TopupPage;
}());

//# sourceMappingURL=topup.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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





var HomePage = (function () {
    function HomePage(navCtrl, webserve, barcodeScanner, toastCtrl, nfc, ndef) {
        this.navCtrl = navCtrl;
        this.webserve = webserve;
        this.barcodeScanner = barcodeScanner;
        this.toastCtrl = toastCtrl;
        this.nfc = nfc;
        this.ndef = ndef;
        this.transfer = {
            gasprice: 40
        };
        this.mimeType = "game/rockpaperscissors";
        this.account = {
            address: '-',
            balance: 0,
            tokenOneSym: '',
            tokenTwoSym: '',
            tokenThreeSym: ''
        };
        this.enableNfc = false;
        this.checkNfc();
        this.getSelecetedCoin();
    }
    HomePage.prototype.doRefresh = function (e) {
        this.getSelecetedCoin();
        setTimeout(function () {
            e.complete();
        }, 2000);
    };
    HomePage.prototype.checkNfc = function () {
        var _this = this;
        this.nfc.enabled()
            .then(function (res) {
            _this.enableNfc = true;
        }, function (err) {
            _this.enableNfc = false;
        });
    };
    HomePage.prototype.setFocus = function () {
        this.myInput.setFocus();
    };
    HomePage.prototype.getSelecetedCoin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.webserve.getSelectedcoinpromise()];
                    case 1:
                        _a.selectedCur = _b.sent();
                        this.getBalance();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getBalance = function () {
        var self = this;
        var servicecall;
        switch (self.selectedCur) {
            case 'evenscoin':
                servicecall = self.webserve.evensBalance();
                break;
            case 'tokenOne':
                servicecall = self.webserve.getTokenOneBalance();
                break;
            case 'tokenTwo':
                servicecall = self.webserve.getTokenTwoBalance();
                break;
            case 'tokenThree':
                servicecall = self.webserve.getTokenThreeBalance();
                break;
            case 'tokenFour':
                servicecall = self.webserve.getTokenFourBalance();
                break;
            default:
                servicecall = self.webserve.getBalance();
        }
        servicecall
            .subscribe(function (res) {
            self.account = res;
        }, function (err) {
            var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
            toast.present();
        });
    };
    HomePage.prototype.addListenNFC = function () {
        var _this = this;
        this.nfcsubscribe = this.nfc.addMimeTypeListener(this.mimeType, this.onNfc, this.onnfcfailed)
            .subscribe(function (event) {
            if (event) {
                if (event && event.tag) {
                    var msg = _this.nfc.bytesToString(event.tag.ndefMessage[0].payload);
                    if (msg) {
                        _this.checkAddress(msg, true);
                        _this.setFocus();
                    }
                    else {
                        _this.createtoast("can't find valid address");
                    }
                }
                else {
                    _this.createtoast('Cannot find the nfc');
                }
            }
        });
    };
    HomePage.prototype.onnfcfailed = function () {
        this.createtoast('nfc failed.Try again ');
    };
    HomePage.prototype.onNfc = function (nfcEvent) {
        console.log('Listener added');
    };
    HomePage.prototype.createtoast = function (message, duration) {
        if (duration === void 0) { duration = 2000; }
        var self = this;
        var toast = self.toastCtrl.create({ message: message, duration: duration });
        toast.present();
    };
    HomePage.prototype.transferAmount = function (f) {
        var self = this;
        var data = {
            transferTo: f.value.address,
            amount: f.value.amount,
            gasprice: this.transfer.gasprice
        };
        var tranApi;
        switch (self.selectedCur) {
            case 'evenscoin':
                tranApi = self.webserve.TransferEns(data);
                break;
            case 'tokenOne':
                tranApi = self.webserve.TransferTokenOne(data);
                break;
            case 'tokenTwo':
                tranApi = self.webserve.TransferTokenTwo(data);
                break;
            case 'tokenThree':
                tranApi = self.webserve.TransferTokenThree(data);
                break;
            case 'tokenFour':
                tranApi = self.webserve.TransferTokenFour(data);
                break;
            default:
                tranApi = self.webserve.Transfer(data);
        }
        tranApi
            .subscribe(function (res) {
            console.log("response", res);
            if (res.recepit) {
                var toast = self.toastCtrl.create({ message: 'Transaction Completed Successfully', duration: 2000 });
                toast.present();
                self.getBalance();
            }
            else {
                var toast = self.toastCtrl.create({ message: 'Transaction Failed', duration: 2000 });
                toast.present();
            }
        }, function (err) {
            var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
            toast.present();
        });
    };
    HomePage.prototype.scanQr = function () {
        var self = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            self.checkAddress(barcodeData.text);
        }).catch(function (err) {
            var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
            toast.present();
        });
    };
    HomePage.prototype.checkbalance = function (amount) {
        var self = this;
        if (amount) {
            if (!(amount <= self.account.balance)) {
                self.transfer.amount = '';
                var toast = self.toastCtrl.create({ message: 'Amount should not be greater than balance', duration: 10000 });
                toast.present();
            }
        }
    };
    HomePage.prototype.checkAddress = function (addr, from) {
        var _this = this;
        if (from === void 0) { from = false; }
        var self = this;
        if (!addr) {
            // let toast = self.toastCtrl.create({ message: 'Invalid Address, Please enter a valid address.', duration: 10000  });
            // toast.present()
            return;
        }
        self.webserve.checkAddress(addr).subscribe(function (res) {
            if (res.status) {
                _this.transfer.address = addr;
                if (from) {
                    _this.createtoast('Address Detected');
                }
                console.log(addr);
            }
            else {
                self.transfer.address = "";
                var toast = self.toastCtrl.create({ message: 'Invalid Address', duration: 2000 });
                toast.present();
            }
        }, function (err) {
            self.transfer.address = "";
            var toast = self.toastCtrl.create({ message: 'Invalid Address', duration: 2000 });
            toast.present();
        });
    };
    HomePage.prototype.ngOnDestroy = function () {
        if (this.nfcsubscribe) {
            this.nfcsubscribe.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('focusInput'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "myInput", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\home\home.html"*/'<ion-header class="ion-header">\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Evens</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles"\n\n          refreshingText="Refreshing...">\n\n        </ion-refresher-content>\n\n      </ion-refresher>\n\n  <div padding>\n\n    <div>\n\n      <img *ngIf="selectedCur == \'Etheriun\'" class="static_icon" src="assets/imgs/ethw-40.png">\n\n      <img *ngIf="selectedCur == \'evenscoin\'" class="static_icon" src="assets/imgs/evensw-40.png">\n\n      <img *ngIf="selectedCur == \'tokenOne\'" class="static_icon" src="assets/imgs/tk1w-40.png">\n\n      <img *ngIf="selectedCur == \'tokenThree\'" class="static_icon" src="assets/imgs/tk3w-40.png">\n\n      <img *ngIf="selectedCur == \'tokenTwo\'" class="static_icon" src="assets/imgs/tk2w-40.png">\n\n      <img *ngIf="selectedCur == \'tokenFour\'" class="static_icon" src="assets/imgs/tk4w-40.png">\n\n    </div>\n\n    <p class="sendtitle">SEND</p>\n\n    <div>\n\n      <form #form="ngForm" (ngSubmit)="transferAmount(form)" novalidate>\n\n        <ion-item>\n\n          <ion-label floating>AMOUNT</ion-label>\n\n          <ion-input type="number" (blur)="checkbalance(transfer.amount);" required name="amount" [(ngModel)]="transfer.amount" ngControl="amount"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>TRANSFER TO</ion-label>\n\n          <ion-input #focusInput type="text" (blur)="checkAddress(transfer.address);" name="address" required [(ngModel)]="transfer.address" ngControl="address"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="selectedCur == \'evenscoin\' || selectedCur == \'Etheriun\'" no-lines>\n\n            <ion-label >GAS PRICE - {{transfer.gasprice}} (Gwei)</ion-label>\n\n            <ion-range min="20" max="80" step="2" name="gasprice" [(ngModel)]="transfer.gasprice">\n\n              <p class="clrwhit"  range-left > Slow</p>\n\n              <p class="clrwhit"  range-right > Fast</p>\n\n            </ion-range>\n\n          </ion-item>\n\n        <button ion-button round type="button" (click)="scanQr()"> Scan QR </button>\n\n        <button *ngIf="enableNfc" ion-button round type="button" (click)="addListenNFC()"> Read NFC </button>\n\n        <button ion-button [disabled]="form.invalid" type="submit" block round>Transfer</button>\n\n      </form>\n\n    </div>\n\n    <div style="margin-top: 10%;">\n\n      <p>\n\n        <span>ADDRESS</span>\n\n        <br>\n\n        <span class="ow_address">\n\n          {{account.address}}\n\n        </span>\n\n      </p>\n\n      <p>\n\n        <span>BALANCE</span>\n\n        <br>\n\n        <span>\n\n          {{account.balance | number:\'.3\'}}\n\n          <span *ngIf="selectedCur == \'Etheriun\'">\n\n            ETH\n\n          </span>\n\n          <span *ngIf="selectedCur == \'evenscoin\'">\n\n            ENS\n\n          </span>\n\n          <span *ngIf="selectedCur == \'tokenOne\'">\n\n            {{account.tokenOneSym}}\n\n          </span>\n\n          <span *ngIf="selectedCur == \'tokenTwo\'">\n\n            {{account.tokenTwoSym}}\n\n          </span>\n\n          <span *ngIf="selectedCur == \'tokenThree\'">\n\n            {{account.tokenThreeSym}}\n\n          </span>\n\n          <span *ngIf="selectedCur == \'tokenFour\'">\n\n              {{account.tokenThreeSym}}\n\n            </span>\n\n        </span>\n\n      </p>\n\n    </div>\n\n    <div>\n\n\n\n    </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["a" /* NFC */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["a" /* NFC */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["b" /* Ndef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_nfc__["b" /* Ndef */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ModalController } from 'ionic-angular';
// import { myCouponPage } from '../my-coupon/my-coupon';
var CouponsPage = (function () {
    function CouponsPage(navCtrl, webservice, toastCtrl) {
        this.navCtrl = navCtrl;
        this.webservice = webservice;
        this.toastCtrl = toastCtrl;
        this.selectedAccount = {
            address: '-',
            balance: 0
        };
        this.selectedCur = this.webservice.getSelectedcoin();
        // this.getBalance()
    }
    CouponsPage.prototype.getBalance = function () {
        var self = this;
        var servicecall;
        switch (self.selectedCur) {
            case 'tokenOne':
                servicecall = self.webservice.getTokenOneBalance();
                break;
            case 'tokenTwo':
                servicecall = self.webservice.getTokenTwoBalance();
                break;
            case 'tokenThree':
                servicecall = self.webservice.getTokenThreeBalance();
                break;
        }
        servicecall
            .then(function (res) {
            self.selectedAccount = res;
        }, function (err) {
            var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
            toast.present();
        });
    };
    CouponsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\coupons\coupons.html"*/'<ion-header>\n\n    <ion-navbar color=\'primary\'>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Evens\n\n        </ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n      <!-- <div *ngIf="selectedCur == \'tokenOne\'">\n\n          <div class="centex">\n\n              <img class="tra_img" src="assets/imgs/icons8-rupee-100.png">\n\n          </div>\n\n          <div  class="centex">\n\n            <h1>{{selectedAccount.tokenOneSym}}</h1>\n\n          </div>\n\n       </div>\n\n\n\n       <div *ngIf="selectedCur == \'tokenTwo\'">\n\n          <div class="centex">\n\n              <img class="tra_img" src="assets/imgs/icons8-bitcoin-100.png">\n\n          </div>\n\n          <div  class="centex">\n\n            <h1>{{selectedAccount.tokenTwoSym}}</h1>\n\n          </div>\n\n       </div>\n\n\n\n       <div *ngIf="selectedCur == \'tokenThree\'">\n\n          <div class="centex">\n\n              <img class="tra_img" src="assets/imgs/icons8-won-100.png">\n\n          </div>\n\n          <div  class="centex">\n\n            <h1>{{selectedAccount.tokenThreeSym}}</h1>\n\n          </div>\n\n       </div>\n\n\n\n       <form #form="ngForm" novalidate>\n\n          <ion-item>\n\n            <ion-label floating>Amount</ion-label>\n\n            <ion-input type="number" required name="amount" [(ngModel)]="amount" ></ion-input>\n\n          </ion-item>\n\n          <button ion-button full>140  Pay With ETH </button>\n\n          <button ion-button full> Pay With ENS </button>\n\n          </form> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\coupons\coupons.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], CouponsPage);
    return CouponsPage;
}());

//# sourceMappingURL=coupons.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCataloguePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyCataloguePage = (function () {
    function MyCataloguePage(navCtrl, webService, toastCtrl, clipboard) {
        this.navCtrl = navCtrl;
        this.webService = webService;
        this.toastCtrl = toastCtrl;
        this.clipboard = clipboard;
        this.user = {};
        this.getUSerInfo();
    }
    MyCataloguePage.prototype.getUSerInfo = function () {
        var self = this;
        self.webService.getUserInfo()
            .subscribe(function (res) {
            if (res.status == 200) {
                console.log("user", res);
                self.user = res.data;
            }
            else {
                var toast = self.toastCtrl.create({ message: res.message, duration: 2000 });
                toast.present();
            }
        }, function (err) {
            if ('error' in err) {
                if (err.error.status) {
                    var toast = self.toastCtrl.create({ message: err.error.message, duration: 2000 });
                    toast.present();
                }
            }
            else {
                var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
                toast.present();
            }
        });
    };
    MyCataloguePage.prototype.copyAddress = function () {
        var self = this;
        this.clipboard.copy(self.user.address)
            .then(function (res) {
            var toast = self.toastCtrl.create({ message: 'Address Copied.', duration: 2000 });
            toast.present();
        });
    };
    MyCataloguePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-catalogue',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\my-catalogue\my-catalogue.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Profile</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n    <div padding>\n\n      <div>\n\n          <ion-thumbnail  class="avabor_profile" item-start>\n\n              <img class="user-img" src="assets/imgs/ico_bg_menu_circle.png">\n\n              </ion-thumbnail>\n\n              <h2 text-center>{{ user.firstName}} {{user.lastName}}</h2>\n\n              <p text-center> {{user.country}}</p>\n\n      </div>\n\n        <ion-list class="profile-list">\n\n          <!-- <ion-item class="profile-item">\n\n            <h4>DOB :</h4>\n\n            <p>{{user.dob | date:\'mediumDate\'}}</p>\n\n          </ion-item> -->\n\n          <ion-item class="profile-item">\n\n            <h4>Email :</h4>\n\n            <p>{{user.email}}</p>\n\n          </ion-item>\n\n          <!-- <ion-item class="profile-item">\n\n            <h4>Phone :</h4>\n\n            <p>{{user.phoneNumber}}</p>\n\n          </ion-item> -->\n\n          <ion-item class="profile-item">\n\n            <h4>Address :</h4>\n\n            <p>{{user.address}}</p>\n\n          </ion-item>\n\n        </ion-list>\n\n        <button ion-button (click)="copyAddress()">Copy Address To Clipboard</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\my-catalogue\my-catalogue.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */]])
    ], MyCataloguePage);
    return MyCataloguePage;
}());

//# sourceMappingURL=my-catalogue.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(373);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_qrcode2__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_clipboard__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_webservic_interceptor__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__amcharts_amcharts3_angular__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_wallet_wallet__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_topup_topup__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_create_account_create_account__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_add_card_add_card__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_my_rewards_my_rewards__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_my_catalogue_my_catalogue__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_quick_pay_quick_pay__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_coupons_coupons__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_create_account_EqualValidator__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_webservic_webservic__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_nfc__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_topup_topup__["a" /* TopupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_coupons_coupons__["a" /* CouponsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_create_account_create_account__["a" /* CreateAccountPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_add_card_add_card__["a" /* AddCardPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_my_rewards_my_rewards__["a" /* MyRewardsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_my_catalogue_my_catalogue__["a" /* MyCataloguePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_quick_pay_quick_pay__["a" /* QuickPayPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_create_account_EqualValidator__["a" /* EqualValidator */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_10__providers_webservic_interceptor__["a" /* InterceptorModule */],
                __WEBPACK_IMPORTED_MODULE_12__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_topup_topup__["a" /* TopupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_create_account_create_account__["a" /* CreateAccountPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_add_card_add_card__["a" /* AddCardPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_coupons_coupons__["a" /* CouponsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_my_rewards_my_rewards__["a" /* MyRewardsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_my_catalogue_my_catalogue__["a" /* MyCataloguePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_quick_pay_quick_pay__["a" /* QuickPayPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_webservic_webservic__["a" /* WebservicProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_nfc__["a" /* NFC */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_nfc__["b" /* Ndef */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_my_rewards_my_rewards__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_webservic_webservic__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_my_catalogue_my_catalogue__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_nfc__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { AddCardPage } from '../pages/add-card/add-card';
//import { AddRewardscardPage } from '../pages/add-rewardscard/add-rewardscard';
// import { LoginPage } from '../pages/login/login';
//import { InstructionsPage } from '../pages/instructions/instructions';






var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, webservice, storage, events, toastCtrl, nfc, ndef) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.webservice = webservice;
        this.storage = storage;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.nfc = nfc;
        this.ndef = ndef;
        this.showQr = false;
        this.user = {};
        this.mimeType = "game/rockpaperscissors";
        this.initializeApp();
        this.setRootPage();
        this.events.subscribe('user:logout', function (status) {
            if (status) {
                var toast = _this.toastCtrl.create({ message: 'Access token Expired.Please login to get access token', duration: 2000 });
                toast.present();
                _this.logOut();
            }
        });
        this.events.subscribe('getUser', function (status) {
            _this.getUserInfo();
        });
        this.pages = [
            { title: 'ACCOUNT', component: __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__["a" /* NotificationsPage */], icon: 'photos.png' },
            // {title: 'ExchangeRate', component: MyRewardsPage, icon:'send'},
            { title: 'CHANGE PASSWORD', component: __WEBPACK_IMPORTED_MODULE_5__pages_my_rewards_my_rewards__["a" /* MyRewardsPage */], icon: 'lock.png' },
            // {title: 'Quick Pay', icon:'lock',  component: QuickPayPage},
            { title: 'SIGN OUT', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */], icon: 'log-out.png' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.setRootPage = function () {
        var _this = this;
        var self = this;
        self.webservice.getStoredData()
            .then(function (res) {
            if (!res) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__["a" /* NotificationsPage */];
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page.title == 'ACCOUNT') {
            this.menu.close();
            this.nav.setRoot(page.component);
        }
        else if (page.title == 'Sign Out') {
            this.logOut();
        }
        else {
            this.menu.close();
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.getUserInfo = function () {
        var _this = this;
        var self = this;
        self.webservice.getUserInfo()
            .subscribe(function (res) {
            if (res.status == 200) {
                console.log("user", res);
                _this.nfc.enabled()
                    .then(function (res) {
                    console.log("nfc enabled", res);
                    var message = _this.ndef.mimeMediaRecord(_this.mimeType, _this.user.address);
                    _this.nfc.share([message]).then(_this.onSuccess).catch(_this.onError);
                }, function (err) {
                    console.log("nfc not enabled", err);
                });
                self.user = res.data;
                self.showQr = true;
            }
            else {
                var toast = self.toastCtrl.create({ message: res.message, duration: 2000 });
                toast.present();
                self.showQr = false;
            }
        }, function (err) {
            self.showQr = false;
            if ('error' in err) {
                if (err.error.status) {
                    var toast = self.toastCtrl.create({ message: err.error.message, duration: 2000 });
                    toast.present();
                }
            }
            else {
                var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
                toast.present();
            }
        });
    };
    MyApp.prototype.onSuccess = function () {
        alert("message sent  ");
    };
    MyApp.prototype.onError = function (err) {
        alert("Error msg sharing " + JSON.stringify(err));
    };
    MyApp.prototype.goToprofile = function () {
        var self = this;
        self.menu.close();
        self.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_my_catalogue_my_catalogue__["a" /* MyCataloguePage */]);
    };
    MyApp.prototype.logOut = function () {
        this.menu.close();
        this.storage.clear();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\app\app.html"*/'<ion-menu [content]=\'content\'>\n\n\n\n    <ion-header>\n\n        <ion-toolbar class="user-bg">\n\n            <!-- <ion-title>Menu</ion-title> -->\n\n            <ion-list class="user-detail">\n\n                <ion-item no-lines  (click)="goToprofile()">\n\n                        <div *ngIf="showQr" class="qr_code">\n\n                                <!-- <div class="qr_text" ></div> -->\n\n                                <ngx-qrcode [qrc-value]="user.address"></ngx-qrcode>\n\n                                <p>{{user.address}}</p>\n\n                                \n\n                        </div>\n\n                    <!-- <ion-thumbnail  class="avabor" item-start>\n\n                    <img class="user-img" src="assets/imgs/user-defalut.png">\n\n                    </ion-thumbnail> -->\n\n                </ion-item>\n\n                <ion-item no-lines >\n\n                        <h2 text-center>{{ user.firstName}} {{user.lastName}}</h2>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content class="side_bar">\n\n        <ion-item-group class="ltpad">\n\n               <ion-item no-lines *ngFor=\'let p of pages\' class="sidemenu_item dashed_lth " >\n\n                    <!-- <ion-icon class="icon_colr" [name]="p.icon" ></ion-icon> -->\n\n                    <img item-start src="assets/imgs/{{p.icon}}">\n\n                    <button ion-item  class="menu_item lemenu"   (click)="openPage(p)">\n\n                            {{p.title}}\n\n                        </button>\n\n               </ion-item>\n\n                    <!-- <ion-item-divider color="primary">Smart Service</ion-item-divider> -->\n\n        </ion-item-group>\n\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"d:\projects\enswallet-mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_nfc__["a" /* NFC */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_nfc__["b" /* Ndef */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 213,
	"./af.js": 213,
	"./ar": 214,
	"./ar-dz": 215,
	"./ar-dz.js": 215,
	"./ar-kw": 216,
	"./ar-kw.js": 216,
	"./ar-ly": 217,
	"./ar-ly.js": 217,
	"./ar-ma": 218,
	"./ar-ma.js": 218,
	"./ar-sa": 219,
	"./ar-sa.js": 219,
	"./ar-tn": 220,
	"./ar-tn.js": 220,
	"./ar.js": 214,
	"./az": 221,
	"./az.js": 221,
	"./be": 222,
	"./be.js": 222,
	"./bg": 223,
	"./bg.js": 223,
	"./bm": 224,
	"./bm.js": 224,
	"./bn": 225,
	"./bn.js": 225,
	"./bo": 226,
	"./bo.js": 226,
	"./br": 227,
	"./br.js": 227,
	"./bs": 228,
	"./bs.js": 228,
	"./ca": 229,
	"./ca.js": 229,
	"./cs": 230,
	"./cs.js": 230,
	"./cv": 231,
	"./cv.js": 231,
	"./cy": 232,
	"./cy.js": 232,
	"./da": 233,
	"./da.js": 233,
	"./de": 234,
	"./de-at": 235,
	"./de-at.js": 235,
	"./de-ch": 236,
	"./de-ch.js": 236,
	"./de.js": 234,
	"./dv": 237,
	"./dv.js": 237,
	"./el": 238,
	"./el.js": 238,
	"./en-au": 239,
	"./en-au.js": 239,
	"./en-ca": 240,
	"./en-ca.js": 240,
	"./en-gb": 241,
	"./en-gb.js": 241,
	"./en-ie": 242,
	"./en-ie.js": 242,
	"./en-il": 243,
	"./en-il.js": 243,
	"./en-nz": 244,
	"./en-nz.js": 244,
	"./eo": 245,
	"./eo.js": 245,
	"./es": 246,
	"./es-do": 247,
	"./es-do.js": 247,
	"./es-us": 248,
	"./es-us.js": 248,
	"./es.js": 246,
	"./et": 249,
	"./et.js": 249,
	"./eu": 250,
	"./eu.js": 250,
	"./fa": 251,
	"./fa.js": 251,
	"./fi": 252,
	"./fi.js": 252,
	"./fo": 253,
	"./fo.js": 253,
	"./fr": 254,
	"./fr-ca": 255,
	"./fr-ca.js": 255,
	"./fr-ch": 256,
	"./fr-ch.js": 256,
	"./fr.js": 254,
	"./fy": 257,
	"./fy.js": 257,
	"./gd": 258,
	"./gd.js": 258,
	"./gl": 259,
	"./gl.js": 259,
	"./gom-latn": 260,
	"./gom-latn.js": 260,
	"./gu": 261,
	"./gu.js": 261,
	"./he": 262,
	"./he.js": 262,
	"./hi": 263,
	"./hi.js": 263,
	"./hr": 264,
	"./hr.js": 264,
	"./hu": 265,
	"./hu.js": 265,
	"./hy-am": 266,
	"./hy-am.js": 266,
	"./id": 267,
	"./id.js": 267,
	"./is": 268,
	"./is.js": 268,
	"./it": 269,
	"./it.js": 269,
	"./ja": 270,
	"./ja.js": 270,
	"./jv": 271,
	"./jv.js": 271,
	"./ka": 272,
	"./ka.js": 272,
	"./kk": 273,
	"./kk.js": 273,
	"./km": 274,
	"./km.js": 274,
	"./kn": 275,
	"./kn.js": 275,
	"./ko": 276,
	"./ko.js": 276,
	"./ky": 277,
	"./ky.js": 277,
	"./lb": 278,
	"./lb.js": 278,
	"./lo": 279,
	"./lo.js": 279,
	"./lt": 280,
	"./lt.js": 280,
	"./lv": 281,
	"./lv.js": 281,
	"./me": 282,
	"./me.js": 282,
	"./mi": 283,
	"./mi.js": 283,
	"./mk": 284,
	"./mk.js": 284,
	"./ml": 285,
	"./ml.js": 285,
	"./mn": 286,
	"./mn.js": 286,
	"./mr": 287,
	"./mr.js": 287,
	"./ms": 288,
	"./ms-my": 289,
	"./ms-my.js": 289,
	"./ms.js": 288,
	"./mt": 290,
	"./mt.js": 290,
	"./my": 291,
	"./my.js": 291,
	"./nb": 292,
	"./nb.js": 292,
	"./ne": 293,
	"./ne.js": 293,
	"./nl": 294,
	"./nl-be": 295,
	"./nl-be.js": 295,
	"./nl.js": 294,
	"./nn": 296,
	"./nn.js": 296,
	"./pa-in": 297,
	"./pa-in.js": 297,
	"./pl": 298,
	"./pl.js": 298,
	"./pt": 299,
	"./pt-br": 300,
	"./pt-br.js": 300,
	"./pt.js": 299,
	"./ro": 301,
	"./ro.js": 301,
	"./ru": 302,
	"./ru.js": 302,
	"./sd": 303,
	"./sd.js": 303,
	"./se": 304,
	"./se.js": 304,
	"./si": 305,
	"./si.js": 305,
	"./sk": 306,
	"./sk.js": 306,
	"./sl": 307,
	"./sl.js": 307,
	"./sq": 308,
	"./sq.js": 308,
	"./sr": 309,
	"./sr-cyrl": 310,
	"./sr-cyrl.js": 310,
	"./sr.js": 309,
	"./ss": 311,
	"./ss.js": 311,
	"./sv": 312,
	"./sv.js": 312,
	"./sw": 313,
	"./sw.js": 313,
	"./ta": 314,
	"./ta.js": 314,
	"./te": 315,
	"./te.js": 315,
	"./tet": 316,
	"./tet.js": 316,
	"./tg": 317,
	"./tg.js": 317,
	"./th": 318,
	"./th.js": 318,
	"./tl-ph": 319,
	"./tl-ph.js": 319,
	"./tlh": 320,
	"./tlh.js": 320,
	"./tr": 321,
	"./tr.js": 321,
	"./tzl": 322,
	"./tzl.js": 322,
	"./tzm": 323,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 323,
	"./ug-cn": 325,
	"./ug-cn.js": 325,
	"./uk": 326,
	"./uk.js": 326,
	"./ur": 327,
	"./ur.js": 327,
	"./uz": 328,
	"./uz-latn": 329,
	"./uz-latn.js": 329,
	"./uz.js": 328,
	"./vi": 330,
	"./vi.js": 330,
	"./x-pseudo": 331,
	"./x-pseudo.js": 331,
	"./yo": 332,
	"./yo.js": 332,
	"./zh-cn": 333,
	"./zh-cn.js": 333,
	"./zh-hk": 334,
	"./zh-hk.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 435;

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpsRequestInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HttpsRequestInterceptor = (function () {
    function HttpsRequestInterceptor(events, storage, network, toastCtrl) {
        this.events = events;
        this.storage = storage;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.tokengetter();
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (this.network.type == 'none') {
            var toast = this.toastCtrl.create({ message: 'Please Connect to the network', duration: 2000 });
            toast.present();
        }
        else {
            if (req.url.includes('/api') && !req.url.includes('/login') && !req.url.includes('/signUp') && !req.url.includes('etherscan')) {
                return this.tokengetter()
                    .mergeMap(function (result) {
                    _this.token = result;
                    if (_this.token) {
                        var dupReq = req.clone({ headers: req.headers.set('x-access-token', _this.token) });
                        return next.handle(dupReq)
                            .do(function (event) {
                            if (event instanceof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["e" /* HttpResponse */]) {
                            }
                        }, function (err) {
                            console.log("err", err);
                            if (err instanceof __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["d" /* HttpErrorResponse */]) {
                                if (err.status === 403) {
                                    _this.events.publish('user:logout', true);
                                    console.log("err", err);
                                }
                                else {
                                    var toast = _this.toastCtrl.create({ message: 'Please try after sometime', duration: 2000 });
                                    toast.present();
                                }
                            }
                        });
                    }
                    else {
                        _this.events.publish('user:logout', true);
                    }
                });
            }
            else {
                return next.handle(req);
            }
        }
    };
    HttpsRequestInterceptor.prototype.tokengetter = function () {
        var self = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromPromise(self.storage.get('token'));
    };
    HttpsRequestInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* ToastController */]])
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());

;
var InterceptorModule = (function () {
    function InterceptorModule() {
    }
    InterceptorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: HttpsRequestInterceptor, multi: true }
            ]
        })
    ], InterceptorModule);
    return InterceptorModule;
}());

//# sourceMappingURL=interceptor.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ForgotPasswordPage.prototype.goToLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-passwor',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\forgot-password\forgot-password.html"*/'<ion-content class="login-content" padding>\n\n    <ion-row class="logo-row">\n\n      <ion-col></ion-col>\n\n      <ion-col width-67>\n\n        <img style="max-width: 303px !important;" src="http://placehold.it/500x300"/>\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <div class="title">\n\n        <h1>Forgot Password?</h1>\n\n        <p>Enter your login, we will send you recovery password</p>\n\n      </div>\n\n    </ion-row>\n\n    <div class="forgot-box">\n\n      <form>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list inset>\n\n              \n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Email" name="email" required></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item></ion-item>\n\n\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n        <ion-row>\n\n          <ion-col class="signup-col">\n\n            <button ion-button class="submit-btn" full type="submit" >Recover Password</button>\n\n            <button ion-button class="btl-btn" clear (click)="goToLoginPage()">Back to Login</button>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n      </form>\n\n    </div>\n\n    <ion-row>\n\n      <div class="copyright"><p>Copyright © 2017 Revo Rewards</p></div>\n\n    </ion-row>\n\n  </ion-content>'/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickPayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_nfc__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuickPayPage = (function () {
    function QuickPayPage(navCtrl, webService, nfc, ndef) {
        this.navCtrl = navCtrl;
        this.webService = webService;
        this.nfc = nfc;
        this.ndef = ndef;
        this.scanned = false;
        this.mimeType = "game/rockpaperscissors";
    }
    QuickPayPage.prototype.addListenNFC = function () {
        var _this = this;
        this.nfcsubscribe = this.nfc.addMimeTypeListener(this.mimeType, this.onNfc, this.onnfcfailed)
            .subscribe(function (event) {
            console.log("received ndef message. the tag contains: " + JSON.stringify(event.tag));
            console.log("decoded tag id " + _this.nfc.bytesToString(event.tag.ndefMessage[0].payload));
        });
    };
    QuickPayPage.prototype.onnfcfailed = function () {
        alert('nfc failed.Try again ');
    };
    QuickPayPage.prototype.onNfc = function (nfcEvent) {
        var tag = nfcEvent.tag, records = tag.ndefMessage, opponentsChoice = this.nfc.bytesToString(records[0].payload);
        alert("Opponents choices " + opponentsChoice);
    };
    QuickPayPage.prototype.tagListenerSuccess = function (tagEvent) {
        console.log(tagEvent.type);
        var data = tagEvent;
        alert(JSON.stringify(data));
    };
    QuickPayPage.prototype.recSuccess = function (data) {
        alert;
    };
    QuickPayPage.prototype.sesReadNFC = function (data) {
        console.log(data, 'Workimg');
    };
    QuickPayPage.prototype.failNFC = function (err) {
        console.log('NFC Failed :' + JSON.stringify(err));
    };
    QuickPayPage.prototype.sendTransaction = function () {
        var message = this.ndef.mimeMediaRecord(this.mimeType, 'Hello world');
        this.nfc.share([message]).then(this.onSuccess).catch(this.onError);
    };
    QuickPayPage.prototype.onSuccess = function () {
        alert("message sent  ");
    };
    QuickPayPage.prototype.onError = function (err) {
        alert("Error msg sharing " + JSON.stringify(err));
    };
    QuickPayPage.prototype.ionViewCanLeave = function () {
        this.nfcsubscribe.unsubscribe();
    };
    QuickPayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quick-pay',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\quick-pay\quick-pay.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Profile</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n    <div padding>\n\n      <button ion-button full (click)="sendTransaction()" >Send </button>\n\n      <button ion-button full (click)="addListenNFC()" >Receive</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\quick-pay\quick-pay.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_nfc__["a" /* NFC */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_nfc__["b" /* Ndef */]])
    ], QuickPayPage);
    return QuickPayPage;
}());

//# sourceMappingURL=quick-pay.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Attribute */])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Attribute */])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());

//# sourceMappingURL=EqualValidator.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account_create_account__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, menu, webService, loadCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.webService = webService;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.CreateAccount = __WEBPACK_IMPORTED_MODULE_2__create_account_create_account__["a" /* CreateAccountPage */];
        this.menu.enable(false);
    }
    LoginPage.prototype.goToCreateAccountPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_account_create_account__["a" /* CreateAccountPage */]);
    };
    LoginPage.prototype.login = function () {
        var self = this;
        var loading = self.loadCtrl.create();
        loading.present();
        self.webService.login(self.user)
            .subscribe(function (res) {
            loading.dismiss();
            if (res.status == 200) {
                var data = Object.assign({}, res.data);
                data.password = self.user.password;
                self.webService.saveLocalData(data, res.token);
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* NotificationsPage */]);
            }
            else {
                var toast = self.toastCtrl.create({ message: res.message, duration: 2000 });
                toast.present();
            }
        }, function (err) {
            loading.dismiss();
            if ('error' in err) {
                if (err.error.status) {
                    var toast = self.toastCtrl.create({ message: err.error.message, duration: 2000 });
                    toast.present();
                }
            }
            else {
                var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
                toast.present();
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\login\login.html"*/'<ion-content class="login-content" padding>\n\n    <ion-row class="logo-row">\n\n      <ion-col></ion-col>\n\n      <ion-col width-67 text-center>\n\n        <img style="max-width: 100px !important;margin-bottom: 20px;margin-top: 120px" src="assets/imgs/evens.png"/>\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <div class="title"><h1>WELCOME</h1></div>\n\n    </ion-row>\n\n    <div class="login-box">\n\n      <form #f="ngForm" novalidate (ngSubmit)="login()">\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list inset>\n\n  \n\n              <ion-item>\n\n                <ion-input type="email" placeholder="EMAIL" [(ngModel)]="user.address" name="address" required></ion-input>\n\n              </ion-item>\n\n  \n\n              <ion-item>\n\n                <ion-input type="password" placeholder="PASSWORD" [(ngModel)]="user.password" name="password" required></ion-input>\n\n              </ion-item>\n\n  \n\n              <ion-item></ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n  \n\n        <ion-row>\n\n          <ion-col class="signup-col">\n\n            <button style="width:80%" ion-button round [disabled]="f.invalid" class="submit-btn" round type="submit" >Login</button>\n\n            <!-- <button ion-button class="register-btn" [navPush]="ForgotPasswordPage"  type ="button" float-right clear text-capitalize>Forgot Password?</button> -->\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row clear>\n\n          <div class="signup-btn">DON\'T YOU HAVE ACCOUNT? <a href="#" class="register-btn" clear [navPush]="CreateAccount" >Create New Account</a></div>\n\n         </ion-row>\n\n      </form>\n\n    </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__amcharts_amcharts3_angular__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_rewards_my_rewards__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Title } from '@angular/platform-browser';
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, webserve, menu, events, alertCtrl, loadingCtrl, AmCharts) {
        this.navCtrl = navCtrl;
        this.webserve = webserve;
        this.menu = menu;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.AmCharts = AmCharts;
        this.etherAccount = {
            address: '-',
            balance: 0
        };
        this.evensAccount = {
            address: '-',
            balance: 0
        };
        this.tokens = [];
        this.todayPrice = {
            "BTT": 1,
            "ETH": 1,
            "INR": 1,
            "THB": 1,
            "KRW": 1
        };
        this.allBalance = {
            eth: 0,
            tokenOne: 0,
            tokenTwo: 0,
            tokenThree: 0,
            ens: 0,
            address: '',
            tokenTwosym: '',
            tokenOnesym: '',
            tokenThreeSym: '',
            tokenFourSym: ''
        };
        this.colors = [
            "#FF0F00",
            "#FF6600",
            "#FF9E01",
            "#FCD202",
            "#0D8ECF"
        ];
        this.options = {
            "type": "serial",
            "theme": "dark",
            "dataDateFormat": "DD-MMM-YYYY",
            "dataProvider": [],
            "valueAxes": [{
                    "id": "v1",
                    "axisAlpha": 0,
                    "position": "left",
                    "title": "ETH in USD",
                }],
            "balloon": {
                "borderThickness": 0.5,
                "shadowAlpha": 0
            },
            "graphs": [{
                    "id": "g1",
                    "balloon": {
                        "drop": true,
                        "adjustBorderColor": false,
                        "color": "#ffffff",
                        "type": "smoothedLine"
                    },
                    "fillAlphas": 0.2,
                    "bullet": "round",
                    "bulletBorderAlpha": 0.5,
                    "bulletColor": "#FFFFFF",
                    "bulletSize": 2,
                    "hideBulletsCount": 50,
                    "lineThickness": 2,
                    "title": "red line",
                    "useLineColorForBulletBorder": true,
                    "valueField": "value",
                    "balloonText": "<span style='font-size:8px;'>[[value]]</span>"
                }],
            "startDuration": 1,
            "chartCursor": {
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 30,
                "dashLength": 0,
                "minorGridEnabled": true
            },
            "categoryField": "date",
            "export": {
                "enabled": false
            }
        };
        this.gettodayPrice();
        this.getAllBalance();
        this.menu.enable(true);
        this.events.publish('getUser', true);
        // this.getBalance()
        // this.evensBalance();1
    }
    NotificationsPage.prototype.createChart = function (data) {
        if (data === void 0) { data = []; }
        this.options.dataProvider = data;
        this.chart = this.AmCharts.makeChart("chartdiv", this.options);
        console.log("chart", this.chart);
    };
    NotificationsPage.prototype.ngAfterViewInit = function () {
        this.addlistenerchart();
        this.getChartDate();
    };
    NotificationsPage.prototype.addlistenerchart = function () {
        var self = this;
        self.AmCharts.addInitHandler(function (chart) {
            console.log("axis values", chart.valueAxes[1]);
        });
    };
    NotificationsPage.prototype.doRefresh = function (e) {
        this.gettodayPrice();
        this.getAllBalance();
        setTimeout(function () {
            e.complete();
        }, 2000);
    };
    NotificationsPage.prototype.getBalance = function () {
        var self = this;
        self.webserve.getBalance()
            .subscribe(function (res) {
            console.log('res', res);
            self.etherAccount = res;
        }, function (err) {
            console.log("err", err);
        });
    };
    NotificationsPage.prototype.getAllBalance = function () {
        var self = this;
        var loading = this.loadingCtrl.create({
            // spinner: 'hide',
            content: 'Fetching Balance  Please Wait...'
        });
        loading.present();
        self.webserve.getAllBalance()
            .subscribe(function (res) {
            self.allBalance = res;
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
        });
    };
    NotificationsPage.prototype.evensBalance = function () {
        var self = this;
        self.webserve.evensBalance()
            .subscribe(function (res) {
            // console.log('res',res)
            self.evensAccount = res;
        }, function (err) {
            // console.log("err",err)
        });
    };
    NotificationsPage.prototype.openSingleNotification = function (coin, type) {
        this.webserve.setSelecetedcoin(coin);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */], { data: type });
    };
    NotificationsPage.prototype.gettodayPrice = function () {
        var self = this;
        self.webserve.getTodayPrice()
            .subscribe(function (res) {
            self.todayPrice = res;
        }, function (err) {
            console.log(err);
        });
    };
    NotificationsPage.prototype.getChartDate = function () {
        var self = this;
        self.webserve.getChartDate()
            .subscribe(function (res) {
            self.createChart(res.data);
        }, function (err) {
            self.createChart();
        });
    };
    NotificationsPage.prototype.goToPricePage = function () {
        var self = this;
        self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__my_rewards_my_rewards__["a" /* MyRewardsPage */]);
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"d:\projects\enswallet-mobile\src\pages\notifications\notifications.html"*/'<ion-header>\n\n\n\n  <div class="wallet">\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Evens</ion-title>\n\n    </ion-navbar>\n\n  </div>\n\n\n\n</ion-header>\n\n<ion-content>\n\n                <ion-refresher (ionRefresh)="doRefresh($event)">\n\n                                <ion-refresher-content\n\n                                  pullingIcon="arrow-dropdown"\n\n                                  pullingText="Pull to refresh"\n\n                                  refreshingSpinner="circles"\n\n                                  refreshingText="Refreshing...">\n\n                                </ion-refresher-content>\n\n                              </ion-refresher>\n\n  <div class="cad">\n\n\n\n    <ion-card class="wallat_main">\n\n      <div class="wall_txt_cen" >\n\n          <div id="chartdiv" [style.width.%]="100" [style.height.px]="200"></div>\n\n        <!-- <p class="wall_amount">$49994.5</p>     -->\n\n\n\n      </div>\n\n\n\n    </ion-card>\n\n\n\n    <ion-list class="trans">\n\n\n\n\n\n\n\n      <ion-card class="card_trans">\n\n        <ion-item (click)=\'openSingleNotification("Etheriun","coin")\'>\n\n          <div class="row">\n\n            <div class="col col-10">\n\n              <ion-thumbnail item-start>\n\n                <img class="coinimg" src="assets/imgs/eth-40.png">\n\n              </ion-thumbnail>\n\n            </div>\n\n            <div class="hello">\n\n\n\n              <div class="col col-50">\n\n\n\n                <h3 class="fontWhite item_text" text-right>{{ allBalance.eth | number:\'.3\' }}&nbsp;&nbsp;ETH</h3>\n\n              </div>\n\n            </div>\n\n            <!-- <div class="hello">\n\n              <div class="col">\n\n\n\n                <h3 class="fontWhite item_text" text-left>ETH</h3>\n\n\n\n              </div>\n\n            </div> -->\n\n\n\n            <div class="col col-40 rmpad">\n\n              <h3 class="fontWhite item_text" text-right> {{ allBalance.eth / todayPrice.ETH | number:\'.3\' }} $</h3>\n\n\n\n            </div>\n\n          </div>\n\n\n\n          <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n        </ion-item>\n\n      </ion-card>\n\n      <ion-card class="card_trans">\n\n        <ion-item (click)=\'openSingleNotification("evenscoin","coin")\'>\n\n          <div class="row">\n\n            <div class="col col-10">\n\n              <ion-thumbnail item-start>\n\n                <img class="coinimg"  src="assets/imgs/evens-40.png">\n\n              </ion-thumbnail>\n\n            </div>\n\n            <div class="hello">\n\n              <div class="col col-50">\n\n                <h3 class="fontWhite item_text" text-right>{{ allBalance.ens | number:\'.3\'}}&nbsp;&nbsp;ENS</h3>\n\n              </div>\n\n            </div>\n\n            <!-- <div class="hello">\n\n              <div class="col">\n\n                <h3 class="fontWhite item_text" text-left>ENS</h3>\n\n              </div>\n\n            </div> -->\n\n            <div class="col col-40 rmpad">\n\n              <h3 class="fontWhite item_text" text-right> N.A </h3>\n\n            </div>\n\n          </div>\n\n\n\n\n\n\n\n        </ion-item>\n\n      </ion-card>\n\n      <!-- <ion-card *ngFor="let token of tokens" class="card_trans">\n\n        <ion-item (click)=\'openSingleNotification("tokenOne","token")\'>\n\n          <div class="row">\n\n            <div>\n\n              <ion-thumbnail item-start>\n\n                <img class="coinimg" src="assets/imgs/tk1-40.png">\n\n              </ion-thumbnail>\n\n            </div>\n\n            <div class="hello">\n\n              <div class="col">\n\n                <h3 class="fontWhite item_text" text-right>{{ token.balance | number:\'.3\' }} </h3>\n\n              </div>\n\n            </div>\n\n            <div class="hello">\n\n              <div class="col">\n\n                <h3 class="fontWhite item_text" text-left>{{token.symbol}}</h3>\n\n              </div>\n\n            </div>\n\n            <div class="col rmpad">\n\n              <h3 class="fontWhite item_text" text-right> 0 $ </h3>\n\n              <h3 class="fontWhite item_text" text-right> {{  allBalance.tokenOne / todayPrice.INR | number:\'.3\' }} $ </h3>\n\n            </div>\n\n          </div>\n\n\n\n\n\n        </ion-item>\n\n      </ion-card> -->\n\n      <ion-card class="card_trans">\n\n        <ion-item (click)=\'openSingleNotification("tokenOne","token")\'>\n\n          <div class="row">\n\n            <div class="col col-10">\n\n              <ion-thumbnail item-start>\n\n                <img class="coinimg" src="assets/imgs/tk1-40.png">\n\n              </ion-thumbnail>\n\n            </div>\n\n            <div class="hello">\n\n              <div class="col col-50">\n\n                <h3 class="fontWhite item_text" text-right>{{ allBalance.tokenOne | number:\'.3\' }}&nbsp;&nbsp;{{allBalance.tokenOneSym}}</h3>\n\n              </div>\n\n            </div>\n\n            <!-- <div class="hello">\n\n              <div class="col">\n\n                <h3 class="fontWhite item_text" text-left>{{allBalance.tokenOneSym}}</h3>\n\n              </div>\n\n            </div> -->\n\n            <div class="col col-40 rmpad">\n\n              <h3 class="fontWhite item_text" text-right> {{ allBalance.tokenOne / todayPrice.INR | number:\'.3\' }} $\n\n              </h3>\n\n            </div>\n\n          </div>\n\n\n\n\n\n        </ion-item>\n\n      </ion-card>\n\n      <ion-card class="card_trans">\n\n        <ion-item (click)=\'openSingleNotification("tokenTwo","token")\'>\n\n          <div class="row">\n\n            <div class="col col-10"> \n\n              <ion-thumbnail item-start>\n\n                <img class="coinimg" src="assets/imgs/tk2-40.png">\n\n              </ion-thumbnail>\n\n            </div>\n\n            <div class="hello">\n\n              <div class="col col-50">\n\n                <h3 class="fontWhite item_text" text-right>{{ allBalance.tokenTwo | number:\'.3\' }}&nbsp;&nbsp;{{allBalance.tokenTwoSym}}</h3>\n\n              </div>\n\n            </div>\n\n            <!-- <div class="hello">\n\n              <div class="col">\n\n                <h3 class="fontWhite item_text" text-left>{{allBalance.tokenTwoSym}} </h3>\n\n              </div>\n\n            </div> -->\n\n            <div class="col col-40 rmpad">\n\n              <h3 class="fontWhite item_text" text-right> {{ allBalance.tokenTwo / todayPrice.THB | number:\'.3\' }} $</h3>\n\n            </div>\n\n          </div>\n\n\n\n\n\n        </ion-item>\n\n      </ion-card>\n\n      <ion-card class="card_trans">\n\n        <ion-item (click)=\'openSingleNotification("tokenThree","token")\'>\n\n          <div class="row">\n\n            <div class="col col-10">\n\n              <ion-thumbnail item-start>\n\n                <img class="coinimg" src="assets/imgs/tk3-40.png">\n\n              </ion-thumbnail>\n\n            </div>\n\n            <div class="hello">\n\n              <div class="col col-50">\n\n                <h3 class="fontWhite item_text" text-right>{{ allBalance.tokenThree | number:\'.3\' }}&nbsp;&nbsp;{{allBalance.tokenThreeSym}}</h3>\n\n              </div>\n\n            </div>\n\n            <!-- <div class="hello">\n\n              <div class="col">\n\n                <h3 class="fontWhite item_text" text-left>{{allBalance.tokenThreeSym}}</h3>\n\n              </div>\n\n            </div> -->\n\n            <div class="col col-40 rmpad">\n\n              <h3 class="fontWhite item_text" text-right> {{ allBalance.tokenThree / todayPrice.KRW | number:\'.3\' }} $\n\n              </h3>\n\n            </div>\n\n          </div>\n\n\n\n\n\n        </ion-item>\n\n      </ion-card>\n\n      <ion-card class="card_trans">\n\n        <ion-item (click)=\'openSingleNotification("tokenFour","token")\'>\n\n          <div class="row">\n\n            <div class="col col-10">\n\n              <ion-thumbnail item-start>\n\n                <img class="coinimg" src="assets/imgs/tk4-40.png">\n\n              </ion-thumbnail>\n\n            </div>\n\n            <div class="hello">\n\n              <div class="col col-50">\n\n                <h3 class="fontWhite item_text" text-right>{{ allBalance.tokenFour | number:\'.3\' }}&nbsp;&nbsp;{{allBalance.tokenFourSym}}</h3>\n\n              </div>\n\n            </div>\n\n            <div class="col col-40 rmpad">\n\n              <h3 class="fontWhite item_text" text-right> {{ allBalance.tokenFour / todayPrice.USD | number:\'.3\' }} $\n\n              </h3>\n\n            </div>\n\n          </div>\n\n        </ion-item>\n\n      </ion-card>\n\n    </ion-list>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"d:\projects\enswallet-mobile\src\pages\notifications\notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__amcharts_amcharts3_angular__["b" /* AmChartsService */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map