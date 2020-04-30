module.exports = {
  verbose: false,
  modulePathIgnorePatterns: ['<rootDir>/coverage/'],
  roots: [
    '<rootDir>/app'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ]
};
