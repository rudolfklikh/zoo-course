import { EZooAlertIcon, EZooAlertType } from "./alert.enum";
import { IZooAlertStyle } from "./alert.interfaces";


export const AlertDefaultConfig = {
	delay: 5000,
	type: EZooAlertType.Info,
	width: '24px',
	height: '24px',
	progress: '100%',
	space: '30px',
	retentionTime: 300
};

export const ZooAlertStyleMap = new Map<EZooAlertType, IZooAlertStyle>([
	[
		EZooAlertType.Info,
		{
			iconName: EZooAlertIcon.Info,
			iconWidth: AlertDefaultConfig.width,
			iconHeight: AlertDefaultConfig.height,
			iconColor: 'var(--zoo-system-blue-800)',
			progressColor: 'var(--zoo-system-blue-800)'
		}
	],
	[
		EZooAlertType.Warning,
		{
			iconName: EZooAlertIcon.Warning,
			iconWidth: AlertDefaultConfig.width,
			iconHeight: AlertDefaultConfig.height,
			iconColor: 'var(--zoo-primary-700)',
			progressColor: 'var(--zoo-primary-700)'
		}
	],
	[
		EZooAlertType.Danger,
		{
			iconName: EZooAlertIcon.Danger,
			iconWidth: AlertDefaultConfig.width,
			iconHeight: AlertDefaultConfig.height,
			iconColor: 'var(--zoo-system-red-700)',
			progressColor: 'var(--zoo-system-red-700)'
		}
	],
	[
		EZooAlertType.Success,
		{
			iconName: EZooAlertIcon.Success,
			iconWidth: AlertDefaultConfig.width,
			iconHeight: AlertDefaultConfig.height,
			iconColor: 'var(--zoo-system-green-500)',
			progressColor: 'var(--zoo-system-green-500)'
		}
	],
	[
		EZooAlertType.Default,
		{
			iconName: EZooAlertIcon.Info,
			iconWidth: AlertDefaultConfig.width,
			iconHeight: AlertDefaultConfig.height,
			iconColor: 'var(--zoo-system-blue-800)',
			progressColor: 'var(--zoo-system-blue-800)'
		}
	]
]);
