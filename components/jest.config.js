const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  transform: {
    ...tsjPreset.transform,
  },
  coverageReporters: [['lcov', { reportPath: '' }]],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  }
};
