import { LocalizeParser, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { Routes } from '@angular/router';
import * as fs from 'fs';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { join } from 'path';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';

export class LocalizeServerLoader extends LocalizeParser {

  constructor(
    translate: TranslateService,
    location: Location,
    settings: LocalizeRouterSettings,
    private transferState: TransferState,
  ) {
    super(translate, location, settings);
  }

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

      // Here we save the locales in the transfer-state
      const key: StateKey<number> = makeStateKey<number>(
        'transfer-locales',
      );
      this.transferState.set(key, data);

      this.locales = data.locales;
      this.prefix = data.prefix;
      this.init(routes).then(resolve);
    });
  }
}

export function localizeServerLoaderFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
  transferState: TransferState,
): LocalizeServerLoader {
  return new LocalizeServerLoader(translate, location, settings, transferState);
}
