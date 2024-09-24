export default (time) => {
	let timeHours = 0;
	let timeMinutes = 0;

	let returnString = '';

	if (time !== null && parseInt(time, 10) > 0) {
		timeHours = Math.floor(time / 60);
		timeMinutes = time % 60;

		if (timeHours === 1) {
			returnString += `${timeHours} hour`;
		} else if (timeHours > 1) {
			returnString += `${timeHours} hours`;
		}

		if (timeHours > 0 && timeMinutes > 0) {
			returnString += ', ';
		}

		if (timeMinutes > 0) {
			returnString += `${timeMinutes} minute`;
		}

		if (timeMinutes > 1) {
			returnString += 's';
		}
	}

	return returnString;
};
