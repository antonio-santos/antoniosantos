import { Injectable } from '@angular/core';
import { Utils } from '../../shared/utils';
import localesJson from '../../../assets/locales.json';

@Injectable({
    providedIn: 'root'
})
export class HeadlessCMSService {

    private defaultLocale = 'pt-PT';

    constructor(
        private utils: Utils
    ) {
    }

    prepareContent(component: any): any[] {
        const copies = [];
        if (component && component.copy) {
            component.copy.forEach(copy => {

                if (copy && copy.id) {

                    copies[copy.id] = copy[this.selectLocale(copy)];
                }
            });
        }
        return copies;
    }

    private selectLocale(copy: any): string {
        // navigatorLocales has a list of ordered prefered languages defined by the user in the browser
        const navigatorLocales = this.utils.getNavigatorLocales() ? this.utils.getNavigatorLocales() : [];
        for (const navLocale of navigatorLocales) {

            // Check for a perfect match for navigatorLocales
            if (copy[navLocale]) {
                // Perfect match found!
                return navLocale;
            } else {

                // Check for a partial match using the locales.json file
                const currentLocale = localesJson.filter(el => el.code === navLocale);
                if (currentLocale && currentLocale[0] && currentLocale[0].locale && copy[currentLocale[0].locale]) {
                    // Partial match found!
                    return currentLocale[0].locale;
                }
            }
        }

        // Use defaultLocale
        return this.defaultLocale;
    }
}
