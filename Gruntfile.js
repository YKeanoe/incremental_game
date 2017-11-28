'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
            options: {
                configFile: 'karma.conf.js',
                singleRun: true,
                autoWatch: true
            }
        }
    });

    grunt.registerTask('test', ['jshint', 'karma:unit']);

    // Automatically load in all Grunt npm tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
