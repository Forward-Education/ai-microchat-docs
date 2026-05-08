import markdownItAnchor from "markdown-it-anchor";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        symbol: "#",
        ariaHidden: false,
      }),
      level: [2, 3],
      slugify: eleventyConfig.getFilter("slugify"),
    });
  });

  eleventyConfig.addCollection("policies", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("policies")
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
}
