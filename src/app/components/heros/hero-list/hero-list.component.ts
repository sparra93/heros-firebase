import { Component, OnInit } from '@angular/core';
import { HEROES_URL } from '../../../shared/constants/url';
import { HeroService } from '../../../shared/services/hero.service';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from '../../../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  herosUrl: any = HEROES_URL;
  heros: Observable<Hero[]>;

  constructor(public heroService: HeroService) {
    this.heros = this.heroService.heros$;
  }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros();
  }

  deleteHero(key$: string): void {
    this.heroService.deleteHero(key$).subscribe();
  }

}
