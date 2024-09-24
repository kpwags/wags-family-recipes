import { sortByTitle } from '../lib/sorting.js';

export default (collection) => {
	const posts = [];

	const allItems = collection.getAll();

	for (let i = 0; i < allItems.length; i++) {
		const item = allItems[i];

		if (!item.data.tags) {
			continue;
		}

		if (item.data.tags.includes('recipes') || item.data.tags.includes('cocktails') || item.data.tags.includes('baking')) {
			posts.push(item);
		}
	}

	return posts.sort((a, b) => sortByTitle(a.data.title, b.data.title));
};