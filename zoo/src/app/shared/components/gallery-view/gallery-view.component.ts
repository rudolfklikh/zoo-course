import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, input, Renderer2, RendererStyleFlags2, viewChild } from '@angular/core';
import { ZooIconComponent } from '../icon/icon.component';
import { IZooGalleryImage, IZooSectionContentGalleryView } from '../../interfaces';
import { ZooHighlightKeywordPipe } from '../../pipes';

@Component({
	selector: 'zoo-gallery-view',
	templateUrl: './gallery-view.component.html',
	styleUrls: ['./gallery-view.component.scss'],
	imports: [CommonModule, ZooIconComponent, ZooHighlightKeywordPipe],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZooGalleryViewComponent {
	public metadata = input.required<IZooSectionContentGalleryView>();
	public keyword = 'zoofari'

	private readonly _renderer = inject(Renderer2);
	private readonly _gallery = viewChild.required<ElementRef>('gallery');


	ngAfterViewInit(): void {
		this.setStyle();
	}

	getImagePosition(image: IZooGalleryImage): Record<string, string> {
		return {'grid-row': `${image.rowStart} / ${image.rowEnd}`, 'grid-column': `${image.columnStart} / ${image.columnEnd}`};
	}

	private setStyle(): void {
		this._renderer.setStyle(this._gallery().nativeElement, '--template-rows', `repeat(${this.metadata().rows}, minmax(auto, ${this.metadata().rowsMaxHeight}px))`, RendererStyleFlags2.DashCase);
		this._renderer.setStyle(this._gallery().nativeElement, '--template-columns',  `repeat(${this.metadata().columns}, minmax(200px, 1fr))`, RendererStyleFlags2.DashCase);
	}
}
