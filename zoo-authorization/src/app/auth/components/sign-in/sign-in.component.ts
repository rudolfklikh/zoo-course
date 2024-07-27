import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../shared';
import { ISignInFormValue } from './sign-in.model';
import { EAuthTextElements } from '../../enums';
import { AUTH_SECTION_TOKEN } from '../../auth.model';

@Component({
  selector: 'zoo-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    { provide: AUTH_SECTION_TOKEN, useExisting: SignInComponent }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent extends BaseFormComponent<ISignInFormValue> implements OnInit {
  protected readonly TEXT_ELEMENTS = EAuthTextElements;

  ngOnInit(): void {
    this.initializeForm({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
