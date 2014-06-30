
function dates(pqst){

if(pqst==1){ //setmanal
	
	var dx=new Date().getDay();
	
	switch (dx)
		  {
		  case 0: //diumenge
			t2=new Date.today().add(3).days().set({ hour: 8, minute: 00 });
			t3=new Date.today().add(3).days().set({ hour: 21, minute: 00 });
			setmanal(t2,t3);
			break;
		  case 1: //dilluns
		  	t2=new Date.today().add(2).days().set({ hour: 8, minute: 00 });
			t3=new Date.today().add(2).days().set({ hour: 21, minute: 00 });
			setmanal(t2,t3);
			break;
		  case 2: //dimarts
		 
		  	t2=new Date.today().add(1).days().set({ hour: 8, minute: 00 });
			t3=new Date.today().add(1).days().set({ hour: 21, minute: 00 });
			setmanal(t2,t3);
			break;
		  case 3: //DIMECRES
		  	t2=new Date.today().add(7).days().set({ hour: 8, minute: 00 });
		  	t3=new Date.today().add(7).days().set({ hour: 21, minute: 00 });
			setmanal(t2,t3);
			break;
		  case 4: //dijous
		    t2=new Date.today().add(6).days().set({ hour: 8, minute: 00 });
			t3=new Date.today().add(6).days().set({ hour: 21, minute: 00 });
			setmanal(t2,t3);
   		    break;
		  case 5: //divendres
		 	t2=new Date.today().add(5).days().set({ hour: 8, minute: 00 });
			t3=new Date.today().add(5).days().set({ hour: 21, minute: 00 });
			setmanal(t2,t3);
			break;
		  case 6: //dissabte
		  	t2=new Date.today().add(4).days().set({ hour: 8, minute: 00 });
			t3=new Date.today().add(4).days().set({ hour: 21, minute: 00 });
			setmanal(t2,t3);
			break;
	  	};
	}else if(pqst==2 || pqst==3){//quinzenal

		t2=new Date.today().set({ day: 1, hour: 8, minute: 00 });
		t3=new Date.today().set({ day: 15, hour: 8, minute: 00 });
		quinzenal(t2,t3);
	 
	}
	
	

};
			
function setmanal(t2,t3){
		
		window.plugin.notification.local.add({ title:document.getElementById('noti_ti').innerHTML,
			 message: document.getElementById('noti_mi').innerHTML,
			 badge:1});
	
		window.plugin.notification.local.add({
			 id:      1,
			 title:   document.getElementById('noti_ti').innerHTML,
			 message: document.getElementById('noti_mi').innerHTML,
			 badge:	  1,
			 repeat:  'weekly',
			 date:    t2
			});
		window.plugin.notification.local.add({
			 id:      2,
			 title:   document.getElementById('noti_ti').innerHTML,
			 message: document.getElementById('noti_mi').innerHTML,
			 badge:	  1,
			 repeat:  'weekly',
			 date:    t3
			});
		   
	};
	
function quinzenal(t2,t3){
		
		window.plugin.notification.local.add({ title:document.getElementById('noti_ti').innerHTML,
			 message: document.getElementById('noti_mi').innerHTML,
			 badge:1});
		
		window.plugin.notification.local.add({
			 id:      1,
			 title:   document.getElementById('noti_ti').innerHTML,
			 message: document.getElementById('noti_mi').innerHTML,
			 badge:	  1,
			 repeat:  'monthly',
			 date:    t2
			});
		window.plugin.notification.local.add({
			 id:      2,
			 title:   document.getElementById('noti_ti').innerHTML,
			 message: document.getElementById('noti_mi').innerHTML,
			 badge:	  1,
			 repeat:  'monthly',
			 date:    t3
			});
		   
	};
	
function fi(){window.plugin.notification.local.cancelAll();};



