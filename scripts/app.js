/*
Source File Name: app.js
Author: Antanik Mitra (200292856) 
Date: 21/04/2016
Description: Banner
 */





function init() {


// all shapes in canvas
    var stage = new createjs.Stage("canvas");
    var rect = new createjs.Shape();
    rect.graphics.beginFill("#ff9900").drawRect(0, 0, 700, 500);
    rect.x = 100;
    rect.y = 100;
    stage.addChild(rect);


    var rect2 = new createjs.Shape();
    rect2.graphics.beginFill("white").drawRect(0, 0, 10, 10);
    rect2.x = 100;
    rect2.y = 100;
    stage.addChild(rect2);

    var rect3 = new createjs.Shape();
    rect3.graphics.beginFill("white").drawRect(0, 0, 10, 10);
    rect3.x = 100;
    rect3.y = 100;
    stage.addChild(rect3);

    var circle1 = new createjs.Shape();
    circle1.graphics.beginFill("#cc7a00").drawCircle(10, 50, 90);
    circle1.x = 170;
    circle1.y = 300;
    stage.addChild(circle1);

    var circle11 = new createjs.Shape();
    circle11.graphics.beginFill("#ffcc80").drawCircle(10, 50, 85);
    circle11.x = 170;
    circle11.y = 300;
    stage.addChild(circle11);

    var circle2 = new createjs.Shape();
    circle2.graphics.beginFill("#cc7a00").drawCircle(10, 50, 90);
    circle2.x = 320;
    circle2.y = 300;
    stage.addChild(circle2);

    var circle12 = new createjs.Shape();
    circle12.graphics.beginFill("#ffcc80").drawCircle(10, 50, 85);
    circle12.x = 320;
    circle12.y = 300;
    stage.addChild(circle12);

    var circle3 = new createjs.Shape();
    circle3.graphics.beginFill("#cc7a00").drawCircle(10, 50, 150);
    circle3.x = 645;
    circle3.y = 290;
    stage.addChild(circle3);

    var circle13 = new createjs.Shape();
    circle13.graphics.beginFill("#ffcc80").drawCircle(10, 50, 145);
    circle13.x = 645;
    circle13.y = 290;
    stage.addChild(circle13);

    var txt = new createjs.Text();
    txt.font = "bold 40px Pacifico";
    txt.color = "white";
    txt.text = "Welcome to Antanik Mitra";
    txt.shadow = "3px 3px 3px black"
    txt.x = -350;
    txt.y = 130;
    stage.addChild(txt);


    var txt2 = new createjs.Text();
    txt2.font = "20px Pacifico";
    txt2.color = "white";
    txt2.text = "Upcoming innovative Web Designer and Developer";
    txt2.shadow = "3px 3px 3px black"
    txt2.x = 800;
    txt2.y = 200;
    stage.addChild(txt2);


// button click to new url
    var click = new createjs.Shape();
    click.graphics.beginFill("#cc7a00").drawRect(0, 0, 200, 50);
    click.x = 600;
    click.y = 240;
    click.addEventListener("click", function (event) { window.open("http://assignment2-comp1073.azurewebsites.net/", "_self"); })
    stage.addChild(click);



    var txt3 = new createjs.Text();
    txt3.font = "20px Pacifico";
    txt3.color = "white";
    txt3.text = "View Portfolio";
    txt3.shadow = "3px 3px 3px black"
    txt3.x = 650;
    txt3.y = 250;
    stage.addChild(txt3);


    stage.update();


//tween animations
    tween();

    function tween() {
        createjs.Tween.get(rect2, { loop: true })
            .to({ x: 790 }, 3000, createjs.Ease.getPowInOut(4))

            .to({ alpha: 0, y: 225 }, 100)

            .to({ x: 100 }, 1000, createjs.Ease.getPowInOut(4));

        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
    }


    tween2();

    function tween2() {
        createjs.Tween.get(rect3, { loop: true })
            .to({ x: 790 }, 3060, createjs.Ease.getPowInOut(4))

            .to({ y: 290 }, 1000, createjs.Ease.getPowInOut(4))

            .to({ x: -790 }, 1000, createjs.Ease.getPowInOut(4));

        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
    }

    tween3();

    function tween3() {
        createjs.Tween.get(txt, {})
            .to({ x: 130 }, 3060, createjs.Ease.getPowInOut(4))

        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
    }


    tween4();

    function tween4() {
        createjs.Tween.get(txt2, {})
            .to({ x: 150 }, 3100, createjs.Ease.getPowInOut(4))

        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
    }
}
