import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignInComponent, SignUpComponent } from './components';
import { EAuthTextElements } from './enums';

@Component({
  selector: 'zoo-auth',
  standalone: true,
  imports: [RouterOutlet, SignUpComponent, SignInComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  authContainer = viewChild.required<ElementRef<HTMLDivElement>>('auth');

  protected readonly TEXT_ELEMENTS = EAuthTextElements;
  protected readonly RIGHT_PANEL_ACTIVE_CLASS = 'right-panel--active';


  togglePanel(): void {
    if (this.authContainer()) {
      this.authContainer().nativeElement.classList.toggle(this.RIGHT_PANEL_ACTIVE_CLASS);
    }
  }
}
