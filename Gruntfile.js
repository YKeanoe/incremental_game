'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            dev: {
                singleRun: true,
                autoWatch: true
            },
            prod: {
                singleRun: true
            }
        }
    });

    grunt.registerTask('test', ['jshint', 'karma']);

    // Automatically load in all Grunt npm tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
