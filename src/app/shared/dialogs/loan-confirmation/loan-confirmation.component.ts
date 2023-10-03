import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Infos } from '../../types/Info';

@Component({
  selector: 'app-loan-confirmation',
  templateUrl: './loan-confirmation.component.html',
  styleUrls: ['./loan-confirmation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoanConfirmationComponent  {

  constructor(
    public dialogRef: MatDialogRef<LoanConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Infos) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
