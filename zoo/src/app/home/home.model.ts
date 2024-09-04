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
      content: [
        {
          type: EZooSectionContentType.CONTAINER_CENTERED,
          cards: [
            {
              title: 'total animal',
              aligning: 'center',
              textAligning: 'center',
              subTitle: '12345',
              icon: 'heart',
            },
            {
              title: 'daily visitors',
              aligning: 'center',
              textAligning: 'center',
              subTitle: '12345',
              icon: 'heart',
            },
            {
              title: 'total membership',
              aligning: 'center',
              textAligning: 'center',
              subTitle: '12345',
              icon: 'heart',
            },
            {
              title: 'save wild life',
              aligning: 'center',
              textAligning: 'center',
              subTitle: '12345',
              icon: 'heart',
            },
          ],
          background: '/assets/bg-1.jpg',
        },
      ],
    },
    {
      id: 'section#4',
      order: 3,
      content: [
        {
          type: EZooSectionContentType.CONTAINER_CENTERED,
          title: 'special services for zoofari visitors',
          cards: [
            {
              title: 'Car Parking',
              aligning: 'flex-start',
              textAligning: 'left',
              subTitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
              icon: 'heart',
            },
            {
              title: 'Animal Photos',
              aligning: 'flex-start',
              textAligning: 'left',
              subTitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
              icon: 'heart',
            },
            {
              title: 'Guide Services',
              aligning: 'flex-start',
              textAligning: 'left',
              subTitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
              icon: 'heart',
            },
            {
              title: 'Food & Beverages',
              aligning: 'flex-start',
              textAligning: 'left',
              subTitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
              icon: 'heart',
            },
            {
              title: 'Zoo Shopping',
              aligning: 'flex-start',
              textAligning: 'left',
              subTitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
              icon: 'heart',
            },
            {
              title: 'Free Hi Speed Wi-Fi',
              aligning: 'flex-start',
              textAligning: 'left',
              subTitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
              icon: 'heart',
            },
            {
              title: 'Play Ground',
              aligning: 'flex-start',
              textAligning: 'left',
              subTitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
              icon: 'heart',
            },
            {
              title: 'Rest House',
              aligning: 'flex-start',
              textAligning: 'left',
              subTitle: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
              icon: 'heart',
            },
          ],
        },
      ],
    },
  ],
};
