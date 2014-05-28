function inici_server_pacient(token){
	
$.getJSON('http://shuite.hesoftgroup.com:8070/hypertensionPatient/restShow/'+ token, function(perfil){
    
	document.getElementById('nom').innerHTML =  perfil.name;
	document.getElementById('cognom').innerHTML = perfil.firstSurname ;
	document.getElementById('birth').innerHTML =  perfil.birthDate ;
	document.getElementById('gender').innerHTML =perfil.gender;
	document.getElementById('telu').innerHTML = perfil.mobileNumber ;
	document.getElementById('email').innerHTML =perfil.email;
	dates(perfil.statusQuestionSendType);
});

}


function server_pacient(token){
	
$.getJSON('http://shuite.hesoftgroup.com:8070/hypertensionPatient/restShow/'+ token, function(perfil){
    
	document.getElementById('nom').innerHTML =  perfil.name;
	document.getElementById('cognom').innerHTML = perfil.firstSurname ;
	document.getElementById('birth').innerHTML =  perfil.birthDate ;
	document.getElementById('gender').innerHTML =perfil.gender;
	document.getElementById('telu').innerHTML = perfil.mobileNumber ;
	document.getElementById('email').innerHTML =perfil.email;
	
});

}

