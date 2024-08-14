import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZooAlertComponent } from './shared';
import { ZooHeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'zoo-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ZooAlertComponent, ZooHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zoo';
}
