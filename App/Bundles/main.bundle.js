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

module.exports = "\r\n<div class=\"container a-text\">\r\n  <h2 class=\"text-center\"><strong>Om Tjenesten</strong></h2>\r\n  <div class=\"card card-p\">\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text text-justify\">\r\n        Opprykksportalen er basert på en tidligere datainnsamling av bachelorgruppen bak <a href=\"http://forskningsindeksen.vlab.cs.hioa.no/index.html\">Forskningsindeksen</a>.\r\n        Datainnsamling dateres opp til 2016 fra det nåværende forskningsinformasjonssystemet i Norge, <a href=\"http://www.cristin.no/\">Cristin</a>.\r\n\r\n        Av dette datagrunnlaget genererer tjenesten ny informasjon basert på titler fra engelskspråklige arbeider,\r\n        for så å kategorsiere forskere med like interesseområder.\r\n\r\n        Basert på en forskers interesser sammenlignes relevante forskere på kvalitet og kvantitet på publiseringene.\r\n        Du kan lese mer om den eldre utregningsmodellen på\r\n        <a href=\"https://www.ntnu.no/blogger/ub-bibliometri/2017/11/10/hva-er-publiseringspoeng/\">NTNU</a> sin nettside.\r\n\r\n        Applikasjonen har detaljerte profiler for over 20.000 forskere.\r\n        Forskere med under tre engelskspråklige arbeider fra tidsrommet da dataene er uthentet\r\n        regnes som inaktive og vil ikke ha en detaljert profil. Denne siden er et resultat av et\r\n        bachelorprosjekt og skal ikke benyttes som beslutningsgrunnlag.\r\n        Vi tar ikke ansvar for ukomplette og/eller feil i datagrunnlaget.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container a-text\">\r\n  <h2 class=\"text-center\"><strong>Utviklerne</strong></h2>\r\n  <div class=\"card-group card-p\">\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[0]\" alt=\"Linkedin bilde av Anton\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Anton Lilleby</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          Fullstack Developer\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <a href=\"https://www.linkedin.com/in/anton-lilleby-987030105/\" class=\"btn btn-light btn-outline-primary\">LinkedIn</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[1]\" alt=\"Linkedin bilde av Anders\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Anders Gillholm</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          UX Designer/Frontend\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <a href=\"https://www.linkedin.com/in/anders-cleife-gillholm/\" class=\"btn btn-light btn-outline-primary\">LinkedIn</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[2]\" alt=\"Linkedin bilde av Julian\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Julian Hjallum</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          UX Designer/Frontend\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <a href=\"https://www.linkedin.com/in/julian-hjallum-27540313b/\" class=\"btn btn-light btn-outline-primary\">LinkedIn</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[3]\" alt=\"Linkedin bilde av Robin\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Robin Pedersen</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          UX Designer/Backend\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <a href=\"https://www.linkedin.com/in/pedersenrobin/\" class=\"btn btn-light btn-outline-primary\">LinkedIn</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[4]\" alt=\"Linkedin bilde av Steffen\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Steffen Marstein</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          UX Designer/Backend\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <a href=\"https://www.linkedin.com/in/steffen-marstein-389491110/\" class=\"btn btn-light btn-outline-primary\">LinkedIn</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <h2 class=\"text-center\"><strong>Oppdragsgiver</strong></h2>\r\n  <div class=\"card-group card-p mx-auto col-sm-4 \">\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"images[5]\" alt=\"Bilde av Frode\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Frode Eika Sandnes</h5>\r\n        <hr />\r\n        <p class=\"card-text\">\r\n          Norsk professor i informasjonsteknologi ved Oslo Metropolitan University\r\n        </p>\r\n      </div>\r\n      <!--><div class=\"card-footer\">\r\n        <a href=\"\" class=\"btn btn-light btn-outline-primary\">Linkedin</a>\r\n      </div>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = "a {\n  width: 100%; }\n\n.profile-card {\n  margin-bottom: 15px;\n  padding: 0.8em; }\n\n.profile-title {\n  color: #0d6797;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-weight: bold; }\n\n.profile-image {\n  margin: auto;\n  float: right;\n  border-style: solid;\n  border-color: lightgrey;\n  width: 26%;\n  height: 26%; }\n\n.profile-action {\n  margin: 0; }\n\np.normal {\n  color: dimgray;\n  font-weight: normal;\n  margin-bottom: 2px; }\n\np.thick {\n  color: dimgray;\n  font-weight: bold;\n  margin-bottom: 0px; }\n"

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
        this.images = [
            'img/linkedin/anton.png', 'img/linkedin/anders.jpg', 'img/linkedin/julian.jpg',
            'img/linkedin/robin.jpg', 'img/linkedin/steffen.jpg', 'img/linkedin/frode.jpg'
        ];
    }
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
var about_component_1 = __webpack_require__("./src/app/about/about.component.ts");
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var searchresults_component_1 = __webpack_require__("./src/app/searchresults/searchresults.component.ts");
var routes = [
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
exports.routingComponents = [about_component_1.AboutComponent, profile_component_1.ProfileComponent, searchresults_component_1.SearchresultsComponent];


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"alertMessage\">\r\n  <ngb-alert *ngIf=\"!closed\" (close)=\"closed = true\">\r\n    <p class=\"text-muted\">\r\n      Hei, vi vil gjøre oppmerksom på at denne applikasjonen ikke er optimalisert for din\r\n      <strong> {{this.device.device}} </strong> enhet.\r\n    </p>\r\n  </ngb-alert>\r\n</div>\r\n\r\n<div *ngIf=\"showSearchBar\">\r\n  <app-topnav></app-topnav>\r\n  <div class=\"container\">\r\n    <div class=\"col-3\" id=\"index-search\">\r\n      <ngbd-typeahead-http></ngbd-typeahead-http>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!showSearchBar\">\r\n  <app-topnav [default]=\"!showSearchBar\"></app-topnav>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

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
var ngx_device_detector_1 = __webpack_require__("./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
        if (this.device.device !== 'unknown') {
            this.alertMessage = true;
        }
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
        __metadata("design:paramtypes", [router_1.Router, http_1.HttpClient, ngx_device_detector_1.DeviceDetectorService])
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
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var callback_pipe_1 = __webpack_require__("./src/app/relevance/callback.pipe.ts");
var null_pipe_1 = __webpack_require__("./src/app/null.pipe.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var search_component_1 = __webpack_require__("./src/app/search/search.component.ts");
var wordcloud_component_1 = __webpack_require__("./src/app/wordcloud/wordcloud.component.ts");
var scatter_component_1 = __webpack_require__("./src/app/scatter/scatter.component.ts");
var userinfo_component_1 = __webpack_require__("./src/app/userinfo/userinfo.component.ts");
var relevance_component_1 = __webpack_require__("./src/app/relevance/relevance.component.ts");
var topnav_component_1 = __webpack_require__("./src/app/topnav/topnav.component.ts");
var dialog_component_1 = __webpack_require__("./src/app/dialog/dialog.component.ts");
var ng2_google_charts_1 = __webpack_require__("./node_modules/ng2-google-charts/index.js");
var angular_tag_cloud_module_1 = __webpack_require__("./node_modules/angular-tag-cloud-module/esm5/angular-tag-cloud-module.js");
var ngx_pagination_1 = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
var ngx_device_detector_1 = __webpack_require__("./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
var http_client_1 = __webpack_require__("./node_modules/@ngx-loading-bar/http-client/esm5/ngx-loading-bar-http-client.js");
var core_2 = __webpack_require__("./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
var select_1 = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
var list_1 = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
var button_toggle_1 = __webpack_require__("./node_modules/@angular/material/esm5/button-toggle.es5.js");
var dialog_1 = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
var card_1 = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
var progress_bar_1 = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
var progress_spinner_1 = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
var angular_feather_1 = __webpack_require__("./node_modules/angular-feather/angular-feather.es5.js");
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
                topnav_component_1.TopnavComponent,
                callback_pipe_1.CallbackPipe,
                null_pipe_1.NullPipe,
                dialog_component_1.DialogComponent
            ],
            imports: [
                angular_feather_1.IconInfo,
                forms_1.ReactiveFormsModule,
                ngx_device_detector_1.DeviceDetectorModule.forRoot(),
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                angular_tag_cloud_module_1.TagCloudModule,
                http_1.HttpClientModule,
                ng2_google_charts_1.Ng2GoogleChartsModule,
                forms_1.FormsModule,
                http_client_1.LoadingBarHttpClientModule,
                select_1.MatSelectModule,
                progress_bar_1.MatProgressBarModule,
                dialog_1.MatDialogModule,
                card_1.MatCardModule,
                progress_spinner_1.MatProgressSpinnerModule,
                button_toggle_1.MatButtonToggleModule,
                list_1.MatListModule,
                animations_1.BrowserAnimationsModule,
                ngx_pagination_1.NgxPaginationModule
            ],
            providers: [core_2.LoadingBarService],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [dialog_component_1.DialogComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"showLoading\">\r\n  <h3 matDialogTitle class=\"text-center\">Vennligst vent</h3>\r\n  <mat-dialog-content>\r\n    <p class=\"text-muted text-center\">{{loadingText}}</p>\r\n    <mat-progress-bar mode=\"determinate\" [value]=\"loader.progress$|async\" aria-label=\"Vi matcher nå forskere sitt fagfelt, vennligst vent\"></mat-progress-bar>\r\n  </mat-dialog-content>\r\n</div>\r\n\r\n<div *ngIf=\"!showLoading\">\r\n  <mat-dialog-content>\r\n    <h3 matDialogTitle class=\"text-center\">Ordsky informasjon</h3>\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm\">\r\n        Ordskyen er basert på engelskespråklige arbeider til denne profilen.\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm\">\r\n        <div class=\"text-center\">\r\n          <button class=\"btn btn-secondary\" (click)=\"closeDialog()\">Lukk</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-content>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialog/dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var core_2 = __webpack_require__("./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, loader, data) {
        this.dialogRef = dialogRef;
        this.loader = loader;
        this.data = data;
        this.changed = false;
        this.updated = false;
        this.url = 'img/zip/im.png';
        this.showLoading = data;
        if (typeof this.subscribe !== 'undefined') {
            if (this.subscribe) {
                this.loader.set(0);
                this.subscribe.unsubscribe();
            }
        }
        if (this.showLoading) {
            this.setupSubscriber();
        }
    }
    DialogComponent.prototype.ngOnDestroy = function () {
        if (typeof this.subscribe !== 'undefined') {
            this.subscribe.unsubscribe();
        }
    };
    DialogComponent.prototype.setupSubscriber = function () {
        var _this = this;
        this.loader.set(0);
        this.subscribe = this.loader.progress$.subscribe(function (progress) {
            if (_this.updated) {
                _this.loader.set(99);
                _this.loader.set(70);
                _this.updated = false;
                _this.changed = true;
            }
            else if (!_this.changed) {
                if (progress >= 0 && progress < 55) {
                    _this.loadingText = 'Dette kan ta litt tid, vi matcher nå forskningsmiljøet live..';
                }
                else if (progress >= 55 && progress < 80) {
                    _this.loadingText = 'Laster inn forskningsmiljø..';
                }
                else if (progress >= 80 && progress < 99) {
                    _this.loadingText = 'Laster inn visualisering..';
                }
            }
            else {
                if (progress >= 70 && progress < 99) {
                    _this.loadingText = 'Klargjør profil..';
                }
                else if (progress >= 100) {
                    _this.loader.set(0);
                    _this.subscribe.unsubscribe();
                }
            }
        });
    };
    DialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close();
    };
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog',
            template: __webpack_require__("./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog.component.scss")]
        }),
        __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, core_2.LoadingBarService, Object])
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;


/***/ }),

/***/ "./src/app/null.pipe.ts":
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
        core_1.Pipe({
            name: 'unknown',
            pure: false
        })
    ], NullPipe);
    return NullPipe;
}());
exports.NullPipe = NullPipe;


/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"userinfo\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm float-left\">\r\n      <app-userinfo [input]=\"cristinID\" (name)=\"meta = $event\"></app-userinfo>\r\n    </div>\r\n    <div class=\"col-sm -float-right\">\r\n      <app-wordcloud [input]=\"cristinID\" (activeCloud)=\"setActive($event)\"></app-wordcloud>\r\n    </div>\r\n    <div class=\"col-sm-1 float-right\" *ngIf=\"activeProfile\">\r\n      <i-info class=\"info float-right\" placement=\"left\"\r\n              ngbTooltip=\"Ordskyen beskriver hva {{meta}} jobber med. Størrelse forholdet mellom ord er basert på antall forekomster av ord i arbeidet.\"></i-info>\r\n    </div>\r\n\r\n    <div *ngIf=\"showMessage\" class=\"col-sm float-right\">\r\n      <h3 style=\"color:#0077C1;\">Ikke nok engelskspråklige arbeider</h3> <hr />\r\n      <p>\r\n        Vi har ikke funnet nok engelsskpråklige arbeider fra en datainnhenting fra Cristin\r\n        (Current Research Information System in Norway) frem til 2016 for denne profilen.\r\n        Du kan lese mer om de ulike kravene i seksjonen <a routerLink=\"/about\">\"Om tjenesten\"</a> for å få en detaljert profil generert.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"activeProfile\">\r\n  <app-scatter [input]=\"cristinID\" [ready]=\"showContent\" [meta]=\"meta_person\" (showPlot)=\"setPlotState($event)\"></app-scatter>\r\n  <app-relevance [input]=\"cristinID\" [ready]=\"showContent\" [meta]=\"meta_person\" (showTable)=\"setTableState($event)\"></app-relevance>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ".info {\n  height: 42px;\n  width: 42px;\n  stroke: #80D6FF;\n  fill: transparent; }\n\n.info:hover {\n  stroke: #42A5F5;\n  fill: white;\n  cursor: pointer; }\n\n:host /deep/ .tooltip-inner {\n  background-color: white;\n  color: #000000; }\n"

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
var core_2 = __webpack_require__("./node_modules/@ngx-loading-bar/core/esm5/ngx-loading-bar-core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var dialog_component_1 = __webpack_require__("./src/app/dialog/dialog.component.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, loader, dialog) {
        this.router = router;
        this.loader = loader;
        this.dialog = dialog;
        this.showHelper = false;
        this.meta_person = "forskeren"; // default
    }
    ProfileComponent.prototype.openLoadingLoader = function () {
        this.loaderElement = this.dialog.open(dialog_component_1.DialogComponent, {
            disableClose: true,
            width: '500px',
            closeOnNavigation: true,
            data: true
        });
    };
    ProfileComponent.prototype.openInfoLoader = function (event) {
        if (this.showPlot && this.showTable) {
            if (typeof this.infoElement !== 'undefined') {
                this.dialog.closeAll();
            }
            this.infoElement = this.dialog.open(dialog_component_1.DialogComponent, {
                closeOnNavigation: true,
                data: false
            });
        }
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
            this.openLoadingLoader();
        }
        this.showMessage = !state;
    };
    ProfileComponent.prototype.setPlotState = function (state) {
        if (state === true) {
            this.showPlot = true;
            this.loaderElement.componentInstance.updated = true;
        }
        else {
            this.dialog.closeAll();
        }
        this.readyToShow();
    };
    ProfileComponent.prototype.setTableState = function (state) {
        if (state === true) {
            this.showTable = true;
        }
        else {
            this.dialog.closeAll();
        }
        this.readyToShow();
    };
    ProfileComponent.prototype.readyToShow = function () {
        if (this.showPlot && this.showTable) {
            this.showContent = true;
            this.dialog.closeAll();
            this.showHelper = true;
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
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, core_2.LoadingBarService, material_1.MatDialog])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/relevance/callback.pipe.ts":
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
var CallbackPipe = /** @class */ (function () {
    function CallbackPipe() {
    }
    CallbackPipe.prototype.transform = function (items, value, valueNeutrality, valueEnviroment) {
        if (!value) {
            return items;
        }
        return items.filter(function (item) { return item.neutrality === valueNeutrality && item.enviroment === valueEnviroment; });
    };
    CallbackPipe = __decorate([
        core_1.Pipe({
            name: 'callback',
            pure: false
        })
    ], CallbackPipe);
    return CallbackPipe;
}());
exports.CallbackPipe = CallbackPipe;


/***/ }),

/***/ "./src/app/relevance/relevance.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ready\">\r\n  <ng-template #t let-fill=\"fill\">\r\n    <span class=\"star\" [class.full]=\"fill === 100\">\r\n      <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\r\n    </span>\r\n  </ng-template>\r\n\r\n  <div class=\"container-fluid\" id=\"relevance\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm\">\r\n        <div class=\"text-center\">\r\n          <h1><strong>Relaterte Fagpersoner</strong></h1>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-1 float-right\">\r\n        <i-info class=\"info float-right\" placement=\"left\"\r\n                ngbTooltip=\"Tabellen viser hvor god match en forsker er for {{meta}} sitt forskningsmiljø.\r\n                            Tabbelen kan sorteres.\"></i-info>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm\">\r\n        Sorter etter:\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"{{placeholder}}\"  [(ngModel)]=\"selected\" [formControl]=\"selectControl\" (selectionChange)=\"sortData($event)\">\r\n            <mat-option [value]=\"selected\">Alle</mat-option>\r\n            <mat-optgroup *ngFor=\"let data of dataList\" [label]=\"data.name\">\r\n              <mat-option *ngFor=\"let role of data.role\" [value]=\"role.value\">\r\n                {{ role.viewValue }}\r\n              </mat-option>\r\n            </mat-optgroup>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm\">\r\n        <div class=\"table-responsive-sm\">\r\n          <table class=\"table table-hover table-light\">\r\n            <thead>\r\n              <tr>\r\n                <th>Match</th>\r\n                <th>Forsker</th>\r\n                <th>Posisjon</th>\r\n                <th>Institusjon</th>\r\n                <th>Institutt</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let person of dataTable |\r\n                          callback: showFilter : valueNeutrality : valueEnviroment |\r\n                          paginate: { itemsPerPage: 10, currentPage: page }\"\r\n                  (click)=\"navigate(person.cristinID)\"\r\n                  style=\"cursor:pointer\"\r\n                  title=\"Besøk {{person.firstName}} {{person.lastName}} sin profil\">\r\n                <td><ngb-rating [rate]=\"person.similarities\" [starTemplate]=\"t\"></ngb-rating></td>\r\n                <td>{{person.firstName}} {{person.lastName}}</td>\r\n                <td>{{person?.position}}</td>\r\n                <td>{{person?.institution}}</td>\r\n                <td>{{person?.institute}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n          <pagination-controls previousLabel=\"Tilbake\" nextLabel=\"Neste\" (pageChange)=\"page = $event\"></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/relevance/relevance.component.scss":
/***/ (function(module, exports) {

module.exports = ".star {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n\n.full {\n  color: #ffbd45; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: #ffbd45; }\n\n.mat-button-toggle {\n  height: 2em; }\n\n.mat-button-toggle {\n  color: black;\n  background-color: white; }\n\n.mat-button-toggle-checked {\n  background-color: #42a5f4;\n  color: #fff; }\n\n.info {\n  height: 42px;\n  width: 42px;\n  stroke: #80D6FF;\n  fill: transparent; }\n\n.info:hover {\n  stroke: #42A5F5;\n  fill: white;\n  cursor: pointer; }\n"

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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var RelevanceComponent = /** @class */ (function () {
    function RelevanceComponent(http, config, router) {
        this.http = http;
        this.router = router;
        this.showTable = new core_1.EventEmitter();
        this.neutrality = true;
        this.enviroment = true;
        this.page = 1;
        this.selectControl = new forms_1.FormControl();
        config.max = 5;
        config.readonly = true;
        this.apiURL = 'api/apirelevance?cristinID=';
        this.checked = true;
        this.showFilter = false;
        this.valueNeutrality = false;
        this.valueEnviroment = false;
        this.selected = true;
        this.temp = '';
        this.placeholder = '';
        this.dataList = [
            {
                name: 'Kollegaer',
                role: [
                    { value: 'KMF', viewValue: 'Medforfattere' },
                    { value: 'KIMF', viewValue: 'Ikke-medforfattere' }
                ]
            },
            {
                name: 'Eksterne',
                role: [
                    { value: 'EMF', viewValue: 'Medforfattere' },
                    { value: 'EIMF', viewValue: 'Ikke-medforfattere' }
                ]
            }
        ];
    }
    RelevanceComponent.prototype.sortData = function (event) {
        if (event.value === this.temp) {
            this.showFilter = false;
            this.temp = '';
            this.placeholder = '';
        }
        else if (event.value === 'KMF') {
            this.showFilter = true;
            this.valueEnviroment = true;
            this.valueNeutrality = true;
            this.temp = event.value;
            this.placeholder = 'Kollegaer';
        }
        else if (event.value === 'KIMF') {
            this.showFilter = true;
            this.valueEnviroment = true;
            this.valueNeutrality = false;
            this.temp = event.value;
            this.placeholder = 'Kollegaer';
        }
        else if (event.value === 'EMF') {
            this.showFilter = true;
            this.valueEnviroment = false;
            this.valueNeutrality = true;
            this.temp = event.value;
            this.placeholder = 'Eksterne';
        }
        else if (event.value === 'EIMF') {
            this.showFilter = true;
            this.valueEnviroment = false;
            this.valueNeutrality = false;
            this.temp = event.value;
            this.placeholder = 'Eksterne';
        }
        else {
            this.showFilter = false;
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
    RelevanceComponent.prototype.navigate = function (cristinID) {
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
        core_1.Input(),
        __metadata("design:type", String)
    ], RelevanceComponent.prototype, "input", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RelevanceComponent.prototype, "ready", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RelevanceComponent.prototype, "meta", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RelevanceComponent.prototype, "showTable", void 0);
    RelevanceComponent = __decorate([
        core_1.Component({
            selector: 'app-relevance',
            template: __webpack_require__("./src/app/relevance/relevance.component.html"),
            styles: [__webpack_require__("./src/app/relevance/relevance.component.scss")],
            providers: [ng_bootstrap_1.NgbRatingConfig]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, ng_bootstrap_1.NgbRatingConfig, router_1.Router])
    ], RelevanceComponent);
    return RelevanceComponent;
}());
exports.RelevanceComponent = RelevanceComponent;


/***/ }),

/***/ "./src/app/scatter/scatter.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"scatter\" *ngIf=\"ready\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <div class=\"text-center\">\r\n        <h1><strong>Forskningsmiljø</strong></h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-1 float-right\">\r\n      <i-info class=\"info float-right\" placement=\"left\"\r\n              ngbTooltip=\"Spredningsplottet viser forskere som har likhetstrekk med {{meta}}.\r\n                          Hver forsker sammenlignes på publiseringpoeng og antall publiseringer. Plottet er interaktivt og kan sorteres logaritmisk.\"></i-info>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm\">\r\n      <google-chart #cchart [data]=\"chartData\"></google-chart>\r\n    </div>\r\n\r\n    <div class=\"col-sm\">\r\n      <mat-list>\r\n        <mat-list-item><span class=\"circle1 mr-1\"></span> {{meta}} </mat-list-item>\r\n        <mat-list-item><span class=\"circle2 mr-1\"></span> Toppstillinger </mat-list-item>\r\n        <mat-list-item><span class=\"circle3 mr-1\"></span> Andre stillinger </mat-list-item>\r\n      </mat-list>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm offset-sm-1\">\r\n      <mat-button-toggle-group>\r\n        <mat-button-toggle value=\"on\" (change)=\"logChange($event)\" [checked]=\"checked\">lineær</mat-button-toggle>\r\n        <mat-button-toggle value=\"off\" (change)=\"logChange($event)\">log-lineær</mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/scatter/scatter.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-button-toggle {\n  height: 2em; }\n\n.mat-button-toggle {\n  color: black;\n  background-color: white; }\n\n.mat-button-toggle-checked {\n  background-color: #42a5f4;\n  color: #fff; }\n\n.circle1 {\n  height: 1em;\n  width: 1em;\n  background-color: #ffbd45;\n  border-radius: 50%;\n  display: inline-block; }\n\n.circle2 {\n  height: 1em;\n  width: 1em;\n  background-color: #0077C2;\n  border-radius: 50%;\n  display: inline-block; }\n\n.circle3 {\n  height: 1em;\n  width: 1em;\n  background-color: #80D6FF;\n  border-radius: 50%;\n  display: inline-block; }\n\n.info {\n  height: 42px;\n  width: 42px;\n  stroke: #80D6FF;\n  fill: transparent; }\n\n.info:hover {\n  stroke: #42A5F5;\n  fill: white;\n  cursor: pointer; }\n\n:host /deep/ .tooltip-inner {\n  background-color: #F5F5F6;\n  color: #000000; }\n"

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
var cloneDeep = __webpack_require__("./node_modules/lodash/cloneDeep.js");
var core_2 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ScatterComponent = /** @class */ (function () {
    function ScatterComponent(http) {
        this.http = http;
        this.showPlot = new core_1.EventEmitter();
        this.checked = true;
        this.isCollapsed = true;
        this.actualWidth = window.innerWidth * 0.657;
        this.actualHeight = window.innerHeight * 0.657;
        this.apiURL = 'api/apiscatterplot?cristinID=';
        this.setupChart();
    }
    ScatterComponent.prototype.logChange = function (event) {
        if (event.value === 'on') {
            this.cchart.wrapper.setDataTable(this.chartData.dataTable);
        }
        else {
            this.cchart.wrapper.setDataTable(this.logChartData);
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
                                _this.showPlot.emit(true);
                                _this.chartData.dataTable = results;
                                _this.logChartData = cloneDeep(_this.chartData.dataTable);
                                for (var _i = 0, _a = _this.logChartData.rows; _i < _a.length; _i++) {
                                    var row = _a[_i];
                                    for (var _b = 0, _c = row.c; _b < _c.length; _b++) {
                                        var cell = _c[_b];
                                        if (typeof cell.v === 'string') {
                                            if (!cell.v.startsWith('#')) {
                                                cell.v = Math.log(Number(cell.v));
                                            }
                                        }
                                    }
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
        this.actualWidth = window.innerWidth * 0.657;
        this.actualHeight = window.innerHeight * 0.657;
        if (typeof this.cchart !== 'undefined') {
            this.cchart.wrapper.setOption('height', this.actualHeight);
            this.cchart.wrapper.setOption('width', this.actualWidth);
            this.cchart.redraw();
        }
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
        core_1.Input(),
        __metadata("design:type", String)
    ], ScatterComponent.prototype, "input", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ScatterComponent.prototype, "ready", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ScatterComponent.prototype, "meta", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ScatterComponent.prototype, "showPlot", void 0);
    __decorate([
        core_2.ViewChild('cchart'),
        __metadata("design:type", Object)
    ], ScatterComponent.prototype, "cchart", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScatterComponent.prototype, "onWindowResize", null);
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

module.exports = "<!--  Denne er for topnav -->\r\n<div *ngIf=\"showTopNav\">\r\n  <div class=\"form-inline\">\r\n    <div class=\"input-group\">\r\n      <input id=\"typehead-http\" type=\"text\" class=\"form-control form-control-lg\"\r\n             [class.is-invalid]=\"searchFailed\"\r\n             [(ngModel)]=\"model\"\r\n             [ngbTypeahead]=\"search\"\r\n             placeholder=\"Søk etter norsk forsker\"\r\n             [resultFormatter]=\"formatMatches\"\r\n             [inputFormatter]=\"resultMatches\"\r\n             (selectItem)=\"onSearch($event)\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-lg btn-warning\" style=\"width:4em\" type=\"button\" (click)=\"onSearchButton()\">\r\n          <mat-progress-spinner *ngIf=\"searching\" [diameter]=\"30\" mode=\"indeterminate\"></mat-progress-spinner>\r\n          <span *ngIf=\"!searching\">Søk</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--  Denne er for forsiden  -->\r\n<div *ngIf=\"!showTopNav\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"input-group col-md-8\">\r\n        <input id=\"typeahead-http\" type=\"text\" class=\"form-control form-control-lg\"\r\n               style=\"height:3em\"\r\n               [class.is-invalid]=\"searchFailed\"\r\n               [(ngModel)]=\"model\"\r\n               [ngbTypeahead]=\"search\"\r\n               placeholder=\"Søk etter norsk forsker\"\r\n               [resultFormatter]=\"formatMatches\"\r\n               [inputFormatter]=\"resultMatches\"\r\n               (selectItem)=\"onSearch($event)\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-lg btn-warning\" style=\"width:4em\" type=\"button\" (click)=\"onSearchButton()\">\r\n            <mat-progress-spinner *ngIf=\"searching\" [diameter]=\"40\" mode=\"indeterminate\"></mat-progress-spinner>\r\n            <span *ngIf=\"!searching\">Søk</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"invalid-feedback\" *ngIf=\"searchFailed\">Beklager, kunne ikke laste inn data.</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ circle {\n  stroke: darkslategray; }\n"

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
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
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
    function SearchService(http, config) {
        this.http = http;
        config.focusFirst = false;
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
        __metadata("design:paramtypes", [http_1.HttpClient, ng_bootstrap_1.NgbTypeaheadConfig])
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
        this.hideSearchingWhenUnsubscribed = new Observable_1.Observable(function () { return function () { return _this.searching = false; }; });
        this.formatMatches = function (value) {
            return value.firstName + ' ' + value.lastName + ' | ' + value.position + ' | ' + value.institution;
        };
        this.resultMatches = function (value) { return value.firstName + ' ' + value.lastName; };
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
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NgbdTypeaheadHttp.prototype, "showTopNav", void 0);
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

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <br />\r\n      <h2>Søkeresultat for \"{{query}}\"</h2>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n      <br />\r\n      <mat-progress-spinner *ngIf=\"loading\" [diameter]=\"45\" mode=\"indeterminate\"></mat-progress-spinner>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"!loading\">\r\n        <h4>Antall treff: {{totalHits}}</h4>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12\" *ngIf=\"searchResults\">\r\n      <ul class=\"list-group\" *ngFor=\"let obj of results | paginate: { itemsPerPage: 10, currentPage: page }\">\r\n        <li class=\"list-group-item\">\r\n          <a [routerLink]=\"['/profile', obj.cristinID]\">{{obj.firstName}} {{obj.lastName}}</a>\r\n          <p class=\"url\">http://dotnet.cs.hioa.no/app/profile/{{obj.cristinID}}</p>\r\n          <p class=\"text-muted\">\r\n            {{obj.affiliation.position | unknown}} ved\r\n            {{obj.affiliation.institution | unknown}},\r\n            {{obj.affiliation.institute | unknown}}\r\n          </p>\r\n        </li>\r\n      </ul>\r\n      <div class=\"row justify-content-center\">\r\n        <pagination-controls previousLabel=\"Tilbake\" nextLabel=\"Neste\" (pageChange)=\"page = $event\"></pagination-controls>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/searchresults/searchresults.component.scss":
/***/ (function(module, exports) {

module.exports = ".url {\n  color: #006621; }\n"

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

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-light bg-white py-md-2 nav-shadow\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav navbar-left\">\r\n      <li class=\"nav-item\">\r\n      <a class=\"nav-link\" (click)=\"navigateHome()\" title=\"Hjem\" style=\"cursor:pointer\">\r\n        <img [src]=\"logo\" alt=\"webapp logo\"/></a>\r\n      </li>\r\n    </ul>\r\n    <div *ngIf=\"default\">\r\n        <ngbd-typeahead-http [showTopNav]=\"default\"></ngbd-typeahead-http>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"navigateAbout()\" style=\"cursor:pointer\" title=\"Om tjenesten\">Om Tjenesten</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

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
        this.logo = 'img/logo-nav.png';
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

module.exports = "<div class=\"float-left\" *ngIf=\"showInfo\">\r\n  <h1><strong>{{user.firstName}} {{user.lastName}}</strong></h1>\r\n  <h3><strong>{{user?.position}}</strong></h3>\r\n  <hr>\r\n  <p class=\"lead\"> {{user?.institution}}</p>\r\n  <p class=\"lead\" *ngIf=\"user.institute !== 'Ukjent'\"> {{user?.institute}}</p>\r\n</div>\r\n"

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
        this.name = new core_1.EventEmitter();
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
                                _this.user = new Researcher_1.Researcher();
                                _this.user = results;
                                _this.name.emit(_this.user.firstName);
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
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UserinfoComponent.prototype, "name", void 0);
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

module.exports = "<div class=\"float-right\" *ngIf=\"showCloud\">\r\n  <angular-tag-cloud [data]=\"data\"\r\n                     [width]=\"options.width\"\r\n                     [height]=\"options.height\"\r\n                     [overflow]=\"options.overflow\" [strict]=\"true\">\r\n  </angular-tag-cloud>\r\n  <p class=\"lead text-center\">Basert på <code style=\"color:#0077c1\"><strong>{{count}}</strong></code> engelskspråklige arbeider</p>\r\n</div>\r\n"

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
        this.activeCloud = new core_1.EventEmitter();
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
            width: 525,
            height: 370,
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
        core_1.Input(),
        __metadata("design:type", String)
    ], WordcloudComponent.prototype, "input", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], WordcloudComponent.prototype, "activeCloud", void 0);
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
    production: true
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