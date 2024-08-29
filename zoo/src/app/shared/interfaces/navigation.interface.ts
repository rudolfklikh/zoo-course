export interface IZooNav {
	id: string;
	name: string;
	order: number;
	active?: boolean;
	url?: string;
	children?: IZooNav[];
}
