//INICIALITZACIO

document.addEventListener("deviceready", inici, false);

function inici() { 

 	//splash screen
	navigator.splashscreen.hide();
	

	
	//eliminar 300ms wait
	$(function() {
    FastClick.attach(document.body);
	});
	
	//sms
	
	
	
	
	
	
	
	// COMPROVACIO TOKEN
	
	var ltoken = localStorage.getItem('token') || '<empty>';
	
   	if(ltoken=='<empty>' || null){
		inicilang();
		$.mobile.changePage("#tel1");
	}else{
		selMain();
		server_pacient(ltoken);
		server_graph(ltoken);
		$.mobile.changePage("#formulari");
	}
		
};



// COMPROVACIO TELEFON

function tel(){
	
	var prefix = $(document.getElementById("prefix")).val();
	var telefon = $(document.getElementById("tel")).val();
	
	arxiuValidacio = "http://shuite.hesoftgroup.com:8070/hypertensionPatient/restValidateMobile/"+prefix + telefon;  
	selMain();
	$.getJSON(arxiuValidacio);
	$.mobile.changePage("#sms1",{reloadPage:false});

};

// COMPROVACIÓ SMS

function sms(){
	
	var prefix = $(document.getElementById("prefix")).val();
	var telefon = $(document.getElementById("tel")).val();
	var code= $(document.getElementById("smsin")).val();
	
	arxiuValidacio = "http://shuite.hesoftgroup.com:8070/hypertensionPatient/restValidateCode/" + prefix + telefon + "?code=" + code;
	
	$.getJSON(arxiuValidacio, function(server){
		
			var token = server.uuid;
			localStorage.setItem("token", token);
			inici_server_pacient(token);
			server_graph(token);
		   	$.mobile.changePage("#perfil");	
			
	});
	
};


// FORMULARI 

function sendV(){
	
	if(document.getElementById('notificacions').value ==0){alert(document.getElementById('popup1').innerHTML);}
	else if((document.getElementById('pd1m').value == null || document.getElementById('pd1m').value == '') ||(document.getElementById('pd2m').value == null || document.getElementById('pd2m').value == '')||(document.getElementById('pd3m').value == null || document.getElementById('pd3m').value == '')||(document.getElementById('pd1t').value == null || document.getElementById('pd1t').value == '')||(document.getElementById('pd2t').value == null || document.getElementById('pd2t').value == '')||(document.getElementById('pd3t').value == null || document.getElementById('pd3t').value == '')){ alert(document.getElementById('popup').innerHTML); }
	else{ 
	
	document.getElementById('pst1m').value=document.getElementById('ps1m').value;
	document.getElementById('pdt1m').value=document.getElementById('pd1m').value;
	document.getElementById('pst2m').value=document.getElementById('ps2m').value;
	document.getElementById('pdt2m').value=document.getElementById('pd2m').value;
	document.getElementById('pst3m').value=document.getElementById('ps3m').value;
	document.getElementById('pdt3m').value=document.getElementById('pd3m').value;
	
	document.getElementById('pst1t').value=document.getElementById('ps1t').value;
	document.getElementById('pdt1t').value=document.getElementById('pd1t').value;
	document.getElementById('pst2t').value=document.getElementById('ps2t').value;
	document.getElementById('pdt2t').value=document.getElementById('pd2t').value;
	document.getElementById('pst3t').value=document.getElementById('ps3t').value;
	document.getElementById('pdt3t').value=document.getElementById('pd3t').value;
	$.mobile.changePage('#formVal');
	
	}
	
	
	
};

function cancelV(){
	
	$(document.getElementById('ps1m').value= null);
	$(document.getElementById('pd1m').value= null);
	$(document.getElementById('ps2m').value= null);
	$(document.getElementById('pd2m').value= null);
	$(document.getElementById('ps3m').value= null);
	$(document.getElementById('pd3m').value= null);
	
	$(document.getElementById('ps1t').value= null);
	$(document.getElementById('pd1t').value= null);
	$(document.getElementById('ps2t').value= null);
	$(document.getElementById('pd2t').value= null);
	$(document.getElementById('ps3t').value= null);
	$(document.getElementById('pd3t').value= null);
	
	
};


 
function openMati(){
		$(document.getElementById('fF')).toggle(200);
		$(document.getElementById('Ff')).toggle(200);
};
		
function openTarda(){
		$(document.getElementById('Ff')).toggle(200);
		$(document.getElementById('fF')).toggle(200);
};


// VALIDACIO 

function ok(){
	
	var element = document.getElementById('valoracio');
	if(document.getElementById('pst1t').value>=85){
	$(document.getElementById('sem')).show();
	$(document.getElementById('sem1')).hide();
	element.innerHTML = 'truca a la funeraria';
	}else{
	$(document.getElementById('sem1')).show();
	$(document.getElementById('sem')).hide();
	element.innerHTML = 'truca al metge';	
	}
	cancelV();
	$.mobile.changePage('#resultat');
	window.plugin.notification.badge.clear(); //elimina badge notification en enviar
};
function no(){
	$.mobile.changePage('#formulari');
};

function sel_sw(p){
	document.getElementById('popup').value=p;
	};



// SPINNING WHEEL



function openPresio() {
	
	off();
	
	
	var sistolica = { };
	var diastolica = { };
	
	
	for( var i = 50; i < 250; i += 1 ) {
		sistolica[i] = i;
	}

	for( var i = 30; i < 130; i += 1 ) {
		diastolica[i] = i;
	}

	SpinningWheel.addSlot(sistolica, 'center', 135);
	SpinningWheel.addSlot(diastolica, 'center', 85);
	
	SpinningWheel.setCancelAction(cancel);
	SpinningWheel.setDoneAction(done);
	
	SpinningWheel.open();
	
}

function done() {
	var results = SpinningWheel.getSelectedValues();
	var posu=document.getElementById('popup').value;
	
	switch (posu)
		  {
		 
		  case 1: 
		  	document.getElementById('ps1m').value = results.sist.join(' ') ;
			document.getElementById('pd1m').value = results.dist.join(' ') ;
			break;
		  case 2: 
			document.getElementById('ps2m').value = results.sist.join(' ') ;
			document.getElementById('pd2m').value = results.dist.join(' ') ;
			break;
		  case 3: 
			document.getElementById('ps3m').value = results.sist.join(' ') ;
			document.getElementById('pd3m').value = results.dist.join(' ') ;
			break;
		  case 4: 
		  	document.getElementById('ps1t').value = results.sist.join(' ') ;
			document.getElementById('pd1t').value = results.dist.join(' ') ;
			break;
		  case 5:
		  	document.getElementById('ps2t').value = results.sist.join(' ') ;
			document.getElementById('pd2t').value = results.dist.join(' ') ; 
			break;
		  case 6: 
		  	document.getElementById('ps3t').value = results.sist.join(' ') ;
			document.getElementById('pd3t').value = results.dist.join(' ') ;
			break;
	}
   on();
}

function cancel() {
	on();
	return false;
}

function on(){
	document.getElementById('ps1m').disabled=false;
	document.getElementById('pd1m').disabled=false;
	document.getElementById('ps2m').disabled=false;
	document.getElementById('pd2m').disabled=false;
	document.getElementById('ps3m').disabled=false;
	document.getElementById('pd3m').disabled=false;
	document.getElementById('ps1t').disabled=false;
	document.getElementById('pd1t').disabled=false;
	document.getElementById('ps2t').disabled=false;
	document.getElementById('pd2t').disabled=false;
	document.getElementById('ps3t').disabled=false;
	document.getElementById('pd3t').disabled=false;
	document.getElementById('cancel_btn').disabled=false;
	
	};
function off(){
	document.getElementById('ps1m').disabled=true;
	document.getElementById('pd1m').disabled=true;
	document.getElementById('ps2m').disabled=true;
	document.getElementById('pd2m').disabled=true;
	document.getElementById('ps3m').disabled=true;
	document.getElementById('pd3m').disabled=true;
	document.getElementById('ps1t').disabled=true;
	document.getElementById('pd1t').disabled=true;
	document.getElementById('ps2t').disabled=true;
	document.getElementById('pd2t').disabled=true;
	document.getElementById('ps3t').disabled=true;
	document.getElementById('pd3t').disabled=true;
	document.getElementById('cancel_btn').disabled=true;
	};



window.addEventListener('load', function(){ setTimeout(function(){ window.scrollTo(0,0); }, 100); }, true);

//tancar app

function tanca(){
	navigator.app.exitApp();
	}
	
//esborrar locals

function locals(){localStorage.clear();}