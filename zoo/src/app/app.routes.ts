import { Routes } from '@angular/router';
import { ZooRoutes } from './shared';

export const routes: Routes = [
    {
		path: ZooRoutes.home.path,
		loadComponent: async (): Promise<any> => import('./home/home.component').then(component => component.HomeComponent)
	},
];
