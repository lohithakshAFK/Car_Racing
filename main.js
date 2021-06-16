canvas =document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var background = ["race_1", "race_2", "race_3", "race_4"];
random_numbers = Math.floor(Math.random()*4);

var car_1_height = 90;
var car_1_width = 100;

var car_2_height = 90;
var car_2_width = 100;

background_img = background[random_numbers];
car_1_img = "car1.png";
car_2_img = "car2.png";

car1_x = 200;
car1_y = 100;

car2_y = 250;
car2_x = 200;

function add(){
    background_thing = new Image();
    background_thing.onload = upload_background;
    background_thing.src = background_img;

    car1_thing = new Image();
    car1_thing.onload = upload_car1;
    car1_thing.src = car_1_img;

    car2_thing = new Image();
    car2_thing.onload = upload_car2;
    car2_thing.src = car_2_img;
}

function upload_background(){
    ctx.drawImage(background_thing, 0, 0, canvas.width, canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_thing, car1_x, car1_y, car_1_width, car_1_height);
}

function upload_car2(){
    ctx.drawImage(car2_thing, car2_x, car2_y, car_2_width, car_2_height);
}

window.addEventListener("keydown", my_key_down);

function my_key_down(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if (key_pressed == "38"){
        up();
        console.log("up");
    }

    if (key_pressed == "40"){
        down();
        console.log("down");
    }

    if (key_pressed == "37"){
        left();
        console.log("left");
    }

    if (key_pressed == "39"){
        right();
        console.log("right");
    }

    if (key_pressed == "87"){
        w();
        console.log("up");
    }

    if (key_pressed == "83"){
        s();
        console.log("down");
    }

    if (key_pressed == "65"){
        a();
        console.log("left");
    }

    if (key_pressed == "68"){
        d();
        console.log("right");
    }
}

function up(){
    if (car1_y >=0){
    car1_y = car1_y - 10;
    console.log("position of car_1 = (" + car1_x + "," + car1_y + ")")
    upload_background();
    upload_car1();
    upload_car2();
    }
}

function w(){
    if (car2_y >=0){
    car2_y = car2_y - 10;
    console.log("position of car_2 = (" + car2_x + "," + car2_y + ")")
    upload_background();
    upload_car1();
    upload_car2();
    }
}

function down(){
    if (car1_y <=500){
    car1_y = car1_y + 10;
    console.log("position of car_1 = (" + car1_x + "," + car1_y + ")")
    upload_background();
    upload_car1();
    upload_car2();
    }
}

function s(){
    if (car2_y <=500){
    car2_y = car2_y + 10;
    console.log("position of car_2 = (" + car2_x + "," + car2_y + ")")
    upload_background();
    upload_car1();
    upload_car2();
    }
}

function left(){
    if (car1_x <=700){
    car1_x = car1_x - 10;
    console.log("position of car_1 = (" + car1_x + "," + car1_y + ")")
    upload_background();
    upload_car1();
    upload_car2();
    }
}

function a(){
    if(car2_x <=700){
    car2_x = car2_x - 10;
    console.log("position of car_2 = (" + car2_x + "," + car2_y + ")")
    upload_background();
    upload_car1();
    upload_car2();
    }
}

function right(){
    if (car1_x >=0){
    car1_x = car1_x + 10;
    console.log("position of car_1 = (" + car1_x + "," + car1_y + ")")
    upload_background();
    upload_car1();
    upload_car2();
    }
}

function d(){
    if (car2_x <=700){
    car2_x = car2_x + 10;
    console.log("position of car_2 = (" + car2_x + "," + car2_y + ")")
    upload_background();
    upload_car1();
    upload_car2();
    }
}