import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HEROES_UNIVERSES } from '../../../shared/constants/hero';
import { HEROES_URL } from '../../../shared/constants/url';
import { HeroService } from '../../../shared/services/hero.service';


@Component({
   selector: 'app-hero',
   templateUrl: './hero.component.html',
   styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

   formGroup: FormGroup;
   universes: any[] = HEROES_UNIVERSES;
   herosUrl: any = HEROES_URL;
   isEditing: boolean;
   key$: string;

   constructor(
      private heroService: HeroService,
      private router: Router,
      private activatedRouter: ActivatedRoute
   ) { }

   ngOnInit() {
      this.initData();
      this.activatedRouter.params.subscribe((params) => {
         if (params.id) {
            this.getHero(params.id);
            this.key$ = params.id;
            this.isEditing = true;
         }
      });
   }

   saveHero(): void {
      const hero: any = this.formGroup.value;
      if (this.isEditing) {
         this.editHero(hero, this.key$);
      } else {
         this.addHero(hero);
      }
   }

   getHero(key$: string): void {
      this.heroService.getHero(key$)
         .subscribe((response: any) => {
            this.formGroup.patchValue({ name: response.name, universe: response.universe });
         });
   }

   compareFn(value1: any, value2: any): boolean {
      return (value1 && value2) ? value1.name === value2.name : value1 === value2;
   }

   private initData(): void {
      this.formGroup = new FormGroup(
         {
            name: new FormControl('', Validators.required),
            universe: new FormControl('', Validators.required)
         }
      );
   }

   private addHero(hero: any): void {
      this.heroService.addHero(hero)
         .subscribe(() => {
            this.router.navigate([HEROES_URL.LIST]);
         });
   }

   private editHero(hero: any, key$: string): void {
      this.heroService.updateHero(hero, key$)
         .subscribe((response: any) => {
            this.router.navigate([HEROES_URL.LIST]);
         });
   }

}
