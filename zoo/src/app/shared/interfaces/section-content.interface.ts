import { IZooButton } from "./button.interface";

export enum EZooSectionContentType {
    CONTAINER,
    CAROUSEL,
}

export interface IZooSectionContentBase {
    type: EZooSectionContentType,
}

export interface IZooSectionContentCarousel extends IZooSectionContentBase {
    type: EZooSectionContentType.CAROUSEL,
    images: string[],
}

export interface IZooSectionContentContainer extends IZooSectionContentBase {
    type: EZooSectionContentType.CONTAINER,

    title: string;
	subtitle?: string;
	description?: string;
	buttons?: IZooButton[];
	background?: string;
}

export type IZooSectionContent = IZooSectionContentCarousel | IZooSectionContentContainer;