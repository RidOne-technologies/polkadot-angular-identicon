import { Component, Input, NgModule } from '@angular/core';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { polkadotIcon, beachballIcon } from '@polkadot/ui-shared/icons';
import { toSvg } from 'jdenticon';
import { CommonModule } from '@angular/common';

const DEFAULT_SIZE = 64;
const DEFAULT_THEME = 'polkadot';
const DEFAULT_ADDRESS = "";
var THEMES_ENUM;
(function (THEMES_ENUM) {
    THEMES_ENUM["POLKADOT"] = "polkadot";
    THEMES_ENUM["BEACHBALL"] = "beachball";
    THEMES_ENUM["JDENTICON"] = "jdenticon";
    THEMES_ENUM["EMPTY"] = "empty";
})(THEMES_ENUM || (THEMES_ENUM = {}));

class RenderHelper {
    /// Function that choose render function according to which parameters are passed
    static pickRenderFunction(address, theme, size = DEFAULT_SIZE) {
        if (address) {
            switch (theme) {
                case THEMES_ENUM.POLKADOT:
                    return this.renderPolkadotIdenticon(address, '', false, size, '');
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
    /// function called when the polkadot theme is passed. This function renders the circle with a color
    static renderCircle({ cx, cy, fill, r }, key) {
        let svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="${cx}"  cy="${cy}" fill="${fill}"  r="${r}" />
                </svg>`;
        return svg;
    }
    /// This function renders the polkadot identicon when the polkadot theme is passed
    static renderPolkadotIdenticon(address, className = '', isAlternative = false, size, style) {
        return `<svg
            height=${size}
            viewBox='0 0 64 64'
            width=${size}>
            ${polkadotIcon(address, { isAlternative }).map(this.renderCircle).join('')}
            </svg>`;
    }
    /// This function renders the beachball identicon when the beachball theme is passed
    static renderBeachballIdenticon(address, isAlternative = false, size) {
        let generatedBeachballIcon = beachballIcon(address, { isAlternative: isAlternative, size });
        return generatedBeachballIcon.innerHTML;
    }
    /// This empty identicon will be diplayed if a wrong Substrate address is passed
    static renderEmptyIdenticon(size) {
        return `<div>
              <svg :height="size" viewBox="0 0 64 64" :width="size" >
                <circle cx="50%" cy="50%" fill="#eee" r="50%" />
              </svg>
            </div>`;
    }
    /// This function renders the jdenticon identicon when the jdenticon theme is passed
    static renderJidenticon(address, size) {
        return toSvg(address, size);
    }
    /// This helper function picks the theme according to the passed parameters
    ///
    static themeFilter(theme) {
        if (theme === THEMES_ENUM.POLKADOT || !theme) {
            return THEMES_ENUM.POLKADOT;
        }
        else if (theme === THEMES_ENUM.BEACHBALL) {
            return THEMES_ENUM.POLKADOT;
        }
        else if (theme === THEMES_ENUM.JDENTICON) {
            return THEMES_ENUM.JDENTICON;
        }
        else {
            return THEMES_ENUM.EMPTY;
        }
    }
}

class PolkadotIdentIconComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.size = DEFAULT_SIZE;
        this.theme = "polkadot";
    }
    ngOnInit() {
        this.iconHTML = this.sanitizer.bypassSecurityTrustHtml(RenderHelper.pickRenderFunction(this.address, this.theme, this.size));
    }
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
