import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlatformService } from 'src/app/shared/services/platform.service';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Infos } from 'src/app/shared/types/Info';
import { MatDialog } from '@angular/material/dialog';
import { LoanConfirmationComponent } from 'src/app/shared/dialogs/loan-confirmation/loan-confirmation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoanFormComponent implements OnDestroy  {

  form: FormGroup;
  private mySubscription: Subscription;
  tax = 5;
  sendForm = false;
  info: Infos;

  constructor(
    private platformService: PlatformService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.form = new FormGroup({
      numberInstallments: new FormControl(null, [
        Validators.required
      ]),
      valueInstallments: new FormControl(null, [Validators.required]),
      nameClient: new FormControl(null, [Validators.required])
    });
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.sendForm = true;
    // tax 5% add
    const vlr =  this.form.controls?.valueInstallments.value ? parseInt(this.form.controls?.valueInstallments.value) : 0;
    const newVlr = vlr + (vlr * (this.tax / 100));

    const data =  {
      numberInstallments: this.form.controls?.numberInstallments.value,
      valueInstallments: newVlr,
      nameClient: this.form.controls?.nameClient.value
    }

    this.mySubscription = this.platformService.postInfo(data).pipe(
      tap((values) => {
        this.info = values;
      })
    ).subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoanConfirmationComponent, {
      width: '550px',
      data: this.info
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {

        this.router.navigateByUrl('loan/success');

      }
    });
  }

}
