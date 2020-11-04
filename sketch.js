//Create variables here

var dog,database,happyDog,foodS,foodStock;


function preload()
{  //load images here
    img = loadImage('images/Dog.png');
    img2 = loadImage('images/happydog.png');
}

function setup() {
  createCanvas(500, 500);
  
  database=firebase.database();
 
  dog = createSprite(250,250,50,80);
  dog.scale=0.2;
  dog.addImage(img);
  
    foodStock=database.ref("Food");
    foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(img2);
}
textSize(20);
fill('red');
text("Press UP_ARROW to feed the Dog!!",120,40);


text ("Food remaining: "+foodS , 150,150);
 
  //add styles here
  
  drawSprites();
}

//function to read value from database
function readStock(data){
  foodS=data.val();
}

//function to write values in database
function writeStock(x){

 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }
 database.ref('/').update({
   Food:x
 })
}



