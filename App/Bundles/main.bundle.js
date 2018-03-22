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

module.exports = "/about\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var about_component_1 = __webpack_require__("./src/app/about/about.component.ts");
var topnav_component_1 = __webpack_require__("./src/app/topnav/topnav.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'topnav', component: topnav_component_1.TopnavComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [home_component_1.HomeComponent, about_component_1.AboutComponent, topnav_component_1.TopnavComponent];


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topnav></app-topnav>\r\n<div class=\"container-fluid\">\r\n  <h2>Running Angular: 5.2.9</h2>\r\n  <hr />\r\n  <ul>\r\n    <li>\r\n      Angular er oppdatert - se package.json\r\n    </li>\r\n    <li>\r\n      <a href=\"https://ng-bootstrap.github.io/#/home\">Installert ng-bootstrap</a>\r\n    </li>\r\n    <li>\r\n      Installert og satt opp routing:\r\n      <a routerLink=\"/home\">Home</a>,\r\n      <a routerLink=\"/about\">About</a>\r\n    </li>\r\n    <li><a href=\"https://www.youtube.com/watch?v=Nehk4tBxD4o\">Bra video om routing</a></li>\r\n    <li>\r\n      <a href=\"https://www.npmjs.com/\">Npm bibliotek</a>\r\n    </li>\r\n    <li>\r\n      npm kommandoer<br />\r\n      <ul>\r\n        <li>\r\n          <code>ng build</code>\r\n        </li>\r\n        <li>\r\n          <code>ng build --watch</code>\r\n        </li>\r\n        <li>\r\n          <code>ctrl + c (y)</code>\r\n        </li>\r\n        <li>\r\n          <code>ng g c komponent_navn</code>\r\n        </li>\r\n        <li>\r\n          <code>npm install/uninstall .. --save</code>\r\n        </li>\r\n        <li>\r\n          <code>ng -v</code>\r\n        </li>\r\n        <li>\r\n          <code>ng serve</code>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    <li><a href=\"https://codehandbook.org/how-to-implement-auto-complete-in-angular-4/\">Mulig autocomplete</a></li>\r\n    <li>\r\n      <a href=\"https://dotnetthoughts.net/how-to-use-angular4-wth-aspnet-mvc/\">Følgte denne guiden</a>\r\n      <ul>\r\n        <li>Dette ligner veldig på det vi gjorde i webapp</li>\r\n        <li>Bootstrap 4.0 fikk jeg ikke til, valgte bare å inkludere den som cdn for nå</li>\r\n      </ul>\r\n    </li>\r\n  </ul>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-wordcloud></app-wordcloud>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var topnav_component_1 = __webpack_require__("./src/app/topnav/topnav.component.ts");
var wordcloud_component_1 = __webpack_require__("./src/app/wordcloud/wordcloud.component.ts");
var angular_tag_cloud_module_1 = __webpack_require__("./node_modules/angular-tag-cloud-module/esm5/angular-tag-cloud-module.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                app_routing_module_1.routingComponents,
                topnav_component_1.TopnavComponent,
                wordcloud_component_1.WordcloudComponent
            ],
            imports: [
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                angular_tag_cloud_module_1.TagCloudModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "/home\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "p {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/topnav/topnav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-light bg-white py-md-3\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav d-flex justify-content-start\">\r\n      <li class=\"navbar-brand\" href=\"#\">AKADEMIKUS</li>\r\n    </ul>\r\n\r\n      <div class=\"nav navbar-nav d-flex justify-content-center\">\r\n        <form class=\"form-inline\">\r\n          <input class=\"form-control form-control-lg mr-sm-2\" type=\"search\" placeholder=\"Søk etter norsk forsker\" aria-label=\"Search\">\r\n          <button class=\"btn btn-lg btn-outline-warning my-2 my-sm-0\" type=\"submit\">Søk</button>\r\n        </form>\r\n        </div>\r\n        <ul class=\"navbar-nav d-flex justify-content-end\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Om Tjenesten</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/topnav/topnav.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/topnav/topnav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TopnavComponent = /** @class */ (function () {
    function TopnavComponent() {
    }
    TopnavComponent.prototype.ngOnInit = function () {
    };
    TopnavComponent = __decorate([
        core_1.Component({
            selector: 'app-topnav',
            template: __webpack_require__("./src/app/topnav/topnav.component.html"),
            styles: [__webpack_require__("./src/app/topnav/topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TopnavComponent);
    return TopnavComponent;
}());
exports.TopnavComponent = TopnavComponent;


/***/ }),

/***/ "./src/app/wordcloud/wordcloud.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <angular-tag-cloud [data]=\"data\"\r\n                     [width]=\"options.width\"\r\n                     [height]=\"options.height\"\r\n                     [overflow]=\"options.overflow\">\r\n  </angular-tag-cloud>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/wordcloud/wordcloud.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wordcloud/wordcloud.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var WordcloudComponent = /** @class */ (function () {
    function WordcloudComponent() {
        this.options = {
            // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
            width: 700,
            height: 400,
            overflow: false,
        };
        this.data = [
            { text: 'Weight-8-color', weight: 17, color: '#ffaaee' },
            { text: 'Weight-10-link', weight: 1 },
            { text: 'Weight-10-link', weight: 10 },
            { text: 'Weight-10-link', weight: 7 },
            { text: 'Weight-10-link', weight: 5 },
            { text: 'Weight-10-link', weight: 3 },
            { text: 'Weight-10-link', weight: 9 },
            { text: 'Weight-8-color', weight: 8, color: '#ffaaee' },
            { text: 'Weight-10-link', weight: 1 },
            { text: 'Weight-10-link', weight: 10 },
            { text: 'Weight-10-link', weight: 7 },
            { text: 'Weight-10-link', weight: 5 },
            { text: 'Weight-10-link', weight: 3 },
            { text: 'Weight-10-link', weight: 9 },
            { text: 'Weight-8-color', weight: 8, color: '#ffaaee' },
            { text: 'Weight-10-link', weight: 1 },
            { text: 'Weight-10-link', weight: 10 },
            { text: 'Weight-10-link', weight: 7 },
            { text: 'Weight-10-link', weight: 5 },
            { text: 'Weight-10-link', weight: 3 },
            { text: 'Weight-10-link', weight: 9 },
            { text: 'Weight-8-color', weight: 8, color: '#ffaaee' },
            { text: 'Weight-10-link', weight: 1 },
            { text: 'Weight-10-link', weight: 10 },
            { text: 'Weight-10-link', weight: 7 },
            { text: 'Weight-10-link', weight: 5 },
            { text: 'Weight-10-link', weight: 3 },
            { text: 'Weight-10-link', weight: 9 },
            { text: 'Weight-8-color', weight: 8, color: '#ffaaee' },
            { text: 'Weight-10-link', weight: 1 },
            { text: 'Weight-10-link', weight: 10 },
            { text: 'Weight-10-link', weight: 7 },
            { text: 'Weight-10-link', weight: 5 },
            { text: 'Weight-10-link', weight: 3 },
            { text: 'Weight-10-link', weight: 9 },
        ];
    }
    WordcloudComponent.prototype.ngOnInit = function () {
    };
    WordcloudComponent = __decorate([
        core_1.Component({
            selector: 'app-wordcloud',
            template: __webpack_require__("./src/app/wordcloud/wordcloud.component.html"),
            styles: [__webpack_require__("./src/app/wordcloud/wordcloud.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WordcloudComponent);
    return WordcloudComponent;
}());
exports.WordcloudComponent = WordcloudComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map