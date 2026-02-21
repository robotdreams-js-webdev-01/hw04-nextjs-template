module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testMatch: [
    '**/__tests__/**/*.spec.[jt]s?(x)',
    '**/.hidden-tests/hw04/**/*.spec.[jt]s?(x)',
  ],
  // next/babel kezeli a TypeScript és JSX transzformációt
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  // CSS import-ok mockolása (Next.js globals.css)
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/fileMock.cjs',
  },
};
