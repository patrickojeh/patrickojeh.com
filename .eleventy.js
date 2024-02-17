const eleventySass = require('eleventy-sass');

module.exports = function (config) {
  config.addPassthroughCopy('./src/images/');
  config.addPassthroughCopy('./src/js/');
  config.addPassthroughCopy('./src/fonts/');

  config.addPlugin(eleventySass, {
    compileOptions: {
      permalink: function () {
        return (data) =>
          data.page.filePathStem.replace(/^\/scss\//, '/css/') + '.css';
      },
    },
    sass: {
      style: 'compressed',
      sourceMap: false,
    },
  });

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
