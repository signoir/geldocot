/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/7/19 6:44 AM
 */

module.exports = function (config) {
  config.set({
    basePath                : '',
    frameworks              : ['jasmine', '@angular-devkit/build-angular'],
    plugins                 : [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client                  : {
      clearContext: false
    },
    coverageIstanbulReporter: {
      dir                  : require('path').join(__dirname, 'coverage'),
      reports              : ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    angularCli              : {
      environment: 'dev'
    },
    reporters               : ['progress', 'kjhtml'],
    port                    : 9876,
    colors                  : true,
    logLevel                : config.LOG_INFO,
    autoWatch               : true,
    browsers                : ['CustomHeadlessChrome'],
    singleRun               : true,
    customLaunchers         : {
      CustomHeadlessChrome: {
        base : 'ChromeHeadless',
        flags: ['--disable-translate', '--disable-extensions', '--no-sandbox']
      }
    },
  });
};
