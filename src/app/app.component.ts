import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CDAD';

  constructor(public translate: TranslateService) {
    // const lang = localStorage.getItem('language');
    // if (lang) {
    //   translate.setDefaultLang(lang);
    //   translate.use(lang);
    // } else {
    //   translate.setDefaultLang('en');
    //   translate.use('en');
    //   localStorage.setItem('language', 'en');
    // }
  }

  isEn = true;

  useLanguage(): void {
    this.isEn = !this.isEn;
    // this.isEn ? this.translate.use('en') : this.translate.use('ar');
    // const currentlang = this.translate.currentLang;
    // console.log(currentlang);
    if (!this.isEn) {
      localStorage.setItem('language', 'ar');
      // this.translate.setDefaultLang('ar');
      this.translate.use('ar');
    } else {
      localStorage.setItem('language', 'en');
      // this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }
}
