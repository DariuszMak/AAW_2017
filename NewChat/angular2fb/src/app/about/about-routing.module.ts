import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LazyComponent} from './about.component';

const routes: Routes = [
  {path: '', component: LazyComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
