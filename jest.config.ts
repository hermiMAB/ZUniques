@@ -0,0 +1,8 @@
 // jest.config.js
 module.exports = {
   verbose: true,
   transform: {
     '^.+\\.tsx?$': 'ts-jest',
   },
   setupFilesAfterEnv: ['<rootDir>/polyfills.js'],
 };
