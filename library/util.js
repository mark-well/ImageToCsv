
(function(){
	
	//Random intiger
	function randomInt(min, max) {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	//Random Hex Color
	function randomHexColor(){
		let characterSet = "0123456789ABCDEF";
		let color = "#";
		
		for(let i = 0; i < 6; i++){
			color = color + characterSet[Math.floor(Math.random() * characterSet.length)];
		}
		return color;
	}
	
	window.util = {
		randomInt: randomInt,
		randomHexColor: randomHexColor
	}
})();