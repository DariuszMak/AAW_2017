import {NgModule} from '@angular/core';

import {LazyComponent}   from './about.component';
import {routing} from './about-routing.module';

@NgModule({
  imports: [routing],
  declarations: [LazyComponent]
})
export class LazyModule {
}
