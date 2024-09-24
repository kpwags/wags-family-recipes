import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);

export default {
    layout: 'layouts/recipe.html',
    tags: 'recipes',
    eleventyComputed: {
        dateString: ({ page }) => dayjs.utc(page.date).format('MMM D, YYYY'),
        tagList: ({ tags }) => {
            const renderedTags = tags.filter((t) => !['recipes', 'cocktails', 'baking'].includes(t));

            return renderedTags.map((tag) => tag.toLowerCase()).join(',');
        },
    }
};