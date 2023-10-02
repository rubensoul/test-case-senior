import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      numberInstallments: new FormControl(null, [
        Validators.required,
        Validators.min(3),
        Validators.max(16)
      ]),
      valueInstallments: new FormControl(null, [Validators.required]),
      nameClient: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

}
