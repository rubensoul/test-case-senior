import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { SuccessComponent } from './loan-form/success/success.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '/form',
      component: LoanFormComponent,
    },
    {
      path: 'success',
      component: SuccessComponent,
    },
    {
      path: '',
      redirectTo: 'form',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: LoanFormComponent,
    },
  ],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
