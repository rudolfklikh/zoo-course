import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, AfterViewInit, input, inject, Renderer2, viewChild, ElementRef, RendererStyleFlags2 } from "@angular/core";
import { IZooSectionBase, EZooSectionContentType } from "../../interfaces";
import { ZooCarouselComponent } from "../carousel/carousel.component";
import { ZooContainerCenteredComponent } from "../container/container-centered/container-centered.component";
import { ZooContainerComponent } from "../container/container/container.component";


@Component({
	selector: 'zoo-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss'],
	standalone: true,
	imports: [CommonModule, ZooContainerComponent, ZooCarouselComponent, ZooContainerCenteredComponent],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZooSectionComponent implements AfterViewInit {
	public readonly metadata = input.required<IZooSectionBase>();
	public readonly CONTENT_TYPE = EZooSectionContentType;

	private readonly _renderer = inject(Renderer2);
	private readonly _section = viewChild.required<ElementRef>('section');


	ngAfterViewInit(): void {
		this.setStyle();
	}


	private setStyle(): void {
		this._renderer.setStyle(this._section().nativeElement, '--section-height', `${this.metadata().height}px`, RendererStyleFlags2.DashCase);
		this._renderer.setStyle(this._section().nativeElement, '--section-media-height', `${Math.round(this.metadata().height / this.metadata().content.length)}px`, RendererStyleFlags2.DashCase);
	}
}
