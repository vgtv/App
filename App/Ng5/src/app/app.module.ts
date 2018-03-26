import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Http, Response } from "@angular/http";
import { Headers } from "@angular/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonService } from './search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2CompleterModule,
    FormsModule,
    ReactiveFormsModule,
    PersonService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
