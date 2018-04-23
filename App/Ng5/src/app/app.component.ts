import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';

import { DeviceDetectorService } from 'ngx-device-detector';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSearchBar: boolean;
  device: any;
  alertMessage = false;
  closed = false;
  isCollapsed = true;

  constructor(private router: Router, private http: HttpClient, private deviceService: DeviceDetectorService) {
    this.showSearchBar = true;
  }

  ngOnInit() {
    this.device = this.deviceService.getDeviceInfo();
    if (this.device.device !== "unknown") {
      this.alertMessage = true;
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showSearchBar = event.url === '/' ? true : false;
      }
    });
  }
}

