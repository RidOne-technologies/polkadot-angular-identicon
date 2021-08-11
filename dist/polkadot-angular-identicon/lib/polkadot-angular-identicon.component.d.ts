import { OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
export declare class PolkadotIdentIconComponent implements OnInit {
    private sanitizer;
    /**
     * @field address passed when using the polkadot-angular-identicon tag
     * to display the icon
     */
    address?: any;
    /**
     *  @field  size passed when using the polkadot-angular-identicon tag
     *  to set the icon size
    */
    size?: any;
    /**
    * @field  theme passed when using the polkadot-angular-identicon tag
    * to set the theme of the icon
    */
    theme?: string;
    /**
    * @field  iconHTML : as SafeHTML object that the value will be set by the pickRenderFunction from
    * the RenderHelper class.
    */
    iconHTML?: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    /**
     *
     * @returns an object that contains the width and height properties in pixel that will be passed
     * to the angular ngStyle directive in the component (polkadot-angular-identicon) .
     */
    getStyle(): {
        width: string;
        height: string;
    };
}
