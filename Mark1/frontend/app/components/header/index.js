import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { apiCall } from '../../helpers/index';

export default class HeaderIndexComponent extends Component {
  @service translationLoader;
  @service intl;

  @action
  async handleClick(event) {
    event.preventDefault();
    await apiCall('/logout', 'DELETE');
    window.location.reload(true);
  }

  @action
  async handleLanguageChange(event) {
    const newLocale = event.target.value;
    await apiCall('/set_language','POST',null,{ locale: newLocale })
    await this.translationLoader.loadTranslations(newLocale);
    this.intl.set('locale', newLocale);
  }
}
