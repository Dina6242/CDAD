import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    // if (typeof localStorage !== 'undefined') {
    //   const lang = localStorage.getItem('language');
    //
    //   if (lang === 'ar') {
    //     this.isEn = false;
    //     translate.setDefaultLang(lang);
    //     translate.use(lang);
    //   } else {
    //     translate.setDefaultLang('en');
    //     translate.use('en');
    //
    //     if (localStorage) {
    //       localStorage.setItem('language', 'en');
    //     }
    //   }
    // }
  }

  // isEn = true;

  // useLanguage(): void {
  //   this.isEn = !this.isEn;
  //
  //   if (!this.isEn) {
  //     this.translate.setDefaultLang('ar');
  //     this.translate.use('ar');
  //
  //     if (localStorage) {
  //       localStorage.setItem('language', 'ar');
  //     }
  //   } else {
  //     this.translate.setDefaultLang('en');
  //     this.translate.use('en');
  //
  //     if (localStorage) {
  //       localStorage.setItem('language', 'en');
  //     }
  //   }
  // }
}
