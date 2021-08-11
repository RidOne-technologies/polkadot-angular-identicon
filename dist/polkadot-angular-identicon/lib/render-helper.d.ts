import { Circle } from '@polkadot/ui-shared/icons/types';
export declare class RenderHelper {
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
    static pickRenderFunction(address: string, theme: string, size?: number): string;
    /**
     * @description This function renders a small circle with a color in a polkadot identicon theme.
     * It is internally called in renderPolkadotIdenticon function that will pass.
     * @param Circle represent a small circle that is part of circles in a polkadot icon
     * @returns A SVG representing a small circle that is part of the array of the circles in a polkadot icon
     */
    static renderCircle({ cx, cy, fill, r }: Circle): string;
    /**
     * @description  This function renders the polkadot identicon when the polkadot theme is passed
     * @param address Substrate based chain address
     * @param isAlternative
     * @param size size of the identicon (defaults to 64px)
     * @returns A SVG representing array of the circles that make up the polkadot identicon
     */
    static renderPolkadotIdenticon(address: string, isAlternative: boolean, size: number): string;
    /**
     * @description This function renders the beachball identicon when the beachball theme is passed
     * @param address Substrate based chain address
     * @param isAlternative
     * @param size size of the identicon (defaults to 64px)
     * @returns  A SVG representing the beachball identicon
     */
    static renderBeachballIdenticon(address: string, isAlternative: boolean, size: number): string;
    /**
     * @description This empty identicon will be diplayed if a wrong Substrate address is passed
     * @param size size of the identicon (defaults to 64px)
     * @returns A light gray colored SVG icon that represent an empty icon
     */
    static renderEmptyIdenticon(size: number): string;
    /**
     * @description This function renders the jdenticon identicon when the jdenticon theme is passed
     * @param address Substrate based chain address
     * @param size size of the identicon (defaults to 64px)
     * @returns  A SVG representing the jdenticon (from jdenticon ibrary ) identicon
     */
    static renderJidenticon(address: string, size: number): string;
}
