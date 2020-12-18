module.exports = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            diagnostics: true,
        },
    },
    testMatch: ['<rootDir>/packages/**/*.test.ts'],
}
