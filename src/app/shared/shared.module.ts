import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { LoanConfirmationComponent } from './dialogs/loan-confirmation/loan-confirmation.component';
import { MatIconModule } from '@angular/material/icon';

const components = [
  LoanConfirmationComponent
]

const modules = [
  CommonModule,
  HttpClientModule,
  MatFormFieldModule,
  MatSliderModule,
  MatButtonModule,
  MatInputModule,
  MatChipsModule,
  MatListModule,
  MatDividerModule,
  MatDialogModule,
  MatIconModule
]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    modules,
  ],
  exports:[
    modules,
    components,
  ]
})

export class SharedModule { }
