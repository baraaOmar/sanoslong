var stepOne = false;
var userName;
var email;
/*function forgetPassword() {

    var i = 0; var j;
    var userN = false, firstN = false, emailU = false, lastN = false, passleng = false, passsympol = false, passnum = false, passcharU = false, passcharL = false;
    var myjson;
    var newPasswordForgetPass = document.getElementById("newPasswordForgetPass").value;
    var confirmPasswordForgetPass = document.getElementById("confirmPasswordForgetPass").value;
    var varificationCodeForgetPass = document.getElementById("varificationCodeForgetPass").value;

    // alert(userName + " " + firstName + " " + lastName + " " + emailUp + " " + city + " " + street + " " + password + " " + confirmPasswordUp + " ");


    //to check if there is field is empty
    if (userNameForgetPass.length == 0 || confirmPasswordForgetPass.length == 0 || emailForgetPass.length == 0
        || newPasswordForgetPass == 0 || varificationCodeForgetPass.length == 0) {//if input text field is empty
        document.getElementById("invalid_log_label").innerText = " please make sure to enter all fields and try again";

    } else {
        //check each input roles


        //password role
        if (password.length > 8) {
            passleng = true;
            for (var i = 0; i < password.length; i++)
                if ("!@#$%^&*()_-+=?\:;/><.,’><ّ][}{\|}]".includes(lastName.charAt(i))) {
                    passsympol = true;
                }
            if ("0123456789".includes(password.charAt(i))) {
                passnum = true;
            }
            if (password.charAt(i) == password.charAt(i).toUpperCase()) {
                passcharU = true;
            }
            if (password.charAt(i) == password.charAt(i).toLowerCase()) {
                passcharL = true;
            }

        }

        if (passleng == false || passsympol == false || passnum == false || passcharU == false || passcharL == false) {
            document.getElementById("invalid_log_label").innerText =
                "invalid, password must contaiin symbols,number,uper and lower letter";

        }
        else {//send data to php(sql)
            var formdata = new FormData();
            formdata.append("userNameForgetPass", userNameForgetPass);
            formdata.append("confirmPasswordForgetPass", confirmPasswordForgetPass);
            formdata.append("newPasswordForgetPass", newPasswordForgetPass);
            formdata.append("emailForgetPass", emailForgetPass);
            formdata.append("varificationCodeForgetPass", varificationCodeForgetPass);
            if (window.XMLHttpRequest) {//start ajax code
                ajax = new XMLHttpRequest();
            } else {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }

            ajax.onreadystatechange = function () {
                alert(this.readyState);
                if (this.readyState == 4 && this.status == 200) {
                    alert(this.responseText);

                    if (this.responseText != "0@#$%^&*()_+=")//to give feedback from php that sign is 100% true
                    {//to sure that data received not null

                        document.getElementById("invalid_log_label").innerText = "valid log"; alert("yallla");

                    }
                    else {
                        alert("hhhh");//log in incorrect
                        document.getElementById("invalid_log_label").innerText = "user name or password incorrect please try again";
                    }


                }

            }

            ajax.open("POST", "php/SignUp.php", true);
            ajax.send(formdata);
        }
    }

} */
function SendCodeforgetPassword() {
    var userNameForgetPass = document.getElementById("userNameForgetPass").value;
    var emailForgetPass = document.getElementById("emailForgetPass").value;
    var SendCodeforgetPassword = document.getElementById("SendCodeforgetPassword");
    var forgetPassword = document.getElementById("forgetPassword");
    var forgetPasswordP2 = document.getElementById("forgetPasswordP2");

    var i = 0; var j;

    var myjson;

    if (userNameForgetPass.length == 0 || emailForgetPass.length == 0) {//if input text field is empty
        document.getElementById("invalid_forget_label").innerText = " please make sure to enter all fields and try again";

    } else {//if text field not empty check if data is in data base
        var formdata = new FormData();
        formdata.append("userNameForgetPass", userNameForgetPass);
        formdata.append("emailForgetPass", emailForgetPass);
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }

        ajax.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);

                if (this.responseText != "0@#$%^&*()_+=") {//to sure that data received not null
                    myjson = JSON.parse(this.responseText);
//sendEmail();
                    alert("gg");
                    userName = myjson.userNameForgetPass;
                    email = myjson.emailForgetPass;
                    document.getElementById("invalid_forget_label").innerText = " please check your email and enter correct code";

                    if (SendCodeforgetPassword.style.display === 'none') {
                        SendCodeforgetPassword.style.display = 'block';
                        forgetPasswordP2.style.display = 'none';
                        document.getElementById("DivuserNameForgetPass").style.display = 'block';
                        document.getElementById("DivemailForgetPass").style.display = 'block';
                      document.getElementById("DivvarificationCodeForgetPass").style.display = 'none';
                    }
                    else {
                        SendCodeforgetPassword.style.display = 'none';
                        forgetPasswordP2.style.display = 'block';
                        varificationCodeForgetPass.style.display = "block";
                        document.getElementById("DivuserNameForgetPass").style.display = 'none';
                        document.getElementById("DivemailForgetPass").style.display = 'none';
                        document.getElementById("DivvarificationCodeForgetPass").style.display = 'block';
                   
                    }

                }
                else {
                    document.getElementById("invalid_forget_label").innerText = "user name or email incorrect please try again";

                    alert("hhhh");//log in incorrect
                }


            }

        }

        ajax.open("POST", "php/forgetPassPart1.php", true);
        ajax.send(formdata);
    }

}
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<sanuslaungw@gmail.com>",
	Password : "<jamal2676418>",
	To : '<baraaomar740@gmail.com>',
	From : "<sanuslaungw@gmail.com>",
	Subject : "<your Sanuslaung account carification code>",
	Body : "<your varification code is hello Baraa>",
	}).then(
		message => alert("mail sent successfully")
	);
}
function showVarCode(){
    document.getElementById("invalid_forget_label").innerText = "";

    var DivnewPasswordForgetPass=document.getElementById("DivnewPasswordForgetPass");//block
    var DivconfirmPasswordForgetPass=document.getElementById("DivconfirmPasswordForgetPass");//block
      var forgetPasswordP2 = document.getElementById("forgetPasswordP2");//none
      var DivsignPassword=document.getElementById("DivsignPassword");//block
  var DivvarificationCodeForgetPass=document.getElementById("DivvarificationCodeForgetPass");//none
    if(forgetPasswordP2.style.display==="block"){
        forgetPasswordP2.style.display="none";
        DivvarificationCodeForgetPass.style.display="none";
        DivnewPasswordForgetPass.style.display="block";
        DivconfirmPasswordForgetPass.style.display="block";
        DivsignPassword.style.display="block";
    }else{
        forgetPasswordP2.style.display="block";
        DivvarificationCodeForgetPass.style.display="block";
        DivnewPasswordForgetPass.style.display="none";
        DivconfirmPasswordForgetPass.style.display="none";
        DivsignPassword.style.display="none";
    }
}
function signPassword() {
    document.getElementById("invalid_forget_label").innerText = "";

  var  passsympol=false, passnum=false,passcharU=false,passcharL=false,passleng=false,passEqual=false,passEmpty=false;
    var DivnewPasswordForgetPass=document.getElementById("DivnewPasswordForgetPass");//none
    var DivconfirmPasswordForgetPass=document.getElementById("DivconfirmPasswordForgetPass");//none
      var forgetPasswordP2 = document.getElementById("forgetPasswordP2");//block
      var DivsignPassword=document.getElementById("DivsignPassword");//none
  var DivvarificationCodeForgetPass=document.getElementById("DivvarificationCodeForgetPass");//block
  var newPasswordForgetPass=document.getElementById("newPasswordForgetPass");
  var confirmPasswordForgetPass=document.getElementById("confirmPasswordForgetPass");
  
    var i = 0; var j;

    var myjson;

    if (newPasswordForgetPass.length == 0 ||confirmPasswordForgetPass.length == 0) {
        //if input text field is empty
      passEmpty=true;  document.getElementById("invalid_forget_label").innerText = " please make sure to enter all fields and try again";

    }
    else{//check this rule in pass 
    
    if (newPasswordForgetPass.length > 8) {
        passleng = true;
        for (var i = 0; i < newPasswordForgetPass.length; i++)
            if ("!@#$%^&*()_-+=?\:;/><.,’><ّ][}{\|}]".includes(newPasswordForgetPass.charAt(i))) {
                passsympol = true;
            }
        if ("0123456789".includes(newPasswordForgetPass.charAt(i))) {
            passnum = true;
        }
        if (newPasswordForgetPass.charAt(i) == newPasswordForgetPass.charAt(i).toUpperCase()) {
            passcharU = true;
        }
        if (newPasswordForgetPass.charAt(i) ==newPasswordForgetPass.charAt(i).toLowerCase()) {
            passcharL = true;
        }
        if (newPasswordForgetPass.value== confirmPasswordForgetPass.value ) {//if input text field is empty
            passEqual=true; document.getElementById("invalid_forget_label").innerText = " please make sure to that password is correct ";
     
         }
    }
   
  //  if(passnum==true || passsympol==true || passcharL==true || passcharU ==true || passEqual==true ) 
    {

        var formdata = new FormData();
        formdata.append("userName",userName);
        formdata.append("newPasswordForgetPass", newPasswordForgetPass.value);
        if (window.XMLHttpRequest) {//start ajax code
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }

        ajax.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);

                if (this.responseText != "0@#$%^&*()_+=") {//to sure that data received not null
                  

                    alert("gg");
                   
                    document.getElementById("invalid_forget_label").innerText = " your password is changed you can sign in your account";

                }
                else {
                    alert("hhhh");//log in incorrect
                    document.getElementById("invalid_forget_label").innerText = "user name or email incorrect please try again";
                }


            }

        }

        ajax.open("POST", "php/forgetPassChangePass.php", true);
        ajax.send(formdata);
    }

}}
function showSignUpForm(){
    document.getElementById("invalid_forget_label").innerText = "";

var a=document.getElementById("logInForm");
var b=document.getElementById("signUpForm");
var c=document.getElementById("titleDivLogForget");
if(a.style.display=="none"){
    a.style.display="block";
    c.innerText="Log IN";
   b.style.display="none";
}else{
    b.style.display="block";
    a.style.display="none";
    c.innerText="Forget Password";
}

}