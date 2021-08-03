import { OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
export declare class PolkadotIdentIconComponent implements OnInit {
    private sanitizer;
    address?: string;
    size?: number;
    theme?: string;
    iconHTML?: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    getStyle(): {
        width: string;
        height: string;
    };
}
