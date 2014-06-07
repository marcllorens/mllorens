
function server_graph(token,lang){
	
$.getJSON('http://shuite.hesoftgroup.com:8070/hypertensionBloodPressure/restList/'+ token, function(data){

	if( lang==1){
		var lng="Diastòlica";
		var lngs="Sistòlica";
		var lngd="Data";
	}else if( lang==2){
		var lng="Diastolica";
		var lngs="Sistolica";
		var lngd="Fecha";			
	}else {
		var lng="Dyastolic";
		var lngs="Systolic";
		var lngd="Date";
	};
	
	 var table ='<table> ';
	 table+='<tr><th>' + lngd + '</th><th>' + lngs + '</th><th>' + lng + '</th></tr>';
     $.each( data, function( index, item){
		var taken= (item.dateTaken).split('T');
		var data = taken[0].split('-');
		
   	    table+='<tr><td>'+data[2]+'/'+data[1]+'</td><td>'+item.systole+'</td><td>'+item.diastole+'</td></tr>';
     });
     table+='</table>';
	 
     $("#grf_table").html(table);	
		
	 grph();
});

}

