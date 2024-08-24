import Route from '@ember/routing/route';
import { apiCall } from '../helpers';

export default class IndexRoute extends Route {
  async model() {
    try {
      
      let response = await apiCall('/dashboard_data');
      let data = await response.json();
      if(data){
        return data
      }
      return {}
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    }
    setupController(controller, model) {
        super.setupController(controller, model);
        controller.set('data', model);
        controller.processTicketData(model)
    }
}
