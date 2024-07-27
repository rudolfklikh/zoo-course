import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../shared';
import { ISignUpFormValue } from './sign-up.model';
import { EAuthTextElements } from '../../enums';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AUTH_SECTION_TOKEN } from '../../auth.model';

@Component({
  selector: 'zoo-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    { provide: AUTH_SECTION_TOKEN, useExisting: SignUpComponent }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent extends BaseFormComponent<ISignUpFormValue> implements OnInit {
  protected readonly TEXT_ELEMENTS = EAuthTextElements;

  ngOnInit(): void {
    this.initializeForm({
      email: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
