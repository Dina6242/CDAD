import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { Location } from '@angular/common';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateServerLoaderFactory } from './core/translate-server.loader';
import { TransferState } from '@angular/platform-browser';
import { localizeServerLoaderFactory } from './core/localize-server.loader';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { routes } from './app-routing.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState]
      }
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeServerLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, TransferState]
      },
    })
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
