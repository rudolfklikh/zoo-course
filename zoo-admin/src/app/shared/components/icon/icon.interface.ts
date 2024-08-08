export type IZooIconType = 'regular' | 'light' | 'solid';

/**
 * @name IZooIconConfig
 * @description an interface to define the configuration for the icon
 */
export interface IZooIconConfig {
	/**
	 * @description name of the icon being used
	 */
	name: string;

	/**
	 * @description type of the specified icon
	 */
	type?: IZooIconType;

	/**
	 * @description fill color of the icon
	 */
	fill?: string;

	/**
	 * @description width of the icon in format '{X}px'
	 */
	width?: string;

	/**
	 * @description height of the icon in format '{X}px'
	 */
	height?: string;
}
