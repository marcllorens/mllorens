//INICIALITZACIO


// BACK BUTTON
//$(window).on("navigate", function (event, data) {
 // var direction = data.state.direction;
  //if (direction == 'back') {
    // do something
 // }
//});  //  \back button



document.addEventListener("deviceready", inici, false);

function inici() { 
	
	panel(2);
	
 	//splash screen
	
	navigator.splashscreen.hide();
	
	//eliminar 300ms wait
	$(function() {
		new FastClick(document.body);
  // FastClick.attach(document.body);
	});
	
	
	// COMPROVACIO TOKEN
	
	var ltoken = localStorage.getItem('token') || '<empty>'; 
	
   	if(ltoken=='<empty>' || null){
		inicilang(); //idioma
		alert(document.getElementById("desc_txt").innerHTML); //text descàrrec
		setTimeout(function(){$.mobile.changePage("#tel1");}, 800);
		
	}else{
		selMain();
		server_pacient(ltoken);  //dades pacient
		server_graph(ltoken);  //dades gràfica	
		document.getElementById("smallImage").src= localStorage.getItem('photo') || '<empty>'; //foto
    	setTimeout(function(){$.mobile.changePage("#formulari");}, 1200);
		
		//$.mobile.changePage("#formulari");
		}
	

}; //  /inici

// COMPROVACIO TELEFON

function tel(){
	
	var prefix = $(document.getElementById("prefix")).val();
	var telefon = $(document.getElementById("tel")).val();
	
	arxiuValidacio = "http://app2.hesoftgroup.eu/hypertensionPatient/restValidateMobile/"+prefix;// + telefon;  
	
	$.getJSON(arxiuValidacio);
	$.mobile.changePage("#sms1");

}; //  /comprovacio telèfon

// COMPROVACIÓ SMS

function sms(){
	
	var prefix = $(document.getElementById("prefix")).val();
	var telefon = $(document.getElementById("tel")).val();
	var code= $(document.getElementById("smsin")).val();
	
	arxiuValidacio = "http://app2.hesoftgroup.eu/hypertensionPatient/restValidateCode/" + prefix + telefon + "?code=" + code;
	
	$.getJSON(arxiuValidacio, function(server){
		
			var token = server.uuid;
			localStorage.setItem("token", token);
			inici_server_pacient(token);
			server_graph(token);
			$.mobile.changePage("#perfil");	
				
	});
	
}; //  /comprovacio sms



// FORMULARI 

function sendV(){ //obrir pàgina de validació
	
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
	
};  //  /obrir pag validació

function cancelV(){ //esborrar valors del formulari
	
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


//efecte toggle
 
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
	if(document.getElementById('patientStatus').value=1){
	$(document.getElementById('sem_rd')).show();
	$(document.getElementById('sem_gr')).hide();
	$(document.getElementById('sem_yw')).hide();
	element.style.background='#F66';
	element.innerHTML = document.getElementById('result_ko').innerHTML;
	}else if(document.getElementById('patientStatus').value=0){
	$(document.getElementById('sem_gr')).show();
	$(document.getElementById('sem_rd')).hide();
	$(document.getElementById('sem_yw')).hide();
	element.style.background='#AFA';
	element.innerHTML = document.getElementById('result_ok').innerHTML;
	}else{$(document.getElementById('sem_yw')).show();
	$(document.getElementById('sem_rd')).hide();
	$(document.getElementById('sem_gr')).hide();
	element.style.background='#FF9';
	element.innerHTML = document.getElementById('result_idem').innerHTML;	
	}
	cancelV(); //esborra formulari
	$.mobile.changePage('#resultat');
	setTimeout(function(){alert(document.getElementById("resultats").innerHTML); }, 200);
	//alert(document.getElementById("resultats").innerHTML); //pressions rebudes
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
	
	off(); //deshabilitar textbox

	var sistolica = { };
	var diastolica = { };

	for( var i = 50; i < 250; i += 1 ) {
		sistolica[i] = i;
	}

	for( var i = 30; i < 130; i += 1 ) {
		diastolica[i] = i;
	}

	SpinningWheel.addSlot(sistolica, 'center', 130); //pas
	SpinningWheel.addSlot(diastolica, 'center', 80); //pad
	
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
   on(); //habilitar textbox
}

function cancel() {
	on(); //habilitar textbox
	return false;
}

//habilitar textbox

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
	
//deshabilitar textbox

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

//   /spining wheel

window.addEventListener('load', function(){ setTimeout(function(){ window.scrollTo(0,0); }, 100); }, true);

//tancar app

function tanca(){
	navigator.app.exitApp();
	}
	
//esborrar locals

function locals(){localStorage.clear();}

//endarrera

function goBack() {
    window.history.back()
}

//ajuda navegacio

function x1(){
	document.getElementById('ajn_perfil_h').hidden=false;
	document.getElementById('ajn_perfil').hidden=false;
	document.getElementById('ajn_mesures_h').hidden=true;
	document.getElementById('ajn_mesures').hidden=true;
	document.getElementById('ajn_graf_h').hidden=true;
	document.getElementById('ajn_graf').hidden=true;
	document.getElementById('ajn_help_h').hidden=true;
	document.getElementById('ajn_help').hidden=true;
	}
	
function x2(){
	document.getElementById('ajn_perfil_h').hidden=true;
	document.getElementById('ajn_perfil').hidden=true;
	document.getElementById('ajn_mesures_h').hidden=false;
	document.getElementById('ajn_mesures').hidden=false;
	document.getElementById('ajn_graf_h').hidden=true;
	document.getElementById('ajn_graf').hidden=true;
	document.getElementById('ajn_help_h').hidden=true;
	document.getElementById('ajn_help').hidden=true;
	}
	
function x3(){
	document.getElementById('ajn_perfil_h').hidden=true;
	document.getElementById('ajn_perfil').hidden=true;
	document.getElementById('ajn_mesures_h').hidden=true;
	document.getElementById('ajn_mesures').hidden=true;
	document.getElementById('ajn_graf_h').hidden=false;
	document.getElementById('ajn_graf').hidden=false;
	document.getElementById('ajn_help_h').hidden=true;
	document.getElementById('ajn_help').hidden=true;
	}
	
function x4(){
	document.getElementById('ajn_perfil_h').hidden=true;
	document.getElementById('ajn_perfil').hidden=true;
	document.getElementById('ajn_mesures_h').hidden=true;
	document.getElementById('ajn_mesures').hidden=true;
	document.getElementById('ajn_graf_h').hidden=true;
	document.getElementById('ajn_graf').hidden=true;
	document.getElementById('ajn_help_h').hidden=false;
	document.getElementById('ajn_help').hidden=false;
	}
	
	
// MENU LATERAL
	
function panel(a){
		
	if ( a==2){
   		$("#panel").animate({left:"-200px"});
		$("#resultat").animate({left:"0"});	
		$("#grafiques1").animate({left:"0"});	
  	}else{  
  		$("#panel").animate({left:"0"});
		$("#resultat").animate({left:"+200px"});	
		$("#grafiques1").animate({left:"+200px"});		
 	}
}
 	
	
function p1(){
	panel(2);
	$.mobile.changePage('#resultat');
	}
	
function p2(){
	panel(2);
	$.mobile.changePage('#videos1');
	}

function p3(){
	panel(2);
	$.mobile.changePage('#grafiques1');
	}
	
function p4(){
	panel(2);
	$.mobile.changePage('#comentaris');
	}
	
function p5(){
	panel(2);
	$.mobile.changePage('#formulari');
	}