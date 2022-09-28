import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomTestComponent } from './pages/random-test/random-test.component';

const routes: Routes = [
  {
    path: '',
    component: RandomTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
