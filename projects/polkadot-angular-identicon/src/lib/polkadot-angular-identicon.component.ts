import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { RenderHelper } from "./render-helper";
import { DEFAULT_SIZE } from "./constants";
@Component({
  selector: "polkadot-angular-identicon",
  template: `<div [innerHTML]="iconHTML" [ngStyle]="getStyle()"></div>`,
  styles: [],
})
export class PolkadotIdentIconComponent implements OnInit {
  @Input() address?: string;
  @Input() size?: number = DEFAULT_SIZE;
  @Input() theme?: string = "polkadot";
  iconHTML?: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.iconHTML = this.sanitizer.bypassSecurityTrustHtml(
      RenderHelper.pickRenderFunction(this.address, this.theme, this.size)
    );
  }
  getStyle() {
    return {
      width: this.size + "px",
      height: this.size + "px",
    };
  }
}
