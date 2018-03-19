import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TopnavComponent } from './topnav/topnav.component';

const routes: Routes =
  [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'topnav', component: TopnavComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, TopnavComponent];

