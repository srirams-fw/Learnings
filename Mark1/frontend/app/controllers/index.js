import Controller from '@ember/controller';
import { inject as controller } from '@ember/controller';
import { transformDashboardData } from '../helpers';
import { CHART_DATA, CHART_DATA1, CHART_DATA2, CHART_OPTIONS, CHART_OPTIONS1, CHART_OPTIONS2 } from '../helpers/constants';

export default class IndexController extends Controller {
  @controller application;

  constructor() {
    super(...arguments);
    this.chartData = CHART_DATA;
    this.chartData1 = CHART_DATA1;
    this.chartOptions = CHART_OPTIONS;
    this.chartOptions1 = CHART_OPTIONS1;
    this.chartOptions2 = CHART_OPTIONS2;
    this.chartData2 = CHART_DATA2;
  }
  
  handleSession(sessionData) {
    this.application.setData({...sessionData});
  }

  processTicketData({ result = [] }) {
    const { data0, data1 } = transformDashboardData(result);
    this.chartData = data0;

    if (this.chartData1 && this.chartData1[0]) {
      const data = this.chartData1[0].data;
      data.forEach(datum => {
        datum.y = parseFloat(data1[datum.name]);
      });
    }
  }
}
