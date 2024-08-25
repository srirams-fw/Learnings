import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  constructor() {
    super(...arguments);
  }

  setData({ userName, email, locale }) {
    this.set('userName', userName);
    this.set('email', email);
    this.set('locale', locale);
  }
}
