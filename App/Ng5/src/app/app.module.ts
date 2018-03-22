import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopnavComponent } from './topnav/topnav.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TopnavComponent,
    SearchComponent,
    WordcloudComponent
   
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TagCloudModule,

    HttpClientModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
