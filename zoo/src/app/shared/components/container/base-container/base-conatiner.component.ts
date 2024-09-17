import { Component, AfterViewInit, input, computed, inject, Renderer2, viewChild, ElementRef, RendererStyleFlags2 } from "@angular/core";
import { IZooSectionContainerBase } from "../../../interfaces";

@Component({
	selector: 'zoo-base-container',
	template: '',
	standalone: true,
})
export abstract class ZooBaseContainerComponent<T extends IZooSectionContainerBase> implements AfterViewInit {
	public readonly metadata = input.required<T>();
	private readonly _container = viewChild.required<ElementRef>('container');
	private readonly _renderer = inject(Renderer2);

	public readonly highlightTitle = 'zoofari';
	

	ngAfterViewInit(): void {
		this.setStyle();
	}


	private setStyle(): void {
		const { background } = this.metadata();

		if (background) {
			this._renderer.setStyle(this._container().nativeElement, '--background-image', `url(${background})`, RendererStyleFlags2.DashCase);
		}
	}
}
