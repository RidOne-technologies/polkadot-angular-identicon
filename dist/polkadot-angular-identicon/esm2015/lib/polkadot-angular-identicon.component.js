import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { RenderHelper } from "./render-helper";
import { DEFAULT_SIZE } from "./constants";
export class PolkadotIdentIconComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sa2Fkb3QtYW5ndWxhci1pZGVudGljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9sa2Fkb3QtYW5ndWxhci1pZGVudGljb24vc3JjL2xpYi9wb2xrYWRvdC1hbmd1bGFyLWlkZW50aWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTTNDLE1BQU0sT0FBTywwQkFBMEI7SUFLckMsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUhsQyxTQUFJLEdBQVksWUFBWSxDQUFDO1FBQzdCLFVBQUssR0FBWSxVQUFVLENBQUM7SUFFUyxDQUFDO0lBQy9DLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQ3BELFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNyRSxDQUFDO0lBQ0osQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1NBQ3pCLENBQUM7SUFDSixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRSwyREFBMkQ7YUFFdEU7OztZQVBRLFlBQVk7OztzQkFTbEIsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgeyBSZW5kZXJIZWxwZXIgfSBmcm9tIFwiLi9yZW5kZXItaGVscGVyXCI7XG5pbXBvcnQgeyBERUZBVUxUX1NJWkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJwb2xrYWRvdC1hbmd1bGFyLWlkZW50aWNvblwiLFxuICB0ZW1wbGF0ZTogYDxkaXYgW2lubmVySFRNTF09XCJpY29uSFRNTFwiIFtuZ1N0eWxlXT1cImdldFN0eWxlKClcIj48L2Rpdj5gLFxuICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBQb2xrYWRvdElkZW50SWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFkZHJlc3M/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU/OiBudW1iZXIgPSBERUZBVUxUX1NJWkU7XG4gIEBJbnB1dCgpIHRoZW1lPzogc3RyaW5nID0gXCJwb2xrYWRvdFwiO1xuICBpY29uSFRNTD86IFNhZmVIdG1sO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmljb25IVE1MID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoXG4gICAgICBSZW5kZXJIZWxwZXIucGlja1JlbmRlckZ1bmN0aW9uKHRoaXMuYWRkcmVzcywgdGhpcy50aGVtZSwgdGhpcy5zaXplKVxuICAgICk7XG4gIH1cbiAgZ2V0U3R5bGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiB0aGlzLnNpemUgKyBcInB4XCIsXG4gICAgICBoZWlnaHQ6IHRoaXMuc2l6ZSArIFwicHhcIixcbiAgICB9O1xuICB9XG59XG4iXX0=