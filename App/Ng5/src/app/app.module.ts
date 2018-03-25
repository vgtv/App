import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopnavComponent } from './topnav/topnav.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { SearchComponent } from './search/search.component';
import { ScatterComponent } from './scatter/scatter.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TopnavComponent,
    SearchComponent,
    WordcloudComponent,
    ScatterComponent
   
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TagCloudModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
