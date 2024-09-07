import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ZooSectionComponent } from '../shared';
import { HOME_CONTENT } from './home.model';

// @todo: move standalone: true and imports to the down (for all components)
@Component({
  selector: 'zoo-home',
  standalone: true,
  imports: [CommonModule, ZooSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public readonly content = HOME_CONTENT;
}
