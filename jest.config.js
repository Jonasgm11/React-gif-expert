// module.exports = {
//   testEnvironment: "jest-environment-jsdom",
//   setupFiles: ["./jest.setup.js"],
// };

// export default {};

export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".jsx"],
  testEnvironment: "jsdom",
  setupFiles: ["./jest.setup.js"],
  verbose: true,
  setupFilesAfterEnv: ["./setupTests.js"],
};
