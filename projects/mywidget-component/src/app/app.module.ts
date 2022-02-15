import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MywidgetComponent} from "../../../mywidget/src/lib/mywidget.component";
import {createCustomElement} from "@angular/elements";
import {MywidgetModule} from "../../../mywidget/src/lib/mywidget.module";

export abstract class WebComponentModule {
  protected constructor(injector: Injector, component: InstanceType<any>, name: String) {
    const ngElement = createCustomElement(component, {
      injector
    });
    customElements.define(`mywidget-${name}`, ngElement);
  }

  public ngDoBootstrap(): void {
  }
}

@NgModule({
  imports: [
    BrowserModule,
    MywidgetModule
  ],
  providers: [],
  entryComponents: [MywidgetComponent]
})
export class AppModule extends WebComponentModule {
  constructor(readonly injector: Injector) {
    super(injector, MywidgetComponent, 'sample');
  }
}
