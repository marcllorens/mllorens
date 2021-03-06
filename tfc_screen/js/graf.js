function grph(){
    
    $('#container').highcharts({
		
        chart: {
			zoomType: 'x'
        },
		
		data: {
            table: document.getElementById('grf_table')
        },
		
		exporting: {enabled: false},
       title: {
            text: ''
        },
        yAxis: {
			 
			plotLines: [{ 
                color: 'red',
                width: 2,
                value:document.getElementById('pad').innerHTML,
                dashStyle: 'ShortDash',
				label : {
						text : 'PAD'
					}
            },{
					value :document.getElementById('pas').innerHTML,
					color : 'red',
					dashStyle : 'shortdash',
					width : 2,
					label : {
						text : 'PAS'
					}
				}],
            allowDecimals: false,
            title: {
                text: null//document.getElementById('graf_pa').innerHTML
            }
        },
		credits: {
            enabled: false
        },
		 legend: {
            align: 'left',
		    layout: 'vertical',
            backgroundColor: '#FFFFFF',
			borderRadius: 5,
            borderWidth: 1,
            verticalAlign: 'top',
            x: 64,
            y: -10,
            floating: true,
			 labelFormatter: function() {
                return this.name;
            }
        },
		tooltip: {
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    this.point.y +' '+ this.point.name.toLowerCase();
            }
        }
    });
	
	
	
	
	 $('#container1').highcharts({
		
        chart: {
			zoomType: 'x'
        },
		
		data: {
            table: document.getElementById('grf_table')
        },
		
		exporting: {enabled: false},
       title: {
            text: ''
        },
        yAxis: {
			 
			plotLines: [{ 
                color: 'red',
                width: 2,
                value:document.getElementById('pad').innerHTML,
                dashStyle: 'ShortDash',
				label : {
						text : 'PAD'
					}
            },{
					value :document.getElementById('pas').innerHTML,
					color : 'red',
					dashStyle : 'shortdash',
					width : 2,
					label : {
						text : 'PAS'
					}
				}],
            allowDecimals: false,
            title: {
                text: null//document.getElementById('graf_pa').innerHTML
            }
        },
		credits: {
            enabled: false
        },
		 legend: {
            align: 'left',
		    layout: 'vertical',
            backgroundColor: '#FFFFFF',
			borderRadius: 5,
            borderWidth: 1,
            verticalAlign: 'top',
            x: 64,
            y: -10,
            floating: true,
			 labelFormatter: function() {
                return this.name;
            }
        },
		tooltip: {
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    this.point.y +' '+ this.point.name.toLowerCase();
            }
        }
    });
}