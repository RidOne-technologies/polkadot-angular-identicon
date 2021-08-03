import { polkadotIcon, beachballIcon } from '@polkadot/ui-shared/icons';
import { Circle } from '@polkadot/ui-shared/icons/types';
import * as jdenticon from 'jdenticon';

import { DEFAULT_SIZE, THEMES_ENUM } from './constants';

export class RenderHelper {

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

  static renderCircle({ cx, cy, fill, r }: Circle, key: number) {
    let svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="${cx}"  cy="${cy}" fill="${fill}"  r="${r}" />
                </svg>`;
    return svg;
  }

  static renderPolkadotIdenticon(address: string, className = '', isAlternative = false, size: number, style: string) {
    return `<svg
              class=${className}
              height=${size}
              id=${address}
              name=${address}
              style=${style}
              viewBox='0 0 64 64'
              width=${size}>
                    ${polkadotIcon(address, { isAlternative })
        .map(this.renderCircle)}
            </svg>`;
  }

  static renderBeachballIdenticon(address: string, isAlternative = false, size: number): string {
    let generatedBeachballIcon =
      beachballIcon(address,
        { isAlternative: isAlternative, size },
      );
    return generatedBeachballIcon.innerHTML;
  }

  static renderEmptyIdenticon(size: number): string {
    return `<div>
              <svg :height="size" viewBox="0 0 64 64" :width="size" >
                <circle cx="50%" cy="50%" fill="#eee" r="50%" />
              </svg>
            </div>`;
  }

  static renderJidenticon(address: string, size: number) {
    return jdenticon.toSvg(address, size);
  }


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