import { Component, AfterViewInit, input, computed, inject, Renderer2, viewChild, ElementRef, RendererStyleFlags2 } from "@angular/core";
import { IZooSectionContainerBase } from "../../../interfaces";

@Component({
	selector: 'zoo-base-container',
	template: '',
	standalone: true,
})
export abstract class ZooBaseContainerComponent<T extends IZooSectionContainerBase> implements AfterViewInit {
	public readonly metadata = input.required<T>();

	// @todo: redundant computed instance
	public readonly hasBackground = computed(() => !!this.metadata().background);

	// @todo: rename prop to highlightTitle
	public readonly keyword = 'zoofari';
	
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
