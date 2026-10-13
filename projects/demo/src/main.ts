import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Import code tabs functionality
import './app/shared/utils/code-tabs';

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
