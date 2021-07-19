function logIn(){
      var i=0; var j;
     
   var myjson;
     var userName=document.getElementById("UserName").value;
     var password=document.getElementById("password").value;
   
   //  userName=document.getElementById("UserName");
   //  password=document.getElementById("password");
     console.log(userName.length +""+password);
   
     if(userName.length == 0 || password.length == 0){//if input text field is empty
      document.getElementById("invalid_log_label").style.display="block";
      document.getElementById("invalid_log_label").innerText=" please make sure to enter all fields and try again";
     
     }else{
      var formdata = new FormData();
      formdata.append("userName",userName);
       formdata.append("password",password);
    if (window.XMLHttpRequest) {//start ajax code
       ajax = new XMLHttpRequest();
     } else {
       ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
     }
    
     ajax.onreadystatechange = function () {
    
       if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
        
         if(this.responseText!="0@#$%^&*()_+=")
          {//to sure that data received not null
            myjson = JSON.parse(this.responseText);
       
            alert("gg");
             userName = document.getElementById("UserName").value;
             userName = document.getElementById("password").value;
             document.getElementById("invalid_log_label").style.display="block";
             document.getElementById("invalid_log_label").innerText="valid log";
     
         }
   else
   { alert("hhhh");//log in incorrect
   document.getElementById("invalid_log_label").style.display="block";
       document.getElementById("invalid_log_label").innerText="user name or password incorrect please try again";
   }
      
  
  }
   
     }
    
     ajax.open("POST", "php/log_in_new.php", true);
     ajax.send(formdata);}
   
   }