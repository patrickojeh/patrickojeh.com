import eleventySass from "eleventy-sass/lib/eleventy-sass";

export default function (config) {
  config.addPlugin(eleventySass, {
    compileOptions: {
      permalink() {
        return (data) => data.page.filePathStem.replace(/^\/scss\//, "/css/") + ".css";
      }
    },
    sass: {
      style: "compressed",
      sourceMap: false
    },
    rev: true
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
