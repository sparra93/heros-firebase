import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosRoutingModule } from './heros-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
   declarations: [HeroListComponent, HeroComponent],
   imports: [
      CommonModule,
      HerosRoutingModule,
      SharedModule
   ]
})
export class HerosModule { }
