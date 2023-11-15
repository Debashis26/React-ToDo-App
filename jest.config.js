module.exports = {
  testMatch: [
    "**/__tests__/**/*.tsx",
    "**/?(*.)+(test).tsx",
    "**/__tests__/**/*.ts",
    "**/__tests__/**/*.tsx",
  ],
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true
  };
  