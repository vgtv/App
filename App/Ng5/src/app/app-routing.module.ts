import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';

const routes: Routes =
  [
    { path: 'about', component: AboutComponent },
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'search/:query', component: SearchresultsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [AboutComponent, ProfileComponent, SearchresultsComponent];

