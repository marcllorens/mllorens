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
			selMain()
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
		selMain()	
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
		$('p#header_perfil')._t('header_perfil');
		$('p#photo_txt')._t('photo_txt');
		$('p#p1e')._t('p1e');
		$('p#p6e')._t('p6e');
		$('p#p2e')._t('p2e');
		$('p#p3e')._t('p3e');
		$('p#p4e')._t('p4e');
		$('p#p5e')._t('p5e');
		$('p#gender_m')._t('gender_m');
		$('p#gender_f')._t('gender_f');
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
		$('p#graf_ta_data')._t('graf_ta_data');
		$('p#graf_ta_si')._t('graf_ta_si');
		$('p#graf_ta_di')._t('graf_ta_di');
		$('p#graf_pa')._t('graf_pa');
		//notificacions
		$('p#noti_ti')._t('noti_ti');
		$('p#noti_mi')._t('noti_mi');
		//ajuda
		$('p#header_ajuda')._t('header_ajuda');
		$('a#ajuda_nav')._t('ajuda_nav');
		$('a#vids_l')._t('vids_l');
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
		$('p#result_ok')._t('result_ok');
		$('p#result_ko')._t('result_ko');
		$('p#result_idem')._t('result_idem');
		//AMPA
		$('p#header_ampa')._t('header_ampa');
		$('p#ampa_postura_h')._t('ampa_postura_h');
		$('p#ampa_postura')._t('ampa_postura');
		$('p#ampa_condicions_h')._t('ampa_condicions_h');
		$('p#ampa_condicions')._t('ampa_condicions');
		$('p#ampa_manegot_h')._t('ampa_manegot_h');
		$('p#ampa_manegot')._t('ampa_manegot');
		//ajuda navegacio
		$('p#header_ajuda_n')._t('header_ajuda_n');
		$('p#ajn_perfil_h')._t('ajn_perfil_h');
		$('p#ajn_perfil')._t('ajn_perfil');
		$('p#ajn_mesures_h')._t('ajn_mesures_h');
		$('p#ajn_mesures')._t('ajn_mesures');
		$('p#ajn_graf_h')._t('ajn_graf_h');
		$('p#ajn_graf')._t('ajn_graf');
		$('p#ajn_help_h')._t('ajn_help_h');
		$('p#ajn_help')._t('ajn_help');
		//inici
		$('div#blink')._t('blink');
		$('p#desc_txt')._t('desc_txt');
		//telefon
		$('p#hetl1')._t('htel1');
		//$('a#tele_btn')._t('tele_btn');
		$('p#tel_txt')._t('tel_txt');
		$('p#tag_dlang')._t('tag_dlang');
		//sms
		$('div#hsms')._t('hsms');
		$('div#smstxt')._t('smstxt');
		$('a#bSMS')._t('bSMS');
		
	
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
		"photo_txt":"Photo",
		"p1e":"Name",
		"p6e":"Surname",
		"p2e":"Birth date",
		"p3e":"Phone number",
		"p4e":"Email",
		"p5e":"Gender",
		"gender_m":"Male",
		"gender_f":"Female",
		//mesures
		"header_mesures":"MESURES",
		"cancel_btn":"Erase",
		"send_btn":"Info",
		"btM":"MORNING",
		"btT":"AFTERNOON",
		"btS":"SEND",
		"popup":"Fill all the fields, please",
		"popup1":"Disable user. You can't send data",
		//grafiques
		"header_graph":"Patient evolution",
		"grtxt":"",
		"graf_ta_data":"Date",
		"graf_ta_si":"Systolic",
		"graf_ta_di":"Dyastolic",
		"graf_pa":"Aterial Pressure (mm Hg)",
		//notificacions
		"noti_ti":"Remember",
		"noti_mi":"Remember to send your blood presure",
		//ajuda
		"header_ajuda":"HELP",
		"ajuda_nav":"Utilization help",
		"vids_l":"VIDEOS",
		//validacio
		"header_validacio":"VALIDATION",
		"rsend_btn":"Send",
		"back_btn":"Back",
		"tM":"MORNING",
		"tT":"AFTERNOON",
		//resultats
		"header_resultats":"RESULTS",
		"resultats":"Your blood presures have been received OK",
		"valoracio":"...",
		"recordatori":"Remember to take your presure and send the controls",
		"result_ok":"Everything OK",
		"result_ko":"We saw your mesures. Don't worry, we'll forward your apointment ",
		"result_idem":"No changes",
		//ampa
		"header_ampa":"A.M.P.A.",
		"ampa_postura_h":"Postura:",
		"ampa_postura":"Assegut o estirat amb el braç on s'ha de prendre la pressió a l'altura del cor.Adoptar una postura còmoda i relaxada.No creuar les cames.",
		"ampa_condicions_h":"Condicions:",
		"ampa_condicions":"No haver pres cafè, alcohol, menjat, fumat o fet exercici una hora abans de prendre la pressió.No prendre la pressió amb la bufeta plena.Evitar sorolls i situacions estressants.Cal estar en repòs al menys cinc minuts abans de la mesura.",
		"ampa_manegot_h":"Manegot:",
		"ampa_manegot":"Cal posar-lo 2-3 cm per sobre de la flexura del colze.Cal tenir en compte el tamany de manegot més adient segons el permímetre del braç.",
		//ajuda navegacio
		"header_ajuda_n":"HELP",
		"ajn_perfil_h":"Profile",
		"ajn_perfil":"here you can find your personal data. If there are not correct, please contact with your doctor",
		"ajn_mesures_h":"Mesures",
		"ajn_mesures":"Clicking the spot a spinning wheel selector will be open to allow you to enter your blod presure mesures",
		"ajn_graf_h":"Graphics",
		"ajn_graf":"here you can find the evolution of your blod presure mesures",
		"ajn_help_h":"Help",
		"ajn_help":"Navigation and hipertension help ",
		//inici
		"blink":"CHARGING DATA",
		"desc_txt":"descharge text test",
		//telefon
		"htel1":"REGISTER",
		//"tele_btn":"Done",
		"tel_txt":"Please, confirm your country prefix and introduce your phone number",
		"tag_dlang":"Language",
		//sms
		"hsms":"Autentication ",
		"bSMS":"Register",
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
		"photo_txt":"Foto",
		"p1e":"Nombre",
		"p6e":"Apellido",
		"p2e":"Fecha nacimiento",
		"p3e":"Telefono",
		"p4e":"Email",
		"p5e":"Género",
		"gender_m":"Masculino",
		"gender_f":"Femenino",
		//mesures
		"header_mesures":"MEDIDAS",
		"cancel_btn":"Borrar",
		"send_btn":"Info",
		"btM":"MAÑANA",
		"btT":"TARDE",
		"btS":"ENVIAR",
		"popup":"Llene todos los campos porfavor",
		"popup1":"Usuario desactivado. No puede enviar datos",
		//grafiques
		"header_graph":"Evolucion del paciente",
		"grtxt":"",
		"graf_ta_data":"Fecha",
		"graf_pa":"Pressió arterial(mm Hg)",
		"graf_ta_si":"Sistolica",
		"graf_ta_di":"Diastolica",
		//notificacions
		"noti_ti":"Recordatorio",
		"noti_mi":"Recuerde enviar sus presiones",
		//ajuda
		"header_ajuda":"AYUDA",
		"ajuda_nav":"Ayuda utilización",
		"vids_l":"VIDEOS",
		//validacio
		"header_validacio":"VALIDACION",
		"rsend_btn":"Enviar",
		"back_btn":"Atras",
		"tM":"MAÑANA",
		"tT":"TARDE",
		//resultats
		"header_resultats":"RESULTADOS",
		"resultats":"Sus presiones han sido recibidas correctamente",
		"valoracio":"...",
		"recordatori":"Recuerde tomarse la tensión y enviar los controles",
		"result_ok":"Todo va bien",
		"result_ko":"Hemos visto sus registros. No se preocupe, adelantaremos su visita.",
		"result_idem":"Todo igual",
		//ampa
		"header_ampa":"A.M.P.A.",
		"ampa_postura_h":"Postura:",
		"ampa_postura":"o estirat amb el braç on s'ha de prendre la pressió a l'altura del cor.Adoptar una postura còmoda i relaxada.No creuar les cames.",
		"ampa_condicions_h":"Condiciones:",
		"ampa_condicions":"No haver pres cafè, alcohol, menjat, fumat o fet exercici una hora abans de prendre la pressió.No prendre la pressió amb la bufeta plena.Evitar sorolls i situacions estressants.Cal estar en repòs al menys cinc minuts abans de la mesura.",
		"ampa_manegot_h":"Manguito:",
		"ampa_manegot":"Cal posar-lo 2-3 cm per sobre de la flexura del colze.Cal tenir en compte el tamany de manegot més adient segons el permímetre del braç.",
		//ajuda navegacio
		"header_ajuda_n":"AYUDA",
		"ajn_perfil_h":"Perfil",
		"ajn_perfil":"aqui podrá encontrar sus datos personales. En caso que no sean correctos, porfavor contacte con su medico",
		"ajn_mesures_h":"Medidas",
		"ajn_mesures":"Haciendo click en los cuadros aparecerà un selector que le permitirà entrar los valores de su presion arterial",
		"ajn_graf_h":"Graficos",
		"ajn_graf":"aqui encontrarà la evolucion de seus medidas de presion arterial",
		"ajn_help_h":"Ayuda",
		"ajn_help":"aqui encontrarà ayuda para la hipertension i para la aplicacion",
		//inici		
		"blink":"CARGANDO DATOS",
		"desc_txt":"prueba texto descargo",
		//telefon
		"htel1":"REGISTRO",
		//"tele_btn":"Hecho",
		"tel_txt":"Porfavor, confirme el prefijo de su país i indroduzca su numero de teléfono",
		"tag_dlang":"Idioma",
		//sms
		"hsms":"Autentificacion ",
		"bSMS":"Registrar",
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
		"photo_txt":"Foto",
		"p1e":"Nom",
		"p6e":"Cognom",
		"p2e":"Data naixement",
		"p3e":"Telèfon",
		"p4e":"Email",
		"p5e":"Gènere",
		"gender_m":"Masculí",
		"gender_f":"Femení",
		//mesures
		"header_mesures":"MESURES",
		"cancel_btn":"Esborrar",
		"send_btn":"Info",
		"btM":"MATI",
		"btT":"TARDA",
		"btS":"ENVIAR",
		"popup":"Ompliu tots els camps de pressió siusplau",
		"popup1":"Usuari desactivat. No pot enviar dades",
		//grafiques
		"header_graph":"Evolució del pacient",
		"grtxt":"",
		"graf_ta_data":"Data",
		"graf_ta_si":"Sistòlica",
		"graf_ta_di":"Diastòlica",
		"graf_pa":"Pressió arterial(mm Hg)",
		//notificacions
		"noti_ti":"Recordatori",
		"noti_mi":"Recordi enviar les seves pressions",
		//ajuda
		"header_ajuda":"AJUDA",
		"ajuda_nav":"Ajuda utilització",
		"vids_l":"VIDEOS",
		//validacio
		"header_validacio":"VALIDACIO",
		"rsend_btn":"Enviar",
		"back_btn":"Tornar",
		"tM":"MATI",
		"tT":"TARDA",
		//resultats
		"header_resultats":"RESULTATS",
		"resultats":"Les seves pressions han estat rebudes correctament",
		"valoracio":"...",
		"recordatori":"Recordi pendre's la pressió i enviar els controls",
		"result_ok":"Tot va be",
		"result_ko":"Hem vist els seus registres, no es preocupi li avançarem la visita.",
		"result_idem":"Tot igual",
		//ampa
		"header_ampa":"A.M.P.A.",
		"ampa_postura_h":"Postura:",
		"ampa_postura":"Assegut o estirat amb el braç on s'ha de prendre la pressió a l'altura del cor.Adoptar una postura còmoda i relaxada.No creuar les cames.",
		"ampa_condicions_h":"Condicions:",
		"ampa_condicions":"No haver pres cafè, alcohol, menjat, fumat o fet exercici una hora abans de prendre la pressió.No prendre la pressió amb la bufeta plena.Evitar sorolls i situacions estressants.Cal estar en repòs al menys cinc minuts abans de la mesura.",
		"ampa_manegot_h":"Manegot:",
		"ampa_manegot":"Cal posar-lo 2-3 cm per sobre de la flexura del colze.Cal tenir en compte el tamany de manegot més adient segons el permímetre del braç.",
		//ajuda navegacio
		"header_ajuda_n":"AJUDA",
		"ajn_perfil_h":"Perfil",
		"ajn_perfil":"aqui trobarà les seves dades personals. En cas que no siguin correctes siusplau contacti amb el seu metge",
		"ajn_mesures_h":"Mesures",
		"ajn_mesures":"Fent click en els requadres apareixerà un selector que li permetrar entrar els valors de pressió arterial",
		"ajn_graf_h":"Gràfics",
		"ajn_graf":"aqui trobarà l'evolució de les seves mesures de pressió arterial",
		"ajn_help_h":"Ajuda",
		"ajn_help":"aqui trobarà ajuda tant pel que fa a la hipertensió com  a la navegació ",
		//inici
		"blink":"CARREGANT DADES",
		"desc_txt":"prova text descàrrec",
		//telefon
		"htel1":"REGISTRE",
		//"tele_btn":"Fet",
		"tel_txt":"Si us plau, confirma el prefix del teu país i introdueix el teu número de telèfon",
		"tag_dlang":"Idioma",
		//sms
		"hsms":"Autenticació ",
		"bSMS":"Registrar",
		"smstxt":"Esperi o introdueixi el codi rebut per SMS"
			
			
	};
	
	
	
	
	
	
	
	
	
	

