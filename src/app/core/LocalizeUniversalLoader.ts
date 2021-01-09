import { LocalizeParser, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { Routes } from '@angular/router';
import * as fs from 'fs';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { join } from 'path';

export class LocalizeUniversalLoader extends LocalizeParser {
  /**
   * Gets config from the server
   */
  public load(routes: Routes): Promise<any> {
    return new Promise((resolve: any) => {
      const assetsFolder = join(
        process.cwd(),
        'dist',
        'CDAD', // Your project name here
        'browser',
        'assets',
        'locales.json',
      );
      const data: any = JSON.parse(fs.readFileSync(assetsFolder, 'utf8'));
      this.locales = data.locales;
      this.prefix = data.prefix;
      this.init(routes).then(resolve);
    });
  }
}

export function localizeLoaderFactory(
  translate: TranslateService, location: Location, settings: LocalizeRouterSettings): LocalizeUniversalLoader {
  return new LocalizeUniversalLoader(translate, location, settings);
}
