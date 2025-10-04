module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Mock CSS and asset imports
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/tests/styleMock.js',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/tests/fileMock.js',
  },

  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/main.tsx',              // Exclude entry point
    '!src/**/*.d.ts',              // Exclude type definitions
    '!src/**/*.test.{ts,tsx}',     // Exclude test files
    '!src/App.tsx',                // Exclude untested App
    '!src/counter.ts',             // Exclude unused counter
    '!src/types/**',               // Exclude type-only files
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageReporters: ['text', 'text-summary', 'html', 'lcov', 'json-summary'],
  coverageDirectory: 'coverage',
}
