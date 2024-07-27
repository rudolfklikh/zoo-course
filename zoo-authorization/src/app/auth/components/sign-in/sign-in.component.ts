import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'zoo-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class SignInComponent {}
