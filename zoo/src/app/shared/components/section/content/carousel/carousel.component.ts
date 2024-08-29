import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IZooSectionContentCarousel } from '../../../../interfaces';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'zoo-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
	standalone: true,
	imports: [CommonModule, NgbCarouselModule],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZooCarouselComponent {
	public readonly metadata = input.required<IZooSectionContentCarousel>();
}
