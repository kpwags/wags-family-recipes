import pluginWebc from '@11ty/eleventy-plugin-webc';
import { EleventyRenderPlugin } from "@11ty/eleventy";

import allrecipes from './src/collections/allrecipes.js';

import displayedCookingTime from './src/filters/displayedCookingTime.js';
import tagUrl from './src/filters/tagUrl.js';

import tagList from './src/shortcodes/taglist.js';

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        './public/': '/',
    });

    eleventyConfig.addPlugin(EleventyRenderPlugin);

    eleventyConfig.addPlugin(pluginWebc, {
        components: "./src/_components/**/*.webc",
    });

    eleventyConfig.addCollection('allrecipes', allrecipes);

    eleventyConfig.addFilter('displayedCookingTime', displayedCookingTime);
    eleventyConfig.addFilter('tagUrlSlug', tagUrl);

    eleventyConfig.addShortcode('tagList', tagList);

    return {
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid",
        ],
        dir: {
            input: 'src',
            output: '_site'
        }
    };
};
