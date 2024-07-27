import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { ZooThemeService } from './shared';

const scrollConfig: InMemoryScrollingOptions = {
	scrollPositionRestoration: 'top',
	anchorScrolling: 'enabled'
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withInMemoryScrolling(scrollConfig)),
    provideAnimations(),
    {
			provide: APP_INITIALIZER,
			useFactory: (themeService: ZooThemeService) => (): void => themeService.initTheme(),
			multi: true,
			deps: [ZooThemeService]
		},
    provideAnimationsAsync()
  ]
};
