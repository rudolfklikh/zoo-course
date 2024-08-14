import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NAV_LINKS } from './header.model';
import { RouterModule } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { ZooListItemsAnimation } from '../../animations';
import { headShake, heartBeat } from 'ng-animate';

@Component({
	selector: 'zoo-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	standalone: true,
	animations: [
		ZooListItemsAnimation,
		trigger('headShake', [transition('* => *', useAnimation(headShake))]),
		trigger('heartBeat', [transition('* => *', useAnimation(heartBeat))])
	],
	imports: [CommonModule, RouterModule]
})
export class ZooHeaderComponent {
	public readonly title = 'Zoofari';
	public readonly links = NAV_LINKS;

	public toggleBurger = signal(false);


	public toggleMenu(): void {
		this.toggleBurger.update(state => !state);
	}
}
