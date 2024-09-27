module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    collectCoverageFrom: ['./src/**/*.tsx'],
    coverageThreshold: {
        "global": {
          "lines": 86
        }
      }
};
