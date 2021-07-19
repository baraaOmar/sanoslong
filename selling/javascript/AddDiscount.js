var meal=document.getElementById("mealDis");
var value1=document.getElementById("valueDis");
var dateStartDis=document.getElementById("dateSrartDis");
var dateEndDis=document.getElementById("dateEndDis");
var timeStartDis=document.getElementById("timeSrartDis");
var timeEndDis=document.getElementById("timeEndDis");
var text_warning=document.getElementById("invalid-feedback_add_DiscountForm");
function invalid_feedback_add_DiscountForm(){
    if(meal.value.length==0||value1.value.length==0||dateStartDis.value.length==0||dateEndDis.value.length==0
        ||timeStartDis.value.length==0||timeEndDis.value.length==0){
        text_warning.innerText="please ensure that you fill all feilds";
        text_warning.style.display="block";
        alert(meal.value+" "+value1.value+" "+dateEndDis.value+" "+dateStartDis.value+" "+timeStartDis.value+" "+timeEndDis.value);
      
            }else {  warning_block_resturaunt_portal_add_discount();
                text_warning.innerText="donnee";}
}


function addDiscount() {
    var i = 0;
    var html;
    var myjson;
   
  
   
    var formdata =new FormData();
    formdata.append("meal",meal.value);
    formdata.append("value",value1.value);
    formdata.append("dateS",dateStartDis.value);
    formdata.append("dateF",dateEndDis.value);
    formdata.append("timeS",timeStartDis.value);
    formdata.append("timeF",timeEndDis.value);
    
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
 
 
        
    ajax.onreadystatechange = function () {
  alert(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            if (this.responseText != "there is aproblem in this process") {
               // document.getElementById("text_warning").innerText="done";
            warning_masseges("insert is done");
            document.getElementById('warning-block_resturaunt_portal_add_discount').style.display='none';
        }
        else{
          //  document.getElementById("text_warning").innerText="there is aproblem  in this process";
            warning_masseges("there is aproblem  in this process");
        }
    }
   
}
ajax.open("POST", "php/AddDiscount.php", true);
ajax.send(formdata);



}
function warning_block_resturaunt_portal_add_discount(){

    var x=document.getElementById('warning-block_resturaunt_portal_add_discount');
   
    if(x.style.display==='none'){
       x.style.display='block';
     
    }
    
    else{
       x.style.display='none';
      
    
    }
 }
 function warning_masseges(t){
    document.getElementById('text_warning_Msg').innerText=t;
    var x=document.getElementById('warning_rest_Portal');
   
    if(x.style.display==='none'){
       x.style.display='block';
      
    }
    
    else{
       x.style.display='none';
      
    
    }
 }