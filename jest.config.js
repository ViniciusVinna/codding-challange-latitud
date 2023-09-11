module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: '../coverage',
  rootDir: 'src',
  coverageReporters: [
    "json-summary",
    "text",
    "lcov"
  ],
};