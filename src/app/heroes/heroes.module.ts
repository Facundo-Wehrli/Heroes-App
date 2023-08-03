import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { HeroePageComponent } from './pages/heroe-page/heroe-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NewPageComponent,
    HeroePageComponent,
    LayoutPageComponent,
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
