module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'Vendors/angularjs-1.6.6/angular.js',
            'Vendors/angularjs-1.6.6/angular-route.js',
            'Vendors/angularjs-1.6.6/angular-resource.js',
            'Vendors/angularjs-1.6.6/angular-mocks.js',
            'Vendors/ifvisible.js/*.js',
            'src/app.js',
            'src/*.js',
            'spec/*.spec.js'
        ],
        exclude: [
        ],
        preprocessors: {
            './src/*.js': ['jshint'],
            './spec/*.spec.js': ['jshint']
        },
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
  