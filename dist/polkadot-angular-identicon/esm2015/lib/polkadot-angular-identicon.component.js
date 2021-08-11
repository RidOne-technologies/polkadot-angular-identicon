import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { RenderHelper } from "./render-helper";
import { DEFAULT_SIZE, THEMES_ENUM } from "./constants";
export class PolkadotIdentIconComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sa2Fkb3QtYW5ndWxhci1pZGVudGljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9sa2Fkb3QtYW5ndWxhci1pZGVudGljb24vc3JjL2xpYi9wb2xrYWRvdC1hbmd1bGFyLWlkZW50aWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU94RCxNQUFNLE9BQU8sMEJBQTBCO0lBMkJyQyxZQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBbkIzQzs7O1VBR0U7UUFDTyxTQUFJLEdBQVMsWUFBWSxDQUFDO1FBRW5DOzs7VUFHRTtRQUNPLFVBQUssR0FBWSxXQUFXLENBQUMsUUFBUSxDQUFDO0lBU0EsQ0FBQztJQUVoRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUNwRCxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDckUsQ0FBQztJQUNKLENBQUM7SUFHRDs7OztPQUlHO0lBQ0gsUUFBUTtRQUNOLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7U0FDekIsQ0FBQztJQUNKLENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFLDJEQUEyRDthQUV0RTs7O1lBUlEsWUFBWTs7O3NCQWVsQixLQUFLO21CQU1MLEtBQUs7b0JBTUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBSZW5kZXJIZWxwZXIgfSBmcm9tIFwiLi9yZW5kZXItaGVscGVyXCI7XHJcbmltcG9ydCB7IERFRkFVTFRfU0laRSwgVEhFTUVTX0VOVU0gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInBvbGthZG90LWFuZ3VsYXItaWRlbnRpY29uXCIsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IFtpbm5lckhUTUxdPVwiaWNvbkhUTUxcIiBbbmdTdHlsZV09XCJnZXRTdHlsZSgpXCI+PC9kaXY+YCxcclxuICBzdHlsZXM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9sa2Fkb3RJZGVudEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvKipcclxuICAgKiBAZmllbGQgYWRkcmVzcyBwYXNzZWQgd2hlbiB1c2luZyB0aGUgcG9sa2Fkb3QtYW5ndWxhci1pZGVudGljb24gdGFnIFxyXG4gICAqIHRvIGRpc3BsYXkgdGhlIGljb25cclxuICAgKi9cclxuICBASW5wdXQoKSBhZGRyZXNzPzogYW55O1xyXG5cclxuICAvKipcclxuICAgKiAgQGZpZWxkICBzaXplIHBhc3NlZCB3aGVuIHVzaW5nIHRoZSBwb2xrYWRvdC1hbmd1bGFyLWlkZW50aWNvbiB0YWdcclxuICAgKiAgdG8gc2V0IHRoZSBpY29uIHNpemUgXHJcbiAgKi9cclxuICBASW5wdXQoKSBzaXplPzogYW55ID0gREVGQVVMVF9TSVpFO1xyXG5cclxuICAvKiogXHJcbiAgKiBAZmllbGQgIHRoZW1lIHBhc3NlZCB3aGVuIHVzaW5nIHRoZSBwb2xrYWRvdC1hbmd1bGFyLWlkZW50aWNvbiB0YWcgXHJcbiAgKiB0byBzZXQgdGhlIHRoZW1lIG9mIHRoZSBpY29uIFxyXG4gICovXHJcbiAgQElucHV0KCkgdGhlbWU/OiBzdHJpbmcgPSBUSEVNRVNfRU5VTS5QT0xLQURPVDtcclxuXHJcblxyXG4gIC8qKiBcclxuICAqIEBmaWVsZCAgaWNvbkhUTUwgOiBhcyBTYWZlSFRNTCBvYmplY3QgdGhhdCB0aGUgdmFsdWUgd2lsbCBiZSBzZXQgYnkgdGhlIHBpY2tSZW5kZXJGdW5jdGlvbiBmcm9tIFxyXG4gICogdGhlIFJlbmRlckhlbHBlciBjbGFzcy4gXHJcbiAgKi9cclxuICBpY29uSFRNTD86IFNhZmVIdG1sO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmljb25IVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoXHJcbiAgICAgIFJlbmRlckhlbHBlci5waWNrUmVuZGVyRnVuY3Rpb24odGhpcy5hZGRyZXNzLCB0aGlzLnRoZW1lLCB0aGlzLnNpemUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXMgaW4gcGl4ZWwgdGhhdCB3aWxsIGJlIHBhc3NlZCBcclxuICAgKiB0byB0aGUgYW5ndWxhciBuZ1N0eWxlIGRpcmVjdGl2ZSBpbiB0aGUgY29tcG9uZW50IChwb2xrYWRvdC1hbmd1bGFyLWlkZW50aWNvbikgLlxyXG4gICAqL1xyXG4gIGdldFN0eWxlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2lkdGg6IHRoaXMuc2l6ZSArIFwicHhcIixcclxuICAgICAgaGVpZ2h0OiB0aGlzLnNpemUgKyBcInB4XCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19