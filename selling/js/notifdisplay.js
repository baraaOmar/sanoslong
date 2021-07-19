function notifdisplay() {
	var x = document.getElementById('notifdisplay');

	if (x.style.display === 'none') {
		x.style.display = 'block';
	

	}
	else {
		x.style.display = 'none';
	
	}
}
function notifdisplay_cart() {
	var x = document.getElementById('notifdisplay_cart');

	if (x.style.display === 'none') {
		x.style.display = 'block';
	

	}
	else {
		x.style.display = 'none';
	
	}
}
function SettingPass(){

	var x=document.getElementById('pass');
	
	var y=document.getElementById('info');
	if(x.style.display==='none'){
		x.style.display='block';
		
		y.style.display='none';

	}
	
	else{
		x.style.display='none';
		y.style.display='block'
	}
}
function SettingInfo(){

	var x=document.getElementById('info');
	
	var y=document.getElementById('pass');
	if(x.style.display==='none'){
		x.style.display='block';
	y.style.display='none'
	}
	
	else{
		x.style.display='none';
		//y.style.display='block';
		y.style.display='block';
	}
}




function SettingPassAdm(){

	var x=document.getElementById('passAdm');
	var y=document.getElementById('infoAdm');
	var z=document.getElementById('infoEmpl');
	var f=document.getElementById('settAdm');
	
	if(x.style.display==='none'){
		x.style.display='block';
		y.style.display='none';
		z.style.display='none';
		f.style.display='block';
	}
	
	else{
		x.style.display='none';
		y.style.display='block';
		z.style.display='none';
		f.style.display='block';
	}
}
function SettingInfoAdm(){

	var x=document.getElementById('infoAdm');
	var y=document.getElementById('passAdm');
	var z=document.getElementById('infoEmpl');
	var f=document.getElementById('settAdm');
	
	if(x.style.display==='none'){
		x.style.display='block';
		y.style.display='none';
		z.style.display='none';
		f.style.display='block';
	}
	
	else{
		x.style.display='none';
		y.style.display='block';
		z.style.display='none';
		f.style.display='block';
	}
}
function SettingInfoEmp(){

	var z=document.getElementById('infoAdm');
	var y=document.getElementById('passAdm');
	var x=document.getElementById('infoEmpl');
	var f=document.getElementById('settAdm');
	
	if(x.style.display==='none'){
		x.style.display='block';
		y.style.display='none';
		f.style.display='none';
		z.style.display='none';
	}
	
	else{
		f.style.display='block';
		x.style.display='none';
		y.style.display='block';
		z.style.display='none';
	}
}
function basket_close(){

	var x=document.getElementById('basket-cart');
	var y = document.getElementById('Hide_body');
	var z = document.getElementById('header_display');
	
	if(x.style.display==='block'){
		x.style.display='none';
		y.style.display='none';
		z.style.backgroundColor='white';
	}
	

}