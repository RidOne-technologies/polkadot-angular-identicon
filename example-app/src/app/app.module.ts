import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PolkadotIdentIconModule } from 'polkadot-angular-identicon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PolkadotIdentIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
