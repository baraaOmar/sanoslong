weight();
function weight(){
    var i=0;
    var html;
    var myjson;
    if (window.XMLHttpRequest) {//start ajax code
      ajax = new XMLHttpRequest();
    } else {
      ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
    }
   
    ajax.onreadystatechange = function () {
   
      //alert("ar");  alert(this.readyState);
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        if(this.responseText!="no data"){
        myjson = JSON.parse(this.responseText);
      //alert(myjson[0].job_position);
        while(myjson[i].date!=null) {
          
          html = '<tr style="border: solid thin;background-color: rgba(0, 0, 0, 0.04);"><td>'+i+'</td><td>'+myjson[i].user_name+'</td><td >'+myjson[i].date+'</td><td >'+myjson[i].weight+'</td></tr>';
              document.querySelector("#dietWeight > tbody").innerHTML += html;
      i++;
    
      }}
      }//col-md-6 col-lg-4 mb-5 mb-lg-0
    }
    ajax.open("GET", "php/weightAdmin.php", true);
    ajax.send();
    
    }