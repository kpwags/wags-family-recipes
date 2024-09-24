import tagUrl from './../filters/tagUrl.js';

const tagListShortcode = (tags) => {
	const renderedTags = tags
		.filter((t) => !['recipes', 'cocktails'].includes(t));

	const links = renderedTags.map((tag) => `<a href="/tag/${tagUrl(tag)}">${tag}</a>`);

	return links.join(', ');
};

export default tagListShortcode;
