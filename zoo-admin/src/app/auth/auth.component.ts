import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  viewChild,
  viewChildren,
} from '@angular/core';
import { SignInComponent, SignUpComponent } from './components';
import { EAuthTextElements } from './enums';
import { CommonModule } from '@angular/common';
import { AUTH_SECTION_TOKEN } from './auth.model';
import { ISignUpFormValue } from './components/sign-up/sign-up.model';
import { ISignInFormValue } from './components/sign-in/sign-in.model';
import { ZooAlertService } from '../shared';

@Component({
  selector: 'zoo-auth',
  standalone: true,
  imports: [CommonModule, SignUpComponent, SignInComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  protected authContainer = viewChild.required<ElementRef<HTMLDivElement>>('auth');
  protected authSections = viewChildren(AUTH_SECTION_TOKEN);

  protected readonly TEXT_ELEMENTS = EAuthTextElements;
  protected readonly RIGHT_PANEL_ACTIVE_CLASS = 'right-panel--active';
  private readonly alertService = inject(ZooAlertService);
 
  togglePanel(): void {
    this.authContainer().nativeElement.classList.toggle(this.RIGHT_PANEL_ACTIVE_CLASS);
    this.clearSection();
  }

  private clearSection(): void {
    this.authSections()
      .filter((section) => section.form.dirty || section.form.touched)
      .forEach((section) => section.clearForm());
  }

  signUp(formValue: ISignUpFormValue): void {
    console.log('signUp');

    this.alertService.success({
      header: 'Signup successful!',
      body: 'Welcome to our platform.'
    });

    this.clearSection();
  }

  signIn(formValue: ISignInFormValue): void {
    console.log('signIn');

    this.alertService.success({
      header: 'Login successful!',
      body: 'Welcome back.',
    });

    this.clearSection();
  }
}
