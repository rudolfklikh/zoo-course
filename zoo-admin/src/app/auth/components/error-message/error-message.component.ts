import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AbstractControl, ReactiveFormsModule} from '@angular/forms';
import { EZooErrorMessages, ZOO_ERROR_MESSAGES } from './error-message.model';

@Component({
  selector: 'zoo-error-message',
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ZooErrorMessageComponent {
  control = input.required<string[], AbstractControl>({
    transform: (c: AbstractControl) => this.convertToErrorMessages(c),
  });

  private convertToErrorMessages(control: AbstractControl): string[] {
    if (!control.errors) {
      return [];
    }
  
    return Object.keys(control.errors).map(err => ZOO_ERROR_MESSAGES.get(err as EZooErrorMessages) || 'Validation error');
  }
}
