/**
 * `concat`
 *
 * ---------------------------------------------------------------
 *
 * Concatenates the contents of multiple JavaScript and/or CSS files
 * into two new files, each located at `concat/production.js` and
 * `concat/production.css` respectively in `.tmp/public/concat`.
 *
 * This is used as an intermediate step to generate monolithic files
 * that can then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-concat
 *
 */


module.exports = function(grunt) {

    grunt.config.set('concat', {

        development: {
            options: {
                sourceMap: false
            },
            src: require('../../frontend/files.js'),
            dest: '.tmp/public/frontend/js/main.js'
                // dest: '.tmp/public/concat/production.js'
        },
        production: {
            options: {
                sourceMap: false
            },
            src: require('../../frontend/files.js'),
            dest: '.tmp/public/frontend/js/main.js'
                // dest: '.tmp/public/concat/production.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
