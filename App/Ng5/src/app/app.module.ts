import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgbdTypeaheadHttp } from './search/search.component';
import { FormsModule } from '@angular/forms';

import { CallbackPipe } from './relevance/callback.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { ScatterComponent } from './scatter/scatter.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { RelevanceComponent } from './relevance/relevance.component';
import { TopnavComponent } from './topnav/topnav.component';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarService } from '@ngx-loading-bar/core';


import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TopnavComponent,
    WordcloudComponent,
    ScatterComponent,
    NgbdTypeaheadHttp,
    UserinfoComponent,
    RelevanceComponent,
    TopnavComponent,
    CallbackPipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TagCloudModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    FormsModule,
    LoadingBarHttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [LoadingBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
