
// Create canvas variable
var canvas=new fabric.Canvas("myCanvas");

//Set initial positions for ball and hole images.
ball_x =0;
ball_y=0;
hole__X=800;
hole__Y=550;
hole_i_mage="";
ball_i_mage="";
block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(I_MG){
		hole_i_mage=I_MG;
		hole_i_mage.scaleToWidth(50);
		hole_i_mage.scaleToHeight(50);
		hole_i_mage.set({
			top:hole__Y,
			left:hole__X,
		});
		canvas.add(hole_i_mage);
	})
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Im_ge){
		ball_i_mage=Im_ge;
		ball_i_mage.scaleToWidth(50);
		ball_i_mage.scaleToHeight(50);
		ball_i_mage.set({
			top:ball_y,left:ball_x
		});
		canvas.add(ball_i_mage);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((ball_x==hole__X) && (ball_y==hole__Y)){
		canvas.remove(ball_i_mage);
		document.getElementById("hd3").innerHTML="YOU HAVE HIT THE GOAL";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up(){
		if (ball_y>=0){
			ball_y=ball_y-block_image_height;
			canvas.remove(ball_i_mage);
			new_image();
		}
		// Write a code to move ball upward.
	}

	function down()
	{
		if (ball_y<=550){
			ball_y=ball_y+block_image_height;
			canvas.remove(ball_i_mage);
			new_image();
		}
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >=0)
		{
			ball_x=ball_x-block_image_width;
			canvas.remove(ball_i_mage);
			new_image();
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if( ball_x<=1000)
		{
			ball_x=ball_x+block_image_width;
			canvas.remove(ball_i_mage);
			new_image();
			// Write a code to move ball right side.
		}
	}
	
}

