import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service translationLoader;

  async beforeModel() {
    await this.translationLoader.loadTranslations('en'); 
  }

  async changeLanguage(lang) {
    await this.translationLoader.loadTranslations(lang); 
  }
}