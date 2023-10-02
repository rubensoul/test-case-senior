import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanFormComponent } from './loan-form/loan-form.component';

const routes: Routes = [{
  path: '',
  component: LoanFormComponent,
  children: [
    {
      path: '/form',
      component: LoanFormComponent,
    },
    {
      path: 'success',
      component: LoanFormComponent,
    },
    // {
    //   path: 'layout',
    //   loadChildren: () => import('./layout/layout.module')
    //     .then(m => m.LayoutModule),
    // },
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
