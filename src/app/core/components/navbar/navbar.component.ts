import { Component, Inject, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isEn = true;
  currentUrl = '';

  constructor(public localizeService: LocalizeRouterService, private router: Router,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (!(val instanceof NavigationEnd)) {
        return;
      }
      this.currentUrl = val.url.replace(this.localizeService.parser.currentLang, '');
    });
    this.currentUrl = this.router.url.replace(this.localizeService.parser.currentLang, '');
    if (this.localizeService.parser.currentLang === 'ar') {
      this.isEn = false;
    }
    this.changeLangage(this.localizeService.parser.currentLang);
    this.localizeService.routerEvents.subscribe((language: string) => {
      this.isEn = language === 'en';
      this.changeLangage(language);
    });
  }

  changeLangage(lang: string): void {
    const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.changeCssFile(lang);
  }

  changeCssFile(lang: string): void {
    const headTag = this.document.getElementsByTagName('head')[0] as HTMLHeadElement;
    const existingLink = this.document.getElementById('langCss') as HTMLLinkElement;
    const bundleName = lang === 'ar' ? 'arabicStyle.css' : 'englishStyle.css';
    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      const newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.type = 'text/css';
      newLink.id = 'langCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
}
