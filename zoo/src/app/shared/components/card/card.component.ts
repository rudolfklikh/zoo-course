import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, Renderer2, RendererStyleFlags2, viewChild, ViewContainerRef } from '@angular/core';
import { ZooIconComponent } from '../icon/icon.component';
import { IZooCard } from '../../interfaces';

@Component({
	selector: 'zoo-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, ZooIconComponent],
	standalone: true,
})
export class ZooCardComponent implements AfterViewInit {
	public metadata = input.required<IZooCard>();
	public length = input.required<number>();
	public background = input<boolean>();

	private readonly _card = viewChild.required<ElementRef>('card');
	private readonly _renderer = inject(Renderer2);
	private readonly _viewRef = inject(ViewContainerRef);

	ngAfterViewInit(): void {
		this.setStyle();
	}


	private setStyle(): void {
		const flexBasis = this.length() > 4 ? (Math.round((100 /  this.length() || 1 )) - 2) * 2  : Math.round((100 /  this.length() || 1 )) - 2;

		this._renderer.setStyle(this._viewRef.element.nativeElement, '--card-flex-basis', `${flexBasis}%`, RendererStyleFlags2.DashCase);
		this._renderer.setStyle(this._card().nativeElement, '--card-align-items', `${this.metadata().aligning}`, RendererStyleFlags2.DashCase);
		this._renderer.setStyle(this._card().nativeElement, '--card-text-align', `${this.metadata().textAligning}`, RendererStyleFlags2.DashCase);
	}
}
