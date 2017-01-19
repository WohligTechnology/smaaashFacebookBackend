/**
 * `uglify`
 *
 * ---------------------------------------------------------------
 *
 * Minify client-side JavaScript files using UglifyJS.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

    grunt.config.set('uglify', {
        options: {
            mangle: false
        },
        production: {
            files: {
                '.tmp/public/frontend/js/main.min.js': ['.tmp/public/frontend/js/main.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
