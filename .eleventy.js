module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });
  eleventyConfig.addWatchTarget("src/style.css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy({ "src/_data/employees.json": "employees.json" });
  eleventyConfig.addPassthroughCopy({ "src/_data/employee.json": "employee.json" });

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
    },
    pathPrefix: "/"
  };
};
