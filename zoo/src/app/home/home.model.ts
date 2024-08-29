import { EZooSectionContentType, IZooSectionBase } from '../shared';

export interface IHomeContent {
  sections: IZooSectionBase[];
}

export const HOME_CONTENT: IHomeContent = {
  sections: [
    {
      id: 'section#1',
      order: 0,
      height: 600,
      content: [
        {
          type: EZooSectionContentType.CONTAINER,
          title: 'enjoy wonderful day with your family',
          buttons: [
            { title: 'Read more', url: '' },
            { title: 'Watch Video', url: '' },
          ],
          background: '/assets/bg-1.jpg',
        },
        {
          type: EZooSectionContentType.CAROUSEL,
          images: [
            '/assets/carousel/carousel-1.jpg',
            '/assets/carousel/carousel-2.jpg',
            '/assets/carousel/carousel-3.jpg',
          ],
        },
      ],
    },
  ],
};
