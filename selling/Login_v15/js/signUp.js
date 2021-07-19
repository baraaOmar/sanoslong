function SignUp(){
    var i=0; var j;
  var userN=false,firstN=false,passEqual=false ,emailU=false,lastN=false,passleng=false,passsympol=false,passnum=false,passcharU=false,passcharL=false; 
 var myjson;
   var userName=document.getElementById("userNameUp").value;
   var firstName=document.getElementById("firstName").value;
   var lastName=document.getElementById("lastName").value;
   var emailUp=document.getElementById("emailUp").value;
   var city=document.getElementById("city").options[document.getElementById("city").selectedIndex].value;
   var street=document.getElementById("street").value;
   var password=document.getElementById("password").value;
   var confirmPasswordUp=document.getElementById("confirmPasswordUp").value;
 //  var profilePicture=document.getElementById("profilePicture").value;
  alert(userName+" "+firstName+" "+lastName+" "+emailUp+" "+city+" "+street+" "+password+" "+confirmPasswordUp+" ");

   console.log(userName.length +""+password);
 //to check if there is field is empty
   if(userName.length == 0 || password.length == 0 || firstName.length == 0 ||lastName.length == 0 ||emailUp.length == 0 ||
    city.length == 0 ||street.length == 0 ||confirmPasswordUp.length == 0 /*||profilePicture.length == 0*/ ){//if input text field is empty
    document.getElementById("invalid_log_label").innerText=" please make sure to enter all fields and try again";
   
   }else{
//check each input roles

   for(var i = 0; i < userName.length; i++)
   if("!@#$%^&*()_-+=?\:;".includes(userName.charAt(i))){
userN=true;
   }
if(password==confirmPasswordUp){
passEqual=true;
}
   for(var i = 0; i < firstName.length; i++)
   if("!@#$%^&*()_-+=?\:;0123456789".includes(firstName.charAt(i))){
firstN=true;
   }

   for(var i = 0; i < lastName.length; i++)
   if("!@#$%^&*()_-+=?\:;0123456789".includes(lastName.charAt(i))){
lastN=true;
   }

   //password role
   if(password.length>8){
passleng=true;
for(var i = 0; i < password.length; i++)
if("!@#$%^&*()_-+=?\:;/><.,’><ّ][}{\|}]".includes(lastName.charAt(i)) ){
passsympol=true;
}
if("0123456789".includes(password.charAt(i))){
passnum=true;
}
if(password.charAt(i)==password.charAt(i).toUpperCase()){
    passcharU=true;
    }
    if(password.charAt(i)==password.charAt(i).toLowerCase()){
        passcharL=true;
        }

   }
  //email
   for(var i = 0; i < emailUp.length; i++)
   if("@".includes(emailUp.charAt(i))){
userN=true;
   }
  
/*if(userN==false||firstN==false ||emailU==false||lastN==false||passleng==false
   ||passsympol==false||passnum==false||passcharU==false||passcharL==false || passcharL==false ){
      document.getElementById("invalid_log_label").innerText=
      "invalid, user name,first,last name mustnt contain symbols or numbers, password must contaiin symbols,number,uper and lower letter";
   
   }
   else  */{//send data to php(sql)
    var formdata = new FormData();
    formdata.append("userName",userName);
     formdata.append("password",password);
     formdata.append("firstName",firstName);
     formdata.append("lastName",lastName);
     formdata.append("emailUp",emailUp);
     formdata.append("city", city);
     formdata.append("street",street);
     formdata.append("confirmPasswordUp",confirmPasswordUp);
    // formdata.append("profilePicture",profilePicture);
   
  if (window.XMLHttpRequest) {//start ajax code
     ajax = new XMLHttpRequest();
   } else {
     ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
   }
  
   ajax.onreadystatechange = function () {
  alert(this.readyState);
     if (this.readyState == 4 && this.status == 200) {
    alert(this.responseText);
      
       if(this.responseText!="0@#$%^&*()_+=")//to give feedback from php that sign is 100% true
        {//to sure that data received not null
         
           document.getElementById("invalid_log_label").innerText="valid log";alert("yallla");
   
       }
 else
 { alert("hhhh");//log in incorrect
     document.getElementById("invalid_log_label").innerText="user name or password incorrect please try again";
 }
    

}
 
   }
  
   ajax.open("POST", "php/SignUp.php", true);
   ajax.send(formdata);
}}
 
 }