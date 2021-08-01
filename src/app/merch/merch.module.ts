import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbaLetterComponent } from './mba-letter/mba-letter.component';
import { MerchRoutingModule } from './merch-routing.module';
import { MerchComponent } from './merch.component';
import { UsStatesComponent } from './us-states/us-states.component';


@NgModule({
  declarations: [
    MerchComponent,
    UsStatesComponent,
    MbaLetterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MerchRoutingModule
  ]
})
export class MerchModule { }
