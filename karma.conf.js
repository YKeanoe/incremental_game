'use strict';

module.exports = function (config) {
    config.set({
        basePath: './',
        singleRun: true,
        autoWatch: false,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ],
        files: [
            'Vendors/angularjs-1.6.6/*.js',
            'src/*.js'
        ]
    });
};
