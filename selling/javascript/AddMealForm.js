
    
    var i=0; var j;
    var mobileleng=false; 
    var myjson;
      var mealName=document.getElementById("mealNameRest");
      var mealPrice=document.getElementById("mealPriceRest");
      var mealImage=document.getElementById("mealImageRest");
      var mealIngrediant=document.getElementById("mealIngrediantRest");
      var mealCalory=document.getElementById("mealCaloryRest");
     
      var mealType=document.getElementById("mealTypeRest");
     
 
    function AddMealRole(){
     alert("hi");
     alert(mealCalory.value);
    //to check if there is field is empty
      if(mealCalory.value.length == 0 || mealImage.value.length == 0 || mealIngrediant.value.length == 0 ||mealName.value.length == 0 ||
         mealPrice.value.length == 0 || mealType.value.length == 0  ){//if input text field is empty
         document.getElementById("invalid-feedback_addMealForm").style.display="block";
         document.getElementById("invalid-feedback_addMealForm").innerText=" please make sure to enter all fields and try again";
      
      } 
      
      else{
   //check each input roles
   
     
     
   warning_block_resturant_add_meal();
      
      }}
   
   
      function addMealForm()  {//send data to php(sql)
    var formdata = new FormData();
       formdata.append("mealName",mealName.value);
        formdata.append("mealCalory",mealCalory.value);
        formdata.append("mealImage",mealImage.value);
        formdata.append("mealIngrediant",mealIngrediant.value);
        formdata.append("mealType",mealType.value);
        formdata.append("mealPrice",mealPrice.value);
       
      
      
     if (window.XMLHttpRequest) {//start ajax code
        ajax = new XMLHttpRequest();
      } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP"); 
      }
     
      ajax.onreadystatechange = function () {
     
        if (this.readyState == 4 && this.status == 200) {
       alert(this.responseText);
         
          if(this.responseText!="there is aproblem  in this process")//to give feedback from php that sign is 100% true
           {//to sure that data received not null
            document.getElementById("invalid-feedback").innerText="valid log";alert("yallla");
             
   
               var x=document.getElementById('warning');
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
    else
    { alert("hhhh");//log in incorrect
    warning_masseges();
     document.getElementById("text_warning").innerText="there is aproblem  in this process";
    }
   }
   
   
    
      }
     
      ajax.open("POST", "php/AddMealForm.php", true);
      ajax.send(formdata);
   }
    
   
   function warning_block_resturant_add_meal(){

    var x=document.getElementById('warning-block_resturaunt_portal');
    
    if(x.style.display==='none'){
       x.style.display='block';
      
    }
    
    else{
       x.style.display='none';
      
    
    }
 }
 function warning_masseges(){

   var x=document.getElementById('warning');
   
   if(x.style.display==='none'){
      x.style.display='block';
     
   }
   
   else{
      x.style.display='none';
     
   
   }
}