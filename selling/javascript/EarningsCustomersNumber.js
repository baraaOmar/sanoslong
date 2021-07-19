
function Earning() {
    var i = 0;
    var html;
    var myjson;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
 
    var service = document.getElementById("EarningsCustomersNumberService");
    var date_start = document.getElementById("EarningsCustomersNumberDateStart");
    var date_end = document.getElementById("EarningsCustomersNumberDateEnd");
    var result = document.getElementById("EarningsCustomersNumberResult");
    var warning=document.getElementById("text_warning");
    if(date_start.value.length==0||date_end.value.length==0){
        result.innerText="pleaase check that you fill all fields";
    }
     var formdata = new FormData();
    formdata.append("date_start",date_start.value);
    formdata.append("date_end",date_end.value);
  
    ajax.onreadystatechange = function () {

        //alert("ar");  alert(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            if (this.responseText != "0@#$%^&*()_+=") {
             
              myjson = JSON.parse(this.responseText);
             // var total=  (myjson[i].price*myjson[i].amount)-(myjson[i].price*myjson[i].amount*myjson[i].value);
            //  alert(total);
                //alert(myjson[0].job_position);
              
                   alert(myjson[0].result+myjson[0].total); 
                  //  result.innerHTML="  Orders = "+myjson[0].result+" ,  subscription = "+myjson[0].total;
                   warning.innerText="  Orders = "+myjson[0].result+" ,  subscription = "+myjson[0].total;
                   warningBlock();
            }
        }//col-md-6 col-lg-4 mb-5 mb-lg-0
    }
    ajax.open("POST", "php/EarningsCustomersNumber.php", true);
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