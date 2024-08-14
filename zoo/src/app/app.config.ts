import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InMemoryScrollingOptions, provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { ZooThemeService } from './shared';

const scrollConfig: InMemoryScrollingOptions = {
	scrollPositionRestoration: 'top',
	anchorScrolling: 'enabled'
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withInMemoryScrolling(scrollConfig), withViewTransitions()),
    provideAnimations(),
    {
			provide: APP_INITIALIZER,
			useFactory: (themeService: ZooThemeService) => (): void => themeService.initTheme(),
			multi: true,
			deps: [ZooThemeService]
		},
  ]
};
