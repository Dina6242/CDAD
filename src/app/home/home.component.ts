import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isEn = true;

  constructor(public localizeService: LocalizeRouterService, public translate: TranslateService) {
  }

  ngOnInit(): void {
    this.localizeService.routerEvents.subscribe((language: string) => {
      console.log(language);
    });
  }

  changebtn(): void {
    this.isEn = !this.isEn;
    if (!this.isEn) {
      this.translate.setDefaultLang('ar');
      this.translate.use('ar');
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }
}
