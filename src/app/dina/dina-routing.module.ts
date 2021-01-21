import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZooComponent } from './components/zoo/zoo.component';


const routes: Routes = [{path: 'zoo', component: ZooComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinaRoutingModule {
}
