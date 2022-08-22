
function preload(){
clown_nose=loadImage(' https://i.postimg.cc/PxFvYgkv/l1.png');}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is Intialized');
}
 function draw()
 {image(video,0,0,500,500);
    image(clown_nose,noseX,noseY,70,70);
}

 function take_snapshot(){
    save('filter1.png');
 }

noseX=0;
noseY=0;

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x+70;
        noseY=results[0].pose.nose.y+130;

    }

}