import eleventySass from "eleventy-sass/lib/eleventy-sass";

export default function (config) {
  eleventyConfig.addPlugin(eleventySass);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
