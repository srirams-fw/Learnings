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

  @action
  toggleMenu(event){
    const headerOptions = document.getElementById('header-options');
    headerOptions.classList.toggle('show-header')
  }

  @action
  creatTicket(event){
    const createTicketLink = document.getElementById('create_ticket_link')
    createTicketLink?.click()
  }

  @action
  colorThemeToggle(event){
    document.body.classList.toggle('dark-mode')
  }
}
