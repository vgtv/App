import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

const routes: Routes =
  [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'auto', component: AutocompleteComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, AutocompleteComponent];

