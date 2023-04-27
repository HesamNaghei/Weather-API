import type { JestConfigWithTsJest } from 'ts-jest'

// Sync object
const config: JestConfigWithTsJest = {
    verbose: true,
    preset: 'ts-jest/presets/js-with-ts-esm',
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    transform: {
        '^.+\\.ts?$': ['ts-jest', { useESM: true }],
    },
    setupFilesAfterEnv: ['./tests/bootstrap.ts']
};
export default config;
