const moment = require("moment");

module.exports = function(eleventyConfig) {
  // COLLECTIONS
  // -------------------------------

  // events EN
  eleventyConfig.addCollection("events_en", function(collection) {
    return collection.getFilteredByGlob("./src/en/events/*.md");
  });

  // events ZH
  eleventyConfig.addCollection("events_zh", function(collection) {
    return collection.getFilteredByGlob("./src/zh/events/*.md");
  });

  // posts EN
  eleventyConfig.addCollection("posts_en", function(collection) {
    return collection.getFilteredByGlob("./src/en/posts/*.md");
  });

  // posts ZH
  eleventyConfig.addCollection("posts_zh", function(collection) {
    return collection.getFilteredByGlob("./src/zh/posts/*.md");
  });

  // FILTERS
  // -------------------------------

  // date filter
  eleventyConfig.addNunjucksFilter("date", function(date, format, locale) {
    locale = locale ? locale : "en";
    moment.locale(locale);
    return moment(date).format(format);
  });

  // Base config
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
