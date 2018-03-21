import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { ScatterComponent } from './scatter/scatter.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { AgWordCloudModule } from 'angular4-word-cloud';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchComponent,
    ScatterComponent,
    WordcloudComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgWordCloudModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
