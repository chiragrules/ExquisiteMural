function player( context ) {
	this.init( context );
}

player.prototype = {

	context: null,
	type: null,
	brush: null,

	mouseX: null, mouseY: null,
	
	init: function (context) {
		this.context = context;
	},
	
	update: function (posX, posY, brushType) {
		this.type = brushType;
		this.mouseX = posX;
		this.mouseY = posY;
		this.createBrush();
	},
	
	draw: function () {
		this.context.strokeRect(this.mouseX, this.mouseY, 3, 3);
	},
	
	createBrush: function () { 
		if(!this.brush || (this.type != this.brush.type)) {
			this.brush = eval("new " + this.type + "(this.context)");
		}
	}
	
}