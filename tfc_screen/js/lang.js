//escull idioma a l'inici

function inicilang(){	
	
	navigator.globalization.getPreferredLanguage(
		function(language){
			
			if(language.value=="ca" || language.value=="catala"){
				$('#langsel > option[value="1"]').attr('selected', 'selected');
				localStorage.setItem('lang',1);
			}else if(language.value=='es' || language.value=='español'){
				$('#langsel > option[value="2"]').attr('selected', 'selected');
				localStorage.setItem('lang',2);
			}else{
				$('#langsel > option[value="3"]').attr('selected', 'selected');
				localStorage.setItem('lang',3);
			}
			
	});
	
}



// escull idioma al canviar
	
function selChange(){
		
		var valor=$(document.getElementById('langsel')).val();
		if(valor==1){
		localStorage.setItem('lang',1);
		}
		else if(valor==2){
		localStorage.setItem('lang',2);
		}
		else{
		localStorage.setItem('lang',3);
		}		
};

//DICCIONARI
	
function selMain(){
	
		var valor=localStorage.getItem('lang');
		if(valor==1){
		$.i18n.load(i18n_dict_ca);
		}
		else if(valor==2){
		$.i18n.load(i18n_dict_es);
		}
		else{
		$.i18n.load(i18n_dict_en);
		}
		

		//navbar
		$('a#mp')._t('mp');
		$('a#ma')._t('ma');
		$('a#mg')._t('mg');
		$('a#mf')._t('mf');
		//perfil
		$('h#header_perfil')._t('header_perfil');
		$('p#p1e')._t('p1e');
		$('p#p6e')._t('p6e');
		$('p#p2e')._t('p2e');
		$('p#p3e')._t('p3e');
		$('p#p4e')._t('p4e');
		$('p#p5e')._t('p5e');
		
		//mesures
		$('p#header_mesures')._t('header_mesures');	
		$('a#cancel_btn')._t('cancel_btn');	
		$('a#send_btn')._t('send_btn');	
		$('button#btM')._t('btM');	
		$('button#btT')._t('btT');
		$('button#btS')._t('btS');
		$('p#popup')._t('popup');
		$('p#popup1')._t('popup1');
		//grafiques
		$('p#header_graph')._t('header_graph');
		$('div#grtxt')._t('grtxt');
		//ajuda
		$('p#header_ajuda')._t('header_ajuda');
		$('div#ajuda_txt')._t('ajuda_txt');
		//validacio
		$('p#header_validacio')._t('header_validacio');
		$('a#rsend_btn')._t('rsend_btn');
		$('a#back_btn')._t('back_btn');
		$('p#tM')._t('tM');
		$('p#tT')._t('tT');
		//resultat
		$('p#header_resultats')._t('header_resultats');
		$('p#resultats')._t('resultats');
		$('p#valoracio')._t('valoracio');
		$('p#recordatori')._t('recordatori');
		//inici
		//$('div#blink')._t('blink');
		//telefon
		$('p#hetl1')._t('htel1');
		$('button#telbtn')._t('telbtn');
		$('button#tel_txt')._t('tel_txt');
		//sms
		$('div#hsms')._t('hsms');
		$('div#smstxt')._t('smstxt');
		$('button#bSMS')._t('bSMS');
			
	
	};
	
	
	/* DICCIONARI ANGLÈS */
	
	i18n_dict_en = {
		
		
		//navbar
		"mp":"profile",
		"ma":"help",
		"mg":"graph",
		"mf":"mesures",
		//perfil
		"header_perfil":"PROFILE",
		"p1e":"Name",
		"p6e":"Surname",
		"p2e":"Birth date",
		"p3e":"Phone number",
		"p4e":"Email",
		"p5e":"Gender",
		//mesures
		"header_mesures":"MESURES",
		"cancel_btn":"Erase",
		"send_btn":"Send",
		"btM":"MORNING",
		"btT":"AFTERNOON",
		"btS":"SEND",
		"popup":"Fill all the fields, please",
		"popup1":"Disable user. You can't send data",
		//grafiques
		"header_graph":"GRAPHS",
		"grtxt":"This graph it charges from the server",
		//ajuda
		"header_ajuda":"HELP",
		"ajuda_txt":"screen with app help",
		//validacio
		"header_validacio":"VALIDATION",
		"rsend_btn":"Send",
		"back_btn":"Back",
		"tM":"MORNING",
		"tT":"AFTERNOON",
		//resultats
		"header_resultats":"RESULTS",
		"resultats":"Your blood presures have been received OK",
		"valoracio":"Everything OK",
		"recordatori":"Remember to take your presure and send the controls",
		//inici
		"blink":"CHARGING DATA",
		//telefon
		"htel1":"USER",
		"telbtn":"Send",
		"tel_txt":"Introduce your phone number",
		//sms
		"hsms":"Autentication ",
		"bSMS":"Send",
		"smstxt":"Wait or introduce the SMS code"
		
	};
	
	/* DICCIONARI CASTELLÀ*/
	
	i18n_dict_es = {
		
		
		//navbar
		"mp":"perfil",
		"ma":"ayuda",
		"mg":"graficas",
		"mf":"medidas",
		//perfil
		"header_perfil":"PERFIL",
		"p1e":"Nombre",
		"p6e":"Apellido",
		"p2e":"Fecha nacimiento",
		"p3e":"Telefono",
		"p4e":"Email",
		"p5e":"Género",
		//mesures
		"header_mesures":"MEDIDAS",
		"cancel_btn":"Borrar",
		"send_btn":"Enviar",
		"btM":"MAÑANA",
		"btT":"TARDE",
		"btS":"ENVIAR",
		"popup":"Llene todos los campos porfavor",
		"popup1":"Usuario desactivado. No puede enviar datos",
		//grafiques
		"header_graph":"GRAFICAS",
		"grtxt":"Esta grafica se carga segun la tabla de abajo que seria la que no envia el servidor",
		//ajuda
		"header_ajuda":"AYUDA",
		"ajuda_txt":"pantalla con ayudas a la aplicaion y con enlaces a los videos",
		//validacio
		"header_validacio":"VALIDACION",
		"rsend_btn":"Enviar",
		"back_btn":"Atras",
		"tM":"MAÑANA",
		"tT":"TARDE",
		//resultats
		"header_resultats":"RESULTADOS",
		"resultats":"Sus presiones han sido recibidas correctamente",
		"valoracio":"Todo va bien",
		"recordatori":"Recuerde tomarse la tensión y enviar los controles",
		//inici		
		"blink":"CARGANDO DATOS",
		//telefon
		"htel1":"USUARIO",
		"telbtn":"Enviar",
		"tel_txt":"Introduzca su telefono",
		//sms
		"hsms":"Autentificacion ",
		"bSMS":"Enviar",
		"smstxt":"Espere o introduzca el codigo recibido por SMS"
		
		
			
	};
	
	
	/* DICCIONARI CATALÀ*/
	
	i18n_dict_ca = {
		
		
		//navbar
		"mp":"perfil",
		"ma":"ajuda",
		"mg":"grafiques",
		"mf":"mesures",
		//perfil
		"header_perfil":"PERFIL",
		"p1e":"Nom",
		"p6e":"Cognom",
		"p2e":"Data naixement",
		"p3e":"Telèfon",
		"p4e":"Email",
		"p5e":"Gènere",
		//mesures
		"header_mesures":"MESURES",
		"cancel_btn":"Esborrar",
		"send_btn":"Enviar",
		"btM":"MATI",
		"btT":"TARDA",
		"btS":"ENVIAR",
		"popup":"Ompliu tots els camps de pressió siusplau",
		"popup1":"Usuari desactivat. No pot enviar dades",
		//grafiques
		"header_graph":"GRAFIQUES",
		"grtxt":"Equesta grafica es carrega segons la taula de sota que seria la que ens envia el servidor",
		//ajuda
		"header_ajuda":"AJUDA",
		"ajuda_txt":"pantalla amb ajudes a l'aplicació i potser els enllaços que deies a videos diversos ",
		//validacio
		"header_validacio":"VALIDACIO",
		"rsend_btn":"Enviar",
		"back_btn":"Tornar",
		"tM":"MATI",
		"tT":"TARDA",
		//resultats
		"header_resultats":"RESULTATS",
		"resultats":"Les seves pressions han estat rebudes correctament",
		"valoracio":"Tot va bé",
		"recordatori":"Recordi pendre's la presió i enviar els controls",
		//inici
		"blink":"CARREGANT DADES",
		//telefon
		"htel1":"USUARI",
		"telbtn":"Envia",
		"tel_txt":"Introdueixi el seu telèfon",
		//sms
		"hsms":"Autenticació ",
		"bSMS":"Envia",
		"smstxt":"Esperi o introdueixi el codi rebut per SMS"
			
			
	};
	
	
	
	
	
	
	
	
	
	

