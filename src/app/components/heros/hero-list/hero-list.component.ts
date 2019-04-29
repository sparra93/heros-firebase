import { Component, OnInit } from '@angular/core';
import { HEROES_URL } from '../../../shared/constants/url';
import { HeroService } from '../../../shared/services/hero.service';
import { Hero } from '../../../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  herosUrl: any = HEROES_URL;
  heros: Hero[] = [];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
      .subscribe((response: Hero[]) => {
        this.heros = response;
      });
  }

  deleteHero(key$: string): void {
    this.heroService.deleteHero(key$)
      .subscribe((response: any) => {
        if (!response) {
          delete this.heros[key$];
        }
      });
  }

}
