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
            
            if(this.responseText=="this day is not in subscription period"){alert("11oooo");
              document.getElementById("text_warning_Msg_Diet").innerText="this day is not in subscription period";
              warningBlock();}
              else if(this.responseText=="there is no meal in this subscription period"){alert("22oooo");
                document.getElementById("text_warning_Msg_Diet").innerText="there is no meal in this subscription period";
                warningBlock();}
          //  if(this.responseText!="this day is not in subscription period" &&this.responseText!="there is no meal in this subscription period"){
          else  { myjson = JSON.parse(this.responseText);
            //alert(myjson[0].job_position);
            while (true) {
           if(myjson[i].type==1)  { 
                 document.getElementById("breakFDiet").innerText += myjson[i].name+" ";
               }
               if(myjson[i].type==2)  { alert("oooo");
                document.getElementById("snack1Diet").innerText += myjson[i].name+" ";
              }
              if(myjson[i].type==3)  { 
                document.getElementById("dinnerDiet").innerText += myjson[i].name+" ";
              }
              if(myjson[i].type==4)  { 
                document.getElementById("snack2Diet").innerText += myjson[i].name+" ";
              }
              if(myjson[i].type==5)  { 
                document.getElementById("lunchDiet").innerText += myjson[i].name+" ";
              }
            



               i++;
            }
        }
      }//col-md-6 col-lg-4 mb-5 mb-lg-0
    }
    ajax.open("POST", "php/dailyDiet.php", true);
    ajax.send();

}
function warningBlock(){

	var x=document.getElementById("warning_rest_Portal_diet");
	
	if(x.style.display=='none'){
		x.style.display='block';
	
	}
	
	else{
		x.style.display='none';
		
	
	}
} 