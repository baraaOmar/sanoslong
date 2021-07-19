MealinThisPeriod();
function MealinThisPeriod() {
    var i = 0;
    var html;
    var myjson;
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
 
    var order = document.querySelector("#resturantCustomerOrders > tbody:nth-child(1)");
  //  #resturantCustomerOrders > tbody:nth-child(1)
    ajax.onreadystatechange = function () {

        //alert("ar");  alert(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            if (this.responseText != "no orders") {
             
              myjson = JSON.parse(this.responseText);
              var total=  (myjson[i].price*myjson[i].amount)-(myjson[i].price*myjson[i].amount*myjson[i].value);
              alert(total);
                //alert(myjson[0].job_position);
                while (true) {
               if(i%2==0)  {    var html='<tr style="border: solid thin;background-color: rgba(0, 0, 0, 0.04)"> <td >'+myjson[i].user_name+'</td>  <td >'+myjson[i].date+'</td>     <td >'+myjson[i].time+'</td>      <td >'+myjson[i].name+'</td>        <td >'+myjson[i].amount+'</td>       <td >'+myjson[i].value+'</td>       <td >'+myjson[i].price+'</td>  <td >'+total+'</td>    <td > '+myjson[i].extra+'</td>      <td> <i class="fas fa-map-marker-alt" title='+myjson[i].location+'></i></td>    <td style="padding-top: 10px;padding-bottom: 10px;"> <a href="#" class="btn btn-black mr-1 rounded-0" >'+myjson[i].isReady+'</a> </td> </tr>';
                   }else{
                    html='<tr style="border: solid thin;background-color: white"> <td >'+myjson[i].user_name+'</td> <td >'+myjson[i].date+'</td>     <td >'+myjson[i].time+'</td>      <td >'+myjson[i].name+'</td>        <td >'+myjson[i].amount+'</td>       <td >'+myjson[i].value+'</td>       <td >'+myjson[i].price+'</td>  <td >'+total+'</td>    <td > '+myjson[i].extra+'</td>      <td> <i class="fas fa-map-marker-alt" title='+myjson[i].location+'></i></td>    <td style="padding-top: 10px;padding-bottom: 10px;"> <a href="#" class="btn btn-black mr-1 rounded-0" >'+myjson[i].isReady+'</a> </td> </tr>';
                  
                   }
                     alert(html);  document.querySelector("#resturantCustomerOrders > tbody:nth-child(1)").innerHTML+=html;
                   i++;
                    
                }
            }else{
              document.getElementById("text_warning").innerText="no orders";
            }
        }//col-md-6 col-lg-4 mb-5 mb-lg-0
    }
    ajax.open("POST", "php/CustomerOrders.php", true);
    ajax.send();

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