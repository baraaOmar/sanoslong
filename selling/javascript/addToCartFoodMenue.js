var products;
var val;
var idMeal;

function addToCartFoodMenue(name,calori,value,price,img,idExtraList){
  var table=document.querySelector("#FoodMnuRestCart > tbody:nth-child(1)");
   val=value;var child;var extraRes="";alert(idExtraList);
   idMeal=id;var i=0;
   var leng= document.getElementById(idExtraList).childElementCount;alert(leng);
  for(i=0;i<leng/2-2;i++){
   child=  document.getElementById("materialChecked0");//#materialChecked0 #materialChecked0
   if(child.checked==true){
     extraRes+=child.value;alert(child.value);
   }
   }alert(extraRes);
  var html='<tr style="border: none" > <td > <div style="background-size: cover;display: inline-block;    border-radius: 20%;"><img style="width: 50px;     height: 60px;     border-radius: 10%;" src="+"images/burger.jpg"+" ></div>  <div > <span>"+"name"+"</span> <br>   <span class="icon-heart" style="color: red;" title="3"></span>  <span class="icon-star text-warning" title="4"></span> </div>  </td>  <td ><input type="number" placeholder="1" style="width: 80px;"></td>   <td >"+"value"+"</td>  <td >"+"price"+"</td>  <td >"+"price-price*value"+"</td> <td >'+extraRes+'</td><td style="width: 90px;height: 100px;padding-left: 5%"><i style="font-size: small;color: red;" class="fas fa-minus-circle"></i></td></tr>';
  products=[name,calori,value,price,img];
table.innerHTML+=html;

}
function orderNowFromMnuRest(){
    if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
      } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
      }
      var formdata = new FormData();
      formdata.append("id",idMeal);
      formdata.append("value",val);
     
      
      ajax.onreadystatechange = function () {
     
        //alert("ar");  alert(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
          alert(this.responseText);
         
       
        }//col-md-6 col-lg-4 mb-5 mb-lg-0
      }
      ajax.open("POST", "php/addToCartFoodMenue.php", true);
      ajax.send(formdata);
      
      }
      function addExtraa(txt,check){
   var dad=document.getElementById("extraaaAdditionMnu");
   
      }