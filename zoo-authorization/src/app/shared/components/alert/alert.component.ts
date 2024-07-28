import { CommonModule } from '@angular/common';
import { Component, OnChanges, inject, input } from '@angular/core';
import { ZooAlertItemComponent } from './alert-item/alert-item.component';
import { AlertDefaultConfig, ZooAlertStyleMap } from './models/alert-stylemap';
import { EZooAlertPosition, EZooAlertType } from './models/alert.enum';
import { IZooAlertStyle } from './models/alert.interfaces';
import { ZooAlertService } from './alert.service';

@Component({
	selector: 'zoo-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
	standalone: true,
	imports: [CommonModule, ZooAlertItemComponent]
})
export class ZooAlertComponent implements OnChanges {
	public alertPosition = input<EZooAlertPosition>(EZooAlertPosition.Top);
	public alertService = inject(ZooAlertService);

	public retentionTime = AlertDefaultConfig.retentionTime;


	public ngOnChanges(): void {
		this.alertService.alertPosition = this.alertPosition();
	}

	public getStyleMap(alertType: EZooAlertType | undefined): IZooAlertStyle | undefined {
		return ZooAlertStyleMap.get(alertType || EZooAlertType.Default);
	}
}
