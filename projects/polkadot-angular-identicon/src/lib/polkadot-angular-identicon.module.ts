import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PolkadotIdentIconComponent } from "./polkadot-angular-identicon.component";

@NgModule({
  declarations: [PolkadotIdentIconComponent],
  imports: [CommonModule, BrowserModule],
  exports: [PolkadotIdentIconComponent],
})
export class PolkadotIdentIconModule {}
