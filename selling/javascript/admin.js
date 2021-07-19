getSubscripers();
showfood();
var tempObj;
var boolNam=false;
var booladd=false;
var booldate=false;
function getSubscripers(){
  var i=0; var j=0;
  var counter=0; 
  var a;var b; var c; var d;var e;
  var temp="";
var xmlhttp = new XMLHttpRequest();
  var myjson;
xmlhttp.onreadystatechange = function () {

 // var html=' <tr><th scope="row"><input type="radio" name="subscription">1</th><td>Mark  </td><td>Otto</td><td>@mdo</td></tr>'
  //alert(ar);

  if (this.readyState == 4 && this.status == 200) {
	  myjson=JSON.parse(this.responseText);
	 
    while(myjson[i].name!=null){
      tempObj = myjson;
	 // alert(myjson[i].name);
       
        
if(myjson[i].approved==0)//here i have aproblem on show period
         document.getElementById("subscripers").innerHTML+='<tr><th scope="row"><input onclick="showDietForSubPeriod7DayDef('+i+')" type="radio" name="subscription">'+i+'</th><td>'+myjson[i].name+'</td><td>'+myjson[i].date+'</td><td>'+myjson[i].time+'</td><td>'+myjson[i].period+'</td>  <td><button onclick="getapproved('+i+')" style="border: none"><i style="color: red" class="fas fa-times"></i></button></td> </tr>'
             
			 if(myjson[i].approved==1)
        document.getElementById("subscripers").innerHTML+='<tr><th scope="row"><input onclick="showDietForSubPeriod7DayDef('+i+')" type="radio" name="subscription">'+i+'</th><td>'+myjson[i].name+'</td><td>'+myjson[i].date+'</td><td>'+myjson[i].time+'</td><td>'+myjson[i].period+'</td>  <td><button  style="border: none"><i  class="fas fa-check-circle"></i></button></td> </tr>'

      i++;
       
    }
  
  }}
  xmlhttp.open("GET", "php/admin.php?q=" , true);
 xmlhttp.send();
}
var Uname;var Udate; var Utime,Uperiod,Udate;
function getapproved(x){//i didnt use it because that change the icon for approved when it update 
    var formdata = new FormData();
   
formdata.append("name",''+tempObj[x].name);

formdata.append("date",''+tempObj[x].date);

formdata.append("time",''+tempObj[x].time); 
formdata.append("period",''+tempObj[x].period);
var xmlhttp = new XMLHttpRequest();
alert(tempObj[x].name+tempObj[x].date+tempObj[x].time+tempObj[x].period);
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("subscripers").innerHTML+='<tr><th scope="row"><input onclick="getShow('+i+')" type="radio" name="subscription">'+i+'</th><td>'+myjson[i].name+'</td><td>'+myjson[i].date+'</td><td>'+myjson[i].time+'</td><td>'+myjson[i].period+'</td>  <td><button  style="border: none"><i  class="fas fa-check-circle"></i></button></td> </tr>'

       
       alert(this.responseText);
  }
  
  }
  xmlhttp.open("POST", "php/req.php" , true);
 xmlhttp.send(formdata);

  }
var Ud;
  function showDietForSubPeriod7DayDef(x){//show diet for selected period sup and give 7 day by default
     var div=document.getElementById("dietDetail");
    if(div.style.display=="none"){div.style.display="block";}else{
      div.style.display="none";
    }
    var dates=document.querySelector("#start");
   var date_start= dates.nodeValue;
  
    var formdata = new FormData();
   boolNam=true;
formdata.append("name",tempObj[x].name);Uname=tempObj[x].name;
Ud=tempObj[x].date;Ud=tempObj[x].date;
formdata.append("date",tempObj[x].date);Utime=tempObj[x].time;
formdata.append("time",tempObj[x].time);Uperiod=tempObj[x].period;
formdata.append("period",tempObj[x].period);
//formdata.append("date_start",tempObj[x].date_start);
var xmlhttp = new XMLHttpRequest(); var myjson;var i=0;var j=0;var html;
var table=document.getElementById("diet_table");
//if(table.hasChildNodes)table.remove();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
alert(Uname); alert(this.responseText);
       myjson=JSON.parse(this.responseText);
      
       while(myjson[i][j]["name"]!=null)
       { //add to table alert(myjson[i][j]["name"]);
      
     
{table.innerHTML+=' <tr><th scope="row">'+myjson[i][0]["date"]+'</th><td >'+myjson[i][0]["name"]+'</td><td>'+myjson[i][1]["name"]+'</td><td>'+myjson[i][2]["name"]+'</td><td>'+myjson[i][3]["name"]+'</td><td>'+myjson[i][4]["name"]+'</td></tr>'
  }
i++;
       }
  }
  
  }
  xmlhttp.open("POST", "php/diet.php" , true);
 xmlhttp.send(formdata);

  }
function DietDate(){//get the value of calender foe add iet to user in this date
  booldate=true;
  Udate=document.getElementById("dateDietAdd").value;
}
function showfood(){
  if (window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  } else {
    ajax = new ActiveXObject("Microsoft.XMLHTTP");
  }
  var i=0;var myobj;var jsn; var arr;
  var Snack1= document.querySelector("#Sn");
  var dinner= document.querySelector("#Dinner");
  Snack2= document.getElementById("Snack2");
  var lunch=document.getElementById("Lunch");
  ajax.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

      myjson = JSON.parse(this.responseText);
var str;
      while(myjson[i].name!=null) {//to show all food
str=myjson[i].name+" "+myjson[i].calory; 
//myobj={"name":myjson[i].name,"calory":myjson[i].calory};

 //jsn=JSON.parse(myobj);
strv=myjson[i].name+myjson[i].calory;
      document.getElementById("Break_fast").innerHTML+='<option value='+strv+'>'+str+'</option>';
      Snack1.innerHTML+='<option value='+strv+'>'+str+'</option>';
      dinner.innerHTML+='<option value='+strv+'>'+str+'</option>';
     Snack2.innerHTML+='<option value='+strv+'>'+str+'</option>';
     lunch .innerHTML+='<option value='+strv+'>'+str+'</option>';
               i++;
      }

    }

  }
  ajax.open("GET", "php/addDietMeal.php?q=", true);
  ajax.send();

}
function add(){//show the div in admin portal
  var a=document.getElementById("add_dietForm");
  booladd=true; 
  if(a.style.display=="none")
  
  {document.getElementById("add_dietForm").style.display="block";

  }else {document.getElementById("add_dietForm").style.display="none";
}
}
function get ( idElm){//add food to database to specific type of meal from select option before we must select username 
 
if(boolNam===false ||booladd===false||booldate===false){alert("make sure that you choose user, date");}
else{
  var formdata = new FormData();
  var e = document.getElementById(idElm);
  var  output = e.value; alert(e.value);
 formdata.append("foocal",''+e.value);
 formdata.append("Uname",''+Uname);
 formdata.append("Udate",''+Udate);
 formdata.append("type",''+idElm); 
 alert(e.value+Uname+Udate+idElm);
document.getElementById("selected").innerHTML+=" <option value=>"+output +"</option>";
  
  if (window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  } else {
    ajax = new ActiveXObject("Microsoft.XMLHTTP");
  }ajax.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
//Udate='1/2/2044';
 
//document.getElementById("dateDietAdd").nodeValue
     // myjson = JSON.parse(this.responseText);

alert(this.responseText);
    }}
    ajax.open("POST", "php/addFood.php", true);//to ensure the type of meal
    ajax.send(formdata);
  }
} 
    

function dietsh(){//show diet when user select specific date from calender in show diet prog
  var dates=document.getElementById("start");
   var date_start= dates.value;
  
    var formdata = new FormData();
   boolNam=true;
formdata.append("name",''+Uname);
//Udate=tempObj[x].date;
formdata.append("date",''+date_start);
formdata.append("start",''+Ud);
formdata.append("time",''+Utime);
formdata.append("period",Uperiod);

var xmlhttp = new XMLHttpRequest(); 
var myjson;var i=0;var html;var j=0;
var table=document.getElementById("diet_table");
//if(table.hasChildNodes)table.remove();
if (window.XMLHttpRequest) {
  ajax = new XMLHttpRequest();alert("2");
} else {
  ajax = new ActiveXObject("Microsoft.XMLHTTP");
}
ajax.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    alert(this.responseText);
       myjson=JSON.parse(this.responseText);
      
       while(myjson[i][j]["name"]!=null)
       { //add to table alert(myjson[i][j]["name"]);
     
{table.innerHTML+=' <tr><th scope="row">'+myjson[i][0]["date"]+'</th><td >'+myjson[i][0]["name"]+'</td><td>'+myjson[i][1]["name"]+'</td><td>'+myjson[i][2]["name"]+'</td><td>'+myjson[i][3]["name"]+'</td><td>'+myjson[i][4]["name"]+'</td></tr>'
  }
i++;
       }
  }
}
ajax.open("POST", "php/newDateDiet.php", true);
  ajax.send(formdata);
}
 /*
function createsubscriper( ){
var html;
html+= '<tr><th scope="row"><input onclick="createsubscriper(document.getElementById(subscripers).c)" type="radio" name="subscription">1</th><td><input type="text"></td> <td><input type="text"></td> <td><input type="text"></td> <td><button  style="border: none" ><i  class="fas fa-check-circle"></i></button></td></tr>';
} */
/*
function get(){
  accept user as subscriper
   var tabela =document.getElementById('subscripers');
for(i=0;i<tabela.rows.length;i++){//tabela.rows[i].cells.length
  for(j=0;j<tabela.rows[i].cells.length;j++){
tabela.rows[i].cells[j].onclick=function(){
this.parentElement.rowIndex  #subscripers > tr:nth-child(1)
  console.log(this.parentElement.rowIndex);
  console.log(document.getElementById('subscripers').querySelector('#subscripers > tr:nth-child('+this.parentElement.rowIndex+')').textContent);
 var res=document.getElementById('subscripers').querySelector('#subscripers > tr:nth-child('+this.parentElement.rowIndex+')').textContent;
alert(res);
}}}}
}}}
//how can i get separate cells
//ajax code to send to php

 
        //Ajax 
      
        if (window.XMLHttpRequest) {
          ajax = new XMLHttpRequest();

      } else {
          ajax = new ActiveXObject("Microsoft.XMLHTTP");
      }

     
       
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {

  if (this.readyState == 4 && this.status == 200) {
    alert("done");
  }
         
  
}

ajax.open("GET", "php/admin.php?result="+"res");
ajax.send();




  } 
  /*
  function showDetail(){//fill weight and diet  table 
    var tabela =document.getElementById('subscripers');
    for(i=0;i<tabela.rows.length;i++){//tabela.rows[i].cells.length
      for(j=0;j<1;j++){
    tabela.rows[i].cells[j].onclick=function(){
     //here i get all data from row 
      console.log(this.parentElement.rowIndex);
      console.log(document.getElementById('subscripers').querySelector('#subscripers > tr:nth-child('+this.parentElement.rowIndex+')').textContent);
      var res=document.getElementById('subscripers').querySelector('#subscripers > tr:nth-child('+this.parentElement.rowIndex+')').textContent;
    alert(res);
    //how can i get separate cells
    //ajax code to send to php
    if(!res){
      swal("Attention !", "Please fill in all fields", "error");
    }else {
            //Ajax 
    if (window.XMLHttpRequest) {
                  ajax = new XMLHttpRequest();
      
              } else {
                  ajax = new ActiveXObject("Microsoft.XMLHTTP");
              }
             
      
              ajax.open("GET", "php/admin.php?result="+res);
              ajax.send(formData);
    }
  }}}


} 
*/

  
