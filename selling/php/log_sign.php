<!DOCTYPE html>
<html>

<head>
    <script src="https://kit.fontawesome.com/3502239727.js"></script>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <link rel="stylesheet" href=" https://dribbble.com/shots/7549762-Save-the-Bees-landing-interaction?utm_source=Clipboard_Shot&utm_campaign=ui_migulko&utm_content=Save%20the%20Bees%20landing%20interaction&utm_medium=Social_Share
       "> <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" media="all" href="log-in.css">
    <script type="text/javascript" src="log-in.js"></script>
    <link href="https://fonts.googleapis.com/css?family
          =Arizonia|Artifika|Caveat|Courgette|Great+Vibes|Herr+Von+
          Muellerhoff|Italianno|Kaushan+Script|Niconne|Oleo+Script+Swash+Caps|
          Pacifico|Playball|Qwigley|Satisfy|Seaweed+Script|Sofia|Srisakdi|
          Tangerine&display=swap" rel="stylesheet">
</head>

<body style="background-color:seashell">
    <nav class="navbar  " style=" color:black;font:bold;border: white;">
        <div class="container-fluid">
            <div class="navbar-header h-div">
                <a class="navbar-brand " href="#">Sanoslong</a>
            </div>
            <ul class="nav navbar-nav">
                <li class=" h-div"><a href="#">Home</a></li>
                <li class="h-div"><a href="#">About Us</a></li>
                <li class="h-div "><a href="#">Contact</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right profile">
                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</i></a></li>
            </ul>
        </div>
    </nav>
    <!--11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111-->
    <div class="in-up-container ">
        <div class="row">
            <div id="L" class="left col-xl-12 col-lg-12 col-md-12 col-sm-12s col-xs-12  ">
                <h1 class="text-center" style="margin-top: 15%;margin-bottom: 8%">Log In</h1>
                <!-- logo-->
                <form class="form"action="select.php" method="POST">
                        <div style="display: flex;">
                        <label for="i" style="margin-right: 40px;">User Name</label>
                        <input id="i1" type="text" placeholder="f0c0" name="un" ><br>
                        </div>

                        <div style="display: flex;">
                        <label style="margin-right: 55px;" for="i2">Password</label>
                        <input id="i2" type="password" name="pass" ><br>
                        </div>
                        <div align="center" class="sign_inCont" style="margin-top: 15px;">
                        <button value="" style="margin-bottom: 5px;">Sign In <i class="fas fa-sign-in-alt"></i></button>
                        <input type="radio" id="r1" style="margin-left: 30%;margin-right: 2%">
                        <label style="min-width: 100px;" for="r1">remember me?</label>
                        <label style="min-width: 286px;" class="l-sign">If you dont have an account<button type="button" onclick="demoDisplayRight()">Sign Up <i
                                    class="fas fa-user-plus"></i></button></label>
                        </div>
                        <div  class="fi"> <a href="" class="text-center"><i class="fab fa-facebook"></i></a> <a
                                href=""><i class="fab fa-instagram"></i></a>
                        </div>
                </form>
              
            </div>
            <div id="R" style="display: none;" class="right col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 class="text-center" style="font-family: 'sofia';margin-bottom: 20px;"> Sign Up</h1>
                <form class="form2" action="add.php" method="POST">
                    <div class="ss  col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        
                        <label for="s2" style="white-space: nowrap;"  >User Name</label>
                        <label for="s3" style="white-space: nowrap;" >mobile <i class="fas fa-phone"></i></label>
                        <label for="s4">Email</label><br>
                        <label for="s5">Address</label>
                        <label for="p">Password</label>
                        <label for="p1"style="margin-bottom: 20px">Confirm Password</label>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3">

                     


                        <input type="text"  id="s2" name="ln">

                        <input type="text" name="mobile" id="s3">

                        <input type="text" name="email" id="s4">

                        <input type="text" name="address" id="s5">



                        <input id="p"name="pass" type="password" >
                        <input id="p1" type="password" name="cpass">
                        <div class="button">
                        <button onH type="submit">Submit form</button>
                        <button onclick="demoDisplayLeft()">Log in <i class="fas fa-sign-in-alt"></i> </button></div>
                    </div>
                </form>
            
            </div>

        </div>
    </div>


    
</body>

</html>