/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Type } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ZooIconService {
	private _icons: { [key: string]: Type<unknown> } = {};

	/**
	 * @description saves reference to Icon Component in local store
	 */
	public registerIcon(icon: { [key: string]: Type<unknown> }): { [key: string]: Type<unknown> } {
		const name = Object.keys(icon)[0];

		if (!(name in this._icons)) {
			this._icons[name] = icon[name];
		}

		return this._icons;
	}

	/**
	 * @description on initialization, we're call the Icon service to fetch the icon and create a component from the response
	 */
	public getIcons(): { [key: string]: Type<unknown> } {
		return this._icons;
	}

	/**
	 * @description on initialization, we're call the Icon service to fetch the icon and create a component from the response
	 */
	public getIcon(name = ''): Type<unknown> {
		return this._icons?.[name];
	}
}
