const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
var collorMapping = [];	
COLORS.map((color, index) => { collorMapping[color] = index; })
var colorCode = function(color) {
	return collorMapping[color];
};

module.exports = { colorCode, COLORS };