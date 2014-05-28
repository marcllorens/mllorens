
function server_graph(token){
	

$.getJSON('http://shuite.hesoftgroup.com:8070/hypertensionBloodPressure/restList/'+ token, function(data){
	
	
	$("#table").html("<table id='data_table'></table>");
	
	$("#data_table").append("<tr><th>Data</th><th>Sistòlica (mm Hg)</th><th>Diastòlica (mm Hg)</th></tr>");
	alert(data.systole);
	
	$.each(data, function(){
		alert(data.class.systole);
		$("#data_table").append("<tr><td>"+data.class.dataTaken[0]+"</td><td>"+data.class.systole[1]+"</td><td>"+data.class.diastole[2]+"</td></tr>");

	});
    /*document.getElementById('taula_a_1').value =  graph.dateTaken;
	document.getElementById('taula_d_1').value =  graph.diastole;
	document.getElementById('taula_s_1').value =  graph.systole;
	document.getElementById('taula_a_2').value =  graph.dateTaken;
	document.getElementById('taula_d_2').value =  graph.diastole;
	document.getElementById('taula_s_2').value =  graph.systole;*/
});

}

