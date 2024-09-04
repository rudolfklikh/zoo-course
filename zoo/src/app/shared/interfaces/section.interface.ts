import { IZooSectionContent } from "./section-content.interface";


export interface IZooSectionBase {
	id: string;
	order: number;
	content: IZooSectionContent[],
	
	height?: number;
	title?: string;
}