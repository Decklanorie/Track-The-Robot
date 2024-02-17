function trackRobot(...steps) {
	var tracks = [0,0,0,0]
	var exact = Math.floor(steps.length/4)
	var remainder = steps.length - (exact*4)
	var i = 0;
	
	while (i<(exact*4)){
		tracks[0] += steps[0+i]
		tracks[1] += steps[1+i]
		tracks[2] += steps[2+i]
		tracks[3] += steps[3+i]
		i+=4;
	}
	
	//handle remenders
	for(var j = 0; j<remainder; j++){
		tracks[j] += steps[(exact*4)+j]
	}
	
	return [tracks[1]-tracks[3], tracks[0]-tracks[2]]
}
