import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { RenderHelper } from "./render-helper";
import { DEFAULT_SIZE, THEMES_ENUM } from "./constants";

@Component({
  selector: "polkadot-angular-identicon",
  template: `<div [innerHTML]="iconHTML" [ngStyle]="getStyle()"></div>`,
  styles: [],
})
export class PolkadotIdentIconComponent implements OnInit {

  /**
   * @field address passed when using the polkadot-angular-identicon tag 
   * to display the icon
   */
  @Input() address?: any;

  /**
   *  @field  size passed when using the polkadot-angular-identicon tag
   *  to set the icon size 
  */
  @Input() size?: any = DEFAULT_SIZE;

  /** 
  * @field  theme passed when using the polkadot-angular-identicon tag 
  * to set the theme of the icon 
  */
  @Input() theme?: string = THEMES_ENUM.POLKADOT;


  /** 
  * @field  iconHTML : as SafeHTML object that the value will be set by the pickRenderFunction from 
  * the RenderHelper class. 
  */
  iconHTML?: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.iconHTML = this.sanitizer.bypassSecurityTrustHtml(
      RenderHelper.pickRenderFunction(this.address, this.theme, this.size)
    );
  }


  /**
   * 
   * @returns an object that contains the width and height properties in pixel that will be passed 
   * to the angular ngStyle directive in the component (polkadot-angular-identicon) .
   */
  getStyle() {
    return {
      width: this.size + "px",
      height: this.size + "px",
    };
  }

}
