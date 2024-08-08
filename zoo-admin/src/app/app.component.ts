import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZooAlertComponent } from './shared';

@Component({
  selector: 'zoo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ZooAlertComponent],
})
export class AppComponent {
  title = 'zoo-admin';
}
