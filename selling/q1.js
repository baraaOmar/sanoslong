weight();
function weight(){var i=0;
    var id=document.getElementById("table");
    var myjson;
    if (window.XMLHttpRequest) {//start ajax code
      ajax = new XMLHttpRequest();
    } else {
      ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
    }
   
    ajax.onreadystatechange = function () {
   
     
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        if(this.responseText!="no data"){
        myjson = JSON.parse(this.responseText);
     
        while(true) {
          id.innerHTML+='<tr> <td>'+myjson[i].id+'</td><td>'+myjson[i].name+'</td><td>'+myjson[i].Qt+'</td></tr>'
         i++;
    
      }}
      }
    }
    ajax.open("GET", "q1.php", true);
    ajax.send();
    
    }