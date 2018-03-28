import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgbdTypeaheadHttp } from './search/search.component';
import { FormsModule } from '@angular/forms';


import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopnavComponent } from './topnav/topnav.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { ScatterComponent } from './scatter/scatter.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { RelevanceComponent } from './relevance/relevance.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TopnavComponent,
    WordcloudComponent,
    ScatterComponent,
    NgbdTypeaheadHttp,
    UserinfoComponent,
    SearchresultsComponent,
    RelevanceComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TagCloudModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
