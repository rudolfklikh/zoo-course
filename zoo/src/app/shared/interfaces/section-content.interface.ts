import { IZooButton } from "./button.interface";
import { IZooCard } from "./card.interface";
import { IZooGalleryImage } from "./gallery-image.interface";

export enum EZooSectionContentType {
    CONTAINER,
    CONTAINER_CENTERED,
    GALLERY_VIEW,
    CAROUSEL,
}

export interface IZooSectionContentBase {
    type: EZooSectionContentType,
}

export interface IZooSectionContainerBase {
    title?: string;
	subtitle?: string;
	description?: string;
	buttons?: IZooButton[];
	background?: string;
}

export interface IZooSectionContentCarousel extends IZooSectionContentBase {
    type: EZooSectionContentType.CAROUSEL,
    images: string[],
}

export interface IZooSectionContentContainer extends IZooSectionContentBase, IZooSectionContainerBase {
    type: EZooSectionContentType.CONTAINER,
    cards?: IZooCard[],
}

export interface IZooSectionContentContainerCentered extends IZooSectionContentBase, IZooSectionContainerBase {
    type: EZooSectionContentType.CONTAINER_CENTERED,

    list?: string[];
    image?: string;
    cards?: IZooCard[];
}

export interface IZooSectionContentGalleryView extends IZooSectionContentBase, IZooSectionContainerBase {
    type: EZooSectionContentType.GALLERY_VIEW,

    rows: number;
    rowsMaxHeight: number;
    columns: number;
    images: IZooGalleryImage[]
}


export type IZooSectionContent = IZooSectionContentCarousel | IZooSectionContentContainer | IZooSectionContentContainerCentered | IZooSectionContentGalleryView;