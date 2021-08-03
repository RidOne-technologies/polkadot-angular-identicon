(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@polkadot/ui-shared/icons'), require('jdenticon'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('polkadot-angular-identicon', ['exports', '@angular/core', '@angular/platform-browser', '@polkadot/ui-shared/icons', 'jdenticon', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['polkadot-angular-identicon'] = {}, global.ng.core, global.ng.platformBrowser, global.icons, global.jdenticon, global.ng.common));
}(this, (function (exports, core, platformBrowser, icons, jdenticon, common) { 'use strict';

    var DEFAULT_SIZE = 64;
    var DEFAULT_THEME = 'polkadot';
    var DEFAULT_ADDRESS = "";
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
        RenderHelper.pickRenderFunction = function (address, theme, size) {
            if (size === void 0) { size = DEFAULT_SIZE; }
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
        };
        RenderHelper.renderCircle = function (_a, key) {
            var cx = _a.cx, cy = _a.cy, fill = _a.fill, r = _a.r;
            var svg = "<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n                <circle cx=\"" + cx + "\"  cy=\"" + cy + "\" fill=\"" + fill + "\"  r=\"" + r + "\" />\n                </svg>";
            return svg;
        };
        RenderHelper.renderPolkadotIdenticon = function (address, className, isAlternative, size, style) {
            if (className === void 0) { className = ''; }
            if (isAlternative === void 0) { isAlternative = false; }
            return "<svg\n              class=" + className + "\n              height=" + size + "\n              id=" + address + "\n              name=" + address + "\n              style=" + style + "\n              viewBox='0 0 64 64'\n              width=" + size + ">\n                    " + icons.polkadotIcon(address, { isAlternative: isAlternative })
                .map(this.renderCircle) + "\n            </svg>";
        };
        RenderHelper.renderBeachballIdenticon = function (address, isAlternative, size) {
            if (isAlternative === void 0) { isAlternative = false; }
            var generatedBeachballIcon = icons.beachballIcon(address, { isAlternative: isAlternative, size: size });
            return generatedBeachballIcon.innerHTML;
        };
        RenderHelper.renderEmptyIdenticon = function (size) {
            return "<div>\n              <svg :height=\"size\" viewBox=\"0 0 64 64\" :width=\"size\" >\n                <circle cx=\"50%\" cy=\"50%\" fill=\"#eee\" r=\"50%\" />\n              </svg>\n            </div>";
        };
        RenderHelper.renderJidenticon = function (address, size) {
            return jdenticon.toSvg(address, size);
        };
        RenderHelper.themeFilter = function (theme) {
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
        };
        return RenderHelper;
    }());

    var PolkadotIdentIconComponent = /** @class */ (function () {
        function PolkadotIdentIconComponent(sanitizer) {
            this.sanitizer = sanitizer;
            this.size = DEFAULT_SIZE;
            this.theme = "polkadot";
        }
        PolkadotIdentIconComponent.prototype.ngOnInit = function () {
            this.iconHTML = this.sanitizer.bypassSecurityTrustHtml(RenderHelper.pickRenderFunction(this.address, this.theme, this.size));
        };
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
