import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgbdTypeaheadHttp } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, Response } from "@angular/http";


import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopnavComponent } from './topnav/topnav.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { ScatterComponent } from './scatter/scatter.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TopnavComponent,
    WordcloudComponent,
    ScatterComponent,
    NgbdTypeaheadHttp,

   
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TagCloudModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
