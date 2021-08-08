import { polkadotIcon, beachballIcon } from '@polkadot/ui-shared/icons';
import { Circle } from '@polkadot/ui-shared/icons/types';
import * as jdenticon from 'jdenticon';

import { DEFAULT_SIZE, THEMES_ENUM } from './constants';

export class RenderHelper {

  /// Function that choose render function according to which parameters are passed
  static pickRenderFunction(address: string, theme: string, size: number = DEFAULT_SIZE): string {
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
    } else {
      return this.renderEmptyIdenticon(size)
    }

  }

  /// function called when the polkadot theme is passed. This function renders the circle with a color
  static renderCircle({ cx, cy, fill, r }: Circle, key: number) {
    let svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="${cx}"  cy="${cy}" fill="${fill}"  r="${r}" />
                </svg>`;
    return svg;
  }

  /// This function renders the polkadot identicon when the polkadot theme is passed
  static renderPolkadotIdenticon(address: string, className = '', isAlternative = false, size: number, style: string) {
    return `<svg
            height=${size}
            viewBox='0 0 64 64'
            width=${size}>
            ${polkadotIcon(address, { isAlternative }).map(this.renderCircle).join('')}
            </svg>`;

  }


  /// This function renders the beachball identicon when the beachball theme is passed
  static renderBeachballIdenticon(address: string, isAlternative = false, size: number): string {
    let generatedBeachballIcon =
      beachballIcon(address,
        { isAlternative: isAlternative, size },
      );
    return generatedBeachballIcon.innerHTML;
  }

  /// This empty identicon will be diplayed if a wrong Substrate address is passed
  static renderEmptyIdenticon(size: number): string {
    return `<div>
              <svg :height="size" viewBox="0 0 64 64" :width="size" >
                <circle cx="50%" cy="50%" fill="#eee" r="50%" />
              </svg>
            </div>`;
  }

  /// This function renders the jdenticon identicon when the jdenticon theme is passed
  static renderJidenticon(address: string, size: number) {
    return jdenticon.toSvg(address, size);
  }

  /// This helper function picks the theme according to the passed parameters
  ///
  static themeFilter(theme?: string): string {
    if (theme === THEMES_ENUM.POLKADOT || !theme) {
      return THEMES_ENUM.POLKADOT
    } else if (theme === THEMES_ENUM.BEACHBALL) {
      return THEMES_ENUM.POLKADOT
    } else if (theme === THEMES_ENUM.JDENTICON) {
      return THEMES_ENUM.JDENTICON
    } else {
      return THEMES_ENUM.EMPTY
    }
  }
}