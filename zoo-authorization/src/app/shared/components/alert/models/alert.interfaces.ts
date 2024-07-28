import { EZooAlertIcon, EZooAlertType } from "./alert.enum";


export interface IZooAlert {
	header: string;
	body?: string;
	type?: EZooAlertType;
	delay?: number;
	remove?: () => void;
}

export interface IZooAlertIcon {
	name: EZooAlertIcon;
	width: string;
	height: string;
	fillColor: string;
}

export interface IZooAlertStyle {
	iconName: EZooAlertIcon;
	iconWidth: string;
	iconHeight: string;
	iconColor: string;
	progressColor: string;
}
