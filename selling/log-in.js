function demoDisplayRight() {
    var x = document.getElementById('R');
    var y = document.getElementById('L');
    var r=document.getElementById('r-img');
    var l=document.getElementById('l-img');
    if (x.style.display === 'none') {
        y.style.display = 'none';
   /*     l.style.display = 'none';*/
 /*    r.style.display = 'block'; */
      x.style.display = 'block';  
    } else {
      x.style.display = 'none';
     
   /*   r.style.display = 'none';
      l.style.display = 'block'; */
      y.style.display = 'block';
    } }
  function demoDisplayLeft() {
    var x = document.getElementById('R');
    var y = document.getElementById('L');
    var r=document.getElementById('r-img');
    var l=document.getElementById('l-img');
    if (y.style.display === 'none') {
        x.style.display = 'none';  
      /*  r.style.display = 'none'; */
     /*   l.style.display = 'block'; */
        y.style.display = 'block';   
    } else {
      /*   l.style.display = 'none'; */
        y.style.display = 'none';
        x.style.display = 'block';
     /*   r.style.display = 'block'; */
       
    }
  }