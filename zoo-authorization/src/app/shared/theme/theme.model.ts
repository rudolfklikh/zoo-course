export const ZOO_THEME_STORAGE_KEY = 'zootheme';

export enum ZooThemesList {
	Light = 'zoo-light',
	Dark = 'zoo-dark'
}

/**
 * @description Example:
 * {
    name: 'light,
    properties: {
      '--zoo-gray-00': '#F8F9FB',
    }
  }
 */
export interface IZooTheme {
	name: string;
	properties: {
		[key: string]: string;
	};
}

const ZooStaticPalette = {
	// Colors
	'--zoo-static-white': '#FFFFFF',
	'--zoo-static-black': '#000000',

	// Headings
	'--zoo-heading-1': '72px',
	'--zoo-heading-2': '64px',
	'--zoo-heading-3': '48px',
	'--zoo-heading-4': '36px',
	'--zoo-heading-5': '28px',
	'--zoo-heading-6': '24px',

	// Body Text
	'--zoo-body-1': '20px',
	'--zoo-body-2': '18px',
	'--zoo-body-3': '16px',
	'--zoo-body-4': '14px',
	'--zoo-body-5': '12px',

	// Spacing
	'--zoo-sp-0': '0px',
	'--zoo-sp-1': '1px',
	'--zoo-sp-2': '2px',
	'--zoo-sp-4': '4px',
	'--zoo-sp-6': '6px',
	'--zoo-sp-8': '8px',
	'--zoo-sp-10': '10px',
	'--zoo-sp-12': '12px',
	'--zoo-sp-14': '14px',
	'--zoo-sp-16': '16px',
	'--zoo-sp-20': '20px',
	'--zoo-sp-24': '24px',
	'--zoo-sp-28': '28px',
	'--zoo-sp-32': '32px',
	'--zoo-sp-36': '36px',
	'--zoo-sp-40': '40px',
	'--zoo-sp-48': '48px',
	'--zoo-sp-56': '56px',
	'--zoo-sp-64': '64px',
	'--zoo-sp-80': '80px',
	'--zoo-sp-96': '96px',
	'--zoo-sp-112': '112px',
	'--zoo-sp-120': '120px',
	'--zoo-sp-128': '128px',
	'--zoo-sp-144': '144px',
	'--zoo-sp-160': '160px',
	'--zoo-sp-176': '176px',
	'--zoo-sp-192': '192px',
	'--zoo-sp-200': '200px',
	'--zoo-sp-208': '208px',
	'--zoo-sp-224': '224px',
	'--zoo-sp-240': '240px',
	'--zoo-sp-256': '256px',
	'--zoo-sp-288': '288px',
	'--zoo-sp-320': '320px',
	'--zoo-sp-384': '384px',

	// Border Radius
	'--zoo-br-0': '0px',
	'--zoo-br-4': '4px',
	'--zoo-br-8': '8px',
	'--zoo-br-16': '16px',
	'--zoo-br-32': '32px',
	'--zoo-br-50': '50px',
	'--zoo-br-80': '80px',
	'--zoo-br-100': '100%',

	// Misc
	'--zoo-line-height': '1.36',
	'--zoo-header': '80px',
	'--zoo-xxl-area': '1600px',
	'--zoo-default-transition': '200ms'
};

export const ZooThemes: IZooTheme[] = [
	{
		name: ZooThemesList.Light,
		properties: {
			// Primary
			'--zoo-primary-950': '#503A00',
			'--zoo-primary-900': '#886400',
			'--zoo-primary-800': '#B48400',
			'--zoo-primary-700': '#D59C00',
			'--zoo-primary-600': '#E8AA00',
			'--zoo-primary-500': '#FFC116',
			'--zoo-primary-400': '#FFD04E',
			'--zoo-primary-300': '#FFE395',
			'--zoo-primary-200': '#FFF1CC',
			'--zoo-primary-100': '#FFFAEA',
			'--zoo-primary-50': '#FFFDF5',

			// Gray
			'--zoo-gray-max': '#000000',
			'--zoo-gray-950': '#0C0C0B',
			'--zoo-gray-900': '#1B1A19',
			'--zoo-gray-800': '#272624',
			'--zoo-gray-700': '#33322F',
			'--zoo-gray-600': '#42413D',
			'--zoo-gray-500': '#595752',
			'--zoo-gray-400': '#85827A',
			'--zoo-gray-300': '#A3A096',
			'--zoo-gray-200': '#BDB9AE',
			'--zoo-gray-100': '#EDE8DA',
			'--zoo-gray-min': '#FFFFFF',

			// System Red
			'--zoo-system-red-950': '#590602',
			'--zoo-system-red-900': '#770803',
			'--zoo-system-red-800': '#9D0B04',
			'--zoo-system-red-700': '#BE0D05',
			'--zoo-system-red-600': '#D6120A',
			'--zoo-system-red-500': '#F62D24',
			'--zoo-system-red-400': '#FD4D45',
			'--zoo-system-red-300': '#FF6D66',
			'--zoo-system-red-200': '#FF8D88',
			'--zoo-system-red-100': '#FFBCB9',
			'--zoo-system-red-50': '#FFDFDE',

			// System Green
			'--zoo-system-green-950': '#1A3C28',
			'--zoo-system-green-900': '#185631',
			'--zoo-system-green-800': '#13713A',
			'--zoo-system-green-700': '#119447',
			'--zoo-system-green-600': '#1AB559',
			'--zoo-system-green-500': '#2EC66B',
			'--zoo-system-green-400': '#4ED283',
			'--zoo-system-green-300': '#7EE3A7',
			'--zoo-system-green-200': '#A5EDC2',
			'--zoo-system-green-100': '#C9F3DA',
			'--zoo-system-green-50': '#EBFCF2',

			// System Blue
			'--zoo-system-blue-950': '#0C3A44',
			'--zoo-system-blue-900': '#094A58',
			'--zoo-system-blue-800': '#046B82',
			'--zoo-system-blue-700': '#0685A1',
			'--zoo-system-blue-600': '#0AA4C6',
			'--zoo-system-blue-500': '#15BCE1',
			'--zoo-system-blue-400': '#3DD3F4',
			'--zoo-system-blue-300': '#6BDEF8',
			'--zoo-system-blue-200': '#A2EBFB',
			'--zoo-system-blue-100': '#CFF6FF',
			'--zoo-system-blue-50': '#EDFCFF',

			// System Orange
			'--zoo-system-orange-950': '#4A2900',
			'--zoo-system-orange-900': '#7B4401',
			'--zoo-system-orange-800': '#A65C03',
			'--zoo-system-orange-700': '#CF7205',
			'--zoo-system-orange-600': '#ED8306',
			'--zoo-system-orange-500': '#FF971C',
			'--zoo-system-orange-400': '#FFA943',
			'--zoo-system-orange-300': '#FFBC6D',
			'--zoo-system-orange-200': '#FFD099',
			'--zoo-system-orange-100': '#FFE4C4',
			'--zoo-system-orange-50': '#FFF6EB',

			// Shadow Light
			'--zoo-shadow-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
			'--zoo-shadow-2': '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
			'--zoo-shadow-3': '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
			'--zoo-shadow-4': '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.30)',
			'--zoo-shadow-5': '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)',

			...ZooStaticPalette
		}
	},
	{
		name: ZooThemesList.Dark,
		properties: {
			// Primary
			'--zoo-primary-950': '#FFFAEB',
			'--zoo-primary-900': '#FFF1CC',
			'--zoo-primary-800': '#FFEDBC',
			'--zoo-primary-700': '#FFDF85',
			'--zoo-primary-600': '#FFD04E',
			'--zoo-primary-500': '#FFC116',
			'--zoo-primary-400': '#E8AA00',
			'--zoo-primary-300': '#D59C00',
			'--zoo-primary-200': '#B48400',
			'--zoo-primary-100': '#886400',
			'--zoo-primary-50': '#503A00',

			// Gray
			'--zoo-gray-max': '#000000',
			'--zoo-gray-950': '#F7F3ED',
			'--zoo-gray-900': '#E3DED8',
			'--zoo-gray-800': '#CCC7C0',
			'--zoo-gray-700': '#9C9790',
			'--zoo-gray-600': '#96928A',
			'--zoo-gray-500': '#827F78',
			'--zoo-gray-400': '#6C675E',
			'--zoo-gray-300': '#5D574B',
			'--zoo-gray-200': '#4D4639',
			'--zoo-gray-100': '#423B2D',
			'--zoo-gray-50': '#393225',
			'--zoo-gray-min': '#26221A',

			// System Red
			'--zoo-system-red-950': '#FFDFDE',
			'--zoo-system-red-900': '#FFBCB9',
			'--zoo-system-red-800': '#FF7F79',
			'--zoo-system-red-700': '#FF807A',
			'--zoo-system-red-600': '#FF6D66',
			'--zoo-system-red-500': '#F35851',
			'--zoo-system-red-400': '#FF463E',
			'--zoo-system-red-300': '#F62D24',
			'--zoo-system-red-200': '#D6120A',
			'--zoo-system-red-100': '#9D0B04',
			'--zoo-system-red-50': '#770803',

			// System Green
			'--zoo-system-green-950': '#F5FFF9',
			'--zoo-system-green-900': '#E0F9EA',
			'--zoo-system-green-800': '#C9F3DA',
			'--zoo-system-green-700': '#A5EDC2',
			'--zoo-system-green-600': '#7EE3A7',
			'--zoo-system-green-500': '#4ED283',
			'--zoo-system-green-400': '#2EC66B',
			'--zoo-system-green-300': '#1AB559',
			'--zoo-system-green-200': '#119447',
			'--zoo-system-green-100': '#185631',
			'--zoo-system-green-50': '#1A3C28',

			// System Blue
			'--zoo-system-blue-950': '#F3FDFF',
			'--zoo-system-blue-900': '#DBF8FF',
			'--zoo-system-blue-800': '#C2F4FF',
			'--zoo-system-blue-700': '#9EEBFB',
			'--zoo-system-blue-600': '#6BDEF8',
			'--zoo-system-blue-500': '#3DD3F4',
			'--zoo-system-blue-400': '#15BCE1',
			'--zoo-system-blue-300': '#0AA4C6',
			'--zoo-system-blue-200': '#0685A1',
			'--zoo-system-blue-100': '#046B82',
			'--zoo-system-blue-50': '#0C3A44',

			// System Orange
			'--zoo-system-orange-950': '#FFF6EB',
			'--zoo-system-orange-900': '#FFEBD3',
			'--zoo-system-orange-800': '#FFDEB8',
			'--zoo-system-orange-700': '#FFD099',
			'--zoo-system-orange-600': '#FFBC6D',
			'--zoo-system-orange-500': '#FFA943',
			'--zoo-system-orange-400': '#FF971C',
			'--zoo-system-orange-300': '#ED8306',
			'--zoo-system-orange-200': '#CF7205',
			'--zoo-system-orange-100': '#7B4401',
			'--zoo-system-orange-50': '#4A2900',

			// Shadow Dark
			'--zoo-shadow-1': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
			'--zoo-shadow-2': '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
			'--zoo-shadow-3': '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)',
			'--zoo-shadow-4': '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.30)',
			'--zoo-shadow-5': '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)',

			...ZooStaticPalette
		}
	}
];
