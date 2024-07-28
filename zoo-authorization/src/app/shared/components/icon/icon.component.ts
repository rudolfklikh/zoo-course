import { CommonModule } from '@angular/common';
import {
	AfterViewInit,
	Component,
	OnChanges,
	Renderer2,
	SimpleChanges,
	Type,
	ViewContainerRef,
	inject,
	input,
	viewChild
} from '@angular/core';

import { ZooIconService } from './icon.service';
import { ZooRegisterIconModule } from './icon-register.module';
import { ZooIconBaseComponent } from './icon-base.component';

@Component({
	selector: 'zoo-icon',
	styleUrls: ['./icon.component.scss'],
	template: '<ng-template #container></ng-template>',
	standalone: true,
	imports: [CommonModule, ZooRegisterIconModule]
})
export class ZooIconComponent extends ZooIconBaseComponent implements OnChanges, AfterViewInit {
	// name of the icon used to lookup
	public name = input.required<string>();

	// container to render icon
	public container = viewChild<ViewContainerRef, ViewContainerRef>('container', { read: ViewContainerRef });

	private readonly _renderer: Renderer2 = inject(Renderer2);
	private readonly _iconService = inject(ZooIconService);

	public ngOnChanges(changes: SimpleChanges): void {
		Object.keys(changes).map(attributeType => {
			if (
				attributeType &&
				changes[attributeType].currentValue &&
				changes[attributeType].currentValue !== changes[attributeType].previousValue
			) {
				const component = this._create(this._iconService.getIcon(this.name())) as any;

				if (component) {
					component.width = this.width;
					component.height = this.height;
					component.type = this.type;
					component.fill = this.fill;
				} else {
					console.warn(`ZooIcon Warning: Icon with name [${this.name()}] not registered or exist, please check availability`);
				}
			}
		});
	}

	public ngAfterViewInit(): void {
		if (this.container()?.element.nativeElement) {
			this._renderer.setStyle(this.container()?.element.nativeElement.parentNode, 'width', this.width());
			this._renderer.setStyle(this.container()?.element.nativeElement.parentNode, 'height', this.height());
		}
	}

	/**
	 * @description create a component using the @see ViewContainerRef and inserts into parent component (Icon)
	 */
	private _create(component: Type<unknown>): unknown | null {
		if (component) {
			this.container()?.clear();
			const componentRef = this.container()?.createComponent(component);
			return componentRef?.instance;
		}

		return null;
	}
}
