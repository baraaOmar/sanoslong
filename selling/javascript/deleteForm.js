  function deleteMeal(){
var ajax;
if(window.XMLHttpRequest){
ajax= new XMLHttpRequest();
}else{
ajax=new ActiveXObject("Microsoft.XMLHTTP");
}
ajax.onreadystatechange()=function(){
if(this.readyState==4 && this.status==200){

}
}

ajax.open("POST,php/deleteMeal.php")
}

