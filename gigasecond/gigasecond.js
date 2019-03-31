var gigasecond = function(date) {
	const GIGASECONDS_IN_MS = Math.pow(10, 12);
	return new Date(GIGASECONDS_IN_MS + date.getTime());
};

module.exports = {gigasecond};

