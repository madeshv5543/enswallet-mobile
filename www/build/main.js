webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRewardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NFC } from "@ionic-native/nfc";
var MyRewardsPage = (function () {
    function MyRewardsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyRewardsPage.prototype.resetScanData = function () {
        this.granted = false;
        this.scanned = false;
        this.tagId = "";
    };
    MyRewardsPage.prototype.ngAfterViewInit = function () {
        new TradingView.widget({
            "autosize": true,
            "symbol": "COINBASE:ETHUSD",
            "interval": "1",
            "timezone": "Etc/UTC",
            "theme": "Dark",
            "style": "7",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "hide_top_toolbar": true,
            "container_id": "tradingview_84686"
        });
    };
    MyRewardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-rewards',template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\my-rewards\my-rewards.html"*/'<!-- TradingView Widget BEGIN -->\n\n<ion-content>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n                <ion-icon name="menu"></ion-icon>\n\n              </button>\n\n    <ion-title>Price</ion-title>\n\n</ion-navbar>\n\n<div padding>\n\n    <div class="tradingview-widget-container">\n\n        <div id="tradingview_84686"></div>\n\n    </div>\n\n</div>\n\n</ion-content>\n\n\n\n<!-- TradingView Widget END -->'/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\my-rewards\my-rewards.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MyRewardsPage);
    return MyRewardsPage;
}());

//# sourceMappingURL=my-rewards.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account_create_account__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(57);
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
            .then(function (res) {
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
            selector: 'page-login',template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\login\login.html"*/'<ion-content class="login-content" padding>\n\n    <ion-row class="logo-row">\n\n      <ion-col></ion-col>\n\n      <ion-col width-67 text-center>\n\n        <img style="max-width: 165px !important;margin-bottom: 20px;" src="assets/imgs/evens.png"/>\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <div class="title"><h1>Welcome</h1></div>\n\n    </ion-row>\n\n    <div class="login-box">\n\n      <form (ngSubmit)="login()">\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list inset>\n\n  \n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Email" [(ngModel)]="user.address" name="address" required></ion-input>\n\n              </ion-item>\n\n  \n\n              <ion-item>\n\n                <ion-input type="password" placeholder="Password" [(ngModel)]="user.password" name="password" required></ion-input>\n\n              </ion-item>\n\n  \n\n              <ion-item></ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n  \n\n        <ion-row>\n\n          <ion-col class="signup-col">\n\n            <button ion-button class="submit-btn" full type="submit" >Login</button>\n\n            <!-- <button ion-button class="register-btn" [navPush]="ForgotPasswordPage"  type ="button" float-right clear text-capitalize>Forgot Password?</button> -->\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row clear>\n\n          <div class="signup-btn">Don\'t you have account? <a href="#" class="register-btn" clear [navPush]="CreateAccount" >Create New Account</a></div>\n\n         </ion-row>\n\n      </form>\n\n    </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebservicProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_timezone__ = __webpack_require__(430);
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
        this.serverUrl = 'http://192.168.1.5:3200/api';
        //  private serverUrl:any = 'http://localhost:3200/api';
        //  private serverUrl:any ="http://ec2-54-179-146-92.ap-southeast-1.compute.amazonaws.com:3200/api";
        this.etherscanUrl = "https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=";
        this.params = "&startblock=0&endblock=99999999&page=1&offset=500&sort=desc&apikey=YourApiKeyToken";
        this.evensparams = "&startblock=0&endblock=99999999&page=1&offset=5&sort=desc&apikey=YourApiKeyToken";
        this.evenstokenUrl = "https://api-rinkeby.etherscan.io/api?module=account&action=tokentx&address=";
        this.topriceurl = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTT,ETH,INR,THB,KRW';
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
                                    link: "http://rinkeby.etherscan.io/tx/" + o.hash
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
                                link: "https://rinkeby.etherscan.io/tx/" + o.hash
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
    // setEthTransactiom(data){
    //    let self = this;
    //   //  let data:any  = {};
    //   //  data.receipt = '0x3e989e298fd15a967501203b21304f786bf1d274f0f006c0cfe67385a82b8140';
    //   //  data.amount =0.01
    //    let tranaction = [];
    //    self.storage.get('eth')
    //    .then((val)=>{
    //     let trans ={
    //       amount:data.amount,
    //       receipt:data.receipt,
    //       link:`https://rinkeby.etherscan.io/tx/${data.receipt}`
    //     }
    //     if(!val){
    //       tranaction.push(trans)
    //       let storeString = JSON.stringify(tranaction);
    //       self.storage.set('eth',storeString)
    //     }else{
    //       tranaction = JSON.parse(val);
    //       if(tranaction.length > 4){
    //         tranaction.splice(4,1,
    //         trans)
    //       }else{
    //         tranaction.push(trans)
    //       }
    //       let storeString = JSON.stringify(tranaction);
    //       self.storage.set('eth',storeString)
    //     }
    //    })
    // }
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
        var _this = this;
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get(_this.serverUrl + "/getBalance")
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.evensBalance = function () {
        var _this = this;
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get(_this.serverUrl + "/evensBalance")
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.checkAddress = function (add) {
        var _this = this;
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get(_this.serverUrl + "/checkAdddress/" + add)
                .subscribe(function (res) {
                resolve(res.status);
            }, function (err) {
                reject(false);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.Transfer = function (data) {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.post(self.serverUrl + "/transfer", data)
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.TransferEns = function (data) {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.post(self.serverUrl + "/sendEns", data)
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.getTodayPrice = function () {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get(self.topriceurl)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.getAllBalance = function () {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get(self.serverUrl + "/allBalance")
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.getTokenOneBalance = function () {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get(self.serverUrl + "/tokenOneBalance")
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.getTokenTwoBalance = function () {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get(self.serverUrl + "/tokenTwoBalance")
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.getTokenThreeBalance = function () {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get(self.serverUrl + "/tokenThreeBalance")
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.TransferTokenOne = function (data) {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.post(self.serverUrl + "/sendTokenOne", data)
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.TransferTokenTwo = function (data) {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.post(self.serverUrl + "/sendTokenTwo", data)
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.TransferTokenThree = function (data) {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.post(self.serverUrl + "/sendTokenThree", data)
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.createAccont = function (data) {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.post(self.serverUrl + "/signUp", data)
                .subscribe(function (result) {
                resolve(result);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
    };
    WebservicProvider.prototype.login = function (data) {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.post(self.serverUrl + "/login", data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
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
    WebservicProvider.prototype.getUserInfo = function () {
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            self.http.get(self.serverUrl + "/user")
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
        return promise;
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

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_wallet__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topup_topup__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coupons_coupons__ = __webpack_require__(341);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary" [selectedIndex]="mySelectedIndex">\n\n  <ion-tab [root]="tab3Root" tabTitle="Info" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab1Root" tabTitle="Send" tabIcon="send"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Receive" tabIcon="filing"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Buy" tabIcon="cash"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__ = __webpack_require__(20);
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
    WalletPage.prototype.gettodayPrice = function () {
        var self = this;
        self.webserve.getTodayPrice()
            .then(function (res) {
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
            default:
                servicecall = self.webserve.getBalance();
        }
        // if(this.selectedCur == 'Etheriun'){
        //   servicecall = self.webserve.getBalance()
        //  }
        //  if(this.selectedCur == 'evenscoin'){
        //   servicecall = self.webserve.evensBalance()
        //  }
        servicecall
            .then(function (res) {
            console.log('res', res);
            self.account = res;
            _this.showQr = true;
        }, function (err) {
            console.log("err", err);
        });
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'wallet',template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\wallet\wallet.html"*/'  <ion-header>\n\n        <ion-navbar color="primary">\n\n                <button ion-button menuToggle>\n\n                  <ion-icon name="menu"></ion-icon>\n\n                </button>\n\n                <ion-title>\n\n                  Evens\n\n                </ion-title>\n\n              </ion-navbar>\n\n  </ion-header>\n\n  <ion-content >\n\n        <div padding>\n\n            <div >\n\n                    <img *ngIf="selectedCur == \'Etheriun\'" class="static_icon" src="assets/imgs/eth.png">\n\n                    <img *ngIf="selectedCur == \'evenscoin\'" class="static_icon" src="assets/imgs/evens.png">\n\n                    <img *ngIf="selectedCur == \'tokenOne\'" class="static_icon" src="assets/imgs/usd.png">\n\n                    <img *ngIf="selectedCur == \'tokenThree\'" class="static_icon" src="assets/imgs/kye.png">\n\n                    <img *ngIf="selectedCur == \'tokenTwo\'" class="static_icon" src="assets/imgs/thai.png">\n\n            </div>\n\n                <div *ngIf="showQr" class="adddiv">\n\n         \n\n                    </div>\n\n                  <div *ngIf="showQr" class="qr_code">\n\n                      <div class="qr_text" >QR CODE</div>\n\n                      <ngx-qrcode [qrc-value]="account.address"></ngx-qrcode>\n\n                      \n\n                  </div>\n\n                  <div *ngIf="showQr" class="adddiv">\n\n                      <span class="ow_address">{{account.address}}</span>\n\n                  </div>\n\n                  <ion-list *ngIf="selectedCur == \'Etheriun\'">\n\n                      <ion-card class="card_trans">\n\n                              <ion-item  >  \n\n                                 <div class="texc">\n\n                                    <h2   class="fontWhite">{{account.balance | number: \'.3\'}} ETH</h2>\n\n                                    <p class="fontWhite baltxt1">1 ETH = {{ 1 / todayPrice.ETH | number}} USD</p>\n\n                                 </div>\n\n                                      \n\n                                      <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                                  </ion-item>\n\n                      </ion-card>\n\n                      <ion-card class="card_trans">\n\n                              <ion-item >\n\n                                  <div class="texc">\n\n                                      <h2 class="fontWhite qr_textitem">{{ account.balance / todayPrice.ETH | number:\'.3\' }} USD</h2>\n\n                                      </div>\n\n                                  </ion-item>\n\n                      </ion-card>\n\n                      \n\n              \n\n                  </ion-list>\n\n                  <ion-list *ngIf="selectedCur == \'evenscoin\'">\n\n                        <ion-card class="card_trans">\n\n                                <ion-item  >  \n\n                                   <div class="texc">\n\n                                      <h2   class="fontWhite">{{account.balance | number}} ENS</h2>\n\n                                      <p class="fontWhite baltxt1">1 ENS = {{ 1 / todayPrice.BTT | number: \'.3\'}} USD</p>\n\n                                   </div>\n\n                                        \n\n                                        <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        <ion-card class="card_trans">\n\n                                <ion-item >\n\n                                    <div class="texc">\n\n                                        <h2 class="fontWhite qr_textitem">{{ account.balance / todayPrice.BTT | number: \'.3\' }} USD</h2>\n\n                                        </div>\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        \n\n                \n\n                    </ion-list>\n\n                    <ion-list *ngIf="selectedCur == \'tokenOne\'">\n\n                        <ion-card class="card_trans">\n\n                                <ion-item  >  \n\n                                   <div class="texc">\n\n                                      <h2   class="fontWhite">{{account.balance | number: \'.3\'}} {{account.tokenOneSym}}</h2>\n\n                                      <p class="fontWhite baltxt1">1 {{account.tokenOneSym}} = {{ 1 / todayPrice.INR | number: \'.3\'}} USD</p>\n\n                                   </div>\n\n                                        \n\n                                        <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        <ion-card class="card_trans">\n\n                                <ion-item >\n\n                                    <div class="texc">\n\n                                        <h2 class="fontWhite qr_textitem">{{ account.balance / todayPrice.INR | number: \'.3\' }} USD</h2>\n\n                                        </div>\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        \n\n                \n\n                    </ion-list>\n\n                    <ion-list *ngIf="selectedCur == \'tokenTwo\'">\n\n                        <ion-card class="card_trans">\n\n                                <ion-item  >  \n\n                                   <div class="texc">\n\n                                      <h2   class="fontWhite">{{account.balance | number:\'.3\'}} {{account.tokenTwoSym}}</h2>\n\n                                      <p class="fontWhite baltxt1">1 {{account.tokenTwoSym}} = {{ 1 / todayPrice.THB | number: \'.3\'}} USD</p>\n\n                                   </div>\n\n                                        \n\n                                        <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        <ion-card class="card_trans">\n\n                                <ion-item >\n\n                                    <div class="texc">\n\n                                        <h2 class="fontWhite qr_textitem">{{ account.balance / todayPrice.THB | number: \'.3\' }} USD</h2>\n\n                                        </div>\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        \n\n                \n\n                    </ion-list>\n\n                    <ion-list *ngIf="selectedCur == \'tokenThree\'">\n\n                        <ion-card class="card_trans">\n\n                                <ion-item  >  \n\n                                   <div class="texc">\n\n                                      <h2   class="fontWhite">{{account.balance | number: \'.3\'}} {{account.tokenThreeSym}}</h2>\n\n                                      <p class="fontWhite baltxt1">1 {{account.tokenThreeSym}} = {{ 1 / todayPrice.KRW | number: \'.3\'}} USD</p>\n\n                                   </div>\n\n                                        \n\n                                        <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        <ion-card class="card_trans">\n\n                                <ion-item >\n\n                                    <div class="texc">\n\n                                        <h2 class="fontWhite qr_textitem">{{ account.balance / todayPrice.KRW | number: \'.3\' }} USD</h2>\n\n                                        </div>\n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        \n\n                \n\n                    </ion-list>\n\n        </div>\n\n\n\n  </ion-content>\n\n  \n\n\n\n  '/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\wallet\wallet.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(338);
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
            default:
                servicecall = self.webservice.getBalance();
        }
        servicecall
            .then(function (res) {
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
        if (this.selectedCur == 'evenscoin') {
            respromise = this.webservice.getTokenTransaction(address);
        }
        if (this.selectedCur == 'Etheriun' || this.selectedCur == 'evenscoin') {
            respromise.then(function (res) {
                _this.ethTransaction = res;
            });
        }
    };
    TopupPage.prototype.gettodayPrice = function () {
        var self = this;
        self.webservice.getTodayPrice()
            .then(function (res) {
            self.todayPrice = res;
        }, function (err) {
            var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
            toast.present();
        });
    };
    TopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topup',template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\topup\topup.html"*/'  <ion-header>\n\n      <ion-navbar color="primary">\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title>\n\n            Evens\n\n          </ion-title>\n\n        </ion-navbar>\n\n  </ion-header>\n\n  <ion-content >\n\n        <div padding > \n\n          <div *ngIf="selectedCur == \'Etheriun\'">\n\n              <div class="centex">\n\n                  <img class="tra_img" src="assets/imgs/icons8-ethereum-100.png">\n\n              </div>\n\n              <div  class="centex"> \n\n                <h1>Etherium</h1>\n\n              </div>\n\n              <div class="wal-amount row" text-center>\n\n                <div class="col"><span class="strong">Balance :<br></span> {{selectedAccount.balance  | number:\'.3\' }} ETH</div>\n\n                <div class="v-div"></div>\n\n                <div class="col"><span class="strong">Price :<br></span> {{1 / todayPrice.ETH | number:\'.3\'}} USD</div>\n\n              </div>\n\n              <div>\n\n                <h4 text-center>Recent Activity</h4>\n\n                <ng-container >\n\n                  <ion-card class="tran_card" >\n\n                     \n\n                        <div class="row header trans_date txn-data">\n\n                          <div class="col"><span class="strong">Date</span></div>\n\n                          <div class="col" text-right><span class="strong">Amount</span></div>\n\n                          <div class="col" text-left><span class="strong">Type</span></div>\n\n                        </div>\n\n\n\n                        <div class="row header trans_am txn-data" *ngFor="let trans of ethTransaction" (click)="OpenUrl(trans.link)">\n\n                            <div class="col">{{trans.date}}</div>\n\n                            <div class="col" text-right>{{trans.amount | number:\'.3\'}}</div>\n\n                            <div class="col" text-left>{{trans.mode}}</div>\n\n                        </div>\n\n\n\n                  </ion-card>\n\n                \n\n                </ng-container>\n\n          \n\n                <!-- <ion-list>\n\n                    <ion-card *ngFor="let trans of ethTransaction"  class="card_trans">\n\n                    <ion-item (click)="OpenUrl(trans.link)"> \n\n                        <p class="fontWhite">{{trans.amount | number}}</p>\n\n                        <p class="fontWhite">{{trans.date}}</p>\n\n                        <p class="fontWhite"> {{trans.mode}}</p>\n\n                        <p class="fontWhite">{{trans.status}}</p>\n\n                        <p class="fontWhite">{{trans.receipt}}</p>\n\n                       </ion-item>\n\n                       </ion-card>\n\n                </ion-list> -->\n\n              </div>\n\n          </div>\n\n          <div *ngIf="selectedCur == \'evenscoin\'">\n\n              <div class="centex">\n\n                  <img class="tra_img" src="assets/imgs/evens.png">\n\n              </div>\n\n              <div  class="centex">\n\n                <h1> Evens </h1>\n\n              </div>\n\n              <div class="wal-amount row" text-center>\n\n                <div class="col"><span class="strong">Balance :<br></span> {{selectedAccount.balance  | number:\'.3\' }} ENS</div>\n\n                <div class="v-div"></div>\n\n                <div class="col"><span class="strong">Price :<br></span> {{1 / todayPrice.BTT | number:\'.3\'}} USD</div>\n\n              </div>\n\n              <div>\n\n                <h4 text-center>Recent Activity</h4>\n\n                <ng-container  >\n\n                    <ion-card class="tran_card" >\n\n                       \n\n                      <div class="row header trans_date txn-data" >\n\n                        <div class="col"><span class="strong">Date</span></div>\n\n                        <div class="col" text-right><span class="strong">Amount</span></div>\n\n                        <div class="col" text-left><span class="strong">Type</span></div>\n\n                      </div>\n\n\n\n                      <div class="row header trans_am txn-data" *ngFor="let trans of ethTransaction" (click)="OpenUrl(trans.link)">\n\n                        <div class="col">{{trans.date}}</div>\n\n                        <div class="col" text-right>{{trans.amount | number:\'.3\'}}</div>\n\n                        <div class="col" text-left>{{trans.mode}}</div>\n\n                      </div>\n\n\n\n                    </ion-card>\n\n                  \n\n                  </ng-container>\n\n              </div>\n\n          </div>\n\n          <div *ngIf="selectedCur == \'tokenOne\'">\n\n            <div class="centex">\n\n                <img class="tra_img" src="assets/imgs/icons8-rupee-100.png">\n\n            </div>\n\n            <div  class="centex">\n\n              <h1>{{selectedAccount.tokenOneSym}}</h1>\n\n            </div>\n\n            <div class="wal-amount row" text-center>\n\n              <div class="col"><span class="strong">Balance :<br></span> {{selectedAccount.balance  | number:\'.3\' }} {{selectedAccount.tokenOneSym}}</div>\n\n              <div class="v-div"></div>\n\n              <div class="col"><span class="strong">Price :<br></span> {{1 / todayPrice.INR | number:\'.3\'}} USD</div>\n\n            </div>\n\n            <div>\n\n              <h4 text-center>Recent Activity</h4>\n\n              <ng-container>\n\n                  <ion-card class="tran_card" (click)="OpenUrl(trans.link)">\n\n                    \n\n                    <div class="row header trans_date txn-data">\n\n                      <div class="col"><span class="strong">Date</span></div>\n\n                      <div class="col" text-right><span class="strong">Amount</span></div>\n\n                      <div class="col" text-left><span class="strong">Type</span></div>\n\n                    </div>\n\n\n\n                    <div class="row header trans_am txn-data" *ngFor="let trans of ethTransaction">\n\n                      <div class="col">{{trans.date}}</div>\n\n                      <div class="col" text-right>{{trans.amount | number:\'.3\'}}</div>\n\n                      <div class="col" text-left>{{trans.mode}}</div>\n\n                    </div>\n\n\n\n                  </ion-card>\n\n                \n\n                </ng-container>\n\n            </div>\n\n        </div>\n\n        <div *ngIf="selectedCur == \'tokenTwo\'">\n\n          <div class="centex">\n\n              <img class="tra_img" src="assets/imgs/icons8-bitcoin-100.png">\n\n          </div>\n\n          <div  class="centex">\n\n            <h1>{{selectedAccount.tokenTwoSym}}</h1>\n\n          </div>\n\n          <div class="wal-amount row" text-center>\n\n            <div class="col"><span class="strong">Balance :<br></span> {{selectedAccount.balance  | number:\'.3\' }} {{selectedAccount.tokenTwoSym}}</div>\n\n            <div class="v-div"></div>\n\n            <div class="col"><span class="strong">Price :<br></span> {{1 / todayPrice.THB| number:\'.3\'}} USD</div>\n\n          </div>\n\n          <div>\n\n            <h4 text-center>Recent Activity</h4>\n\n            <ng-container>\n\n                <ion-card class="tran_card" (click)="OpenUrl(trans.link)">\n\n                   \n\n                  <div class="row header trans_date txn-data">\n\n                    <div class="col"><span class="strong">Date</span></div>\n\n                    <div class="col" text-right><span class="strong">Amount</span></div>\n\n                    <div class="col" text-left><span class="strong">Type</span></div>\n\n                  </div>\n\n\n\n                  <div class="row header trans_am txn-data" *ngFor="let trans of ethTransaction">\n\n                    <div class="col">{{trans.date}}</div>\n\n                    <div class="col" text-right>{{trans.amount | number: \'.3\'}}</div>\n\n                    <div class="col" text-left>{{trans.mode}}</div>\n\n                  </div>\n\n\n\n                </ion-card>\n\n              \n\n              </ng-container>\n\n          </div>\n\n      </div>\n\n      <div *ngIf="selectedCur == \'tokenThree\'">\n\n        <div class="centex">\n\n            <img class="tra_img" src="assets/imgs/icons8-won-100.png">\n\n        </div>\n\n        <div  class="centex">\n\n          <h1>{{selectedAccount.tokenThreeSym}}</h1>\n\n        </div>\n\n        <div class="wal-amount row" text-center>\n\n          <div class="col"><span class="strong">Balance :<br></span> {{selectedAccount.balance  | number: \'.3\' }} {{selectedAccount.tokenThreeSym}}</div>\n\n          <div class="v-div"></div>\n\n          <div class="col"><span class="strong">Price :<br></span> {{1 / todayPrice.KRW| number: \'.3\'}} USD</div>\n\n        </div>\n\n        <div>\n\n          <h4 text-center>Recent Activity</h4>\n\n          <ng-container >\n\n              <ion-card class="tran_card" (click)="OpenUrl(trans.link)">\n\n                 \n\n                <div class="row header trans_date txn-data">\n\n                  <div class="col"><span class="strong">Date</span></div>\n\n                  <div class="col" text-right><span class="strong">Amount</span></div>\n\n                  <div class="col" text-left><span class="strong">Type</span></div>\n\n                </div>\n\n\n\n                <div class="row header trans_am txn-data" *ngFor="let trans of ethTransaction" >\n\n                  <div class="col">{{trans.date}}</div>\n\n                  <div class="col" text-right>{{trans.amount | number:\'.3\'}}</div>\n\n                  <div class="col" text-left>{{trans.mode}}</div>\n\n                </div>   \n\n\n\n              </ion-card>\n\n            \n\n            </ng-container>\n\n        </div>\n\n    </div>\n\n            \n\n        </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\topup\topup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], TopupPage);
    return TopupPage;
}());

//# sourceMappingURL=topup.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(340);
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
    function HomePage(navCtrl, webserve, barcodeScanner, toastCtrl) {
        this.navCtrl = navCtrl;
        this.webserve = webserve;
        this.barcodeScanner = barcodeScanner;
        this.toastCtrl = toastCtrl;
        this.transfer = {};
        this.account = {
            address: '-',
            balance: 0,
            tokenOneSym: '',
            tokenTwoSym: '',
            tokenThreeSym: ''
        };
        this.getSelecetedCoin();
    }
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
            default:
                servicecall = self.webserve.getBalance();
        }
        //  if(this.selectedCur == 'Etheriun'){
        //   servicecall = self.webserve.getBalance()
        //  }
        //  if(this.selectedCur == 'evenscoin'){
        //   servicecall = self.webserve.evensBalance()
        //  }
        servicecall
            .then(function (res) {
            self.account = res;
        }, function (err) {
            var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
            toast.present();
        });
    };
    HomePage.prototype.transferAmount = function (f) {
        var self = this;
        var data = {
            transferTo: f.value.address,
            amount: f.value.amount
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
            default:
                tranApi = self.webserve.Transfer(data);
        }
        tranApi
            .then(function (res) {
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
        var _this = this;
        var self = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            self.webserve.checkAddress(barcodeData.text).then(function (res) {
                _this.transfer.address = barcodeData.text;
                console.log(barcodeData.text);
            }, function (err) {
                var toast = self.toastCtrl.create({ message: 'Invalid Address', duration: 2000 });
                toast.present();
            });
        }).catch(function (err) {
            var toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000 });
            toast.present();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Evens</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div padding>\n\n    <div>\n\n      <img *ngIf="selectedCur == \'Etheriun\'" class="static_icon" src="assets/imgs/eth.png">\n\n      <img *ngIf="selectedCur == \'evenscoin\'" class="static_icon" src="assets/imgs/evens.png">\n\n      <img *ngIf="selectedCur == \'tokenOne\'" class="static_icon" src="assets/imgs/usd.png">\n\n      <img *ngIf="selectedCur == \'tokenThree\'" class="static_icon" src="assets/imgs/kye.png">\n\n      <img *ngIf="selectedCur == \'tokenTwo\'" class="static_icon" src="assets/imgs/thai.png">\n\n    </div>\n\n    <p class="sendtitle">Send</p>\n\n    <div>\n\n      <form #form="ngForm" (ngSubmit)="transferAmount(form)" novalidate>\n\n        <ion-item>\n\n          <ion-label floating>Amount</ion-label>\n\n          <ion-input type="number" required name="amount" [(ngModel)]="transfer.amount" ngControl="amount"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Transfer To</ion-label>\n\n          <ion-input type="text" name="address" required [(ngModel)]="transfer.address" ngControl="address"></ion-input>\n\n        </ion-item>\n\n        <button ion-button round type="button" (click)="scanQr()"> Scan </button>\n\n        <button ion-button [disabled]="form.invalid" type="submit" block round>Transfer</button>\n\n      </form>\n\n    </div>\n\n    <div>\n\n      <p>\n\n        <span>Address</span>\n\n        <br>\n\n        <span class="ow_address">\n\n          {{account.address}}\n\n        </span>\n\n      </p>\n\n      <p>\n\n        <span>Balance</span>\n\n        <br>\n\n        <span>\n\n          {{account.balance | number:\'.3\'}}\n\n          <span *ngIf="selectedCur == \'Etheriun\'">\n\n            ETH\n\n          </span>\n\n          <span *ngIf="selectedCur == \'evenscoin\'">\n\n            ENS\n\n          </span>\n\n          <span *ngIf="selectedCur == \'tokenOne\'">\n\n            {{account.tokenOneSym}}\n\n          </span>\n\n          <span *ngIf="selectedCur == \'tokenTwo\'">\n\n            {{account.tokenTwoSym}}\n\n          </span>\n\n          <span *ngIf="selectedCur == \'tokenThree\'">\n\n            {{account.tokenThreeSym}}\n\n          </span>\n\n        </span>\n\n      </p>\n\n    </div>\n\n    <div>\n\n\n\n    </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    function CouponsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CouponsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\coupons\coupons.html"*/'\n\n \n\n\n\n<ion-content>\n\n    <ion-navbar color=\'primary\'>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n          Evens\n\n        </ion-title>\n\n      </ion-navbar>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\coupons\coupons.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CouponsPage);
    return CouponsPage;
}());

//# sourceMappingURL=coupons.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card_add_card__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__ = __webpack_require__(20);
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
            .then(function (result) {
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
            selector: 'page-create-account',template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\create-account\create-account.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Create Account\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form #f="ngForm" novalidate (ngSubmit)="siguUP(f)">\n\n    <ion-list>\n\n      <ion-item-group>\n\n        <ion-item>\n\n          <ion-label stacked>First Name</ion-label>\n\n          <ion-input type="text" name="firstName" required [(ngModel)]="newUser.firstName"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Last Name</ion-label>\n\n          <ion-input type="text" name="lastName" required [(ngModel)]="newUser.lastName"></ion-input>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n            <ion-label stacked>Date of Birth</ion-label>\n\n            <ion-input type="date" name="dob" required [(ngModel)]="newUser.dob"></ion-input>\n\n          </ion-item> -->\n\n        <ion-item>\n\n          <ion-label stacked>Email</ion-label>\n\n          <ion-input type="email" name="email" required [(ngModel)]="newUser.email"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Password</ion-label>\n\n          <ion-input type="password" name="password" required validateEqual="confirmPassword" [(ngModel)]="newUser.password" reverse="true"\n\n            #password="ngModel">\n\n          </ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Repeat Password</ion-label>\n\n          <ion-input type="password" name="confirmPassword" required validateEqual="password" [(ngModel)]="newUser.confirmPassword"\n\n            #confirmPassword="ngModel" reverse="false">\n\n          </ion-input>\n\n        </ion-item>\n\n        <small [hidden]="(confirmPassword.valid) || (confirmPassword.pristine && !f.submitted)" class="text-danger error-msg">\n\n          Password mismatch\n\n        </small>\n\n        <!-- <ion-item>\n\n            <ion-label stacked>Phone Number</ion-label>\n\n            <ion-input type="tel" name="phoneNumber" required [(ngModel)]="newUser.phoneNumber"></ion-input>\n\n          </ion-item> -->\n\n        <!-- <ion-item>\n\n            <ion-label stacked>City</ion-label>\n\n            <ion-input type="text" name="city" placeholder="optional" [(ngModel)]="newUser.city"></ion-input>\n\n          </ion-item> -->\n\n        <ion-item>\n\n          <ion-label stacked>Country</ion-label>\n\n          <ion-select name="country" [(ngModel)]="newUser.country" interface="action-sheet">\n\n            <ion-option *ngFor="let country of countryChoice " value="{{country.name}}">{{country.name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-item-group>\n\n      <div padding>\n\n        <button ion-button color="primary" block [disabled]="f.invalid" type="submit"> Create Account</button>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\create-account\create-account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], CreateAccountPage);
    return CreateAccountPage;
}());

//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_webservic_webservic__ = __webpack_require__(20);
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
            selector: 'page-add-card',template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\add-card\add-card.html"*/'\n\n<ion-content padding>\n\n  <P class="ctc-content">These words are only way to restore your accounts. Save them somewhere safe and secret.</P>\n\n  <ion-card class="ctc">\n\n    <p>{{ data.seed }}</p>\n\n  </ion-card>\n\n  <div class="ctc-btn-box">\n\n    <button ion-button (click)="copyToClipboard()" >Copy to Clipboard</button>\n\n    <button ion-button (click)="goToHome()">I saved </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\add-card\add-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_webservic_webservic__["a" /* WebservicProvider */]])
    ], AddCardPage);
    return AddCardPage;
}());

//# sourceMappingURL=add-card.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCataloguePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__ = __webpack_require__(20);
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
            .then(function (res) {
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
            selector: 'page-my-catalogue',template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\my-catalogue\my-catalogue.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Profile</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n    <div padding>\n\n      <div>\n\n          <ion-thumbnail  class="avabor_profile" item-start>\n\n              <img class="user-img" src="assets/imgs/user-defalut.png">\n\n              </ion-thumbnail>\n\n              <h2 text-center>{{ user.firstName}} {{user.lastName}}</h2>\n\n              <p text-center> {{user.country}}</p>\n\n      </div>\n\n        <ion-list class="profile-list">\n\n          <!-- <ion-item class="profile-item">\n\n            <h4>DOB :</h4>\n\n            <p>{{user.dob | date:\'mediumDate\'}}</p>\n\n          </ion-item> -->\n\n          <ion-item class="profile-item">\n\n            <h4>Email :</h4>\n\n            <p>{{user.email}}</p>\n\n          </ion-item>\n\n          <!-- <ion-item class="profile-item">\n\n            <h4>Phone :</h4>\n\n            <p>{{user.phoneNumber}}</p>\n\n          </ion-item> -->\n\n          <ion-item class="profile-item">\n\n            <h4>Address :</h4>\n\n            <p>{{user.address}}</p>\n\n          </ion-item>\n\n        </ion-list>\n\n        <button ion-button (click)="copyAddress()">Copy Address To Clipboard</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\my-catalogue\my-catalogue.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */]])
    ], MyCataloguePage);
    return MyCataloguePage;
}());

//# sourceMappingURL=my-catalogue.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_qrcode2__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_clipboard__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_webservic_interceptor__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_topup_topup__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_forgot_password_forgot_password__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_create_account_create_account__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_add_card_add_card__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_my_rewards_my_rewards__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_my_catalogue_my_catalogue__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_coupons_coupons__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_create_account_EqualValidator__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_webservic_webservic__ = __webpack_require__(20);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_topup_topup__["a" /* TopupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_coupons_coupons__["a" /* CouponsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_create_account_create_account__["a" /* CreateAccountPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_card_add_card__["a" /* AddCardPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_my_rewards_my_rewards__["a" /* MyRewardsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_my_catalogue_my_catalogue__["a" /* MyCataloguePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_create_account_EqualValidator__["a" /* EqualValidator */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_10__providers_webservic_interceptor__["a" /* InterceptorModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_topup_topup__["a" /* TopupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_create_account_create_account__["a" /* CreateAccountPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_card_add_card__["a" /* AddCardPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_coupons_coupons__["a" /* CouponsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_my_rewards_my_rewards__["a" /* MyRewardsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_my_catalogue_my_catalogue__["a" /* MyCataloguePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__providers_webservic_webservic__["a" /* WebservicProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_my_rewards_my_rewards__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_webservic_webservic__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_my_catalogue_my_catalogue__ = __webpack_require__(344);
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
    function MyApp(platform, menu, statusBar, splashScreen, webservice, storage, events, toastCtrl) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.webservice = webservice;
        this.storage = storage;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.user = {};
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
            { title: 'Account', component: __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__["a" /* NotificationsPage */], icon: 'photos' },
            { title: 'ExchangeRate', component: __WEBPACK_IMPORTED_MODULE_5__pages_my_rewards_my_rewards__["a" /* MyRewardsPage */], icon: 'send' },
            { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__["a" /* NotificationsPage */], icon: 'lock' },
            // {title: 'Invite Friends ', component: InviteFriendsPage},
            { title: 'Sign Out', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */], icon: 'log-out' }
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
        if (page.title == 'Account') {
            this.menu.close();
            this.nav.setRoot(page.component);
        }
        else if (page.title == 'Sign Out') {
            this.logOut();
        }
        else {
            this.menu.close();
            this.nav.push(page.component);
        }
    };
    MyApp.prototype.getUserInfo = function () {
        var self = this;
        self.webservice.getUserInfo()
            .then(function (res) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\work\enswallet-mobile\src\app\app.html"*/'<ion-menu [content]=\'content\'>\n\n\n\n    <ion-header>\n\n        <ion-toolbar class="user-bg">\n\n            <!-- <ion-title>Menu</ion-title> -->\n\n            <ion-list class="user-detail">\n\n                <ion-item no-lines  (click)="goToprofile()">\n\n                    <ion-thumbnail  class="avabor" item-start>\n\n                    <img class="user-img" src="assets/imgs/user-defalut.png">\n\n                    </ion-thumbnail>\n\n                </ion-item>\n\n                <ion-item no-lines >\n\n                        <h2 text-center>{{ user.firstName}} {{user.lastName}}</h2>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content class="side_bar">\n\n        <ion-item-group>\n\n               <ion-item no-lines *ngFor=\'let p of pages\' class="sidemenu_item" >\n\n                    <ion-icon class="icon_colr" [name]="p.icon" item-start></ion-icon>\n\n                    <button ion-item  class="menu_item"   (click)="openPage(p)">\n\n                            {{p.title}}\n\n                        </button>\n\n               </ion-item>\n\n            <!-- <ion-item-divider color="primary">Smart Service</ion-item-divider> -->\n\n          \n\n        </ion-item-group>\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\work\enswallet-mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_webservic_webservic__["a" /* WebservicProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 212,
	"./af.js": 212,
	"./ar": 213,
	"./ar-dz": 214,
	"./ar-dz.js": 214,
	"./ar-kw": 215,
	"./ar-kw.js": 215,
	"./ar-ly": 216,
	"./ar-ly.js": 216,
	"./ar-ma": 217,
	"./ar-ma.js": 217,
	"./ar-sa": 218,
	"./ar-sa.js": 218,
	"./ar-tn": 219,
	"./ar-tn.js": 219,
	"./ar.js": 213,
	"./az": 220,
	"./az.js": 220,
	"./be": 221,
	"./be.js": 221,
	"./bg": 222,
	"./bg.js": 222,
	"./bm": 223,
	"./bm.js": 223,
	"./bn": 224,
	"./bn.js": 224,
	"./bo": 225,
	"./bo.js": 225,
	"./br": 226,
	"./br.js": 226,
	"./bs": 227,
	"./bs.js": 227,
	"./ca": 228,
	"./ca.js": 228,
	"./cs": 229,
	"./cs.js": 229,
	"./cv": 230,
	"./cv.js": 230,
	"./cy": 231,
	"./cy.js": 231,
	"./da": 232,
	"./da.js": 232,
	"./de": 233,
	"./de-at": 234,
	"./de-at.js": 234,
	"./de-ch": 235,
	"./de-ch.js": 235,
	"./de.js": 233,
	"./dv": 236,
	"./dv.js": 236,
	"./el": 237,
	"./el.js": 237,
	"./en-au": 238,
	"./en-au.js": 238,
	"./en-ca": 239,
	"./en-ca.js": 239,
	"./en-gb": 240,
	"./en-gb.js": 240,
	"./en-ie": 241,
	"./en-ie.js": 241,
	"./en-il": 242,
	"./en-il.js": 242,
	"./en-nz": 243,
	"./en-nz.js": 243,
	"./eo": 244,
	"./eo.js": 244,
	"./es": 245,
	"./es-do": 246,
	"./es-do.js": 246,
	"./es-us": 247,
	"./es-us.js": 247,
	"./es.js": 245,
	"./et": 248,
	"./et.js": 248,
	"./eu": 249,
	"./eu.js": 249,
	"./fa": 250,
	"./fa.js": 250,
	"./fi": 251,
	"./fi.js": 251,
	"./fo": 252,
	"./fo.js": 252,
	"./fr": 253,
	"./fr-ca": 254,
	"./fr-ca.js": 254,
	"./fr-ch": 255,
	"./fr-ch.js": 255,
	"./fr.js": 253,
	"./fy": 256,
	"./fy.js": 256,
	"./gd": 257,
	"./gd.js": 257,
	"./gl": 258,
	"./gl.js": 258,
	"./gom-latn": 259,
	"./gom-latn.js": 259,
	"./gu": 260,
	"./gu.js": 260,
	"./he": 261,
	"./he.js": 261,
	"./hi": 262,
	"./hi.js": 262,
	"./hr": 263,
	"./hr.js": 263,
	"./hu": 264,
	"./hu.js": 264,
	"./hy-am": 265,
	"./hy-am.js": 265,
	"./id": 266,
	"./id.js": 266,
	"./is": 267,
	"./is.js": 267,
	"./it": 268,
	"./it.js": 268,
	"./ja": 269,
	"./ja.js": 269,
	"./jv": 270,
	"./jv.js": 270,
	"./ka": 271,
	"./ka.js": 271,
	"./kk": 272,
	"./kk.js": 272,
	"./km": 273,
	"./km.js": 273,
	"./kn": 274,
	"./kn.js": 274,
	"./ko": 275,
	"./ko.js": 275,
	"./ky": 276,
	"./ky.js": 276,
	"./lb": 277,
	"./lb.js": 277,
	"./lo": 278,
	"./lo.js": 278,
	"./lt": 279,
	"./lt.js": 279,
	"./lv": 280,
	"./lv.js": 280,
	"./me": 281,
	"./me.js": 281,
	"./mi": 282,
	"./mi.js": 282,
	"./mk": 283,
	"./mk.js": 283,
	"./ml": 284,
	"./ml.js": 284,
	"./mn": 285,
	"./mn.js": 285,
	"./mr": 286,
	"./mr.js": 286,
	"./ms": 287,
	"./ms-my": 288,
	"./ms-my.js": 288,
	"./ms.js": 287,
	"./mt": 289,
	"./mt.js": 289,
	"./my": 290,
	"./my.js": 290,
	"./nb": 291,
	"./nb.js": 291,
	"./ne": 292,
	"./ne.js": 292,
	"./nl": 293,
	"./nl-be": 294,
	"./nl-be.js": 294,
	"./nl.js": 293,
	"./nn": 295,
	"./nn.js": 295,
	"./pa-in": 296,
	"./pa-in.js": 296,
	"./pl": 297,
	"./pl.js": 297,
	"./pt": 298,
	"./pt-br": 299,
	"./pt-br.js": 299,
	"./pt.js": 298,
	"./ro": 300,
	"./ro.js": 300,
	"./ru": 301,
	"./ru.js": 301,
	"./sd": 302,
	"./sd.js": 302,
	"./se": 303,
	"./se.js": 303,
	"./si": 304,
	"./si.js": 304,
	"./sk": 305,
	"./sk.js": 305,
	"./sl": 306,
	"./sl.js": 306,
	"./sq": 307,
	"./sq.js": 307,
	"./sr": 308,
	"./sr-cyrl": 309,
	"./sr-cyrl.js": 309,
	"./sr.js": 308,
	"./ss": 310,
	"./ss.js": 310,
	"./sv": 311,
	"./sv.js": 311,
	"./sw": 312,
	"./sw.js": 312,
	"./ta": 313,
	"./ta.js": 313,
	"./te": 314,
	"./te.js": 314,
	"./tet": 315,
	"./tet.js": 315,
	"./tg": 316,
	"./tg.js": 316,
	"./th": 317,
	"./th.js": 317,
	"./tl-ph": 318,
	"./tl-ph.js": 318,
	"./tlh": 319,
	"./tlh.js": 319,
	"./tr": 320,
	"./tr.js": 320,
	"./tzl": 321,
	"./tzl.js": 321,
	"./tzm": 322,
	"./tzm-latn": 323,
	"./tzm-latn.js": 323,
	"./tzm.js": 322,
	"./ug-cn": 324,
	"./ug-cn.js": 324,
	"./uk": 325,
	"./uk.js": 325,
	"./ur": 326,
	"./ur.js": 326,
	"./uz": 327,
	"./uz-latn": 328,
	"./uz-latn.js": 328,
	"./uz.js": 327,
	"./vi": 329,
	"./vi.js": 329,
	"./x-pseudo": 330,
	"./x-pseudo.js": 330,
	"./yo": 331,
	"./yo.js": 331,
	"./zh-cn": 332,
	"./zh-cn.js": 332,
	"./zh-hk": 333,
	"./zh-hk.js": 333,
	"./zh-tw": 334,
	"./zh-tw.js": 334
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
webpackContext.id = 433;

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpsRequestInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(349);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* ToastController */]])
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

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(112);
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
            selector: 'page-forgot-passwor',template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\forgot-password\forgot-password.html"*/'<ion-content class="login-content" padding>\n\n    <ion-row class="logo-row">\n\n      <ion-col></ion-col>\n\n      <ion-col width-67>\n\n        <img style="max-width: 303px !important;" src="http://placehold.it/500x300"/>\n\n      </ion-col>\n\n      <ion-col></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <div class="title">\n\n        <h1>Forgot Password?</h1>\n\n        <p>Enter your login, we will send you recovery password</p>\n\n      </div>\n\n    </ion-row>\n\n    <div class="forgot-box">\n\n      <form>\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list inset>\n\n              \n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Email" name="email" required></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item></ion-item>\n\n\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n        <ion-row>\n\n          <ion-col class="signup-col">\n\n            <button ion-button class="submit-btn" full type="submit" >Recover Password</button>\n\n            <button ion-button class="btl-btn" clear (click)="goToLoginPage()">Back to Login</button>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n      </form>\n\n    </div>\n\n    <ion-row>\n\n      <div class="copyright"><p>Copyright © 2017 Revo Rewards</p></div>\n\n    </ion-row>\n\n  </ion-content>'/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_rewards_my_rewards__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, webserve, menu, events) {
        this.navCtrl = navCtrl;
        this.webserve = webserve;
        this.menu = menu;
        this.events = events;
        this.etherAccount = {
            address: '-',
            balance: 0
        };
        this.evensAccount = {
            address: '-',
            balance: 0
        };
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
            tokenThreeSym: ''
        };
        this.gettodayPrice();
        this.getAllBalance();
        this.menu.enable(true);
        this.events.publish('getUser', true);
        // this.getBalance()
        // this.evensBalance();1
    }
    NotificationsPage.prototype.getBalance = function () {
        var self = this;
        self.webserve.getBalance()
            .then(function (res) {
            console.log('res', res);
            self.etherAccount = res;
        }, function (err) {
            console.log("err", err);
        });
    };
    NotificationsPage.prototype.getAllBalance = function () {
        var self = this;
        self.webserve.getAllBalance()
            .then(function (res) {
            self.allBalance = res;
        }, function (err) {
        });
    };
    NotificationsPage.prototype.evensBalance = function () {
        var self = this;
        self.webserve.evensBalance()
            .then(function (res) {
            // console.log('res',res)
            self.evensAccount = res;
        }, function (err) {
            // console.log("err",err)
        });
    };
    NotificationsPage.prototype.openSingleNotification = function (coin, type) {
        this.webserve.setSelecetedcoin(coin);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], { data: type });
    };
    NotificationsPage.prototype.gettodayPrice = function () {
        var self = this;
        self.webserve.getTodayPrice()
            .then(function (res) {
            self.todayPrice = res;
        }, function (err) {
            console.log(err);
        });
    };
    NotificationsPage.prototype.goToPricePage = function () {
        var self = this;
        self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_rewards_my_rewards__["a" /* MyRewardsPage */]);
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"D:\work\enswallet-mobile\src\pages\notifications\notifications.html"*/'<ion-header>\n\n        <ion-navbar color="primary">\n\n                <button ion-button menuToggle>\n\n                        <ion-icon name="menu"></ion-icon>\n\n                </button>\n\n                <ion-title>Wallet</ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card class="wallat_main">\n\n        <div class="wall_txt_cen" (click)="goToPricePage()">\n\n                <h2 class="mywalletTxt">My Wallet</h2>\n\n                <!-- <p class="wall_amount">$49994.5</p>     -->\n\n                \n\n        </div>\n\n        \n\n    </ion-card>\n\n        <ion-list>\n\n            <ion-card class="card_trans">\n\n                    <ion-item  (click)=\'openSingleNotification("Etheriun","coin")\'>\n\n                            <div class="row">\n\n                                    <div class="">\n\n                                                <ion-thumbnail  item-start>\n\n                                                                <img class="coinimg" src="assets/imgs/icons8-ethereum-40.png">\n\n                                                                </ion-thumbnail>\n\n                                    </div>\n\n                                    <div class="col">\n\n                                                <h3 class="fontWhite item_text" text-right>{{ allBalance.eth | number:\'.3\' }}</h3>\n\n\n\n                                    </div>\n\n                                    <div class="col">\n\n                                        <h3 class="fontWhite item_text" text-left>ETH</h3>\n\n\n\n                                    </div>\n\n                                    <div class="col">\n\n                                                <h3 class="fontWhite item_text" text-right> {{  allBalance.eth / todayPrice.ETH | number:\'.3\' }} $</h3>\n\n\n\n                                    </div>\n\n                            </div>\n\n                          \n\n                            <!-- <button ion-button clear (click)=\'openSingleNotification()\' item-end>View</button> -->\n\n                        </ion-item>\n\n            </ion-card>\n\n            <ion-card class="card_trans">\n\n                    <ion-item (click)=\'openSingleNotification("evenscoin","coin")\'>\n\n                                <div class="row">\n\n                                        <div class="">\n\n                                                        <ion-thumbnail   item-start>\n\n                                                                        <img class="coinimg" style="height: 25px !important;margin-top: 10px;" src="assets/imgs/evens.png">\n\n                                                                        </ion-thumbnail>\n\n                                        </div>\n\n                                        <div class="col">\n\n                                                        <h3 class="fontWhite item_text" text-right>{{  allBalance.ens | number:\'.3\'}}</h3>\n\n                                        </div>\n\n                                        <div class="col">\n\n                                                <h3 class="fontWhite item_text" text-left>ENS</h3>\n\n                                        </div>\n\n                                        <div class="col">\n\n                                                        <h3 class="fontWhite item_text" text-right> {{  allBalance.ens / todayPrice.BTT | number:\'.3\' }} $ </h3>\n\n                                        </div>\n\n                                </div>\n\n                          \n\n                            \n\n                            \n\n                        </ion-item>\n\n            </ion-card>\n\n            <ion-card class="card_trans">\n\n                    <ion-item (click)=\'openSingleNotification("tokenOne","token")\'>\n\n                            <div class="row">\n\n                                    <div>\n\n                                            <ion-thumbnail  item-start>\n\n                                                <img class="coinimg" src="assets/imgs/icons8-rupee-40.png">\n\n                                                </ion-thumbnail>\n\n                                     </div> \n\n                                    <div class="col">\n\n                                                <h3 class="fontWhite item_text" text-right>{{ allBalance.tokenOne | number:\'.3\' }} </h3>\n\n                                    </div>\n\n                                    <div class="col">\n\n                                        <h3 class="fontWhite item_text" text-left>{{allBalance.tokenOneSym}}</h3>\n\n                                    </div>\n\n                                    <div class="col">\n\n                                                <h3 class="fontWhite item_text" text-right> {{  allBalance.tokenOne / todayPrice.INR | number:\'.3\' }} $ </h3>\n\n                                    </div>\n\n                            </div>\n\n                            \n\n                           \n\n                        </ion-item>\n\n            </ion-card>\n\n            <ion-card class="card_trans">\n\n                        <ion-item (click)=\'openSingleNotification("tokenTwo","token")\'>\n\n                                <div class="row">\n\n                                        <div>\n\n                                                        <ion-thumbnail  item-start>\n\n                                                            <img class="coinimg" src="assets/imgs/icons8-bitcoin-40.png">\n\n                                                         </ion-thumbnail>\n\n                                        </div>\n\n                                        <div class="col">\n\n                                                <h3 class="fontWhite item_text" text-right>{{ allBalance.tokenTwo |  number:\'.3\' }}</h3>\n\n                                        </div>\n\n                                        <div class="col">\n\n                                                <h3 class="fontWhite item_text" text-left>{{allBalance.tokenTwoSym}} </h3>\n\n                                        </div>\n\n                                        <div class="col">\n\n                                                        <h3 class="fontWhite item_text" text-right> {{  allBalance.tokenTwo / todayPrice.THB | number:\'.3\' }} $</h3>\n\n                                        </div>\n\n                                </div>\n\n                                \n\n                                \n\n                            </ion-item>\n\n                </ion-card>\n\n                <ion-card class="card_trans">\n\n                                <ion-item (click)=\'openSingleNotification("tokenThree","token")\'>\n\n                                        <div class="row">\n\n                                                <div>\n\n                                                                <ion-thumbnail  item-start>\n\n                                                                     <img class="coinimg" src="assets/imgs/icons8-won-40.png">\n\n                                                                 </ion-thumbnail>\n\n                                                </div>\n\n                                                <div class="col"><h3 class="fontWhite item_text" text-right>{{ allBalance.tokenThree |  number:\'.3\' }}</h3></div>\n\n                                                <div class="col"><h3 class="fontWhite item_text" text-left>{{allBalance.tokenThreeSym}}</h3></div>\n\n                                                <div class="col"><h3 class="fontWhite item_text" text-right> {{  allBalance.tokenThree / todayPrice.KRW | number:\'.3\' }} $ </h3></div>\n\n                                        </div>\n\n\n\n                                        \n\n                                    </ion-item>\n\n                        </ion-card>\n\n                        <!-- <ion-card class="card_trans">\n\n                                        <ion-item>\n\n                                <div class="row">\n\n                                        <div>\n\n                                                        <ion-thumbnail  item-start>\n\n                                                             <img class="coinimg" src="assets/imgs/inr.png">\n\n                                                          </ion-thumbnail>\n\n                                        </div>\n\n                                        <div class="col"> <h3 class="fontWhite item_text" text-right>480</h3></div>\n\n                                        <div class="col"> <h3 class="fontWhite item_text" text-left>TOK4</h3></div>\n\n                                        <div class="col"> <h3 class="fontWhite item_text" text-right> 5073.98 TOK </h3></div>\n\n                                </div>\n\n                                      \n\n                                               \n\n                                               \n\n                                            </ion-item>\n\n                                </ion-card> -->\n\n            \n\n\n\n        </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\work\enswallet-mobile\src\pages\notifications\notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_webservic_webservic__["a" /* WebservicProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map