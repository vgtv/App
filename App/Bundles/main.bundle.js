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
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var searchresults_component_1 = __webpack_require__("./src/app/searchresults/searchresults.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'profile/:id', component: profile_component_1.ProfileComponent },
    { path: 'search/:query', component: searchresults_component_1.SearchresultsComponent }
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
exports.routingComponents = [home_component_1.HomeComponent, about_component_1.AboutComponent, profile_component_1.ProfileComponent, searchresults_component_1.SearchresultsComponent];


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showSearchBar\">\r\n  <app-topnav></app-topnav>\r\n    <div class=\"container\" id=\"userinfo\">\r\n        <ngbd-typeahead-http></ngbd-typeahead-http>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"!showSearchBar\">\r\n  <app-topnav [default]=\"!showSearchBar\"></app-topnav>\r\n</div>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.showSearchBar = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.showSearchBar = event.url === '/' ? true : false;
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var search_component_1 = __webpack_require__("./src/app/search/search.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ng2_google_charts_1 = __webpack_require__("./node_modules/ng2-google-charts/index.js");
var angular_tag_cloud_module_1 = __webpack_require__("./node_modules/angular-tag-cloud-module/esm5/angular-tag-cloud-module.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var wordcloud_component_1 = __webpack_require__("./src/app/wordcloud/wordcloud.component.ts");
var scatter_component_1 = __webpack_require__("./src/app/scatter/scatter.component.ts");
var userinfo_component_1 = __webpack_require__("./src/app/userinfo/userinfo.component.ts");
var relevance_component_1 = __webpack_require__("./src/app/relevance/relevance.component.ts");
var topnav_component_1 = __webpack_require__("./src/app/topnav/topnav.component.ts");
var http_client_1 = __webpack_require__("./node_modules/@ngx-loading-bar/http-client/esm5/ngx-loading-bar-http-client.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                app_routing_module_1.routingComponents,
                topnav_component_1.TopnavComponent,
                wordcloud_component_1.WordcloudComponent,
                scatter_component_1.ScatterComponent,
                search_component_1.NgbdTypeaheadHttp,
                userinfo_component_1.UserinfoComponent,
                relevance_component_1.RelevanceComponent,
                topnav_component_1.TopnavComponent
            ],
            imports: [
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                angular_tag_cloud_module_1.TagCloudModule,
                http_1.HttpClientModule,
                ng2_google_charts_1.Ng2GoogleChartsModule,
                forms_1.FormsModule,
                http_client_1.LoadingBarHttpClientModule
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

module.exports = "/home hewqoueoh\r\n<div *ngFor=\"let k of hentData\">\r\n  {{ k.firstname }}\r\n  {{ k.lastname }}\r\n  {{ k.role }}\r\n  {{ k.institution }}\r\n</div>\r\n"

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

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"userinfo\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <app-userinfo [input]=\"cristinID\"></app-userinfo>\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <app-wordcloud [input]=\"cristinID\"></app-wordcloud>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" id=\"scatter\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <app-scatter [input]=\"cristinID\"></app-scatter>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" id=\"relevance\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <app-relevance [input]=\"cristinID\"></app-relevance>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router) {
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router.params.subscribe(function (params) {
            _this.cristinID = params['id'];
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/relevance/relevance.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #t let-fill=\"fill\">\r\n  <span class=\"star\" [class.full]=\"fill === 100\">\r\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\r\n  </span>\r\n</ng-template>\r\n\r\n\r\n <table class=\"table table-hover\" *ngIf=\"showTable\">\r\n  <thead>\r\n    <tr>\r\n      <th>Relevans</th>\r\n      <th>Forsker</th>\r\n      <th>Posisjon</th>\r\n      <th>Institusjon</th>\r\n      <th>Institutt</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let person of dataTable\">\r\n      <td>\r\n        <ngb-rating [rate]=\"person.similarities\" [starTemplate]=\"t\"></ngb-rating>\r\n        {{person.similarities}}\r\n      </td>\r\n      <td>{{person.firstName}} {{person.lastName}}</td>\r\n      <td>{{person?.position}}</td>\r\n      <td>{{person?.institution}}</td>\r\n      <td>{{person?.institute}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/relevance/relevance.component.scss":
/***/ (function(module, exports) {

module.exports = ".star {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n\n.full {\n  color: darkorange; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: darkorange; }\n"

/***/ }),

/***/ "./src/app/relevance/relevance.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var RelevanceComponent = /** @class */ (function () {
    function RelevanceComponent(http, config) {
        this.http = http;
        this.apiURL = 'api/apirelevance?cristinID=';
        config.max = 5;
        config.readonly = true;
    }
    RelevanceComponent.prototype.ngOnChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Relevance changing..');
                        this.showTable = false;
                        return [4 /*yield*/, this.initializeTable(this.input)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelevanceComponent.prototype.initializeTable = function (cristinID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.http.get(_this.apiURL + cristinID)
                                .toPromise()
                                .then(function (results) {
                                _this.dataTable = results;
                                _this.showTable = true;
                                resolve();
                            }, function (response) {
                                if (response.error === 'No data found for user') {
                                    _this.showTable = false;
                                }
                                else {
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
        core_1.Input(),
        __metadata("design:type", String)
    ], RelevanceComponent.prototype, "input", void 0);
    RelevanceComponent = __decorate([
        core_1.Component({
            selector: 'app-relevance',
            template: __webpack_require__("./src/app/relevance/relevance.component.html"),
            styles: [__webpack_require__("./src/app/relevance/relevance.component.scss")],
            providers: [ng_bootstrap_1.NgbRatingConfig]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, ng_bootstrap_1.NgbRatingConfig])
    ], RelevanceComponent);
    return RelevanceComponent;
}());
exports.RelevanceComponent = RelevanceComponent;


/***/ }),

/***/ "./src/app/scatter/scatter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"showScatter\">\r\n  <div class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <h1><strong>Forskningsmiljø</strong></h1>\r\n    </div>\r\n  </div>\r\n  <google-chart [data]=\"scatterChartData\"></google-chart>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/scatter/scatter.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/scatter/scatter.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ScatterComponent = /** @class */ (function () {
    function ScatterComponent(http) {
        this.http = http;
        this.apiURL = 'api/apiscatterplot?cristinID=';
    }
    ScatterComponent.prototype.ngOnChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Scatterplot changing");
                        this.showScatter = false;
                        return [4 /*yield*/, this.initializeScatter(this.input)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScatterComponent.prototype.initializeScatter = function (cristinID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.http.get(_this.apiURL + cristinID)
                                .toPromise()
                                .then(function (results) {
                                _this.scatterChartData = {
                                    dataTable: results,
                                    chartType: 'ScatterChart',
                                    options: {
                                        width: 1250, height: 850,
                                        backgroundColor: 'transparent',
                                        title: 'Publikasjoner vs. kvalitet',
                                        hAxis: {
                                            title: 'Kvalitet'
                                        },
                                        vAxis: { title: 'Publikasjoner' },
                                        legend: 'none',
                                        animation: {
                                            startup: true,
                                            duration: 5000,
                                            easing: 'inAndOut'
                                        }
                                    }
                                };
                                _this.showScatter = true;
                                resolve();
                            }, function (response) {
                                if (response.error === 'No data found for user') {
                                    _this.showScatter = false;
                                }
                                else {
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
        core_1.Input(),
        __metadata("design:type", String)
    ], ScatterComponent.prototype, "input", void 0);
    ScatterComponent = __decorate([
        core_1.Component({
            selector: 'app-scatter',
            template: __webpack_require__("./src/app/scatter/scatter.component.html"),
            styles: [__webpack_require__("./src/app/scatter/scatter.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ScatterComponent);
    return ScatterComponent;
}());
exports.ScatterComponent = ScatterComponent;


/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"form-group d-flex justify-content-center\">\r\n    <input id=\"typeahead-http\" type=\"text\" class=\"form-control form-control-lg col-md-6 nav-shadow\"\r\n           [class.is-invalid]=\"searchFailed\"\r\n           [(ngModel)]=\"model\"\r\n           [ngbTypeahead]=\"search\"\r\n           placeholder=\"Søk etter norsk forsker\"\r\n           [resultFormatter]=\"formatMatches\"\r\n           [inputFormatter]=\"formatMatches\" />\r\n    <!--><span *ngIf=\"searching\">...</span>-->\r\n    <!--><div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>-->\r\n  </div>\r\n\r\n<div class= \"d-flex justify-content-center\">\r\n  <button class=\"btn btn-lg btn-warning col-sm-2\" type=\"submit\" (click)=\"onSearch()\" (keyup.enter)=\"onSearch()\">Søk</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .dropdown-item {\n  color: blue;\n  display: block; }\n\n:host /deep/ .drop-down-menu {\n  top: auto;\n  left: auto;\n  background-color: aqua; }\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var of_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/merge.js");
var URL = 'api/apisearch?';
var PARAMS = new http_1.HttpParams();
var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.search = function (term) {
        if (term === '') {
            return of_1.of([]);
        }
        return this.http.get(URL, { params: PARAMS.set('searchQuery', term) })
            .map(function (response) { return response; });
    };
    SearchService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
var NgbdTypeaheadHttp = /** @class */ (function () {
    function NgbdTypeaheadHttp(_service, router) {
        var _this = this;
        this._service = _service;
        this.router = router;
        this.searching = false;
        this.searchFailed = false;
        this.showSearchBar = true;
        this.hideSearchingWhenUnsubscribed = new Observable_1.Observable(function () { return function () { return _this.searching = false; }; });
        this.formatMatches = function (value) { return value.firstName + ' ' + value.lastName; };
        this.extra = function (value) { return "- Universitetet i Oslo"; };
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                return _this._service.search(term)
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return of_1.of([]);
                });
            })
                .do(function () { return _this.searching = false; })
                .merge(_this.hideSearchingWhenUnsubscribed);
        };
    }
    NgbdTypeaheadHttp.prototype.ngOnInit = function () { };
    NgbdTypeaheadHttp.prototype.onSearch = function () {
        if (typeof this.model !== 'undefined') {
            if (typeof this.model.cristinID !== 'undefined') {
                this.showSearchBar = false;
                this.router.navigate(['/profile', this.model.cristinID]);
            }
            else {
                this.showSearchBar = false;
                this.router.navigate(['/search', this.model]);
            }
        }
    };
    NgbdTypeaheadHttp = __decorate([
        core_1.Component({
            selector: 'ngbd-typeahead-http',
            styles: [__webpack_require__("./src/app/search/search.component.scss")],
            template: __webpack_require__("./src/app/search/search.component.html"),
            providers: [SearchService]
        }),
        __metadata("design:paramtypes", [SearchService, router_1.Router])
    ], NgbdTypeaheadHttp);
    return NgbdTypeaheadHttp;
}());
exports.NgbdTypeaheadHttp = NgbdTypeaheadHttp;


/***/ }),

/***/ "./src/app/searchresults/searchresults.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Her kommer søkeresultatene...</p>\r\n\r\n\r\n<div class=\"col-sm-10\">\r\n  <ul *ngFor=\"let obj of results\">\r\n    <li>\r\n      {{obj.cristinID}}  {{obj.firstName}} {{obj.lastName}}\r\n    </li>\r\n    <li>\r\n      {{obj.affiliation?.position}}\r\n      {{obj.affiliation?.institution}}\r\n      {{obj.affiliation?.institute}}\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/searchresults/searchresults.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/searchresults/searchresults.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var URL = 'api/apisearchfulltext?';
var PARAMS = new http_1.HttpParams();
var SearchresultsComponent = /** @class */ (function () {
    function SearchresultsComponent(router, http) {
        this.router = router;
        this.http = http;
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
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.http.get(URL, { params: PARAMS.set('searchQuery', query) }).toPromise()
                                .then(function (results) {
                                _this.results = results;
                                resolve();
                            }, function (response) {
                                console.log(response);
                                if (response.error === 'No data found for user') {
                                }
                                else {
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
        core_1.Component({
            selector: 'app-searchresults',
            template: __webpack_require__("./src/app/searchresults/searchresults.component.html"),
            styles: [__webpack_require__("./src/app/searchresults/searchresults.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.HttpClient])
    ], SearchresultsComponent);
    return SearchresultsComponent;
}());
exports.SearchresultsComponent = SearchresultsComponent;


/***/ }),

/***/ "./src/app/topnav/topnav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-light bg-white py-md-4 nav-shadow\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav d-flex justify-content-start\">\r\n      <li class=\"nav-item\">\r\n      <a class=\"nav-link\" (click)=\"navigateHome()\"><strong>AKADEMIKUS</strong></a>\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"nav navbar-nav d-flex justify-content-center\" *ngIf=\"default\">\r\n      <ngbd-typeahead-http></ngbd-typeahead-http>\r\n    </div>\r\n\r\n    <ul class=\"navbar-nav d-flex justify-content-end\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"navigateAbout()\"><strong>Om Tjenesten</strong></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var TopnavComponent = /** @class */ (function () {
    function TopnavComponent(router) {
        this.router = router;
    }
    TopnavComponent.prototype.navigateHome = function () {
        this.router.navigate(['']);
    };
    TopnavComponent.prototype.navigateAbout = function () {
        this.router.navigate(['about']);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TopnavComponent.prototype, "default", void 0);
    TopnavComponent = __decorate([
        core_1.Component({
            selector: 'app-topnav',
            template: __webpack_require__("./src/app/topnav/topnav.component.html"),
            styles: [__webpack_require__("./src/app/topnav/topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], TopnavComponent);
    return TopnavComponent;
}());
exports.TopnavComponent = TopnavComponent;


/***/ }),

/***/ "./src/app/userinfo/Researcher.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Researcher = /** @class */ (function () {
    function Researcher() {
    }
    return Researcher;
}());
exports.Researcher = Researcher;


/***/ }),

/***/ "./src/app/userinfo/userinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"showInfo\">\r\n  <h1>{{user.firstName}} {{user.lastName}}</h1>\r\n  <h3>{{user?.position}}</h3>\r\n  <hr>\r\n  <p><strong>Institutt:</strong> {{user?.institute}}</p>\r\n  <p><strong>Institusjon:</strong> {{user?.institution}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userinfo/userinfo.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userinfo/userinfo.component.ts":
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var Researcher_1 = __webpack_require__("./src/app/userinfo/Researcher.ts");
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
                        console.log("Info changing");
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
                                _this.user = new Researcher_1.Researcher();
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
        core_1.Input(),
        __metadata("design:type", String)
    ], UserinfoComponent.prototype, "input", void 0);
    UserinfoComponent = __decorate([
        core_1.Component({
            selector: 'app-userinfo',
            template: __webpack_require__("./src/app/userinfo/userinfo.component.html"),
            styles: [__webpack_require__("./src/app/userinfo/userinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserinfoComponent);
    return UserinfoComponent;
}());
exports.UserinfoComponent = UserinfoComponent;


/***/ }),

/***/ "./src/app/wordcloud/wordcloud.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showCloud\">\r\n  <angular-tag-cloud [data]=\"data\"\r\n                     [width]=\"options.width\"\r\n                     [height]=\"options.height\"\r\n                     [overflow]=\"options.overflow\">\r\n  </angular-tag-cloud>\r\n\r\n  <p class=\"text-right\">Basert på <code>{{count}}</code> engelske artikler</p>\r\n</div>\r\n"

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var WordcloudComponent = /** @class */ (function () {
    function WordcloudComponent(http) {
        this.http = http;
        this.apiURL = 'api/apiwordcloud?cristinID=';
        this.apiURL2 = 'api/apilegend?cristinID=';
        this.options = {
            width: 600,
            height: 400,
            overflow: false
        };
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
                                resolve();
                            }, function (response) {
                                if (response.error === 'No data found for user') {
                                    _this.showCloud = false;
                                }
                                else {
                                    reject();
                                }
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WordcloudComponent.prototype.getLegend = function (cristinID) {
        var _this = this;
        this.http.get(this.apiURL2 + cristinID).subscribe(function (results) {
            return _this.count = results;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WordcloudComponent.prototype, "input", void 0);
    WordcloudComponent = __decorate([
        core_1.Component({
            selector: 'app-wordcloud',
            template: __webpack_require__("./src/app/wordcloud/wordcloud.component.html"),
            styles: [__webpack_require__("./src/app/wordcloud/wordcloud.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
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