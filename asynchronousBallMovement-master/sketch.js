var ball;
var database;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var pos = database.ref('ball/position');
    
    pos.on("values",read,error);

}

function read(photo){
    var pos1 = photo.val();
    //pos1 = {x:200 , y:200}
    ball.x = pos1.x;
    ball.y = pos1.y;
}

function error(){
    console.log("error");
}

function update(x1,y1){
    var pos = database.ref('ball/position');
    pos.set({'x':x1 , 'y':y1})
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
