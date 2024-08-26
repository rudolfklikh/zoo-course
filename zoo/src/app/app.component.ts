import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZooAlertComponent, ZooFooterComponent, ZooHeaderComponent } from './shared';


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
