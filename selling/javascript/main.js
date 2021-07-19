feedBack();
function feedBack(){
  // alert();
   var i=0; var j;
 
   var childNum = 0;
 var myjson;
   var res;
   var str;
   var e;
 
  if (window.XMLHttpRequest) {
     ajax = new XMLHttpRequest();
   } else {
     ajax = new ActiveXObject("Microsoft.XMLHTTP");
   }

   ajax.onreadystatechange = function () {
 
     if (this.readyState == 4 && this.status == 200) {

       myjson = JSON.parse(this.responseText);
 
       while(myjson[i].profile_picture!=null) {//to create num of feed block
       
            str = '<div><div class="testimonial"><figure class="mb-4 d-block align-items-center justify-content-center"><div><img src="'+myjson[i].profile_picture+'" alt="Image" class="w-100 img-fluid mb-3"></div></figure><blockquote class="mb-3"><p>'+myjson[i].text+'</p></blockquote><p class="text-black"><strong>'+myjson[i].name+'</strong></p></div></div>';
           document.getElementById('ofb').innerHTML += str;
       i++;
       }
 
     }
 
   }
   ajax.open("GET", "php/feedBack.php?q=", true);
   ajax.send();
 
 }
  Team();
  function Team(){
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
        while(myjson[i].name!=null) {
    
          //   document.querySelector("#team-section > div > div:nth-child(" + 2+ ") > div:nth-child(" + 3 + ") >div> p").innerHTML = ar[2];//position
          //  document.querySelector("#team-section > div > div:nth-child(" + 2 + ") > div:nth-child(" + 3 + ") >div> p").innerHTML = ar[1];//about
          html = '<div class= "col-sm-6 col-md-4  col-lg-3 col-xl-3  co-11 "+ data-aos="fade" data-aos-delay="300"><div class="person text-center" ><div style="background-size: cover;padding-left: 15px;padding-right: 15px;"><img src="' + myjson[i].picture + '" alt="Image" class="rounded img-fluid mb-3 rounded-circle" style="height:170px;border-radius:100% !important;height: 200px;"></div><h3>' + myjson[i].name + '</h3><p class="position text-muted">' + myjson[i].job_position + '</p><p class="mb-4">' + "myjson[i].about" + '</p><ul class="ul-social-circle"><li><a href="#"><span class="icon-facebook"></span></a></li><li><a href="#"><span class="icon-twitter"></span></a></li><li><a href="#"><span class="icon-linkedin"></span></a></li><li><a href="#"><span class="icon-instagram"></span></a></li></ul></div></div>';
        
          document.getElementById("tsec").innerHTML += html;
      i++;
    
      }
      }//col-md-6 col-lg-4 mb-5 mb-lg-0
    }
    ajax.open("GET", "php/getTeamMembers.php?q=", true);
    ajax.send();
    
    }var i=0;
    function changeCssForServices(){
    var ch1=  document.querySelector("body > div > div.our-servic > div:nth-child("+1+")").style.display="none";
    var ch2=   document.querySelector("body > div > div.our-servic > div:nth-child("+2+")").style.display="none";
    var ch3=   document.querySelector("body > div > div.our-servic > div:nth-child("+3+")").style.display="block";
    var ch4=   document.querySelector("body > div > div.our-servic > div:nth-child("+4+")").style.display="block";
var array=[ch1,ch2,ch3,ch4];
    }
    