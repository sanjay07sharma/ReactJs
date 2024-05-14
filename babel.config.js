module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ["@babel/preset-react", { "runtime": "automatic" }], // if not automatic, it will take some random value and throw error.
    ],
  };
