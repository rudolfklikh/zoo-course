import { Injectable } from '@angular/core';
import { IZooTheme, ZOO_THEME_STORAGE_KEY, ZooThemes, ZooThemesList } from './theme.model';

@Injectable({
	providedIn: 'root'
})
export class ZooThemeService {
	protected themes = ZooThemes;
	protected defaultTheme = ZooThemesList.Light;
	protected storageKey = ZOO_THEME_STORAGE_KEY;
	/**
	 * @description set theme key to local storage
	 * @param color color theme key that identifies theme included in the application
	 */
	public setTheme(theme: string): void {
		localStorage.setItem(this.storageKey, theme);
	}

	/**
	 * @description init theme by local storage key, if key does not exist, it will returns first theme in themes list by default
	 */
	public initTheme(): void {
		let savedTheme = localStorage.getItem(this.storageKey);

		if (!savedTheme) {
			localStorage.setItem(this.storageKey, this.defaultTheme);
			savedTheme = this.defaultTheme;
		}

		const selectedTheme = this.themes.find(theme => theme.name === savedTheme);
		if (selectedTheme) {
			this.setActiveTheme(selectedTheme);
		}
	}

	public isHexValue(value = ''): boolean {
		return new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$').test(value);
	}

	public getTheme(): string {
		return localStorage.getItem(this.storageKey) || this.defaultTheme;
	}

	public getThemeColor(themeColor: string, themeName: string): string {
		const currentTheme = this.themes.find(theme => theme.name === themeName);
		return currentTheme ? currentTheme.properties[themeColor] : '';
	}

	/**
	 * @description set theme in application root, document object
	 * @param theme if theme includes in themes list it can be used across application, see @interface ZooTheme interface to add new theme
	 */
	private setActiveTheme(theme: IZooTheme): void {
		Object.keys(theme.properties).forEach(property => document.documentElement.style.setProperty(property, theme.properties[property]));
	}
}
