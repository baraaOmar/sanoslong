subPeriod();
function subPeriod() {
    var i = 0;
    var html;
    var myjson;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
2
//var today = new Date();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  //  var formdata = new FormData();
  //  formdata.append("date",date);
     
    ajax.onreadystatechange = function () {

        //alert("ar");  alert(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            
            if(this.responseText=="this day is not in subscription period"){
              alert("1");
              document.getElementById("text_warning").innerText="this day is not in subscription period";
              warningBlock();}
              else if(this.responseText=="there is no meal in this subscription period"){
                alert("2");  document.getElementById("text_warning").innerText="there is no meal in this subscription period";
                warningBlock();}
          //  if(this.responseText!="this day is not in subscription period" &&this.responseText!="there is no meal in this subscription period"){
          else  { myjson = JSON.parse(this.responseText);
            //alert(myjson[0].job_position);
            while (true) {
           if(myjson[i].mealType==1)  { 
                 document.getElementById("BreakFast").innerText += myjson[i].name+" ";
               }
               if(myjson[i].mealType==2)  { 
                document.getElementById("Snack1").innerText += myjson[i].name+" ";
              }
              if(myjson[i].mealType==3)  { 
                document.getElementById("Dinner").innerText += myjson[i].name+" ";
              }
              if(myjson[i].mealType==4)  { 
                document.getElementById("Snack2").innerText += myjson[i].name+" ";
              }
              if(myjson[i].mealType==5)  { 
                document.getElementById("Lunch").innerText += myjson[i].name+" ";
              }
            



               i++;
            }
        }
      }//col-md-6 col-lg-4 mb-5 mb-lg-0
    }
    ajax.open("POST", "php/Your DailySubscriptionMeal.php", true);
    ajax.send();

}
function warningBlock(){

	var x=document.getElementById('warning-block');
	
	if(x.style.display==='none'){
		x.style.display='block';
	
	}
	
	else{
		x.style.display='none';
	
	
	}
} 