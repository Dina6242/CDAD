import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isEn = true;

  constructor(public localizeService: LocalizeRouterService) {}

  ngOnInit(): void {
    if (this.localizeService.parser.currentLang === 'ar') {
      this.isEn = false;
    }

    this.localizeService.routerEvents.subscribe((language: string) => {
      this.isEn = language === 'en';
    });
  }

}
