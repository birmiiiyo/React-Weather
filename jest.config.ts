import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  verbose: true,
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@store/(.*)': '<rootDir>/src/store/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@API/(.*)': '<rootDir>/src/API/$1',
    '@App/(.*)': '<rootDir>/src/App/$1',
    '@constants/(.*)': '<rootDir>/src/constants/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@saga/(.*)': '<rootDir>/src/saga/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@tests': '<rootDir>/src/tests/index.tsx',
  },
  modulePathIgnorePatterns: ['<rootDir>/.husky/', '<rootDir>/cypress/'],
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
}

export default config
