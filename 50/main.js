var __interpretation_started_timestamp__;
var pi = 3.141592653589793;

const speed = 100;
const p = 2.5;
const d = 0.75;
const sideDistance = 15;

var deltaOld = 0;

var main = function()
{
	__interpretation_started_timestamp__ = Date.now();
	
	while (true) {
		if (brick.sensor(A1).read()) {
			brick.motor(M3).setPower(-50);
			brick.motor(M4).setPower(-50);
			script.wait(400)
			brick.motor(M3).setPower(-50);
			brick.motor(M4).setPower(50);
			script.wait(875);
			brick.motor(M3).setPower(0);
			brick.motor(M4).setPower(0);
			script.wait(50);
		}
		
		var delta = sideDistance - brick.sensor(D1).read();
		var error = delta * p + deltaOld * d;
		
		deltaOld = delta;
				
		brick.motor(M3).setPower(speed - error);
		brick.motor(M4).setPower(speed + error);
	}
	
	return;
}
