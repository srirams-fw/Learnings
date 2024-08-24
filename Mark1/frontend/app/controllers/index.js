import Controller from '@ember/controller';
import { transformDashboardData } from '../helpers';

export default class IndexController extends Controller {
  constructor() {
    super()
   this.chartData = [
      {
        name: 'ESM',
        data: [0, 0, 0],
      },
      {
        name: 'ER',
        data: [0, 0, 0],
      },
      {
          name: 'MSP',
          data: [0, 0, 0]
      }
    ];

    this.chartData1 = [
      {
        name: 'Turn Around Time',
        colorByPoint: true,
        data: [
          {
            name: '< 25 hrs',
            y: 56.33,
            drilldown: '< 25 hrs',
          },
          {
            name: '25 - 50 hrs',
            y: 24.03,
            drilldown: '25 - 50 hrs',
          },
          {
            name: '50 - 75 hrs',
            y: 10.38,
            drilldown: '50 - 75 hrs',
          },
          {
            name: '75 - 100 hrs',
            y: 4.77,
            drilldown: '75 - 100 hrs',
          },
          {
            name: '> 100 hrs',
            y: 0.91,
            drilldown: '> 100 hrs',
          }
        ],
      },
    ];
  }
    processTicketData({result=[]}) {
       const {data0, data1}= transformDashboardData(result)
      
       this.chartData = data0

       if(this.chartData1 && this.chartData1[0]){
          const data = this.chartData1[0].data

          data.forEach(datum => {
            datum.y = parseFloat(data1[datum.name])
          })
          
       }
    }

    chartOptions = {
        chart: {
          type: 'bar',
        },
        title: {
          text: 'Currently Open Incidents',
        },
        xAxis: {
          categories: ['Priority 1', 'Priority 2', 'Priority 3'],
        },
        yAxis: {
          title: {
            text: 'No of Tickets',
          },
        },
    };

    chartOptions1 = {
        chart: {
          type: 'column',
        },
        title: {
          text: 'Incident Turn Around Time',
        },
        subtitle: {
          text: `Click the columns to view details`,
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {
          title: {
            text: 'Total percent of Incidents reported',
          },
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%',
            },
          },
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: `<span style="color:{point.color}">{point.name}</span>: '
            '<b>{point.y:.2f}%</b> of total<br/>`,
        },
        drilldown: {
          activeDataLabelStyle: {},
          series: [
            {
              name: '< 25 hrs',
              id: '< 25 hrs',
              data: [],
            },
            {
              name: '25 - 50 hrs',
              id: '25 - 50 hrs',
              data: [],
            },
            {
              name: '50 - 75 hrs',
              id: '50 - 75 hrs',
              data: [],
            },
            {
              name: '75 - 100 hrs',
              id: '75 - 100 hrs',
              data: [],
            },
            {
              name: '> 100',
              id: '> 100',
              data: [],
            },
          ],
        },
      };

      chartOptions2 = {
        title: {
          text: 'Incident Volume across Products',
        },
		pie: {
			borderColor: 'black',
			innerSize: '65%',
			size: '70%',
			animation: false,
			dataLabels: {
				enabled: true,
				useHTML: true,
				distance: 20,
				format: '{point.name}<br>({point.y})',
				style: {
					fontSize: 12,
					color: 'blue',
					fontWeight: 'normal'
				}
			},
			states: {
				hover: {
					halo: {
						size: 0
					}
				},
				inactive: {
					opacity: 1
				}
			}
		}
	}
    
      chartData2 = [{
        data: [
            { name: '', y: 1}
        ]
    }]
}
