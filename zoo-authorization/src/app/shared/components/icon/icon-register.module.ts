import { NgModule } from '@angular/core';
import { ZooIcons } from './components';
import { ZooIconService } from './icon.service';

@NgModule({
	imports: ZooIcons
})
export class ZooRegisterIconModule {
	constructor(private readonly _iconService: ZooIconService) {
		ZooIcons.forEach(icon => {
			this._iconService.registerIcon({ [this._getIconName(icon.name)]: icon });
		});
	}

	private _getIconName(className: string): string {
		return className
			.replace(/_ZooIcon/g, '')
			.replace(/Component/g, '')
			.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
			.replace(/\s+/g, '');
	}
}
