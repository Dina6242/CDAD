import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isEn = true;
  currentUrl = '';

  constructor(public localizeService: LocalizeRouterService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (!(val instanceof NavigationEnd)) {
        return;
      }
      this.currentUrl = val.url.split(this.localizeService.parser.currentLang)[1];
    });
    if (this.localizeService.parser.currentLang === 'ar') {
      this.isEn = false;
    }
    this.localizeService.routerEvents.subscribe((language: string) => {
      this.isEn = language === 'en';
    });
  }

}
