
function MealinThisPeriodDiet() {
    var i = 0, j = 0;
    var html;
    var myjson;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(document.getElementById("startDateDiet").value.length==0 ||
    document.getElementById("endDateDiet").value.length==0 
    ){
        warningBlock();
    }
 var date_start= document.getElementById("startDateDiet").value;
 var date_end= document.getElementById("endDateDiet").value;
    var date1 = new Date(date_start);
    var date2 = new Date(date_end);
    var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
   // To calculate the time difference of two dates 
  
    alert(date_start+" "+date_end+" "+Difference_In_Days);
 
    //var today = new Date();
    //var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var formdata = new FormData();
    formdata.append("startDateDiet", date_start);
    formdata.append("endDateDiet", date_end);
    formdata.append("Difference_In_Day", Difference_In_Days);
    var MealinThisPeriod = document.querySelector("#MealinThisPeriodDiet > tbody");
    ajax.onreadystatechange = function () {

        //alert("ar");  alert(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            if (this.responseText != "there is no subscribtion in this period") {
                myjson = JSON.parse(this.responseText);
                //alert(myjson[0].job_position);
                while (true) {
                    var html = "<tr style=border: solid thin;background-color:#d3d3d31c;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)> <td >" + myjson[i][0].name + "</td><td >" + myjson[i][1].name + "</td> <td >" + myjson[i][2].name + "</td> <td >" + myjson[i][3].name + "</td> <td>" + myjson[i][4].name + "</td> </tr>";
                    i++; 
                    MealinThisPeriod.innerHTML+=html;
                }
               
            }else {
                document.getElementById("text_warning_Msg_Diet").innerText="there is no subscribtion in this period";
                warningBlock();
            }
        }//col-md-6 col-lg-4 mb-5 mb-lg-0
        if(i<Difference_In_Days){
            document.getElementById("text_warning_Msg_Diet").innerText=" sub of period  choosed is not in your diet subscription,or not in the same subscription period,";
        warningBlock();
        } }
    ajax.open("POST", "php/mealInperiodDiet.php", true);
    ajax.send(formdata);

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