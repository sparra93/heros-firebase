import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
   {
      path: '',
      component: HeroListComponent
   },
   {
      path: 'new',
      component: HeroComponent
   },
   {
      path: 'new/:id',
      component: HeroComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class HerosRoutingModule { }
