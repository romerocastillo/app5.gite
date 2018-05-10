 // JavaScript Document
 $(document).ready(function(e){
	 document.addEventListener("deviceready",function(){
		 $('#sonar').tap(function(){
			 navigator.notification.beep(2);  
		 }); //cierre del beep
		 $('#vibrar').tap(function(){
			 navigator.notification.vobrate(2000);
		 });//cierre de vibrate
	 },false);//cierra deviceready
 });//cierra document ready