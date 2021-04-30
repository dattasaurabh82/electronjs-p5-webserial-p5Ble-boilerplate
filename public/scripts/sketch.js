
let bleClient;

function checkBle(){
	console.log("Checking web ble support [ Using p5.ble.js under the hood ]");
	try {
		bleClient = new p5ble();
		console.log("WEB BLE supported! 👍🏽");
	}catch (error){
		console.lol("WEB BLE not supported! 👎🏽");
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	background(0);
	
	// ble object instatiation
	checkBle();
	
	// check web serial support
	if ("serial" in navigator) {
		console.log("WEB SERIAL supported! 👍🏽");
	}else{
		console.log("WEB SERIAL not supported 👎🏽");
	}
}

function draw() {
	background(0);
	
	// draw  test circle	
	noFill();
	stroke(255);
	strokeWeight(1);
	ellipse(width/2, height/2, 200, 200);	
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
