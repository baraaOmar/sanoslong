foodMnu();var id;
function foodMnu(){
    var i=0;
    var html;var id0=0;var id1=0;
    var myjson;
    if (window.XMLHttpRequest) {//start ajax code
      ajax = new XMLHttpRequest();
    } else {
      ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
    }
  
    ajax.onreadystatechange = function () {
      alert(this.status);
      //alert("ar");  alert(this.readyState);
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        myjson = JSON.parse(this.responseText); var IdPOP="'myPopup"+id0+"'";
      //alert(myjson[0].job_position);
      var db="myPopup"+id0;
        while(myjson[i].name!=null) { alert("hi");
      // remove(myjson[i].meal_id);
          html = '<div class="col-sm-4 col-xs-11 col-md-3 col-lg-3 col-xl-2"style="margin-right:70px;"> <div class="product-item"> <div class="maincontainer"> <div class="thecard"> <div class="thefront "><img src="'+myjson[i].img+'" alt="Image" class="img-fluid"style="height:200px ;"> </div> <div class="back"> <h6 class="font-weight-bold h5" style="color: black">Ingredients</h6><p  style="color: black"><i class="fas fa-apple-alt" style="color: darkgreen;font-weight: 900;"></i>'+myjson[i].ingredients+'</p> <h6 class="font-weight-bold h5" style="color: black">calory</h6>  <p  style="color: black"><i class="fas fa-apple-alt" style="color: darkgreen;font-weight: 900;"></i>'+ myjson[i].calori+'</p> </div> </div>  <div class="px-4">  <h3><a href="#">'+myjson[i].name+'</a></h3>  <div class="mb-3" style="display: inline-flex"><span class="meta-icons mr-3"><a href="#" class="mr-2"><span class="icon-star text-warning" ></span></a> '+myjson[i].star+'</span>  <span class="meta-icons wishlist"><a href="#" class="mr-2"><span class="icon-heart" ></span></a> '+myjson[i].love+'</span> </div> <p class="mb-4">'+myjson[i].price+'</p>   <div style="display: inline-flex"> <a addToCartFoodMenue('+myjson[i].name,myjson[i].calori,myjson[i].value,id,myjson[i].price+')  class="btn btn-black mr-1 rounded-0">Cart</a> <a href="#" class="btn btn-black btn-outline-black ml-1 rounded-0">Extra</a> </div></div>  </div> </div> </div>'  
         html1 = ' <div class="col-sm-4 col-xs-11 col-md-3 col-lg-3 col-xl-2"style="margin-right:70px;">    <div class="product-item">      <div class="maincontainer">  <div class="thecard">           <div class="thefront ">     <img src="'+myjson[i].img+'" alt="Image" class="img-fluid"style="height:200px ;">      </div>     <div class="back">       <h6 class="font-weight-bold h5" style="color: black">Ingredients</h6>           <p  style="color: black"><i class="fas fa-apple-alt" style="color: darkgreen;font-weight: 900;"></i> '+myjson[i].ingredients+'</p>            <h6 class="font-weight-bold h5" style="color: black">calory</h6>                    <p  style="color: black"><i class="fas fa-apple-alt" style="color: darkgreen;font-weight: 900;"></i> '+ myjson[i].calori+'</p>                        </div>                  </div>       <div class="px-4">          <h3><a href="#">'+myjson[i].name+'</a></h3>         <div class="mb-3" style="display: inline-flex">             <span class="meta-icons mr-3"><a href="#" class="mr-2"><span class="icon-star text-warning" title="4"></span></a> '+myjson[i].star+'</span>        <span class="meta-icons wishlist"><a href="#" class="mr-2"><span class="icon-heart" title="4"></span></a> '+myjson[i].love+'</span>     </div>      <p class="mb-4">'+myjson[i].price+'</p>            <div style="display: inline-flex">. <a href="#" onclick="addToCartFoodMenue('+ myjson[i].name + ','+myjson[i].calori+ ','+myjson[i].value+ ','+myjson[i].price+ ','+myjson[i].img+',\''+db+ '\')" class="btn btn-black mr-1 rounded-0">Cart33</a>   <div class="popup"> <p> <button data-toggle="collapse" data-target="#demo" class="btn btn-black btn-outline-black ml-1 rounded-0" id=""  onclick="myFunction('+IdPOP+','+myjson[i].meal_id+')">Extra</button></p>      <div class="popuptext" id="myPopup'+id0+'" style="min-width: 230px;position: fixed;             bottom: 0%;   height: 300px;   left: 40%;background-color: black;">      </div>       </div>      </div>         </div>       </div>  </div></div>';
      //   html2 = "<div class=col-sm-4 col-xs-11 col-md-3 col-lg-3 col-xl-2 style=margin-right:70px;>    <div class=product-item>      <div class=maincontainer>  <div class=thecard>           <div class=thefront >     <img src="+myjson[i].img+" alt=Image class=img-fluid style=height:200px ;>      </div>     <div class=back>       <h6 class=font-weight-bold h5 style=color: black>Ingredients</h6>           <p  style=color: black><i class=fas fa-apple-alt style=color: darkgreen;font-weight: 900;></i> "+myjson[i].ingredients+"</p>            <h6 class=font-weight-bold h5 style=color: black>calory</h6>                    <p  style=color: black><i class=fas fa-apple-alt style=color: darkgreen;font-weight: 900;></i> "+ myjson[i].calori+"</p>                        </div>                  </div>       <div class=px-4>          <h3><a >"+myjson[i].name+"</a></h3>         <div class=mb-3 style=display: inline-flex>             <span class=meta-icons mr-3><a href=# class=mr-2><span class=icon-star text-warning title=4></span></a> "+myjson[i].star+"</span>        <span class=meta-icons wishlist><a  class=mr-2><span class=icon-heart title=4></span></a> "+myjson[i].love+"</span>     </div>      <p class=mb-4>"+myjson[i].price+"</p>            <div style=display: inline-flex>. <a  onclick=addToCartFoodMenue("+myjson[i].name+","+myjson[i].calori+","+myjson[i].value+","+myjson[i].price+","+db+") class=btn btn-black mr-1 rounded-0>Cart33</a>   <div class=popup> <p> <button data-toggle=collapse data-target=#demo class=btn btn-black btn-outline-black ml-1 rounded-0 onclick=myFunction(+IdPOP+','+myjson[i].meal_id+)>Extra</button></p>      <div class=popuptext id="+myPopup+""+id0+" style=min-width: 230px;position: fixed;             bottom: 0%;   height: 300px;   left: 40%;background-color: black;>      </div>       </div>      </div>         </div>       </div>  </div></div>";
       
       //   <a href="#" onclick="addToCartFoodMenue('+myjson[i].name,myjson[i].calori,myjson[i].value,id,myjson[i].price+')" class="btn btn-black mr-1 rounded-0">Cart33</a>    <div class="popup"> <p> <button data-toggle="collapse" data-target="#demo" class="btn btn-black btn-outline-black ml-1 rounded-0"  onclick="myFunction()">Extra</button></p>      <div class="popuptext" id="myPopup"'+id0+'"" style="min-width: 230px;position: fixed;             bottom: 0%;   height: 300px;   left: 40%;background-color: black;">      </div>       </div>      </div>         </div>       </div>  </div> 
      // <div style="display: inline-flex">      <button>fge</button>     </div>
          document.getElementById("foodMnuDiv").innerHTML += html1;
         i++; 
         getExtra("myPopup"+id0+"");id0++;
      }
      }//col-md-6 col-lg-4 mb-5 mb-lg-0
    }
    ajax.open("GET", "../php/foodMenu.php", true);
    ajax.send();
    
    }
 function remove( num){
  var number=num.toString();
 var i=9;alert(num);
while(i>8 && i<=number.length)
 { id+=number.charAt(i);i++;
 
 alert(number.charAt(i));
}
} baraTest();
function baraTest(){
  //divTest
  var x="hello";
  $('#divTest').append('<button onclick="testFunction(\''+ x + '\')">aa</button>'); 
  }
  function testFunction(b){
  alert(b);
  }
 /*
var myjson;
if (window.XMLHttpRequest) {//start ajax code
  ajax = new XMLHttpRequest();
} else {
  ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
}
var formDate=new formDate();
formDate.append(res);
ajax.onreadystatechange = function () {

  //alert("ar");  alert(this.readyState);
  if (this.readyState == 4 && this.status == 200) {
    alert(this.responseText);
  
  //alert(myjson[0].job_position);
   
  }//col-md-6 col-lg-4 mb-5 mb-lg-0
}
ajax.open("GET", "php/foodMenu.php?q=", true);
ajax.send();

*/
function editDiv(){
  var x=document.getElementById('editDiv');
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
function getExtra(idDAD){
  var myjson; var i=0;var extra;
if (window.XMLHttpRequest) {//start ajax code
  ajax = new XMLHttpRequest();
} else {
  ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
}var IdPOP=0;
//var formDate=new formDate();
//formDate.append(res);id=0;
ajax.onreadystatechange = function () {

  //alert("ar");  alert(this.readyState);
  if (this.readyState == 4 && this.status == 200) {
    alert(this.responseText);
    if(this.responseText!="no extra"){
    myjson = JSON.parse(this.responseText);
  alert(myjson[0].extra);extra=myjson[i].extra;
   while(true){ IdPOP="'materialChecked"+i+"'";
    html='<input style="margin: 4px;" onclick="functionExtra('+IdPOP+','+extra+')" type="checkbox" class="form-check-input"  id="materialChecked'+i+'"  checked> <label style="margin-left: 25px;" class="form-check-label" value="'+extra+'" for="materialChecked'+i+'">'+extra+'</label>  <br>';
    document.getElementById(""+idDAD+"").innerHTML += html;
    i++;
   }
   ;
   
   
  }
alert("no extra");
}//col-md-6 col-lg-4 mb-5 mb-lg-0
}
ajax.open("GET", "php/extraMnu.php?q=", true);
ajax.send();
}
function functionExtra(idDad,extra,mealId) {
  
}