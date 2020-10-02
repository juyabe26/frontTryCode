import { NgModule, Optional, SkipSelf } from '@angular/core';
import {DynamicFormsModule} from './../core/elements/dynamic-forms.module';
@NgModule({
  declarations: [

  ],
  imports: [
    // DynamicFormsModule,
  ],
  exports: [

  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
