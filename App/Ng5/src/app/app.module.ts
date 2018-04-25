import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
import { AnimationComponent } from './animation/animation.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { LottieAnimationViewModule } from 'ng-lottie';

import { NgxPaginationModule } from 'ngx-pagination';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarService } from '@ngx-loading-bar/core';

import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
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
    CallbackPipe,
    NullPipe,
    DialogComponent,
    AnimationComponent
  ],
  imports: [
    LottieAnimationViewModule.forRoot(),
    DeviceDetectorModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    TagCloudModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    FormsModule,
    LoadingBarHttpClientModule,
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
