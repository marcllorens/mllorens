function inici_server_pacient(token){
	
$.getJSON('http://shuite.hesoftgroup.com:8070/hypertensionPatient/restShow/'+ token, function(perfil){
    
	document.getElementById('nom').innerHTML =  perfil.name;
	document.getElementById('cognom').innerHTML = perfil.firstSurname ;
	var birth= (perfil.birthDate).split('T');
    var data = birth[0].split('-');
	document.getElementById('birth').innerHTML =  data[2]+'/'+data[1]+'/'+data[0];
	var genere;
	if(perfil.gender==true){ genere="masculí";}else{genere="femení";}
	document.getElementById('gender').innerHTML = genere;
	document.getElementById('telu').innerHTML = perfil.mobileNumber ;
	document.getElementById('email').innerHTML =perfil.email;
	document.getElementById('notificacions').innerHTML =perfil.statusQuestionSendType;
	dates(perfil.statusQuestionSendType);
});

}


function server_pacient(token){
	
$.getJSON('http://shuite.hesoftgroup.com:8070/hypertensionPatient/restShow/'+ token, function(perfil){
    
	document.getElementById('nom').innerHTML =  perfil.name;
	document.getElementById('cognom').innerHTML = perfil.firstSurname ;
	var birth= (perfil.birthDate).split('T');
    var data = birth[0].split('-');
	document.getElementById('birth').innerHTML =  data[2]+'/'+data[1]+'/'+data[0];
	var genere;
	if(perfil.gender==true){ genere="masculí";}else{genere="femení";}
	document.getElementById('gender').innerHTML = genere;
	document.getElementById('telu').innerHTML = perfil.mobileNumber ;
	document.getElementById('email').innerHTML =perfil.email;
	document.getElementById('notificacions').innerHTML =perfil.statusQuestionSendType;
	
});

}

