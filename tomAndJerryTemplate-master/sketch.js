var garden , gardenImage
var jerry , jerry_running
var monkey , monkey_runnning

function preload() {
   gardenImage = loadImage("images/garden.png")
   jerry_running = loadAnimation("images/jerryOne.png,images/jerryTwo.png,images/jerryThree.png,images/jerryFour.png")

}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(1000,800)
    garden.addImage("gardens",gardenImage) 

    jerry = createSprite(800,400)
    jerry.addAnimation("jerrys",jerry_running)


}

function draw() {

    background(0);

    drawSprites();
}


function keyPressed(){


}