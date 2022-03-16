var chart1 = {
title: {
  text: 'ECharts Getting Started Example'
},
tooltip: {},
	legend: {
		data: ['sales']
	},
xAxis: {
  data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
},
yAxis: {},
	series: [
	{
		name: 'sales',
		type: 'bar',
		data: [5, 20, 36, 10, 10, 20]
	}
	]
};

var chart2 = {
  title: {
	text: 'Distribution of Electricity',
	
	
  },
  tooltip: {
	trigger: 'axis',
	axisPointer: {
	  type: 'cross'
	}
  },
  toolbox: {
	show: true,
	feature: {
	  saveAsImage: {}
	}
  },
  xAxis: {
	type: 'category',
	boundaryGap: false,
	// prettier-ignore
	data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15','06:45', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
	
  },
  yAxis: {
	type: 'value',
	axisLabel: {
	  formatter: '{value} W'
	},
	axisPointer: {
	  snap: true
	}
  },
  visualMap: {
	show: false,
	dimension: 0,
	pieces: [
	  {
		lte: 6,
		color: 'green'
	  },
	  {
		gt: 6,
		lte: 9,
		color: 'red'
	  },
	  {
		gt: 8,
		lte: 15,
		color: 'green'
	  },
	  {
		gt: 15,
		lte: 18,
		color: 'red'
	  },
	  {
		gt: 17,
		color: 'green'
	  }
	]
  },
  series: [
	{
	  name: 'Electricity',
	  type: 'line',
	  smooth: true,
	  // prettier-ignore
	  data: [300, 280, 250, 260, 270, 300, 425 ,550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400, 1000],
	  markArea: {
		itemStyle: {
		  color: 'rgba(255, 173, 177, 0.4)'
		},
		data: [
		  [
			{
			  name: 'Morning Peak',
			  xAxis: '06:45'
			},
			{
			  xAxis: '10:00'
			}
		  ],
		  [
			{
			  name: 'Evening Peak',
			  xAxis: '17:30'
			},
			{
			  xAxis: '21:15'
			}
		  ]
		]
	  }
	}
  ]
};


// Display the chart using the configuration items and data just specified.
