var splash = function() {
	
	window.onmousemove = handleMouseMove;
	function handleMouseMove(event) {
		var xPercentage, yPercentage;
		event = event || window.event;
		xPercentage = (Math.max(1, event.clientX) / screen.width);
		yPercentage = (Math.max(1, event.clientY) / screen.height);
		setOpacity(document.getElementById('1'), 1 - (4 *xPercentage ));
		setOpacity(document.getElementById('2'), 1 - (4 * (xPercentage -0.25)));
		setOpacity(document.getElementById('3'), 1 - (4 * (xPercentage -0.75)));
		var images = document.getElementsByTagName('img');
		for(var i=0; i< images.length; i++) {
			images[i].style['-webkit-filter'] = "hue-rotate(" + (90-(yPercentage * 90))  + "deg) sepia(" + (yPercentage) + ")";
		}
	}
	function setOpacity(selector, opacity) {
		selector.style.opacity = opacity;
	}
}();
