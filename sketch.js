var bgImg,cat,mouse,c1,c2,c3,m1,m2,m3;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");

   m1=loadAnimation("images/mouse1.png")
   m2=loadAnimation("images/mouse2.png","images/mouse3.png")
   m3=loadAnimation("images/mouse4.png")


    c1=loadAnimation("images/cat1.png")
    c2=loadAnimation("images/cat2.png", "images/cat3.png")
    c3=loadAnimation("images/cat4.png")
    
}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here
    cat=createSprite(900,600);
    cat.addAnimation("catSleeping",c1);
    cat.scale=0.25

    mouse=createSprite(200,600)
    mouse.addAnimation("mouseStanding",m1);
    mouse.scale=0.15
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
     cat.velocityX=0;
     cat.addAnimation("catstop",c3);
     cat.changeAnimation("catstop");
     cat.x=300;
     cat.scale=0.2;

     mouse.addAnimation("mousesearch",m3);
     mouse.changeAnimation("mousesearch");
     mouse.scale=0.15;
    }

    drawSprites();
    }
    
function keyPressed(){
    if(keyCode===RIGHT_ARROW)
    {
        mouse.addAnimation("mouseTeasing",m2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
    }

    if(keyCode===LEFT_ARROW)
    {
       cat.addAnimation("catWalking",c2);
        cat.changeAnimation("catWalking");
        cat.velocityX= -5
        
        
    }


   
}






