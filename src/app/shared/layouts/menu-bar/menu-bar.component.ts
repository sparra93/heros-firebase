import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  query: string;

  constructor(
    private herosService: HeroService
  ) { }

  ngOnInit() {
  }

  onSearch(): void {
    if (this.query) {
      this.herosService.queryHerosByName(this.query);
    }
  }
  onBackspace(): void {
    if (!this.query) {
      console.log('BACK');
    }
  }

}
