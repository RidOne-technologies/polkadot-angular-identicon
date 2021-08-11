import { polkadotIcon, beachballIcon } from '@polkadot/ui-shared/icons';
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
    static pickRenderFunction(address, theme, size = DEFAULT_SIZE) {
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
    }
    /**
     * @description This function renders a small circle with a color in a polkadot identicon theme.
     * It is internally called in renderPolkadotIdenticon function that will pass.
     * @param Circle represent a small circle that is part of circles in a polkadot icon
     * @returns A SVG representing a small circle that is part of the array of the circles in a polkadot icon
     */
    static renderCircle({ cx, cy, fill, r }) {
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
    static renderPolkadotIdenticon(address, isAlternative = false, size) {
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
    static renderBeachballIdenticon(address, isAlternative = false, size) {
        let generatedBeachballIcon = beachballIcon(address, { isAlternative: isAlternative, size });
        return generatedBeachballIcon.innerHTML;
    }
    /**
     * @description This empty identicon will be diplayed if a wrong Substrate address is passed
     * @param size size of the identicon (defaults to 64px)
     * @returns A light gray colored SVG icon that represent an empty icon
     */
    static renderEmptyIdenticon(size) {
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
    static renderJidenticon(address, size) {
        return jdenticon.toSvg(address, size);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbGthZG90LWFuZ3VsYXItaWRlbnRpY29uL3NyYy9saWIvcmVuZGVyLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhFLE9BQU8sS0FBSyxTQUFTLE1BQU0sV0FBVyxDQUFDO0FBRXZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhELE1BQU0sT0FBTyxZQUFZO0lBRXZCOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSCxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBZSxFQUFFLEtBQWEsRUFBRSxPQUFlLFlBQVk7UUFDbkYsSUFBSSxPQUFPLEVBQUU7WUFDWCxRQUFRLEtBQUssRUFBRTtnQkFDYixLQUFLLFdBQVcsQ0FBQyxRQUFRO29CQUN2QixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUU1RCxLQUFLLFdBQVcsQ0FBQyxTQUFTO29CQUN4QixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUU3RCxLQUFLLFdBQVcsQ0FBQyxTQUFTO29CQUN4QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTlDO29CQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFDO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3ZDO0lBRUgsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBVTtRQUM3QyxJQUFJLEdBQUcsR0FBRzs4QkFDZ0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxJQUFJLFNBQVMsQ0FBQzt1QkFDOUMsQ0FBQztRQUNwQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxNQUFNLENBQUMsdUJBQXVCLENBQUMsT0FBZSxFQUFFLGFBQWEsR0FBRyxLQUFLLEVBQUUsSUFBWTtRQUNqRixPQUFPO3FCQUNVLElBQUk7O29CQUVMLElBQUk7Y0FDVixZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO21CQUN6RSxDQUFDO0lBRWxCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxNQUFNLENBQUMsd0JBQXdCLENBQUMsT0FBZSxFQUFFLGFBQWEsR0FBRyxLQUFLLEVBQUUsSUFBWTtRQUNsRixJQUFJLHNCQUFzQixHQUN4QixhQUFhLENBQUMsT0FBTyxFQUNuQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQ3ZDLENBQUM7UUFDSixPQUFPLHNCQUFzQixDQUFDLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFZO1FBQ3RDLE9BQU87Ozs7bUJBSVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLElBQVk7UUFDbkQsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb2xrYWRvdEljb24sIGJlYWNoYmFsbEljb24gfSBmcm9tICdAcG9sa2Fkb3QvdWktc2hhcmVkL2ljb25zJztcclxuaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSAnQHBvbGthZG90L3VpLXNoYXJlZC9pY29ucy90eXBlcyc7XHJcbmltcG9ydCAqIGFzIGpkZW50aWNvbiBmcm9tICdqZGVudGljb24nO1xyXG5cclxuaW1wb3J0IHsgREVGQVVMVF9TSVpFLCBUSEVNRVNfRU5VTSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJIZWxwZXIge1xyXG5cclxuICAvKipcclxuICAgKiBwaWNrUmVuZGVyRnVuY3Rpb24gOiBBY2NvdXJkaW5nIHRvIHRoZSB0aGVtZSBwYXNzZWQsIHRoaXMgZnVuY3Rpb24gcGlja3MgYSByZW5kZXIgZnVuY3Rpb24gYmV0d2VlbjpcclxuICAgKiBcclxuICAgKiByZW5kZXJQb2xrYWRvdElkZW50aWNvbixcclxuICAgKiByZW5kZXJCZWFjaGJhbGxJZGVudGljb24sXHJcbiAgICogcmVuZGVySmlkZW50aWNvbixcclxuICAgKiBhbmQgcmVuZGVyRW1wdHlJZGVudGljb25cclxuICAgKiBcclxuICAgKiBXaGVuIG5vIHRoZW1lIGlzIHBhc3NlZCBpdCBkZWZhdWx0IHRvIHBvbGthZG90IHRoZW1lLlxyXG4gICAqIEBwYXJhbSBhZGRyZXNzIFN1YnN0cmF0ZSBiYXNlZCBjaGFpbiBhZGRyZXNzIFxyXG4gICAqIEBwYXJhbSB0aGVtZSB0aGVtZSBvZiB0aGUgaWRlbnRpY29uIChkZWZhdWxzdCB0byBwb2xrYWRvdClcclxuICAgKiBAcGFyYW0gc2l6ZSBzaXplIG9mIHRoZSBpZGVudGljb24gKGRlZmF1bHRzIHRvIDY0cHgpXHJcbiAgICogQHJldHVybnMgdGhlIHRoZSBnZW5lcmF0ZWQgaHRtbCB0aGF0IHRvIGRpc3BsYXkgdGhlIGlkZW50aWNvbi5cclxuICAgKi9cclxuICBzdGF0aWMgcGlja1JlbmRlckZ1bmN0aW9uKGFkZHJlc3M6IHN0cmluZywgdGhlbWU6IHN0cmluZywgc2l6ZTogbnVtYmVyID0gREVGQVVMVF9TSVpFKTogc3RyaW5nIHtcclxuICAgIGlmIChhZGRyZXNzKSB7XHJcbiAgICAgIHN3aXRjaCAodGhlbWUpIHtcclxuICAgICAgICBjYXNlIFRIRU1FU19FTlVNLlBPTEtBRE9UOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyUG9sa2Fkb3RJZGVudGljb24oYWRkcmVzcywgZmFsc2UsIHNpemUpO1xyXG5cclxuICAgICAgICBjYXNlIFRIRU1FU19FTlVNLkJFQUNIQkFMTDpcclxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckJlYWNoYmFsbElkZW50aWNvbihhZGRyZXNzLCBmYWxzZSwgc2l6ZSk7XHJcblxyXG4gICAgICAgIGNhc2UgVEhFTUVTX0VOVU0uSkRFTlRJQ09OOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySmlkZW50aWNvbihhZGRyZXNzLCBzaXplKTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckVtcHR5SWRlbnRpY29uKHNpemUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJFbXB0eUlkZW50aWNvbihzaXplKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgYSBzbWFsbCBjaXJjbGUgd2l0aCBhIGNvbG9yIGluIGEgcG9sa2Fkb3QgaWRlbnRpY29uIHRoZW1lLlxyXG4gICAqIEl0IGlzIGludGVybmFsbHkgY2FsbGVkIGluIHJlbmRlclBvbGthZG90SWRlbnRpY29uIGZ1bmN0aW9uIHRoYXQgd2lsbCBwYXNzLlxyXG4gICAqIEBwYXJhbSBDaXJjbGUgcmVwcmVzZW50IGEgc21hbGwgY2lyY2xlIHRoYXQgaXMgcGFydCBvZiBjaXJjbGVzIGluIGEgcG9sa2Fkb3QgaWNvblxyXG4gICAqIEByZXR1cm5zIEEgU1ZHIHJlcHJlc2VudGluZyBhIHNtYWxsIGNpcmNsZSB0aGF0IGlzIHBhcnQgb2YgdGhlIGFycmF5IG9mIHRoZSBjaXJjbGVzIGluIGEgcG9sa2Fkb3QgaWNvblxyXG4gICAqL1xyXG4gIHN0YXRpYyByZW5kZXJDaXJjbGUoeyBjeCwgY3ksIGZpbGwsIHIgfTogQ2lyY2xlKSB7XHJcbiAgICBsZXQgc3ZnID0gYDxzdmcgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIiR7Y3h9XCIgIGN5PVwiJHtjeX1cIiBmaWxsPVwiJHtmaWxsfVwiICByPVwiJHtyfVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5gO1xyXG4gICAgcmV0dXJuIHN2ZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiAgVGhpcyBmdW5jdGlvbiByZW5kZXJzIHRoZSBwb2xrYWRvdCBpZGVudGljb24gd2hlbiB0aGUgcG9sa2Fkb3QgdGhlbWUgaXMgcGFzc2VkXHJcbiAgICogQHBhcmFtIGFkZHJlc3MgU3Vic3RyYXRlIGJhc2VkIGNoYWluIGFkZHJlc3MgXHJcbiAgICogQHBhcmFtIGlzQWx0ZXJuYXRpdmUgXHJcbiAgICogQHBhcmFtIHNpemUgc2l6ZSBvZiB0aGUgaWRlbnRpY29uIChkZWZhdWx0cyB0byA2NHB4KVxyXG4gICAqIEByZXR1cm5zIEEgU1ZHIHJlcHJlc2VudGluZyBhcnJheSBvZiB0aGUgY2lyY2xlcyB0aGF0IG1ha2UgdXAgdGhlIHBvbGthZG90IGlkZW50aWNvblxyXG4gICAqL1xyXG4gIHN0YXRpYyByZW5kZXJQb2xrYWRvdElkZW50aWNvbihhZGRyZXNzOiBzdHJpbmcsIGlzQWx0ZXJuYXRpdmUgPSBmYWxzZSwgc2l6ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gYDxzdmdcclxuICAgICAgICAgICAgaGVpZ2h0PSR7c2l6ZX1cclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDY0IDY0J1xyXG4gICAgICAgICAgICB3aWR0aD0ke3NpemV9PlxyXG4gICAgICAgICAgICAke3BvbGthZG90SWNvbihhZGRyZXNzLCB7IGlzQWx0ZXJuYXRpdmUsIHNpemUgfSkubWFwKHRoaXMucmVuZGVyQ2lyY2xlKS5qb2luKCcnKX1cclxuICAgICAgICAgICAgPC9zdmc+YDtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiByZW5kZXJzIHRoZSBiZWFjaGJhbGwgaWRlbnRpY29uIHdoZW4gdGhlIGJlYWNoYmFsbCB0aGVtZSBpcyBwYXNzZWRcclxuICAgKiBAcGFyYW0gYWRkcmVzcyBTdWJzdHJhdGUgYmFzZWQgY2hhaW4gYWRkcmVzcyBcclxuICAgKiBAcGFyYW0gaXNBbHRlcm5hdGl2ZSBcclxuICAgKiBAcGFyYW0gc2l6ZSBzaXplIG9mIHRoZSBpZGVudGljb24gKGRlZmF1bHRzIHRvIDY0cHgpXHJcbiAgICogQHJldHVybnMgIEEgU1ZHIHJlcHJlc2VudGluZyB0aGUgYmVhY2hiYWxsIGlkZW50aWNvblxyXG4gICAqL1xyXG4gIHN0YXRpYyByZW5kZXJCZWFjaGJhbGxJZGVudGljb24oYWRkcmVzczogc3RyaW5nLCBpc0FsdGVybmF0aXZlID0gZmFsc2UsIHNpemU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBsZXQgZ2VuZXJhdGVkQmVhY2hiYWxsSWNvbiA9XHJcbiAgICAgIGJlYWNoYmFsbEljb24oYWRkcmVzcyxcclxuICAgICAgICB7IGlzQWx0ZXJuYXRpdmU6IGlzQWx0ZXJuYXRpdmUsIHNpemUgfSxcclxuICAgICAgKTtcclxuICAgIHJldHVybiBnZW5lcmF0ZWRCZWFjaGJhbGxJY29uLmlubmVySFRNTDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGVtcHR5IGlkZW50aWNvbiB3aWxsIGJlIGRpcGxheWVkIGlmIGEgd3JvbmcgU3Vic3RyYXRlIGFkZHJlc3MgaXMgcGFzc2VkXHJcbiAgICogQHBhcmFtIHNpemUgc2l6ZSBvZiB0aGUgaWRlbnRpY29uIChkZWZhdWx0cyB0byA2NHB4KVxyXG4gICAqIEByZXR1cm5zIEEgbGlnaHQgZ3JheSBjb2xvcmVkIFNWRyBpY29uIHRoYXQgcmVwcmVzZW50IGFuIGVtcHR5IGljb25cclxuICAgKi9cclxuICBzdGF0aWMgcmVuZGVyRW1wdHlJZGVudGljb24oc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgPGRpdj5cclxuICAgICAgICAgICAgICA8c3ZnIDpoZWlnaHQ9XCJzaXplXCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIDp3aWR0aD1cInNpemVcIiA+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTAlXCIgY3k9XCI1MCVcIiBmaWxsPVwiI2VlZVwiIHI9XCI1MCVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gcmVuZGVycyB0aGUgamRlbnRpY29uIGlkZW50aWNvbiB3aGVuIHRoZSBqZGVudGljb24gdGhlbWUgaXMgcGFzc2VkXHJcbiAgICogQHBhcmFtIGFkZHJlc3MgU3Vic3RyYXRlIGJhc2VkIGNoYWluIGFkZHJlc3MgXHJcbiAgICogQHBhcmFtIHNpemUgc2l6ZSBvZiB0aGUgaWRlbnRpY29uIChkZWZhdWx0cyB0byA2NHB4KVxyXG4gICAqIEByZXR1cm5zICBBIFNWRyByZXByZXNlbnRpbmcgdGhlIGpkZW50aWNvbiAoZnJvbSBqZGVudGljb24gaWJyYXJ5ICkgaWRlbnRpY29uXHJcbiAgICovXHJcbiAgc3RhdGljIHJlbmRlckppZGVudGljb24oYWRkcmVzczogc3RyaW5nLCBzaXplOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBqZGVudGljb24udG9TdmcoYWRkcmVzcywgc2l6ZSk7XHJcbiAgfVxyXG59Il19