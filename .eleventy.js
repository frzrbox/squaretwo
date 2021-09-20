const yaml = require('yaml');

module.exports = (config) => {
  config.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md',
    // Static Assets:
    'css',
    'jpeg',
    'jpg',
    'png',
    'svg',
    'woff',
    'woff2',
  ]);

  config.addPassthroughCopy('assets');

  // Reload the browser if external changes are made
  config.setBrowserSyncConfig({
    files: ['./sass', './ts', './assets'],
  });

  // Set YAML as default content file
  config.addDataExtension('yaml', (contents) => yaml.parse(contents));

  // 11ty filter
  config.addNunjucksFilter('log', (content) => console.log('log', content));

  return {
    dir: {
      input: 'pages',
      output: 'dist',
      includes: '../includes',
      data: '../data',
    },
  };
};
