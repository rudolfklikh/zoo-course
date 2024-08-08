import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertDefaultConfig } from './models/alert-stylemap';
import { EZooAlertPosition, EZooAlertType } from './models/alert.enum';
import { IZooAlert } from './models/alert.interfaces';

@Injectable({
	providedIn: 'root'
})
export class ZooAlertService {
	public alertPosition = EZooAlertPosition.Top;

	private _alerts$$: BehaviorSubject<IZooAlert[]> = new BehaviorSubject<IZooAlert[]>([]);

	public get alerts(): IZooAlert[] {
		return this._alerts$$.value;
	}

	public get alerts$(): Observable<IZooAlert[]> {
		return this._alerts$$.asObservable();
	}

	public info(alert: IZooAlert): void {
		alert.type = EZooAlertType.Info;
		this.add(alert);
	}

	public danger(alert: IZooAlert): void {
		alert.type = EZooAlertType.Danger;
		this.add(alert);
	}

	public warning(alert: IZooAlert): void {
		alert.type = EZooAlertType.Warning;
		this.add(alert);
	}

	public success(alert: IZooAlert): void {
		alert.type = EZooAlertType.Success;
		this.add(alert);
	}

	public add(alert: IZooAlert): void {
		alert.type = alert.type || AlertDefaultConfig.type;
		alert.delay = alert.delay || AlertDefaultConfig.delay;

		if (this.alertPosition === EZooAlertPosition.Top) {
			this._alerts$$.next([alert, ...this.alerts]);
		} else {
			this._alerts$$.next([...this.alerts, alert]);
		}
	}

	public remove(alert: IZooAlert | null): void {
		console.log(alert, '=> remove() alert.service.ts');

		this._alerts$$.next(this.alerts.filter(alertItem => alertItem !== alert));
	}
}
