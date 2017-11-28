'use strict';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: [
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ],
        files: [
            'Vendors/angularjs-1.6.6/*.js',
            'src/*.js',
            'tests/*.spec.js'
        ],
        reporters: ['progress']
        
    });
};
