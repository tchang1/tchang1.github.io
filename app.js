var currentNumber = 0;
var pressing = false;
var incrementing = false;

var incrementTimer = function() {
	if (pressing && !incrementing) {
		incrementing = true;
		setTimeout(increment, 500);
	}
};

var increment = function() {
	if (pressing ) {
		currentNumber++;
		if (currentNumber > 4) {
			currentNumber = 4;
		}
	    hideNumbers();
		myLayers['num_' + currentNumber].visible = true;
		incrementing = false;
		incrementTimer();
	}
}

var hideNumbers = function() {
	var i;
	for (i = 0; i <= 4; i++) {
		myLayers['num_' + i].visible = false;
	}
}

myLayers = Framer.Importer.load("imported/Save_Dog")

curve1 = "spring(300,20,50)";

myLayers.num_1.visible=false
myLayers.num_2.visible=false
myLayers.num_3.visible=false
myLayers.num_4.visible=false
myLayers.totalDollar.visible=false

myLayers.dogBlur.on(Events.TouchStart, function() {
  pressing = true;
  incrementTimer();
  myLayers.dogBlur.animate({
    properties: {
      opacity: 0.0
    },
    curve: curve1
  });
  myLayers.tapToSave.visible=false
  myLayers.savedToday.visible=false
  myLayers.totalDollar.visible=false
});

myLayers.dogBlur.on(Events.TouchEnd, function() {
  myLayers.dogBlur.animate({
    properties: {
      opacity: 1
    },
    
  });
  pressing = false;
  myLayers.tapToSave.visible=false
  myLayers.savedToday.visible=true
  myLayers.totalDollar.visible=true
});