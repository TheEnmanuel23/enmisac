AmCharts.makeChart("chartdiv",
				{
					"type": "radar",
					"categoryField": "tec",
					"startDuration": 2,
					"graphs": [
						{
							"balloonText": "[[value]] %",
							"bullet": "round",
							"id": "AmGraph-1",
							"valueField": "litres"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"axisTitleOffset": 20,
							"gridType": "circles",
							"id": "ValueAxis-1",
							"minimum": 0,
							"axisAlpha": 0.15,
							"dashLength": 3
						}
					],
					"allLabels": [],
					"balloon": {},
					"titles": [],
					"dataProvider": [
						{
							"tec": "Czech Republic",
							"litres": 156.9
						},
						{
							"tec": "Ireland",
							"litres": 131.1
						},
						{
							"tec": "javascript",
							"litres": 115.8
						},
						{
							"tec": "python",
							"litres": 109.9
						}
					]
				}
			);