
SettingUser();
function SettingUser(){
    var i = 0;
    var html;
    var myjson;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    ajax.onreadystatechange = function () {
 alert(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            if(this.responseText!="0@#$%^&*()_+="){
            myjson = JSON.parse(this.responseText);
            //alert(myjson[0].job_position);
            while (true) {
         
               if(i%2==0){  html = '<tr style="border: solid thin;background-color: rgba(0, 0, 0, 0.04)"> <td>'+i+' <i class="fas fa-check-circle"></i></td>   <td>'+myjson[i].user_name+'</td>  <td style="padding-left: 8%;"><i class="far fa-calendar-alt" title="'+myjson[i].date_start+'"></i> <i class="far fa-clock" title="'+myjson[i].time_start+'"></i></td>         <td>  <i class="fab fa-whatsapp" title="'+myjson[i].mobile+'"></i> </td> <td><i href="#dailyDietTitleHref" class="fas fa-plus-circle"></i></td> </tr>';
            }else{  html = '<tr style="border: solid thin;background-color: white"> <td>'+i+' <i class="fas fa-check-circle"></i></td>   <td>'+myjson[i].user_name+'</td>  <td style="padding-left: 8%;"><i class="far fa-calendar-alt" title="'+myjson[i].date_start+'"></i> <i class="far fa-clock" title="'+myjson[i].time_start+'"></i></td>         <td>  <i class="fab fa-whatsapp" title="'+myjson[i].mobile+'"></i> </td> <td><i href="#dailyDietTitleHref" class="fas fa-plus-circle"></i></td> </tr>';
        }
              
              


                document.querySelector("#subPeriodDietAddDietMaelAdminPortal> tbody").innerHTML += html;
            
               i++;
            }
        }}//col-md-6 col-lg-4 mb-5 mb-lg-0
    }
    ajax.open("GET", "php/subPeriodDietAddDietMaelAdminPortal.php", true);
    ajax.send();

}
