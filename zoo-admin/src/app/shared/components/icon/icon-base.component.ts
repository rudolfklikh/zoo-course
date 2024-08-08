import { Directive, input } from '@angular/core';
import { IZooIconType } from './icon.interface';

@Directive()
export class ZooIconBaseComponent {
	// theme color or Hex value var(--zoo-static-black) used to fill the icon/SVG
	public fill = input<string>('var(--zoo-gray-950)');

	// width to set the icon (pixel based)
	public width = input<string>('24px');

	// height to set the icon (pixel based)
	public height = input<string>('24px');

	// an icon type to apply, defaults to regular, can also be light or solid depending on the icon
	public type = input<IZooIconType>('regular');
}
