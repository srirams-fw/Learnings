import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default class IndexController extends Controller {
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
    
    chartData = [
        {
          name: 'ER',
          data: [10, 28, 40],
        },
        {
          name: 'ESM',
          data: [12, 32, 45],
        },
        {
            name: 'MSP',
            data: [8, 48, 35]
        }
    ];

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
              data: [
                ['v11.0', 24.13],
                ['v8.0', 17.2],
                ['v9.0', 8.11],
                ['v10.0', 5.33],
                ['v6.0', 1.06],
                ['v7.0', 0.5],
              ],
            },
            {
              name: '25 - 50 hrs',
              id: '25 - 50 hrs',
              data: [
                ['v40.0', 5],
                ['v41.0', 4.32],
                ['v42.0', 3.68],
                ['v39.0', 2.96],
                ['v36.0', 2.53],
                ['v43.0', 1.45],
                ['v31.0', 1.24],
                ['v35.0', 0.85],
                ['v38.0', 0.6],
                ['v32.0', 0.55],
                ['v37.0', 0.38],
                ['v33.0', 0.19],
                ['v34.0', 0.14],
                ['v30.0', 0.14],
              ],
            },
            {
              name: '50 - 75 hrs',
              id: '50 - 75 hrs',
              data: [
                ['v35', 2.76],
                ['v36', 2.32],
                ['v37', 2.31],
                ['v34', 1.27],
                ['v38', 1.02],
                ['v31', 0.33],
                ['v33', 0.22],
                ['v32', 0.15],
              ],
            },
            {
              name: '75 - 100 hrs',
              id: '75 - 100 hrs',
              data: [
                ['v8.0', 2.56],
                ['v7.1', 0.77],
                ['v5.1', 0.42],
                ['v5.0', 0.3],
                ['v6.1', 0.29],
                ['v7.0', 0.26],
                ['v6.2', 0.17],
              ],
            },
            {
              name: '> 100',
              id: '> 100',
              data: [
                ['v12.x', 0.34],
                ['v28', 0.24],
                ['v27', 0.17],
                ['v29', 0.16],
              ],
            },
          ],
        },
      };
    
      chartData1 = [
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
              name: '> 100',
              y: 0.91,
              drilldown: '> 100',
            }
          ],
        },
      ];

      chartOptions2 = {
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
