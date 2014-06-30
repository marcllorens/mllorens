function server_send(){

	var uuid = localStorage.getItem('token');
	
	var url='http://app2.hesoftgroup.eu/hypertensionBloodPressure/restSave';
	
	var date1= '{"uuid":' + uuid + ',"systole1m":' + document.getElementById('pst1m').value + ',"systole2m":' + document.getElementById('pst2m').value + ',"systole3m":' + document.getElementById('pst3m').value + ',"systole1n":' + document.getElementById('pst1t').value + ',"systole2n":' + document.getElementById('pst2t').value + ',"systole3n":' + document.getElementById('pst3t').value + ',"diastole1m":' + document.getElementById('pdt1m').value + ',"diastole2m":' + document.getElementById('pdt2m').value + ',"diastole3m":' + document.getElementById('pdt3m').value + ',"diastole1n":' + document.getElementById('pdt1t').value + ',"diastole2n":' + document.getElementById('pdt2t').value + ',"diastole3n":' + document.getElementById('pdt3t').value + '}'
	
	$.ajax({
		url: url,
		type:'post',
    	data: date1,
		contentType:'application/json',
		success: function(data) {
			document.getElementById('patientStatus').value =data.patientStatus;
			document.getElementById('infolink').value =data.infoLink;
    	}
	});	

	ok();
}
