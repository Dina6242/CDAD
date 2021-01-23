import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooComponent } from './foo/foo.component';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { localizeBrowserLoaderFactory } from './core/localize-browser.loader';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TransferState } from '@angular/platform-browser';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'foo', component: FooComponent},
  {path: 'dina', loadChildren: () => import('./dina/dina.module').then(m => m.DinaModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'disabled',
  }),
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeBrowserLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient, TransferState],
      },
      initialNavigation: true
    }),
  ],
  exports: [RouterModule, LocalizeRouterModule],
})
export class AppRoutingModule {
}
