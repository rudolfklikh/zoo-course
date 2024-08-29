import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, Renderer2, RendererStyleFlags2, viewChild } from '@angular/core';
import { IZooSectionContentContainer } from '../../../../interfaces';

@Component({
	selector: 'zoo-container',
	templateUrl: './container.component.html',
	styleUrls: ['./container.component.scss'],
	standalone: true,
	imports: [CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZooContainerComponent implements AfterViewInit {
	public readonly metadata = input.required<IZooSectionContentContainer>();
	public readonly hasBackground = computed(() => !!this.metadata().background);
	
	private readonly _renderer = inject(Renderer2);
	private readonly _container = viewChild.required<ElementRef>('container');

	ngAfterViewInit(): void {
		this.setStyle();
	}


	private setStyle(): void {
		if (this.hasBackground()) {
			const { background } = this.metadata();
			this._renderer.setStyle(this._container().nativeElement, '--background-image', `url(${background})`, RendererStyleFlags2.DashCase);
		}
	}
}
