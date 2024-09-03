import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, input } from "@angular/core";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { IZooSectionContentCarousel } from "../../interfaces";


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