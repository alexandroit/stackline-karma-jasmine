module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['karma-jasmine', 'dots'],

    files: [
      'src/*.js',
      'test/*.js'
    ],

    browsers: ['StacklineChrome'],
    customLaunchers: { StacklineChrome: { base: 'ChromeHeadless', flags: ['--no-sandbox'] } },

    singleRun: true,

    plugins: [
      'karma-chrome-launcher',
      process.env.STACKLINE_TEST_PACKAGE || require.resolve('./')
    ]
  })
}
