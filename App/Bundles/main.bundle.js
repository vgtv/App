webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container a-text\">\r\n  <h2 class=\"text-center\"><strong>Om Tjenesten</strong></h2>\r\n  <div class=\"card card-p\">\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text text-justify\">\r\n        \"Tjenesten\" er basert på en tidligere datainnsamling av bachelorgruppen bak <a href=\"http://forskningsindeksen.vlab.cs.hioa.no/index.html\">Forskningsindeksen</a>.\r\n        Datainnsamling dateres opp til 2016 fra det nåværende forskningsinformasjonssystemet i Norge, <a href=\"http://www.cristin.no/\">Cristin</a>.\r\n\r\n        Av dette datagrunnlaget genererer tjenesten ny informasjon basert på titler fra engelskspråklige arbeider,\r\n        for så å kategorsiere forskere med like interesseområder.\r\n\r\n        Basert på en forskers interesser sammenlignes relevante forskere på kvalitet og kvantitet på publiseringene.\r\n        Du kan lese mer om den eldre utregningsmodellen på\r\n        <a href=\"https://www.ntnu.no/blogger/ub-bibliometri/2017/11/10/hva-er-publiseringspoeng/\">NTNU</a> sin nettside.\r\n        <br />\r\n        <br />\r\n        Applikasjonen har detaljerte profiler for over 20.000 forskere.\r\n        Forskere med under tre engelskspråklige arbeider fra tidsrommet da dataene er uthentet\r\n        regnes som inaktive og vil ikke ha en detaljert profil. Denne siden er et resultat av et\r\n        bachelorprosjekt og skal ikke benyttes som beslutningsgrunnlag.\r\n        Vi tar ikke ansvar for ukomplette og/eller feil i datagrunnlaget.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container a-text\">\r\n  <h2 class=\"text-center\"><strong>Utviklerne</strong></h2>\r\n  <div class=\"card-group card-p\">\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[0]\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Anton Lilleby</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          Fullstack Developer\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <a href=\"https://www.linkedin.com/in/anton-lilleby-987030105/\" class=\"btn btn-light btn-outline-primary\">LinkedIn</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[1]\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Anders Gillholm</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          UX Designer/Frontend\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <a href=\"https://www.linkedin.com/in/anders-cleife-gillholm/\" class=\"btn btn-light btn-outline-primary\">LinkedIn</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[2]\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Julian Hjallum</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          Oslo Metropolitan University\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <a href=\"https://www.linkedin.com/in/julian-hjallum-27540313b/\" class=\"btn btn-light btn-outline-primary\">LinkedIn</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[3]\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Robin Pedersen</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          Oslo Metropolitan University\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <a href=\"https://www.linkedin.com/in/pedersenrobin/\" class=\"btn btn-light btn-outline-primary\">LinkedIn</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[4]\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Steffen Marstein</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          Oslo Metropolitan University\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <a href=\"https://www.linkedin.com/in/steffen-marstein-389491110/\" class=\"btn btn-light btn-outline-primary\">LinkedIn</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <h2 class=\"text-center\"><strong>Oppdragsgiver</strong></h2>\r\n  <div class=\"card-group card-p mx-auto col-sm-4 \">\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[5]\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Frode Eika Sandnes</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          Norsk professor i informasjonsteknologi ved Oslo Metropolitan University\r\n        </p>\r\n      </div>\r\n      <!--><div class=\"card-footer\">\r\n        <a href=\"\" class=\"btn btn-light btn-outline-primary\">Linkedin</a>\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = "a {\n  width: 100%; }\n\n.profile-card {\n  margin-bottom: 15px;\n  padding: 0.8em; }\n\n.profile-title {\n  color: #0d6797;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-weight: bold; }\n\n.profile-image {\n  margin: auto;\n  float: right;\n  border-style: solid;\n  border-color: lightgrey;\n  width: 26%;\n  height: 26%; }\n\n.profile-action {\n  margin: 0; }\n\np.normal {\n  color: dimgray;\n  font-weight: normal;\n  margin-bottom: 2px; }\n\np.thick {\n  color: dimgray;\n  font-weight: bold;\n  margin-bottom: 0px; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.images = [
            'img/linkedin/anton.png', 'img/linkedin/anders.jpg', 'img/linkedin/julian.jpg',
            'img/linkedin/robin.jpg', 'img/linkedin/steffen.jpg', 'img/linkedin/frode.jpg'
        ];
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/animation/animation.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4\">\r\n    <lottie-animation-view [options]=\"lottieConfig\"\r\n                           [width]=\"200\"\r\n                           [height]=\"200\" (animCreated)=\"setSpeed($event)\">\r\n    </lottie-animation-view>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <lottie-animation-view [options]=\"lottieConfig3\"\r\n                           [width]=\"200\"\r\n                           [height]=\"200\"\r\n                           (animCreated)=\"setSpeed($event)\">\r\n    </lottie-animation-view>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <lottie-animation-view [options]=\"lottieConfig2\"\r\n                           [width]=\"200\"\r\n                           [height]=\"200\" (animCreated)=\"setSpeed($event)\">\r\n    </lottie-animation-view>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"text-center\">\r\n      <p class=\"text-muted\">Vi har ny data for over 20.000 norske forskere</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"text-center\">\r\n      <p class=\"text-muted\">\r\n        Se hvordan du ligger an og knytt nye relasjoner ved å benytte søke feltet over\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"text-center\">\r\n      <p class=\"text-muted\">Hver forsker sammenlignes med sitt unike forskningsmiljø</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n  \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/animation/animation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/animation/animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationComponent = /** @class */ (function () {
    function AnimationComponent() {
        this.lottieConfig = {
            path: 'json/animation-school.json',
            autoplay: true,
            loop: true,
        };
        this.lottieConfig2 = {
            path: 'json/animation-w800-h600.json',
            autoplay: true,
            prerender: true,
            loop: true
        };
        this.lottieConfig3 = {
            path: 'json/animation-lab.json',
            autoplay: true,
            loop: true
        };
    }
    AnimationComponent.prototype.setSpeed = function (event) {
        this.a = event;
        this.a.setSpeed(0.5);
    };
    AnimationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-animation',
            template: __webpack_require__("./src/app/animation/animation.component.html"),
            styles: [__webpack_require__("./src/app/animation/animation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnimationComponent);
    return AnimationComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchresults_searchresults_component__ = __webpack_require__("./src/app/searchresults/searchresults.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'search/:query', component: __WEBPACK_IMPORTED_MODULE_4__searchresults_searchresults_component__["a" /* SearchresultsComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_4__searchresults_searchresults_component__["a" /* SearchresultsComponent */]];


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"alertMessage\">\r\n  <ngb-alert *ngIf=\"!closed\" (close)=\"closed = true\">\r\n    <p class=\"text-muted\">\r\n      Hei, vi vil gjøre opperksom på at denne applikasjonen ikke er optimalisert for din <strong>\r\n        {{this.device.device}}\r\n      </strong> enhet.\r\n    </p>\r\n  </ngb-alert>\r\n</div>\r\n\r\n<div *ngIf=\"showSearchBar\">\r\n  <app-topnav></app-topnav>\r\n  <div class=\"container\">\r\n    <div class=\"col-3\" id=\"index-search\">\r\n      <ngbd-typeahead-http></ngbd-typeahead-http>\r\n\r\n      <div class=\"text-center\">\r\n        <br />\r\n        <button type=\"button\" class=\"btn btn-primary btn-lg rounded-circle\"\r\n                (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"Åpe informasjons boks\">\r\n          <strong>?</strong>\r\n        </button>\r\n      </div>\r\n      <div  [ngbCollapse]=\"isCollapsed\">\r\n        <app-animation></app-animation>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!showSearchBar\">\r\n  <app-topnav [default]=\"!showSearchBar\"></app-topnav>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_device_detector__ = __webpack_require__("./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_device_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_device_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, http, deviceService) {
        this.router = router;
        this.http = http;
        this.deviceService = deviceService;
        this.alertMessage = false;
        this.closed = false;
        this.isCollapsed = true;
        this.showSearchBar = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.device = this.deviceService.getDeviceInfo();
        if (this.device.device !== "unknown") {
            this.alertMessage = true;
        }
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                _this.showSearchBar = event.url === '/' ? true : false;
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_device_detector__["DeviceDetectorService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__relevance_callback_pipe__ = __webpack_require__("./src/app/relevance/callback.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__null_pipe__ = __webpack_require__("./src/app/null.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wordcloud_wordcloud_component__ = __webpack_require__("./src/app/wordcloud/wordcloud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scatter_scatter_component__ = __webpack_require__("./src/app/scatter/scatter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__userinfo_userinfo_component__ = __webpack_require__("./src/app/userinfo/userinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__relevance_relevance_component__ = __webpack_require__("./src/app/relevance/relevance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__topnav_topnav_component__ = __webpack_require__("./src/app/topnav/topnav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialog_dialog_component__ = __webpack_require__("./src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__animation_animation_component__ = __webpack_require__("./src/app/animation/animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_google_charts__ = __webpack_require__("./node_modules/ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular_tag_cloud_module__ = __webpack_require__("./node_modules/angular-tag-cloud-module/esm5/angular-tag-cloud-module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng_lottie__ = __webpack_require__("./node_modules/ng-lottie/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_device_detector__ = __webpack_require__("./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_device_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ngx_device_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngx_loading_bar_http_client__ = __webpack_require__("./node_modules/@ngx-loading-bar/http-client/esm5/ngx-loading-bar-http-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngx_loading_bar_core__ = __webpack_require__("./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_button_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["b" /* routingComponents */],
                __WEBPACK_IMPORTED_MODULE_15__topnav_topnav_component__["a" /* TopnavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__wordcloud_wordcloud_component__["a" /* WordcloudComponent */],
                __WEBPACK_IMPORTED_MODULE_12__scatter_scatter_component__["a" /* ScatterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* NgbdTypeaheadHttp */],
                __WEBPACK_IMPORTED_MODULE_13__userinfo_userinfo_component__["a" /* UserinfoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__relevance_relevance_component__["a" /* RelevanceComponent */],
                __WEBPACK_IMPORTED_MODULE_15__topnav_topnav_component__["a" /* TopnavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__relevance_callback_pipe__["a" /* CallbackPipe */],
                __WEBPACK_IMPORTED_MODULE_7__null_pipe__["a" /* NullPipe */],
                __WEBPACK_IMPORTED_MODULE_16__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__animation_animation_component__["a" /* AnimationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_20_ng_lottie__["a" /* LottieAnimationViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_ngx_device_detector__["DeviceDetectorModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_19_angular_tag_cloud_module__["a" /* TagCloudModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18_ng2_google_charts__["a" /* Ng2GoogleChartsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_23__ngx_loading_bar_http_client__["a" /* LoadingBarHttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__ngx_loading_bar_core__["b" /* LoadingBarService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_16__dialog_dialog_component__["a" /* DialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 matDialogTitle class=\"text-center\">Vennligst vent</h3>\r\n<mat-dialog-content>\r\n  <p class=\"text-muted text-center\">{{loadingText}}</p>\r\n  <mat-progress-bar mode=\"determinate\" [value]=\"loader.progress$|async\" aria-label=\"Vi matcher nå forskere sitt fagfelt, vennligst vent\"></mat-progress-bar>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/dialog/dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_loading_bar_core__ = __webpack_require__("./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(loader) {
        this.loader = loader;
        this.changed = false;
        this.data = false;
        if (typeof this.subscribe !== 'undefined') {
            if (this.subscribe) {
                this.loader.set(0);
                this.subscribe.unsubscribe();
            }
        }
        this.setupSubscriber();
    }
    DialogComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    DialogComponent.prototype.setupSubscriber = function () {
        var _this = this;
        this.loader.set(0);
        this.subscribe = this.loader.progress$.subscribe(function (progress) {
            if (_this.data) {
                _this.loader.set(99);
                _this.loader.set(70);
                _this.data = false;
                _this.changed = true;
            }
            else if (!_this.changed) {
                if (progress >= 0 && progress < 55) {
                    _this.loadingText = "Dette kan ta litt tid, vi matcher nå forskningsmiljøet live..";
                }
                else if (progress >= 55 && progress < 80) {
                    _this.loadingText = "Laster inn forskningsmiljø..";
                }
                else if (progress >= 80 && progress < 99) {
                    _this.loadingText = "Laster inn visualisering..";
                }
            }
            else {
                if (progress >= 70 && progress < 99) {
                    _this.loadingText = "Klargjør profil..";
                }
                else if (progress >= 100) {
                    _this.loader.set(0);
                    _this.subscribe.unsubscribe();
                }
            }
        });
    };
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_loading_bar_core__["b" /* LoadingBarService */]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/null.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NullPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NullPipe = /** @class */ (function () {
    function NullPipe() {
    }
    NullPipe.prototype.transform = function (value) {
        if (value === 'null') {
            return 'Ukjent';
        }
        return value;
    };
    NullPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'unknown',
            pure: false
        })
    ], NullPipe);
    return NullPipe;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"userinfo\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <app-userinfo [input]=\"cristinID\"></app-userinfo>\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <app-wordcloud [input]=\"cristinID\" (activeCloud)=\"setActive($event)\"></app-wordcloud>\r\n    </div>\r\n    <div *ngIf=\"showMessage\">\r\n      <h3 class=\"text-danger\">Ikke nok engelskspråkelige arbeider</h3>\r\n      <hr />\r\n      <p>Denne profilen har ikke nok engelskspråkelige arbeider.</p>\r\n      <p>Du kan lese mer om de ulike kravene i seksjonen  <a routerLink=\"/about\">\"Om tjenesten\"</a></p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"activeProfile\">\r\n  <app-scatter [input]=\"cristinID\" [ready]=\"showContent\" (showPlot)=\"setPlotState($event)\"></app-scatter>\r\n  <div class=\"container-fluid\" id=\"relevance\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm\">\r\n        <app-relevance [input]=\"cristinID\" [ready]=\"showContent\" (showTable)=\"setTableState($event)\"></app-relevance>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_loading_bar_core__ = __webpack_require__("./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__ = __webpack_require__("./src/app/dialog/dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, loader, dialog) {
        this.router = router;
        this.loader = loader;
        this.dialog = dialog;
    }
    ProfileComponent.prototype.openLoader = function () {
        this.aref = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__["a" /* DialogComponent */], {
            disableClose: true,
            width: '500px',
            closeOnNavigation: true
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.setupSubscriptions();
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.dialog.closeAll();
        this.navigation.unsubscribe();
    };
    ProfileComponent.prototype.setActive = function (state) {
        this.activeProfile = state;
        if (this.activeProfile === true) {
            this.openLoader();
        }
        this.showMessage = !state;
    };
    ProfileComponent.prototype.setPlotState = function (state) {
        if (state === true) {
            this.showPlot = true;
            this.aref.componentInstance.data = true;
        }
        this.readyToShow();
    };
    ProfileComponent.prototype.setTableState = function (state) {
        if (state === true) {
            this.showTable = true;
        }
        this.readyToShow();
    };
    ProfileComponent.prototype.readyToShow = function () {
        if (this.showPlot && this.showTable) {
            this.showContent = true;
            this.dialog.closeAll();
        }
    };
    ProfileComponent.prototype.setupSubscriptions = function () {
        var _this = this;
        this.navigation = this.router.params.subscribe(function (params) {
            _this.cristinID = params['id'];
            _this.showTable = false;
            _this.showPlot = false;
            _this.showContent = false;
            _this.activeProfile = false;
            _this.showMessage = false;
            _this.dialog.closeAll();
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_loading_bar_core__["b" /* LoadingBarService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatDialog */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/relevance/callback.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CallbackPipe = /** @class */ (function () {
    function CallbackPipe() {
    }
    CallbackPipe.prototype.transform = function (items, value, valueNeutrality, valueEnviroment) {
        if (!value) {
            return items;
        }
        return items.filter(function (item) { return item.neutrality === !valueNeutrality && item.enviroment == !valueEnviroment; });
    };
    CallbackPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'callback',
            pure: false
        })
    ], CallbackPipe);
    return CallbackPipe;
}());



/***/ }),

/***/ "./src/app/relevance/relevance.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ready\">\r\n  <ng-template #t let-fill=\"fill\">\r\n    <span class=\"star\" [class.full]=\"fill === 100\">\r\n      <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\r\n    </span>\r\n  </ng-template>\r\n\r\n\r\n  <ul class=\"list-inline\">\r\n    <li class=\"list-inline-item\">\r\n      <mat-button-toggle-group>\r\n        <mat-button-toggle value=\"true\" (change)=\"filterChange($event)\">Filtrering På</mat-button-toggle>\r\n        <mat-button-toggle value=\"false\" (change)=\"filterChange($event)\" [checked]=\"checked\">Filtrering Av</mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n    </li>\r\n    <li class=\"list-inline-item\" *ngIf=\"showFilter\">\r\n      <mat-button-toggle-group>\r\n        <mat-button-toggle value=\"true\" (change)=\"enviromentChange($event)\" [checked]=\"checked\">Eksterne</mat-button-toggle>\r\n        <mat-button-toggle value=\"false\" (change)=\"enviromentChange($event)\">Kollegaer</mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n    </li>\r\n    <li class=\"list-inline-item\" *ngIf=\"showFilter\">\r\n      <mat-button-toggle-group>\r\n        <mat-button-toggle value=\"false\" (change)=\"neutralityChange($event)\">Medforfattere</mat-button-toggle>\r\n        <mat-button-toggle value=\"true\" (change)=\"neutralityChange($event)\" [checked]=\"checked\">Ikke-medforfattere</mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n    </li>\r\n  </ul>\r\n\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-hover table-light\">\r\n      <thead class=\"table-light\">\r\n        <tr>\r\n          <th>Relevans</th>\r\n          <th>Forsker</th>\r\n          <th>Posisjon</th>\r\n          <th>Institusjon</th>\r\n          <th>Institutt</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let person of dataTable | callback: showFilter : valueNeutrality : valueEnviroment |  paginate: { itemsPerPage: 10, currentPage: page }\">\r\n          <td><ngb-rating [rate]=\"person.similarities\" [starTemplate]=\"t\"></ngb-rating></td>\r\n          <td>{{person.firstName}} {{person.lastName}}</td>\r\n          <td>{{person?.position}}</td>\r\n          <td>{{person?.institution}}</td>\r\n          <td>{{person?.institute}}</td>\r\n          <td><input type=\"button\" class=\"btn btn-primary\" value=\"Besøk\" (click)=\"navigateToProfile(person.cristinID)\" /></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <pagination-controls previousLabel=\"Tilbake\" nextLabel=\"Neste\" (pageChange)=\"page = $event\"></pagination-controls>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/relevance/relevance.component.scss":
/***/ (function(module, exports) {

module.exports = ".star {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n\n.full {\n  color: darkorange; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: darkorange; }\n\n.mat-button-toggle {\n  height: 2em; }\n\n.mat-button-toggle {\n  color: black;\n  background-color: white; }\n\n.mat-button-toggle-checked {\n  background-color: #FFC107; }\n"

/***/ }),

/***/ "./src/app/relevance/relevance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelevanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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




var RelevanceComponent = /** @class */ (function () {
    function RelevanceComponent(http, config, router) {
        this.http = http;
        this.router = router;
        this.showTable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.apiURL = 'api/apirelevance?cristinID=';
        this.neutrality = true;
        this.enviroment = true;
        this.page = 1;
        this.checked = true;
        this.showFilter = false;
        this.valueNeutrality = false;
        this.valueEnviroment = false;
        config.max = 5;
        config.readonly = true;
    }
    RelevanceComponent.prototype.filterChange = function (event) {
        if (event.value === "true") {
            this.showFilter = true;
            this.valueEnviroment = true;
            this.valueNeutrality = true;
        }
        else {
            this.showFilter = false;
        }
    };
    RelevanceComponent.prototype.enviromentChange = function (event) {
        if (event.value === "true") {
            this.valueEnviroment = true;
        }
        else {
            this.valueEnviroment = false;
        }
    };
    RelevanceComponent.prototype.neutralityChange = function (event) {
        if (event.value === "true") {
            this.valueNeutrality = true;
        }
        else {
            this.valueNeutrality = false;
        }
    };
    RelevanceComponent.prototype.ngOnChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.pendingHttp) {
                            this.pendingHttp.unsubscribe();
                        }
                        if (!!this.ready) return [3 /*break*/, 2];
                        this.neutrality = true;
                        this.enviroment = true;
                        return [4 /*yield*/, this.initializeTable(this.input)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    RelevanceComponent.prototype.navigateToProfile = function (cristinID) {
        this.router.navigate(['/profile', cristinID]);
    };
    RelevanceComponent.prototype.ngOnDestroy = function () {
        this.pendingHttp.unsubscribe();
    };
    RelevanceComponent.prototype.initializeTable = function (cristinID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.pendingHttp = this.http.get(this.apiURL + cristinID)
                    .subscribe(function (results) {
                    _this.dataTable = results;
                    _this.showTable.emit(true);
                }, function (msg) {
                    if (msg.error === 'No data found for user') {
                        _this.showTable.emit(false);
                        // vis at det ikke finnes data for bruker
                    }
                    else {
                        _this.showTable.emit(false);
                        console.error(msg.status); // videre arbeid logges i db f.eks
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], RelevanceComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], RelevanceComponent.prototype, "ready", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RelevanceComponent.prototype, "showTable", void 0);
    RelevanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-relevance',
            template: __webpack_require__("./src/app/relevance/relevance.component.html"),
            styles: [__webpack_require__("./src/app/relevance/relevance.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbRatingConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbRatingConfig */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], RelevanceComponent);
    return RelevanceComponent;
}());



/***/ }),

/***/ "./src/app/scatter/scatter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"scatter\" *ngIf=\"ready\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <div class=\"text-center\">\r\n        <h1><strong>Forskningsmiljø</strong></h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <google-chart #cchart [data]=\"chartData\"></google-chart>\r\n    </div>\r\n\r\n    <div class=\"col-sm\">\r\n      <div class=\"card\" style=\"margin-top:4.2%\">\r\n        <br />\r\n        <h6 class=\"text-center\">Tegnforklaring</h6>\r\n        <div class=\"card-body\">\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">\r\n              <span class=\"badge badge-pill badge-warning\" style=\"margin-bottom:2px\"> </span> {{person}}\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <span class=\"badge badge-pill badge-primary\" style=\"margin-bottom:2px\"> </span> Toppstilling\r\n              <p class=\"text-muted\">(Professor, Professor II, Emeritus, Forsker I, Dosent)</p>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <span class=\"badge badge-pill badge-info\" style=\"margin-bottom:2px\"> </span> Andre stillinger\r\n            </li>\r\n          </ul>\r\n\r\n          <hr />\r\n          <div class=\"text-center\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"isCollapsed = !isCollapsed\"\r\n                    [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n              Hva er det jeg ser på?\r\n            </button>\r\n            <p class=\"text-muted\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n              I visualiseringen kan man se forskere som er relevante i forhold til <strong>{{person}}</strong>\r\n              sin ordsky. Hver relevante forsker sammenlignes på\r\n              kvalitet og antall publikasjoner.\r\n            </p>\r\n\r\n            <hr />\r\n            <h6>Verktøy</h6>\r\n            <mat-button-toggle-group>\r\n              <mat-button-toggle value=\"on\" (change)=\"logChange($event)\">log-lineær</mat-button-toggle>\r\n              <mat-button-toggle value=\"off\" (change)=\"logChange($event)\" [checked]=\"checked\">lineær</mat-button-toggle>\r\n            </mat-button-toggle-group>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/scatter/scatter.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-button-toggle {\n  height: 2em; }\n\n.mat-button-toggle {\n  color: black;\n  background-color: white; }\n\n.mat-button-toggle-checked {\n  background-color: #FFC107; }\n\n.badge-warning {\n  background-color: #ffbd45; }\n\n.badge-primary {\n  background-color: #0077C2; }\n\n.badge-info {\n  background-color: #80D6FF; }\n"

/***/ }),

/***/ "./src/app/scatter/scatter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScatterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_cloneDeep__ = __webpack_require__("./node_modules/lodash/cloneDeep.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_cloneDeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_cloneDeep__);
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




var ScatterComponent = /** @class */ (function () {
    function ScatterComponent(http) {
        this.http = http;
        this.showPlot = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.checked = true;
        this.isCollapsed = true;
        this.apiURL = 'api/apiscatterplot?cristinID=';
        this.actualWidth = window.innerWidth * 0.5;
        this.actualHeight = window.innerHeight * 0.6;
        this.setupChart();
    }
    ScatterComponent.prototype.logChange = function (event) {
        if (event.value === "on") {
            this.cchart.wrapper.setDataTable(this.logData);
        }
        else {
            this.cchart.wrapper.setDataTable(this.chartData.dataTable);
        }
        this.cchart.redraw();
    };
    ScatterComponent.prototype.ngOnDestroy = function () {
        this.pendingHttp.unsubscribe();
    };
    ScatterComponent.prototype.ngOnChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.pendingHttp) {
                            this.pendingHttp.unsubscribe();
                        }
                        if (!!this.ready) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initializeScatter(this.input)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ScatterComponent.prototype.initializeScatter = function (cristinID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.http.get(this.apiURL + cristinID)
                                .subscribe(function (results) {
                                _this.chartData.dataTable = results;
                                _this.showPlot.emit(true);
                                _this.logData = __WEBPACK_IMPORTED_MODULE_2_lodash_cloneDeep__(_this.chartData.dataTable);
                                var counter = 0;
                                var found = false;
                                for (var _i = 0, _a = _this.logData.rows; _i < _a.length; _i++) {
                                    var row = _a[_i];
                                    for (var _b = 0, _c = row.c; _b < _c.length; _b++) {
                                        var cell = _c[_b];
                                        var value = cell.v + "";
                                        if (!value.startsWith("#") && value.indexOf('.') == -1 && value !== '1') {
                                            cell.v = Math.log(Number(cell.v));
                                        }
                                        if (counter === (_this.logData.rows.length - 1) && !found) {
                                            _this.person = cell.f;
                                            found = true;
                                        }
                                    }
                                    ++counter;
                                }
                            }, function (msg) {
                                if (msg.error === 'No data found for user') {
                                    _this.showPlot.emit(false);
                                    // vis at det ikke finnes data for bruker
                                }
                                else {
                                    _this.showPlot.emit(false);
                                    console.error(msg.status);
                                }
                            })];
                    case 1:
                        _a.pendingHttp = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScatterComponent.prototype.onWindowResize = function (event) {
        this.actualWidth = window.innerWidth * 0.5;
        this.actualHeight = window.innerHeight * 0.6;
        this.cchart.wrapper.setOption('height', this.actualHeight);
        this.cchart.wrapper.setOption('width', this.actualWidth);
        this.cchart.redraw();
        // you can remove two lines that preserve selection if you don't need them
    };
    ScatterComponent.prototype.setupChart = function () {
        this.chartData = {
            dataTable: [],
            chartType: 'ScatterChart',
            options: {
                width: this.actualWidth, height: this.actualHeight,
                chartArea: { top: '3%', left: '10%', bottom: '10%', right: '2%', width: '100%', height: '100%' },
                backgroundColor: 'transparent',
                hAxis: {
                    title: 'Kvalitet',
                    titleTextStyle: {
                        color: '#0077c2',
                        fontSize: 18,
                        bold: true
                    },
                },
                legend: 'none',
                vAxis: {
                    title: 'Kvantitet',
                    titleTextStyle: {
                        color: '#0077c2',
                        fontSize: 18,
                        bold: true
                    },
                },
                animation: {
                    startup: true,
                    duration: 2000,
                    easing: 'inAndOut'
                }
            }
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ScatterComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ScatterComponent.prototype, "ready", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ScatterComponent.prototype, "showPlot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cchart'),
        __metadata("design:type", Object)
    ], ScatterComponent.prototype, "cchart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScatterComponent.prototype, "onWindowResize", null);
    ScatterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scatter',
            template: __webpack_require__("./src/app/scatter/scatter.component.html"),
            styles: [__webpack_require__("./src/app/scatter/scatter.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ScatterComponent);
    return ScatterComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!--  Denne er for topnav -->\r\n<div *ngIf=\"showTopNav\">\r\n  <div class=\"form-inline\">\r\n    <div class=\"input-group\">\r\n      <input id=\"typehead-http\" type=\"text\" class=\"form-control form-control-lg\"\r\n             [class.is-invalid]=\"searchFailed\"\r\n             [(ngModel)]=\"model\"\r\n             [ngbTypeahead]=\"search\"\r\n             placeholder=\"Søk etter norsk forsker\"\r\n             [resultFormatter]=\"formatMatches\"\r\n             [inputFormatter]=\"resultMatches\"\r\n             (selectItem)=\"onSearch($event)\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-lg btn-warning\" style=\"width:4em\" type=\"button\" (click)=\"onSearchButton()\">\r\n          <mat-progress-spinner *ngIf=\"searching\" [diameter]=\"30\" mode=\"indeterminate\"></mat-progress-spinner>\r\n          <span *ngIf=\"!searching\">Søk</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--  Denne er for forsiden  -->\r\n<div *ngIf=\"!showTopNav\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"input-group col-md-8\">\r\n        <input id=\"typeahead-http\" type=\"text\" class=\"form-control form-control-lg\"\r\n               style=\"height:3em\"\r\n               [class.is-invalid]=\"searchFailed\"\r\n               [(ngModel)]=\"model\"\r\n               [ngbTypeahead]=\"search\"\r\n               placeholder=\"Søk etter norsk forsker\"\r\n               [resultFormatter]=\"formatMatches\"\r\n               [inputFormatter]=\"resultMatches\"\r\n               (selectItem)=\"onSearch($event)\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-lg btn-warning\" style=\"width:4em\" type=\"button\" (click)=\"onSearchButton()\">\r\n            <mat-progress-spinner *ngIf=\"searching\" [diameter]=\"40\" mode=\"indeterminate\"></mat-progress-spinner>\r\n            <span *ngIf=\"!searching\">Søk</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Beklager, kunne ikke laste inn data.</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ circle {\n  stroke: darkslategray; }\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SearchService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdTypeaheadHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/merge.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var URL = 'api/apisearch?';
var PARAMS = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
var SearchService = /** @class */ (function () {
    function SearchService(http, config) {
        this.http = http;
        config.focusFirst = false;
    }
    SearchService.prototype.search = function (term) {
        if (term === '') {
            return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get(URL, { params: PARAMS.set('searchQuery', term) })
            .map(function (response) { return response; });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbTypeaheadConfig */]])
    ], SearchService);
    return SearchService;
}());

var NgbdTypeaheadHttp = /** @class */ (function () {
    function NgbdTypeaheadHttp(_service, router) {
        var _this = this;
        this._service = _service;
        this.router = router;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function () { return function () { return _this.searching = false; }; });
        this.formatMatches = function (value) {
            return value.firstName + ' ' + value.lastName + ' | ' + value.position + ' | ' + value.institution;
        };
        this.resultMatches = function (value) { return value.firstName + ' ' + value.lastName; };
        this.search = function (text$) {
            return text$
                .debounceTime(250)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                return _this._service.search(term)
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["a" /* of */])([]);
                });
            })
                .do(function () { return _this.searching = false; })
                .merge(_this.hideSearchingWhenUnsubscribed);
        };
    }
    NgbdTypeaheadHttp.prototype.onSearch = function (event) {
        this.router.navigate(['/profile', event.item.cristinID]);
    };
    NgbdTypeaheadHttp.prototype.onSearchButton = function () {
        if (typeof this.model !== 'undefined') {
            if (typeof this.model.cristinID !== 'undefined') {
                this.router.navigate(['/profile', this.model.cristinID]);
            }
            else {
                this.router.navigate(['/search', this.model]);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NgbdTypeaheadHttp.prototype, "showTopNav", void 0);
    NgbdTypeaheadHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngbd-typeahead-http',
            styles: [__webpack_require__("./src/app/search/search.component.scss")],
            template: __webpack_require__("./src/app/search/search.component.html"),
            providers: [SearchService]
        }),
        __metadata("design:paramtypes", [SearchService, __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], NgbdTypeaheadHttp);
    return NgbdTypeaheadHttp;
}());



/***/ }),

/***/ "./src/app/searchresults/searchresults.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <br />\r\n      <h2>Søkeresultat for \"{{query}}\"</h2>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <br />\r\n      <mat-progress-spinner *ngIf=\"loading\" [diameter]=\"45\" mode=\"indeterminate\"></mat-progress-spinner>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"!loading\">\r\n        <h4>Antall treff: {{totalHits}}</h4>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12\" *ngIf=\"searchResults\">\r\n      <ul class=\"list-group\" *ngFor=\"let obj of results | paginate: { itemsPerPage: 10, currentPage: page }\">\r\n        <li class=\"list-group-item\">\r\n          <a [routerLink]=\"['/profile', obj.cristinID]\">{{obj.firstName}} {{obj.lastName}}</a>\r\n          <p class=\"url\">http://dotnet.cs.hioa.no/app/profile/{{obj.cristinID}}</p>\r\n          <p class=\"text-muted\">\r\n            {{obj.affiliation.position | unknown}} ved\r\n            {{obj.affiliation.institution | unknown}},\r\n            {{obj.affiliation.institute | unknown}}\r\n          </p>\r\n        </li>\r\n      </ul>\r\n      <div class=\"row justify-content-center\">\r\n        <pagination-controls previousLabel=\"Tilbake\" nextLabel=\"Neste\" (pageChange)=\"page = $event\"></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/searchresults/searchresults.component.scss":
/***/ (function(module, exports) {

module.exports = ".url {\n  color: #006621; }\n"

/***/ }),

/***/ "./src/app/searchresults/searchresults.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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



var URL = 'api/apisearchfulltext?';
var PARAMS = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]();
var SearchresultsComponent = /** @class */ (function () {
    function SearchresultsComponent(router, http) {
        this.router = router;
        this.http = http;
        this.page = 1;
    }
    SearchresultsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.router.params.subscribe(function (params) {
                                _this.query = params['query'];
                                if (_this.query === '') {
                                    return;
                                }
                                _this.getSearchResults(_this.query);
                            })];
                    case 1:
                        _a.sub = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchresultsComponent.prototype.getSearchResults = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.http.get(URL, { params: PARAMS.set('searchQuery', query) }).toPromise()
                                    .then(function (results) {
                                    _this.loading = false;
                                    _this.results = results;
                                    _this.searchResults = true;
                                    _this.totalHits = _this.results.length > 0 ? _this.results.length : 0;
                                    resolve();
                                }, function (response) {
                                    if (response.error === 'No user found') {
                                        _this.totalHits = 0;
                                        _this.loading = false;
                                        _this.searchResults = false;
                                    }
                                    else {
                                        _this.totalHits = 0;
                                        _this.loading = false;
                                        _this.searchResults = false;
                                        reject();
                                    }
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchresultsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    SearchresultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-searchresults',
            template: __webpack_require__("./src/app/searchresults/searchresults.component.html"),
            styles: [__webpack_require__("./src/app/searchresults/searchresults.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], SearchresultsComponent);
    return SearchresultsComponent;
}());



/***/ }),

/***/ "./src/app/topnav/topnav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-light bg-white py-md-2 nav-shadow\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav navbar-left\">\r\n      <li class=\"nav-item\">\r\n      <a class=\"nav-link\" (click)=\"navigateHome()\" title=\"Hjem\" style=\"cursor:pointer\">\r\n        <img [src]=\"logo\" alt=\"webapp logo\"/></a>\r\n      </li>\r\n    </ul>\r\n    <div *ngIf=\"default\">\r\n        <ngbd-typeahead-http [showTopNav]=\"default\"></ngbd-typeahead-http>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"navigateAbout()\" style=\"cursor:pointer\" title=\"Om tjenesten\">Om Tjenesten</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/topnav/topnav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/topnav/topnav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopnavComponent = /** @class */ (function () {
    function TopnavComponent(router) {
        this.router = router;
        this.logo = 'img/logo1.png';
    }
    TopnavComponent.prototype.navigateHome = function () {
        this.router.navigate(['']);
    };
    TopnavComponent.prototype.navigateAbout = function () {
        this.router.navigate(['about']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], TopnavComponent.prototype, "default", void 0);
    TopnavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__("./src/app/topnav/topnav.component.html"),
            styles: [__webpack_require__("./src/app/topnav/topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/app/userinfo/Researcher.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Researcher; });
var Researcher = /** @class */ (function () {
    function Researcher() {
    }
    return Researcher;
}());



/***/ }),

/***/ "./src/app/userinfo/userinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"showInfo\">\r\n  <h1><strong>{{user.firstName}} {{user.lastName}}</strong></h1>\r\n  <h3><strong>{{user?.position}}</strong></h3>\r\n  <hr>\r\n  <p><strong>Institutt:</strong> {{user?.institute}}</p>\r\n  <p><strong>Institusjon:</strong> {{user?.institution}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userinfo/userinfo.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userinfo/userinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Researcher__ = __webpack_require__("./src/app/userinfo/Researcher.ts");
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



var UserinfoComponent = /** @class */ (function () {
    function UserinfoComponent(http) {
        this.http = http;
        this.apiURL = 'api/apiuser?cristinID=';
    }
    UserinfoComponent.prototype.ngOnChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showInfo = false;
                        return [4 /*yield*/, this.initializeUserInfo(this.input)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserinfoComponent.prototype.initializeUserInfo = function (cristinID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.http.get(_this.apiURL + cristinID)
                                .toPromise()
                                .then(function (results) {
                                _this.user = new __WEBPACK_IMPORTED_MODULE_2__Researcher__["a" /* Researcher */]();
                                _this.user = results;
                                _this.showInfo = true;
                                resolve();
                            }, function (response) {
                                if (response.error === 'No data found for user') {
                                    _this.showInfo = false;
                                }
                                else {
                                    _this.showInfo = false;
                                    reject();
                                }
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserinfoComponent.prototype, "input", void 0);
    UserinfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userinfo',
            template: __webpack_require__("./src/app/userinfo/userinfo.component.html"),
            styles: [__webpack_require__("./src/app/userinfo/userinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserinfoComponent);
    return UserinfoComponent;
}());



/***/ }),

/***/ "./src/app/wordcloud/wordcloud.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showCloud\">\r\n  <angular-tag-cloud [data]=\"data\"\r\n                     [width]=\"options.width\"\r\n                     [height]=\"options.height\"\r\n                     [overflow]=\"options.overflow\" [strict]=\"true\">\r\n  </angular-tag-cloud>\r\n  <p class=\"lead text-center\">Basert på <code style=\"color:#0077c1\"><strong>{{count}}</strong></code> engelskspråkelige arbeider</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/wordcloud/wordcloud.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wordcloud/wordcloud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordcloudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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


var WordcloudComponent = /** @class */ (function () {
    function WordcloudComponent(http) {
        this.http = http;
        this.activeCloud = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.apiURL = 'api/apiwordcloud?cristinID=';
        this.apiURL2 = 'api/apilegend?cristinID=';
        this.setupTagCloud();
    }
    WordcloudComponent.prototype.ngOnChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showCloud = false;
                        return [4 /*yield*/, this.initializeCloud(this.input)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WordcloudComponent.prototype.initializeCloud = function (cristinID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.http.get(_this.apiURL + cristinID)
                                .toPromise()
                                .then(function (results) {
                                _this.data = results;
                                _this.getLegend(cristinID);
                                _this.showCloud = true;
                                _this.activeCloud.emit(true);
                                resolve();
                            }, function (response) {
                                if (response.error === 'No data found for user') {
                                    _this.showCloud = false;
                                    _this.activeCloud.emit(false);
                                }
                                else {
                                    _this.activeCloud.emit(false);
                                    reject();
                                }
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WordcloudComponent.prototype.setupTagCloud = function () {
        this.options = {
            width: 600,
            height: 400,
            overflow: false
        };
    };
    WordcloudComponent.prototype.getLegend = function (cristinID) {
        var _this = this;
        this.http.get(this.apiURL2 + cristinID).subscribe(function (results) {
            return _this.count = results;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WordcloudComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WordcloudComponent.prototype, "activeCloud", void 0);
    WordcloudComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wordcloud',
            template: __webpack_require__("./src/app/wordcloud/wordcloud.component.html"),
            styles: [__webpack_require__("./src/app/wordcloud/wordcloud.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], WordcloudComponent);
    return WordcloudComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map