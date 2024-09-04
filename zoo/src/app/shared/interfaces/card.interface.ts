export type IZooAligning = 'flex-start' | 'center' | 'flex-end';
export type IZooTextAligning = 'left' | 'center' | 'right';

export interface IZooCard {
    title: string;
    aligning: IZooAligning;
    textAligning: IZooTextAligning;
    subTitle?: string;
    icon?: string;
}