import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinaRoutingModule } from './dina-routing.module';
import { ZooComponent } from './components/zoo/zoo.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ ZooComponent],
  imports: [
    CommonModule,
    DinaRoutingModule,
    TranslateModule,
  ],
})
export class DinaModule { }
