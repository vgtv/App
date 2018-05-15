import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CallbackPipe } from './relevance/callback.pipe';
import { NullPipe } from './null.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { NgbdTypeaheadHttp } from './search/search.component';
import { WordcloudComponent } from './wordcloud/wordcloud.component';
import { ScatterComponent } from './scatter/scatter.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { RelevanceComponent } from './relevance/relevance.component';
import { TopnavComponent } from './topnav/topnav.component';
import { DialogComponent } from './dialog/dialog.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { TagCloudModule } from 'angular-tag-cloud-module';

import { NgxPaginationModule } from 'ngx-pagination';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IconInfo} from 'angular-feather';
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
    CallbackPipe,
    NullPipe,
    DialogComponent
  ],
  imports: [
    IconInfo,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TagCloudModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    FormsModule,
    LoadingBarHttpClientModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatListModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [LoadingBarService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
