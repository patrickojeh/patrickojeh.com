const eleventySass = require('eleventy-sass');

module.exports = function (config) {
  config.addPassthroughCopy('./src/js/');

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
