var bg,bg_img;
var tom,jerry;
var tomImg1,tomImg2,tomImg3,jerryImg1,jerryImg2,jerryImg3;

function preload() {
    bg = loadImage("garden.png");
    tomImg1= loadAnimation("tomOne.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
    tomImg3= loadAnimation("tomFour.png");
    jerryImg1=loadAnimation("jerryOne.png");
    jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3=loadAnimation("jerryFour.png");
}

function setup(){

    bg_img = createSprite(450,400)
    bg_img.addImage("background",bg);
    bg_img.scale = 1.2;

    tom = createSprite(720, 670);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;
    tom.velocityX = 0;

    jerry = createSprite(100, 700);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw(){
    createCanvas(900,800);
    background("black");

    keyPressed();
    if(keyWentUp("left")){
        tom.velocityX = -5;
    }

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tom_last_animation",tomImg3);
        tom.changeAnimation("tom_last_animation");
        jerry.addAnimation("jerry_last_animation",jerryImg3)
        jerry.changeAnimation("jerry_last_animation")
    }
    drawSprites();
}

function keyPressed(){

    if(keyWentDown(LEFT_ARROW)){
        tom.velocityX = -5;
        tom.addAnimation("tom_running",tomImg2);
        tom.changeAnimation("tom_running");
        jerry.addAnimation("jerry_teasing",jerryImg2)
        jerry.changeAnimation("jerry_teasing");
    }
}