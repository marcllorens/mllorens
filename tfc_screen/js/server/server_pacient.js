function inici_server_pacient(token){
	
$.getJSON('http://app2.hesoftgroup.eu/hypertensionPatient/restShow/'+ token, function(perfil){
    
	document.getElementById('nom').innerHTML =  perfil.name;
	document.getElementById('cognom').innerHTML = perfil.firstSurname ;
	var birth= (perfil.birthDate).split('T');
    var data = birth[0].split('-');
	document.getElementById('birth').innerHTML =  data[2]+'/'+data[1]+'/'+data[0];
	var genere;
	if(perfil.gender==true){ genere=(document.getElementById('gender_m').innerHTML);}else{genere=(document.getElementById('gender_f').innerHTML);}
	document.getElementById('gender').innerHTML = genere;
	document.getElementById('telu').innerHTML = perfil.mobileNumber ;
	document.getElementById('email').innerHTML =perfil.email;
	document.getElementById('notificacions').innerHTML =perfil.statusQuestionSendType;
	
	dates(perfil.statusQuestionSendType);
});

}


function server_pacient(token){

$.getJSON('http://app2.hesoftgroup.eu/hypertensionPatient/restShow/'+ token, function(perfil){
    
	document.getElementById('nom').innerHTML =  perfil.name;
	document.getElementById('cognom').innerHTML = perfil.firstSurname ;
	var birth= (perfil.birthDate).split('T');
    var data = birth[0].split('-');
	document.getElementById('birth').innerHTML =  data[2]+'/'+data[1]+'/'+data[0];
	var genere;
	if(perfil.gender==true){ genere=(document.getElementById('gender_m').innerHTML);}else{genere=(document.getElementById('gender_f').innerHTML);}
	document.getElementById('gender').innerHTML = genere;
	document.getElementById('telu').innerHTML = perfil.mobileNumber ;
	document.getElementById('email').innerHTML =perfil.email;
	document.getElementById('notificacions').innerHTML =perfil.statusQuestionSendType;
	
});

}

