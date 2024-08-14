import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2, inject, input, viewChild } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { delay, takeUntil, tap } from 'rxjs/operators';
import { RxUtils } from '../../../utils/rx-utils';
import { ZooIconComponent } from '../../icon/icon.component';
import { AlertDefaultConfig } from '../models/alert-stylemap';
import { IZooAlert, IZooAlertStyle } from '../models/alert.interfaces';
import { EZooAlertPosition } from '../models/alert.enum';
import { ZooAlertService } from '../alert.service';


@Component({
	selector: 'zoo-alert-item',
	templateUrl: './alert-item.component.html',
	styleUrls: ['./alert-item.component.scss'],
	standalone: true,
	imports: [CommonModule, ZooIconComponent]
})
export class ZooAlertItemComponent implements AfterViewInit {
	public alert = input.required<IZooAlert>();
	public position = input.required<EZooAlertPosition>();
	public styleMap = input.required<IZooAlertStyle>();
	public retentionTime = input.required<number>();

	private _alertElement = viewChild<ElementRef>('alertElement');
	private _progressElement = viewChild<ElementRef>('progressElement');

	private _timer$$ = new Subject();

	private _renderer = inject(Renderer2);
	private _alertService = inject(ZooAlertService);

	public ngAfterViewInit(): void {
		const delayTime = this.alert().delay || AlertDefaultConfig.delay;
		const lifeTime = delayTime - this.retentionTime();

		this.setAnimationsProperties(delayTime);

		timer(this.retentionTime())
			.pipe(
				takeUntil(this._timer$$),
				tap(() => {
					this._renderer.addClass(this._alertElement()?.nativeElement, 'active');
					this._renderer.addClass(this._progressElement()?.nativeElement, 'active');
				}),
				delay(lifeTime),
				tap(() => this._renderer.removeClass(this._alertElement()?.nativeElement, 'active')),
				delay(this.retentionTime()),
				tap(() => {
					this.alert().remove?.();
					this._alertService.remove(this.alert());
				})
			)
			.subscribe(() => this._timer$$.next(null));
	}

	public setAnimationsProperties(delayTime: number): void {
		this._renderer.setStyle(this._progressElement()?.nativeElement, '--progress-color', `${this.styleMap().progressColor}`, 2);
		this._renderer.setStyle(this._progressElement()?.nativeElement, '--transition-progress', `${delayTime}ms`, 2);
		this._renderer.setStyle(this._alertElement()?.nativeElement, '--transition-direction', `${AlertDefaultConfig.progress}`, 2);
		this._renderer.setStyle(this._alertElement()?.nativeElement, '--transition-space', `${AlertDefaultConfig.space}`, 2);
	}

	public onRemove(): void {
		RxUtils.timer$(0)
			.pipe(
				tap(() => this._renderer.removeClass(this._alertElement()?.nativeElement, 'active')),
				delay(this.retentionTime())
			)
			.subscribe(() => {
				this._alertService.remove(this.alert());
				this.alert().remove?.();
			});
	}
}
