window.addEventListener('load', () => {
	const keywordsTextbox = document.querySelector('input#keywords');

	if (keywordsTextbox) {
		keywordsTextbox.addEventListener('keyup', (e) => {
			filterRecipesByTitle(e.target.value);
		})
	}

	const recipeFilters = document.querySelectorAll('input[type="radio"][name="recipeTags"]');
	recipeFilters.forEach((filter) => {
		filter.addEventListener('change', (e) => {
			filterRecipesByTag(e.target.id);
		});
	});
});

function filterRecipesByTitle(keywords) {
	if (keywords.trim() === '') {
		restoreAllRecipes();
		return;
	}

	const recipes = document.querySelectorAll('ul.recipe-list li');

	recipes.forEach((r) => {
		const recipeTitle = r.getAttribute('data-title');

		if (recipeTitle) {
			if (recipeTitle.toLocaleLowerCase().includes(keywords.toLocaleLowerCase())) {
				r.removeAttribute('hidden');
			} else {
				r.setAttribute('hidden', 'true');
			}
		} else {
			r.removeAttribute('hidden');
		}
	});
}

function filterRecipesByTag(tag) {
	if (tag === 'all') {
		restoreAllRecipes();
		return;
	}

	document.querySelectorAll('ul.recipe-list li').forEach((r) => {
		const tags = r.getAttribute('data-tags').split(',');

		if (tags.includes(tag)) {
			r.removeAttribute('hidden');
		} else {
			r.setAttribute('hidden', 'true');
		}
	});
}

function restoreAllRecipes() {
	const recipes = document.querySelectorAll('ul.recipe-list li');
	recipes.forEach((r) => {
		r.removeAttribute('hidden');
	});
}