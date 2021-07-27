function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(500,500);
    canvas.position(560,85);
    image= ml5.poseNet(video,modelLoaded);
    image.on('pose',gotResults);
}
function modelLoaded(){
    console.log("Model loaded");
}
function gotResults(results){
    if(results.length > 0){
        console.log(results);
    }
}
function draw(){
    background("#000000");
}