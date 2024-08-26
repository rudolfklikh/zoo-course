export enum EZooFooterTitles {
    ADRESS = 'Adress',
    SOCIAL = 'Social',
    QUICK_ACCESS = 'Quick Access',
}

export const NAV_LINKS = {
    contacts: {
        title: EZooFooterTitles.ADRESS,
        links: [
            {
                name: 'test@gmail.com',
                logo: 'mail'
            },
            {
                name: '+38 (999) 99 99 99',
                logo: 'call'
            },
            {
                name: '123 Street, New York, USA',
                logo: 'location_on'
            },
        ]
    },
    social: {
        title: EZooFooterTitles.SOCIAL,
        links: [
            {
                logo: 'instagram',
                url: 'https://www.instagram.com/'
            },
            {
                logo: 'facebook',
                url: 'https://www.facebook.com/'
            }
        ]
    }, 
    navigation: {
        title: EZooFooterTitles.QUICK_ACCESS,
        links: [
            {
                name: 'About Us',
                url: '/'
            },
            {
                name: 'Contact Us',
                url: '/'
            },
            {
                name: 'Our Services',
                url: '/'
            },
            {
                name: 'Terms & Condition',
                url: '/'
            },
            {
                name: 'Support',
                url: '/'
            }
        ]
    }
};