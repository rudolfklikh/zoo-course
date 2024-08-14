
export interface IZooSectionButton {
	name: string;
	url: string;
	icon?: string;
}

export interface IZooHeaderAction {
	id: string;
	icon: string;
	tag?: string;
	url?: string;
	action?: any;
}

export interface IZooNav {
	id: string;
	name: string;
	order: number;
	active?: boolean;
	url?: string;
	children?: IZooNav[];
}

export interface IZooSectionFooterNavChild {
	id: string;
	name: string;
	url: string;
}

export interface IZooSectionSocial {
	icon: string;
	url: string;
}

export interface IZooSectionFooterContact {
	icon: string;
	name: string;
}

export interface IZooSectionNumbersCard {
	number: string;
	title: string;
}

export interface IZooSectionSocialCard {
	url: string;
	imagePath: string;
}

export interface IZooSectionBase {
	id: string;
	title?: string;
	subtitle?: string;
	description?: string;
	button?: IZooSectionButton;
	background?: string;
}
