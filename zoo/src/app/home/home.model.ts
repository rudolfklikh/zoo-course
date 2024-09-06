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
              title: '12345',
              aligning: 'center',
              textAligning: 'center',
              subTitle: 'total animal',
              icon: 'heart',
            },
            {
              title: '12345',
              aligning: 'center',
              textAligning: 'center',
              subTitle: 'total animal',
              icon: 'heart',
            },
            {
              title: '12345',
              aligning: 'center',
              textAligning: 'center',
              subTitle: 'total membership',
              icon: 'heart',
            },
            {
              title: '12345',
              aligning: 'center',
              textAligning: 'center',
              subTitle: 'save wild life',
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
    {
      id: 'section#5',
      order: 4,
      content: [
        {
          type: EZooSectionContentType.GALLERY_VIEW,
          title: 'let`s see our zoofari awsome animals',
          rows: 3,
          rowsMaxHeight: 250,
          columns: 3,
          images: [
            {
              imgSrc: '/assets/gallery/animal-1.jpg',
              rowStart: 1,
              rowEnd: 1,
              columnStart: 1,
              columnEnd: 1,
              title: 'animal',
              subTitle: 'elephant'
            },
            {
              imgSrc: '/assets/gallery/animal-2.jpg',
              rowStart: 1,
              rowEnd: 2,
              columnStart: 2,
              columnEnd: 2,
              title: 'animal',
              subTitle: 'elephant'
            },
            {
              imgSrc: '/assets/gallery/animal-3.jpg',
              rowStart: 1,
              rowEnd: 1,
              columnStart: 3,
              columnEnd: 3,
              title: 'animal',
              subTitle: 'elephant'
            },
            {
              imgSrc: '/assets/gallery/animal-4.jpg',
              rowStart: 2,
              rowEnd: 3,
              columnStart: 1,
              columnEnd: 1,
              title: 'animal',
              subTitle: 'elephant'
            },
            {
              imgSrc: '/assets/gallery/animal-5.jpg',
              rowStart: 3,
              rowEnd: 3,
              columnStart: 2,
              columnEnd: 2,
              title: 'animal',
              subTitle: 'elephant'
            },
            {
              imgSrc: '/assets/gallery/animal-6.jpg',
              rowStart: 2,
              rowEnd: 3,
              columnStart: 3,
              columnEnd: 3,
              title: 'animal',
              subTitle: 'elephant'
            }
          ],
        },
      ],
    },
  ],
};
