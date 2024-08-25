import Component from '@glimmer/component';
import { action } from '@ember/object';
import { apiCall } from '../../helpers/index';

export default class HeaderIndexComponent extends Component {
  @action
  async handleClick(event) {
    event.preventDefault();
    await apiCall('/logout', 'DELETE');
    window.location.reload(true);
  }
}
