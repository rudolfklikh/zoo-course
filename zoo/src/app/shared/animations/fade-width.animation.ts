import { animate, style, transition, trigger } from '@angular/animations';

export const ZooFadeWidthAnimation = trigger('zooFadeWidth', [
	transition('void => *', [
		style({
			width: 0,
			opacity: 1
		}),
		animate(
			'250ms ease-in-out',
			style({
				width: '*',
				opacity: 1
			})
		)
	]),
	transition('* => void', [
		style({
			width: '*',
			opacity: 1
		}),
		animate(
			'250ms ease-in-out',
			style({
				width: 0,
				opacity: 1
			})
		)
	])
]);
