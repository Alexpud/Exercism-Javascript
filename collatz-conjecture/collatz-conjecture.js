var steps = function(nSteps) {
	var count = 0;
	if (nSteps <= 0) {
		throw new Error("Only positive numbers are allowed");
	}

	while (nSteps != 1) {
		var isEven = nSteps % 2 == 0;
		nSteps = isEven ? nSteps / 2 : (nSteps * 3) + 1;
		count++;
	}
	return count;
};

module.exports = {steps}