

var i = 0; var j;

var myjson;
var userName = document.getElementById("SubscriptionFormUserName");
var mobilePhone = document.getElementById("SubscriptionFormMobilePhone");
var subscriptionPeriod = document.getElementById("SubscriptionFormPeriod");
var subscriptionType = document.getElementById("SubscriptionType");

var password = document.getElementById("SubscriptionFormPass");

//  var profilePicture=document.getElementById("profilePicture").value;
function subRoleRest() {
   document.getElementById("invalid").innerText ="";
   var mobileleng = false, userExist = false;
   document.getElementById("invalid_userDiv").style.display = "none";
   document.getElementById("mobile_invalidDiv").style.display = "none";
   document.getElementById("invalid_log_label").style.display = "none";

   //to check if there is field is empty
   if (userName.value.length == 0 || password.value.length == 0 || mobilePhone.value.length == 0 || subscriptionPeriod.value.length == 0 ||
      subscriptionType.value.length == 0  /*||profilePicture.length == 0*/) {//if input text field is empty
         document.getElementById("invalid_Div").style.display = "block";
         document.getElementById("invalid").innerText =
         "please make sure to enter all fields and try again";
     
   } else {
      //check each input roles
      var formdata = new FormData();
      formdata.append("userName", userName.value);
      formdata.append("password", password.value);

      if (window.XMLHttpRequest) {//start ajax code
         ajax = new XMLHttpRequest();
      } else {
         ajax = new ActiveXObject("Microsoft.XMLHTTP");
      }

      ajax.onreadystatechange = function () {

         if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);

            if (this.responseText == "user exist") { userExist = true; }
            else {
               document.getElementById("invalid_userDiv").style.display = "block";
               document.getElementById("invalid_user").innerText =
                  "invalid,  user name dosent exirt or password is incorrect";;
            }
            if (mobilePhone.value.length == 10) {
               mobileleng = true;
            }

            if (mobileleng != true) {
               document.getElementById("mobile_invalidDiv").style.display = "block";
               document.getElementById("mobile_invalid").innerText =
                  "invalid,  mobile phone must contain 10 number";

            }
            alert(mobileleng + ' ' + userExist);
            if (mobileleng == true && userExist == true) {
               warningBlock(); alert(mobileleng + "  " + userExist);
            }
         }

      }

      ajax.open("POST", "php/sub_form_serExist.php", true);
      ajax.send(formdata);


   }

}
function SubscriptionForm() {//send data to php(sql)
   var formdata = new FormData();
   formdata.append("userName", userName.value);
   formdata.append("password", password.value);
   formdata.append("mobilePhone", mobilePhone.value);
   formdata.append("subscriptionPeriod", subscriptionPeriod.value);
   formdata.append("subscriptionType", subscriptionType.value);



   if (window.XMLHttpRequest) {//start ajax code
      ajax = new XMLHttpRequest();
   } else {
      ajax = new ActiveXObject("Microsoft.XMLHTTP");
   }

   ajax.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {
         alert(this.responseText);

         if (this.responseText != "there is aproblem  in this process")//to give feedback from php that sign is 100% true
         {//to sure that data received not null
            document.getElementById("text_warning").innerText = "done";
            warningBlock();
         }
         else {
            document.getElementById("text_warning").innerText = "there is aproblem  in this process";
            warningBlock();
         }

      }
      else {
         alert("hhhh");//log in incorrect
         document.getElementById("text_warning").innerText = "there is aproblem  in this process please try again";
         warningBlock();
      }
   }

   ajax.open("POST", "php/SubscriptionForm.php", true);
   ajax.send(formdata);

}


   


function warningBlock() {

   var x = document.getElementById('warning-block');
   var y = document.getElementById('Hide_body');
   var z = document.getElementById('header_display');

   if (x.style.display === 'none') {
      x.style.display = 'block';
      y.style.display = 'block';
      z.style.backgroundColor = 'rgba(0, 0, 0, 0.78)';
   }

   else {
      x.style.display = 'none';
      y.style.display = 'none';
      z.style.backgroundColor = 'white';

   }
}