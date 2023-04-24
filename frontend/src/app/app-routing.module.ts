import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainSeatingComponent } from './train-seating/train-seating.component';

const routes: Routes = [
  { path: '', component: TrainSeatingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
