import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooComponent } from './foo/foo.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'foo', component: FooComponent},
  { path: 'dina', loadChildren: () => import('./dina/dina.module').then(m => m.DinaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'disabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
