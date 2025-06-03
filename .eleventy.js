module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });
  eleventyConfig.addWatchTarget("src/style.css");
  eleventyConfig.addPassthroughCopy("src/js");

  eleventyConfig.addWatchTarget("dist/style.css");
  eleventyConfig.setBrowserSyncConfig({
    open: true,
    files: ["dist/style.css"], 
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    }
  };
};
