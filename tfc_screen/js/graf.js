

$(function () {
    // create the chart
	
    $('#container').highcharts({
		
        chart: {
			type: 'spline',
            events: {
                redraw: function() {
                  
                }
            }
        },
		
		data: {
            table: document.getElementById('datatable')
        },
       title: {
            text: 'Evolucio del pacient'
        },
        yAxis: {
			 
			plotLines: [{ 
                color: 'red',
                width: 2,
                value:80,// document.getElementById('ps1m'),
                dashStyle: 'ShortDash'
            },{
					value :150,//document.getElementById('pd1m'),
					color : 'red',
					dashStyle : 'shortdash',
					width : 2,
					label : {
						text : 'PAD'
					}
				}],
            allowDecimals: false,
            title: {
                text: 'Pressió arterial (mm Hg)'
            }
        },
		credits: {
            enabled: false
        },
		tooltip: {
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    this.point.y +' '+ this.point.name.toLowerCase();
            }
        }
    });
});

function rdw(){
 $('#container').highcharts().redraw();
};
      