subRestNowRestMnu();
function subRestNowRestMnu() {
    var i = 0;
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
            if(this.responseText!="0@#$%^&*()_+="){
            myjson = JSON.parse(this.responseText);
            //alert(myjson[0].job_position);
            while (myjson[i].calori != null) {
                html = ' <div class="col-sm-4 col-xs-11 col-md-3 col-lg-3 col-xl-2"style="margin-right:70px;"> <div class="product-item"> <div class="maincontainer"> <div class="thecard"> <div class="thefront "> <img src="images/burger.jpg" alt="Image" class="img-fluid"style="height:250px ;">  </div> <div class="back"> <h6 class="font-weight-bold h5" style="color: black">Ingredients</h6> <p  style="color: black"><i class="fas fa-apple-alt" style="color: darkgreen;font-weight: 900;"></i> '+myjson[i].ingrediants+'</p>   <h6 class="font-weight-bold h5" style="color: black">calory</h6>  <p  style="color: black"><i class="fas fa-apple-alt" style="color: darkgreen;font-weight: 900;"></i> '+myjson[i].calori+'</p>   </div> </div> <div class="px-4"><h3><a href="#">'+myjson[i].name+'</a></h3><div class="mb-3" style="display: inline-flex"><span class="meta-icons mr-3"><a href="#" class="mr-2"><span class="icon-star text-warning"></span></a>'+myjson[i].star+'</span><span class="meta-icons wishlist"><a href="#" class="mr-2"><span class="icon-heart"></span></a>'+myjson[i].love+'</span> </div><p class="mb-4">'+myjson[i].price+'</p><div style="display: inline-flex"><button style="background-color: transparent;border: none;color: darkorange"data-toggle="tooltip" data-placement="top" title="breakFast"><i class="fas fa-apple-alt"></i></button> <button style="background-color: transparent;border: none;color: dodgerblue"data-toggle="tooltip" data-placement="top" title="snack 1"><i class="fas fa-apple-alt"></i></button><button style="background-color: transparent;border: none;color: lightgreen"data-toggle="tooltip" data-placement="top" title="lunch"><i class="fas fa-apple-alt"></i></button> <button style="background-color: transparent;border: none;color: olive"data-toggle="tooltip" data-placement="top" title="snack 2"><i class="fas fa-apple-alt"></i></button> <button style="background-color: transparent;border: none;color: darkgoldenrod"><i class="fas fa-apple-alt"data-toggle="tooltip" data-placement="top" title="dinner"></i></button> </div> <div style="display: inline-flex"> <a href="#" class="btn btn-black mr-1 rounded-0">Cart</a><a href="#" class="btn btn-black btn-outline-black ml-1 rounded-0">View</a> </div> </div></div></div></div>';

                document.getElementById("subRestNowRestMnu").innerHTML += html;
                i++;

            }
        }}//col-md-6 col-lg-4 mb-5 mb-lg-0
    }
    ajax.open("GET", "php/sub-rest-now.php", true);
    ajax.send();

}
