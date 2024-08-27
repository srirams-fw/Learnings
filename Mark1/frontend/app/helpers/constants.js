export const CHART_DATA = [
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
    data: [0, 0, 0],
  },
];

export const CHART_DATA1 = [
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
      },
    ],
  },
];

export const CHART_DATA2 = [
  {
    name: 'Incidents by Product',
    colorByPoint: true,
    data: [
      {
        name: 'ER',
        y: 56.33,
        drilldown: 'ER',
      },
      {
        name: 'ESM',
        y: 24.03,
        drilldown: 'ESM',
      },
      {
        name: 'MSP',
        y: 10.38,
        drilldown: 'MSP',
      },
    ],
  },
];

export const CHART_OPTIONS = {
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

export const CHART_OPTIONS1 = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Incident Turn Around Time',
  },
  subtitle: {
    text: ``,
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {
    title: {
      text: '% of Incidents Closed',
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

export const CHART_OPTIONS2 = {
  chart: {
    type: 'pie',
  },
  title: {
    text: 'Incidents by Product',
  },
  subtitle: {
    text: ``,
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {
    title: {
      text: '% of Incidents Reported',
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y:.1f}%',
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
        name: 'ER',
        id: 'ER',
        data: [],
      },
      {
        name: 'ESP',
        id: 'ESP',
        data: [],
      },
      {
        name: 'ESM',
        id: 'ESM',
        data: [],
      },
    ],
  },
};
