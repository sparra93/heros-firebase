import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { HEROES_API_REST } from '../constants/url';

@Injectable()
export class HeroService {

   constructor(
      private apiService: ApiService
   ) { }

   addHero(heroe: Hero) {
      return this.apiService.post(`${HEROES_API_REST.ADD}.json`, heroe);
   }

   updateHero(heroe: Hero, key$: string) {
      return this.apiService.put(`${HEROES_API_REST.UPDATE}/${key$}.json`, heroe)
         .pipe(map(res => {
            return res;
         }));
   }

   getHero(key$: string) {
      return this.apiService.get(`${HEROES_API_REST.GET}/${key$}.json`);
   }

   getHeros() {
      return this.apiService.get(`${HEROES_API_REST.GET}.json`);
   }

   deleteHero(key$: string) {
      const url = `${HEROES_API_REST.GET}/${key$}.json`;
      return this.apiService.delete(url);
   }
}

