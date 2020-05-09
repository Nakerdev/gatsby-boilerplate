module.exports = {
  transform: {
    "^.+\\.(js)$": `<rootDir>/jest-configs/jest-preprocess.js`,
  },
  testPathIgnorePatterns: [
      `node_modules`, 
      `.cache`,
      `public`
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(js)$",
  moduleFileExtensions: ["js"]
}
