import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MbaLetterComponent } from './mba-letter/mba-letter.component';
import { MerchComponent } from './merch.component';
import { UsStatesComponent } from './us-states/us-states.component';

const routes: Routes = [
  {
    path: '',
    component: MerchComponent,
    children: [
      {
        path: 'us-states',
        component: UsStatesComponent
      },
      {
        path: 'mba-letter',
        component: MbaLetterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchRoutingModule { }
