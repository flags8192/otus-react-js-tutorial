module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts)$": "<rootDir>/node_modules/babel-jest",
  },
};
