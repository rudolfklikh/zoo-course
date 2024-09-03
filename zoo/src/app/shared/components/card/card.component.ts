import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ZooIconComponent } from '../icon/icon.component';
import { IZooCard } from '../../interfaces';

@Component({
	selector: 'zoo-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	imports: [CommonModule, ZooIconComponent],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZooCardComponent {
	public metadata = input.required<IZooCard>();
}
