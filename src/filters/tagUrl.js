export default (tag) => {
	if (typeof tag === 'undefined') {
		return '';
	}

	switch (tag.toUpperCase()) {
		case '':
			return '';
		default:
			return tag.toLowerCase().replace(/\s/g, '-').replaceAll('.', '').replaceAll("'", '').replaceAll('?', '');
	}
};
