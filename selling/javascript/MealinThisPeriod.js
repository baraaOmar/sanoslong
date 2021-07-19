
function MealinThisPeriod() {
    var i = 0, j = 0;
    var html;
    var myjson;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(document.getElementById("date_start").value.length==0 ||
    document.getElementById("date_end").value.length==0 
    ){
        warningBlock();
    }
 var date_start= document.getElementById("date_start").value;
 var date_end= document.getElementById("date_end").value;
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
    formdata.append("date_start", date_start);
    formdata.append("date_end", date_end);
    formdata.append("Difference_In_Day", Difference_In_Days);
    var MealinThisPeriod = document.querySelector("#MealinThisPeriod > tbody");
    ajax.onreadystatechange = function () {

        //alert("ar");  alert(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            if (this.responseText != "0@#$%^&*()_+=") {
                myjson = JSON.parse(this.responseText);
                //alert(myjson[0].job_position);
                while (true) {
                    var html = "<tr style=border: solid thin;background-color:#d3d3d31c;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)> <td >" + myjson[i][0].name + "</td><td >" + myjson[i][1].name + "</td> <td >" + myjson[i][2].name + "</td> <td >" + myjson[i][3].name + "</td> <td>" + myjson[i][4].name + "</td> </tr>";
                    i++; 
                    MealinThisPeriod.innerHTML+=html;
                }
               
            }
        }//col-md-6 col-lg-4 mb-5 mb-lg-0
        if(i<Difference_In_Days){
            document.getElementById("text_warning").innerText=" sub of period  choosed is not in your diet subscription,or not in the same subscription period,meal shown is for last date recorded in this period subscription";
        warningBlock();
        } }
    ajax.open("POST", "php/MealinThisPeriod.php", true);
    ajax.send(formdata);

}
function warningBlock(){

	var x=document.getElementById('warning-block');
	var y = document.getElementById('Hide_body');
	var z = document.getElementById('header_display');
	
	if(x.style.display==='none'){
		x.style.display='block';
		y.style.display='block';
		z.style.backgroundColor='rgba(0, 0, 0, 0.78)';
	}
	
	else{
		x.style.display='none';
		y.style.display='none';
		z.style.backgroundColor='white';
	
	}
} 