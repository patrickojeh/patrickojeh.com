const path = require('path');

const eleventySass = require('eleventy-sass');
const del = require('del');

const dir = {
  input: 'src',
  output: 'dist',
};

module.exports = function (config) {
  const outputDir = path.resolve(dir.output, '*');

  del.sync(outputDir, { dot: true });

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
    dir,
  };
};
