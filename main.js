function preload() {
	world_start = loadSound("world_start.wav");
	jump_mario = loadSound("jump.wav");
	coin_mario = loadSound("coin.wav");
	gameover_mario = loadSound("gameover.wav");
	kick_mario = loadSound("kick.wav");
	die_mario = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	instializeInSetup(mario);
}

function draw() {
	game()
}

function modelLoaded(){
	console.log("Model is loaded");
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}


