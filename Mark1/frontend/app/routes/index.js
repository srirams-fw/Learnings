import Route from '@ember/routing/route';
import { apiCall } from '../helpers';

export default class IndexRoute extends Route {
  async model() {
    try {
      let [response, sessionResponse] = await Promise.all([
        apiCall('/dashboard_data'),
        apiCall('/get_session'),
      ]);
      let [data, sessionData] = await Promise.all([
        response.json(),
        sessionResponse.json(),
      ]);

      if (data) {
        return { ...data, sessionData };
      }
      return {};
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('data', model);
    controller.processTicketData(model);
    controller.handleSession(model.sessionData);
  }
}
