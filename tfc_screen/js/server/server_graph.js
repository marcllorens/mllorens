
function server_graph(token){
	
$.getJSON('http://app2.hesoftgroup.eu/hypertensionBloodPressure/restList/'+ token, function(data){
	
	 var table ='<table> ';
	 table+='<tr><th>' + document.getElementById('graf_ta_data').innerHTML + '</th><th>' + document.getElementById('graf_ta_si').innerHTML + '</th><th>' + document.getElementById('graf_ta_di').innerHTML + '</th></tr>';
     $.each( data, function( index, item){
		var taken= (item.dateTaken).split('T');
		var data = taken[0].split('-');
		
   	    table+='<tr><td>'+data[2]+'/'+data[1]+'</td><td>'+item.systole+'</td><td>'+item.diastole+'</td></tr>';
     });
     table+='</table>';
	 
     $("#grf_table").html(table);	
	 $("#grf_table1").html(table);	
	 grph();
});

}

