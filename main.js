canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
img_array = ["M1.jpg", "M2.jpeg", "M3.jpeg", "M4.jpeg"];
random_number = Math.floor(Math.random() * 4);
background_image = img_array [random_number];
rover_image = "rover.png";
rover_X = 10;
rover_Y = 20;
rover_width = 100;
rover_height = 90;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;













    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;











}
function uploadBackground() {

    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}







function uploadrover() {

    ctx.drawImage(rover_imgTag, rover_X, rover_Y, rover_width, rover_height);
}
























window.addEventListener("keydown", my_keydown);



function my_keydown(e)
{


    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38")
    {

        up();
    }















    if(keyPressed == "40")
    {

        down();
    }















    if(keyPressed == "37")
    {

        left();
    }



    if(keyPressed == "39")
    {

        right();
    }
}
function up()
{
    if (rover_Y >=0)
    {
        rover_Y = rover_Y - 10;
         uploadBackground();
         uploadrover();
        
    }
}

function down()
{
    if (rover_Y <=500)
    {
        rover_Y = rover_Y + 10;
         uploadBackground();
         uploadrover();
        
    }
}

function left()
{
    if (rover_X >=0)
    {
        rover_X = rover_X - 10;
         uploadBackground();
         uploadrover();
        
    }
}

function right()
{
    if (rover_X <=700)
    {
        rover_X = rover_X + 10;
         uploadBackground();
         uploadrover();
        
    }
}