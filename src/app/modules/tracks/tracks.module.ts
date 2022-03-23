import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksComponent } from './tracks.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TracksComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule
  ]
})
export class TracksModule { }
