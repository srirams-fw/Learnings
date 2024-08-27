import Controller from '@ember/controller';

import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service translationLoader;

  constructor() {
    super(...arguments);
  }

  setData({ userName, email, locale, theme }) {
    this.set('userName', userName);
    this.set('email', email);
    this.set('locale', locale);
    this.set('theme',theme)

    this.translationLoader.loadTranslations(locale); 
    this.applyTheme(theme);
  }

  applyTheme(theme) {
    document.body.classList.add(`${theme == 'dark' ? 'dark-mode' : 'light-mode'}`);
  }
}
