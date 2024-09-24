export const sortByTitle = (a, b) => {
	const articles = ['a', 'an', 'the'],
		re = new RegExp('^(?:(' + articles.join('|') + ') )(.*)$'), // e.g. /^(?:(foo|bar) )(.*)$/

		replacor = function (_, $1, $2) {
			return $2 + ', ' + $1;
		};
	a = a.toLowerCase().replace(re, replacor);
	b = b.toLowerCase().replace(re, replacor);

	return a === b ? 0 : a < b ? -1 : 1;
}