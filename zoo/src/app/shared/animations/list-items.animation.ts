import { animate, animateChild, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const ZooListItemsAnimation = [
	trigger('zooList', [
		state(
			'*',
			style({
				overflowX: 'hidden',
				overflowY: 'auto',
				opacity: '1'
			})
		),
		state(
			'void',
			style({
				overflowX: 'hidden',
				overflowY: 'auto',
				opacity: '0'
			})
		),
		transition('* => void', [query('@zooListItems', animateChild()), query(':self', animate('250ms ease-out'))]),
		transition('void => *', [animate('250ms ease-out'), query('@zooListItems', animateChild(), { optional: true })])
	]),
	trigger('zooListItems', [
		transition('void => *', [
			query(
				':enter',
				style({
					opacity: '0',
					transform: 'translateX(-1.25em) translateY(-0.125em)'
				})
			),
			query(
				':enter',
				stagger('50ms', [
					animate(
						'315ms ease-out',
						style({
							opacity: '1',
							transform: 'translateX(0) translateY(0)'
						})
					)
				])
			)
		]),
		transition('* => void', [
			query(
				':leave',
				style({
					opacity: 1,
					transform: 'translateX(0) translateY(0)'
				})
			),
			query(
				':leave',
				stagger('-10ms', [
					animate(
						'150ms ease-in',
						style({
							opacity: 0,
							transform: 'translateX(-1.25em) translateY(-0.125em)'
						})
					)
				])
			)
		])
	])
];
