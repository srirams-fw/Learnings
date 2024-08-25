import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { apiCall } from '../helpers/index'

export default class TranslationLoaderService extends Service {
    @service intl;

    async loadTranslations(locale) {
        let response = await apiCall(`/translations/${locale}`);
        let translations = await response.json();
    
        this.intl.addTranslations(locale, translations);
        this.intl.setLocale(locale);
    }
}
