const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
var colorCode = function(color) {
	return COLORS.indexOf(color);
};

module.exports = { colorCode, COLORS };