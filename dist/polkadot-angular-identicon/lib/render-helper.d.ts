import { Circle } from '@polkadot/ui-shared/icons/types';
export declare class RenderHelper {
    static pickRenderFunction(address: string, theme: string, size?: number): string;
    static renderCircle({ cx, cy, fill, r }: Circle, key: number): string;
    static renderPolkadotIdenticon(address: string, className: string, isAlternative: boolean, size: number, style: string): string;
    static renderBeachballIdenticon(address: string, isAlternative: boolean, size: number): string;
    static renderEmptyIdenticon(size: number): string;
    static renderJidenticon(address: string, size: number): string;
    static themeFilter(theme?: string): string;
}
