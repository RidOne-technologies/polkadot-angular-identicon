import { Component, Input, NgModule } from '@angular/core';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { polkadotIcon, beachballIcon } from '@polkadot/ui-shared/icons';
import { toSvg } from 'jdenticon';
import { CommonModule } from '@angular/common';

/** @constant DEFAULT_SIZE  default size of the icon when size attribute not passed */
const DEFAULT_SIZE = 64;
/** @constant DEFAULT_THEME : default theme of the icon when theme attribute not passed */
const DEFAULT_THEME = 'polkadot';
/**
 * @enum THEMES_ENUM : This enum contains the different possibles themes that can
 * be set on the polkadot-angular-identicon component tag
 *  polkadot, beachball, jdenticon and empty
 */
var THEMES_ENUM;
(function (THEMES_ENUM) {
    THEMES_ENUM["POLKADOT"] = "polkadot";
    THEMES_ENUM["BEACHBALL"] = "beachball";
    THEMES_ENUM["JDENTICON"] = "jdenticon";
    THEMES_ENUM["EMPTY"] = "empty";
})(THEMES_ENUM || (THEMES_ENUM = {}));

class RenderHelper {
    /**
     * pickRenderFunction : Accourding to the theme passed, this function picks a render function between:
     *
     * renderPolkadotIdenticon,
     * renderBeachballIdenticon,
     * renderJidenticon,
     * and renderEmptyIdenticon
     *
     * When no theme is passed it default to polkadot theme.
     * @param address Substrate based chain address
     * @param theme theme of the identicon (defaulst to polkadot)
     * @param size size of the identicon (defaults to 64px)
     * @returns the the generated html that to display the identicon.
     */
    static pickRenderFunction(address, theme, size = DEFAULT_SIZE) {
        if (address) {
            switch (theme) {
                case THEMES_ENUM.POLKADOT:
                    return this.renderPolkadotIdenticon(address, false, size);
                case THEMES_ENUM.BEACHBALL:
                    return this.renderBeachballIdenticon(address, false, size);
                case THEMES_ENUM.JDENTICON:
                    return this.renderJidenticon(address, size);
                default:
                    return this.renderEmptyIdenticon(size);
            }
        }
        else {
            return this.renderEmptyIdenticon(size);
        }
    }
    /**
     * @description This function renders a small circle with a color in a polkadot identicon theme.
     * It is internally called in renderPolkadotIdenticon function that will pass.
     * @param Circle represent a small circle that is part of circles in a polkadot icon
     * @returns A SVG representing a small circle that is part of the array of the circles in a polkadot icon
     */
    static renderCircle({ cx, cy, fill, r }) {
        let svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="${cx}"  cy="${cy}" fill="${fill}"  r="${r}" />
                </svg>`;
        return svg;
    }
    /**
     * @description  This function renders the polkadot identicon when the polkadot theme is passed
     * @param address Substrate based chain address
     * @param isAlternative
     * @param size size of the identicon (defaults to 64px)
     * @returns A SVG representing array of the circles that make up the polkadot identicon
     */
    static renderPolkadotIdenticon(address, isAlternative = false, size) {
        return `<svg
            height=${size}
            viewBox='0 0 64 64'
            width=${size}>
            ${polkadotIcon(address, { isAlternative, size }).map(this.renderCircle).join('')}
            </svg>`;
    }
    /**
     * @description This function renders the beachball identicon when the beachball theme is passed
     * @param address Substrate based chain address
     * @param isAlternative
     * @param size size of the identicon (defaults to 64px)
     * @returns  A SVG representing the beachball identicon
     */
    static renderBeachballIdenticon(address, isAlternative = false, size) {
        let generatedBeachballIcon = beachballIcon(address, { isAlternative: isAlternative, size });
        return generatedBeachballIcon.innerHTML;
    }
    /**
     * @description This empty identicon will be diplayed if a wrong Substrate address is passed
     * @param size size of the identicon (defaults to 64px)
     * @returns A light gray colored SVG icon that represent an empty icon
     */
    static renderEmptyIdenticon(size) {
        return `<div>
              <svg :height="size" viewBox="0 0 64 64" :width="size" >
                <circle cx="50%" cy="50%" fill="#eee" r="50%" />
              </svg>
            </div>`;
    }
    /**
     * @description This function renders the jdenticon identicon when the jdenticon theme is passed
     * @param address Substrate based chain address
     * @param size size of the identicon (defaults to 64px)
     * @returns  A SVG representing the jdenticon (from jdenticon ibrary ) identicon
     */
    static renderJidenticon(address, size) {
        return toSvg(address, size);
    }
}

class PolkadotIdentIconComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        /**
         *  @field  size passed when using the polkadot-angular-identicon tag
         *  to set the icon size
        */
        this.size = DEFAULT_SIZE;
        /**
        * @field  theme passed when using the polkadot-angular-identicon tag
        * to set the theme of the icon
        */
        this.theme = THEMES_ENUM.POLKADOT;
    }
    ngOnInit() {
        this.iconHTML = this.sanitizer.bypassSecurityTrustHtml(RenderHelper.pickRenderFunction(this.address, this.theme, this.size));
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
PolkadotIdentIconComponent.decorators = [
    { type: Component, args: [{
                selector: "polkadot-angular-identicon",
                template: `<div [innerHTML]="iconHTML" [ngStyle]="getStyle()"></div>`
            },] }
];
PolkadotIdentIconComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
PolkadotIdentIconComponent.propDecorators = {
    address: [{ type: Input }],
    size: [{ type: Input }],
    theme: [{ type: Input }]
};

class PolkadotIdentIconModule {
}
PolkadotIdentIconModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PolkadotIdentIconComponent],
                imports: [CommonModule, BrowserModule],
                exports: [PolkadotIdentIconComponent],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { PolkadotIdentIconComponent, PolkadotIdentIconModule };
//# sourceMappingURL=polkadot-angular-identicon.js.map
