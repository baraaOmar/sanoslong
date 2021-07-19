function addDiet(){
   var a= document.getElementById("mealTypeAddDietAdmin").value
  var b=  document.getElementById("foodTypeAddDietAdmin").value
  varc=  document.getElementById("dateAddDietAdmin").value
    if(document.getElementById("mealTypeAddDietAdmin").value==1){
        document.getElementById("breakFastAddDiet").innerText+=b;
    }
    if(document.getElementById("mealTypeAddDietAdmin").value==2){
        document.getElementById("Snack1AddDiet").innerText+=b;
    }
    if(document.getElementById("mealTypeAddDietAdmin").value==3){
        document.getElementById("dinnerAddDiet").innerText+=b;
    }
    if(document.getElementById("mealTypeAddDietAdmin").value==4){
        document.getElementById("snack2AddDiet").innerText+=b;
    }
    if(document.getElementById("mealTypeAddDietAdmin").value==5){
        document.getElementById("lunchAddDiet").innerText+=b;
    }
    
}