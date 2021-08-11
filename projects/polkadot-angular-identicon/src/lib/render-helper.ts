import { polkadotIcon, beachballIcon } from '@polkadot/ui-shared/icons';
import { Circle } from '@polkadot/ui-shared/icons/types';
import * as jdenticon from 'jdenticon';

import { DEFAULT_SIZE, THEMES_ENUM } from './constants';

export class RenderHelper {

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
  static pickRenderFunction(address: string, theme: string, size: number = DEFAULT_SIZE): string {
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
    } else {
      return this.renderEmptyIdenticon(size)
    }

  }

  /**
   * @description This function renders a small circle with a color in a polkadot identicon theme.
   * It is internally called in renderPolkadotIdenticon function that will pass.
   * @param Circle represent a small circle that is part of circles in a polkadot icon
   * @returns A SVG representing a small circle that is part of the array of the circles in a polkadot icon
   */
  static renderCircle({ cx, cy, fill, r }: Circle) {
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
  static renderPolkadotIdenticon(address: string, isAlternative = false, size: number) {
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
  static renderBeachballIdenticon(address: string, isAlternative = false, size: number): string {
    let generatedBeachballIcon =
      beachballIcon(address,
        { isAlternative: isAlternative, size },
      );
    return generatedBeachballIcon.innerHTML;
  }

  /**
   * @description This empty identicon will be diplayed if a wrong Substrate address is passed
   * @param size size of the identicon (defaults to 64px)
   * @returns A light gray colored SVG icon that represent an empty icon
   */
  static renderEmptyIdenticon(size: number): string {
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
  static renderJidenticon(address: string, size: number) {
    return jdenticon.toSvg(address, size);
  }
}