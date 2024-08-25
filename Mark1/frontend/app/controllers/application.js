import Controller from '@ember/controller';

import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service translationLoader;

  constructor() {
    super(...arguments);
  }

  setData({ userName, email, locale }) {
    this.set('userName', userName);
    this.set('email', email);
    this.set('locale', locale);

    this.translationLoader.loadTranslations(locale); 
    
  }
}
