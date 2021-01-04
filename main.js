nosex="";
nosey="";
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	posenet=ml5.poseNet(video,modeloaded);
	posenet.on('pose',gotPoses);
}

function draw() {
	game()
}

function modeloaded(){
	console.log("yaaaayyy!!!!")
}

function gotPoses(result){
	if(result.length>0){
		console.log(result);
		nosex=result[0].pose.nose.x;
		nosey=result[0].pose.nose.y;
	}
}






