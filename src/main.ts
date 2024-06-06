import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
})
  .catch(err => console.error(err));

