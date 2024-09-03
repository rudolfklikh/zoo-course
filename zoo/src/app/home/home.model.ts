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
    {
      id: 'section#2',
      order: 1,
      height: 600,
      content: [
        {
          type: EZooSectionContentType.CONTAINER_CENTERED,
          title: 'why you should visit zoofari park!',
          subtitle:
            'Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.',
          list: [
            'free car parking',
            'natural environment',
            'professional guide & security',
            'world best animals',
          ],
          buttons: [{ title: 'Read more', url: '' }],
          image: '/assets/about.jpg',
        },
      ],
    },
    {
      id: 'section#3',
      order: 2,
      height: 400,
      content: [
        {
          type: EZooSectionContentType.CONTAINER_CENTERED,
          cards: [
            {
              title: 'total animal',
              totalCount: 12345
            },
            {
              title: 'daily visitors',
              totalCount: 12345
            },
            {
              title: 'total membership',
              totalCount: 12345
            },
            {
              title: 'save wild life',
              totalCount: 12345
            },
          ],
          background: '/assets/bg-1.jpg',
        },
      ],
    },
  ],
};
