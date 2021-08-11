(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@polkadot/ui-shared/icons'), require('jdenticon'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('polkadot-angular-identicon', ['exports', '@angular/core', '@angular/platform-browser', '@polkadot/ui-shared/icons', 'jdenticon', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['polkadot-angular-identicon'] = {}, global.ng.core, global.ng.platformBrowser, global.icons, global.jdenticon, global.ng.common));
}(this, (function (exports, core, platformBrowser, icons, jdenticon, common) { 'use strict';

    /** @constant DEFAULT_SIZE  default size of the icon when size attribute not passed */
    var DEFAULT_SIZE = 64;
    /** @constant DEFAULT_THEME : default theme of the icon when theme attribute not passed */
    var DEFAULT_THEME = 'polkadot';
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

    var RenderHelper = /** @class */ (function () {
        function RenderHelper() {
        }
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
        RenderHelper.pickRenderFunction = function (address, theme, size) {
            if (size === void 0) { size = DEFAULT_SIZE; }
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
        };
        /**
         * @description This function renders a small circle with a color in a polkadot identicon theme.
         * It is internally called in renderPolkadotIdenticon function that will pass.
         * @param Circle represent a small circle that is part of circles in a polkadot icon
         * @returns A SVG representing a small circle that is part of the array of the circles in a polkadot icon
         */
        RenderHelper.renderCircle = function (_a) {
            var cx = _a.cx, cy = _a.cy, fill = _a.fill, r = _a.r;
            var svg = "<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n                <circle cx=\"" + cx + "\"  cy=\"" + cy + "\" fill=\"" + fill + "\"  r=\"" + r + "\" />\n                </svg>";
            return svg;
        };
        /**
         * @description  This function renders the polkadot identicon when the polkadot theme is passed
         * @param address Substrate based chain address
         * @param isAlternative
         * @param size size of the identicon (defaults to 64px)
         * @returns A SVG representing array of the circles that make up the polkadot identicon
         */
        RenderHelper.renderPolkadotIdenticon = function (address, isAlternative, size) {
            if (isAlternative === void 0) { isAlternative = false; }
            return "<svg\n            height=" + size + "\n            viewBox='0 0 64 64'\n            width=" + size + ">\n            " + icons.polkadotIcon(address, { isAlternative: isAlternative, size: size }).map(this.renderCircle).join('') + "\n            </svg>";
        };
        /**
         * @description This function renders the beachball identicon when the beachball theme is passed
         * @param address Substrate based chain address
         * @param isAlternative
         * @param size size of the identicon (defaults to 64px)
         * @returns  A SVG representing the beachball identicon
         */
        RenderHelper.renderBeachballIdenticon = function (address, isAlternative, size) {
            if (isAlternative === void 0) { isAlternative = false; }
            var generatedBeachballIcon = icons.beachballIcon(address, { isAlternative: isAlternative, size: size });
            return generatedBeachballIcon.innerHTML;
        };
        /**
         * @description This empty identicon will be diplayed if a wrong Substrate address is passed
         * @param size size of the identicon (defaults to 64px)
         * @returns A light gray colored SVG icon that represent an empty icon
         */
        RenderHelper.renderEmptyIdenticon = function (size) {
            return "<div>\n              <svg :height=\"size\" viewBox=\"0 0 64 64\" :width=\"size\" >\n                <circle cx=\"50%\" cy=\"50%\" fill=\"#eee\" r=\"50%\" />\n              </svg>\n            </div>";
        };
        /**
         * @description This function renders the jdenticon identicon when the jdenticon theme is passed
         * @param address Substrate based chain address
         * @param size size of the identicon (defaults to 64px)
         * @returns  A SVG representing the jdenticon (from jdenticon ibrary ) identicon
         */
        RenderHelper.renderJidenticon = function (address, size) {
            return jdenticon.toSvg(address, size);
        };
        return RenderHelper;
    }());

    var PolkadotIdentIconComponent = /** @class */ (function () {
        function PolkadotIdentIconComponent(sanitizer) {
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
        PolkadotIdentIconComponent.prototype.ngOnInit = function () {
            this.iconHTML = this.sanitizer.bypassSecurityTrustHtml(RenderHelper.pickRenderFunction(this.address, this.theme, this.size));
        };
        /**
         *
         * @returns an object that contains the width and height properties in pixel that will be passed
         * to the angular ngStyle directive in the component (polkadot-angular-identicon) .
         */
        PolkadotIdentIconComponent.prototype.getStyle = function () {
            return {
                width: this.size + "px",
                height: this.size + "px",
            };
        };
        return PolkadotIdentIconComponent;
    }());
    PolkadotIdentIconComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "polkadot-angular-identicon",
                    template: "<div [innerHTML]=\"iconHTML\" [ngStyle]=\"getStyle()\"></div>"
                },] }
    ];
    PolkadotIdentIconComponent.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };
    PolkadotIdentIconComponent.propDecorators = {
        address: [{ type: core.Input }],
        size: [{ type: core.Input }],
        theme: [{ type: core.Input }]
    };

    var PolkadotIdentIconModule = /** @class */ (function () {
        function PolkadotIdentIconModule() {
        }
        return PolkadotIdentIconModule;
    }());
    PolkadotIdentIconModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [PolkadotIdentIconComponent],
                    imports: [common.CommonModule, platformBrowser.BrowserModule],
                    exports: [PolkadotIdentIconComponent],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PolkadotIdentIconComponent = PolkadotIdentIconComponent;
    exports.PolkadotIdentIconModule = PolkadotIdentIconModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polkadot-angular-identicon.umd.js.map
