import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NAV_LINKS } from './footer.model';
import { ZooIconComponent } from '../icon/icon.component';

@Component({
	selector: 'zoo-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, RouterModule, ZooIconComponent],
})
export class ZooFooterComponent {
	private _router: Router = inject(Router);

	protected readonly contacts = NAV_LINKS.contacts;
	protected readonly social = NAV_LINKS.social;
	protected readonly navigation = NAV_LINKS.navigation;
	protected readonly copyright = '© 2024 Zoo course project. All rights reserved';

	public isEmail(value: string): boolean {
		return value.includes('@');
	}

	public isPhone(value: string): boolean {
		return value.includes('+');
	}


	
	public onClick(link: string): void {
		if (link.includes('http')) {
			window.location.href = link;
			return;
		}

		void this._router.navigate([link]);
	}
}
