foodMnu();
function foodMnu(){
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
        myjson = JSON.parse(this.responseText);
      //alert(myjson[0].job_position);
        while(myjson[i].calori!=null) {
          alert("hhii");
          html = '<div class="col-sm-4 col-xs-11 col-md-3 col-lg-3 col-xl-2"style="margin-right:70px;"> <div class="product-item"> <div class="maincontainer"> <div class="thecard"> <div class="thefront "><img src="'+myjson[i].img+'" alt="Image" class="img-fluid"style="height:200px ;"> </div> <div class="back"> <h6 class="font-weight-bold h5" style="color: black">Ingredients</h6><p  style="color: black"><i class="fas fa-apple-alt" style="color: darkgreen;font-weight: 900;"></i>'+myjson[i].ingredients+'</p> <h6 class="font-weight-bold h5" style="color: black">calory</h6>  <p  style="color: black"><i class="fas fa-apple-alt" style="color: darkgreen;font-weight: 900;"></i>'+ myjson[i].calori+'</p> </div> </div>  <div class="px-4">  <h3><a href="#">'+myjson[i].name+'</a></h3>  <div class="mb-3" style="display: inline-flex"><span class="meta-icons mr-3"><a href="#" class="mr-2"><span class="icon-star text-warning" ></span></a> '+myjson[i].star+'</span>  <span class="meta-icons wishlist"><a href="#" class="mr-2"><span class="icon-heart" ></span></a> '+myjson[i].love+'</span> </div> <p class="mb-4">'+myjson[i].price+'</p> <button style="background-color:transparent;border: none">    <i class="fas fa-trash-alt"></i></button><button  onclick="remove('+myjson[i].meal_id+')" style="background-color:transparent;border: none"> <i class="fas fa-edit"></i></button> <div style="display: inline-flex"> <a href="#" class="btn btn-black mr-1 rounded-0">Cart</a> <a href="#" class="btn btn-black btn-outline-black ml-1 rounded-0">View</a> </div></div>  </div> </div> </div>';
           document.getElementById("ourMenue").innerHTML += html;
      i++;
    
      }
      }//col-md-6 col-lg-4 mb-5 mb-lg-0
    }
    ajax.open("GET", "php/OurMenue.php?q=", true);
    ajax.send();
    
    }
    function remove( num){
      var number=num.toString();
      var res;
      var i=6;
      while(i<number.length())
    {res+=""+number.charAt(i);}
     
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
    
    }
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

    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }