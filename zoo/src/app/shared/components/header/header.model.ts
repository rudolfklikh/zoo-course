import { IZooNav } from "../../interfaces";

export enum EZooNavTitles {
    ABOUT = 'About',
    OVERVIEW = 'Overview',
    CONTACT_US = 'Contact us'
}

export const NAV_LINKS: IZooNav[] = [
    {
        id: 'link-1',
        name: EZooNavTitles.ABOUT,
        order: 1,
        url: '',
    },
    {
        id: 'link-2',
        name: EZooNavTitles.OVERVIEW,
        order: 1,
        url: '',
    },
    {
        id: 'link-3',
        name: EZooNavTitles.CONTACT_US,
        order: 1,
        url: '',
    }
]