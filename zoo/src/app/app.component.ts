import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZooAlertComponent, ZooFooterComponent, ZooHeaderComponent } from './shared';

// @todo: upgrade to Angular 19 + add zoneless
@Component({
  selector: 'zoo-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ZooAlertComponent, ZooHeaderComponent, ZooFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zoo';
}
