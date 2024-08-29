import { IZooSectionContent } from "./section-content.interface";


export interface IZooSectionBase {
	id: string;
	order: number;
	height: number;
	content: IZooSectionContent[],
	
	title?: string;
}