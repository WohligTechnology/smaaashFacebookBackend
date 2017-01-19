/**
 * `watch`
 *
 * ---------------------------------------------------------------
 *
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * Watch for changes on:
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function (grunt) {

    grunt.config.set('watch', {
        sass: {
            // Assets to watch:
            files: ['frontend/sass/**'],
            tasks: ['sass:development']
        },
        copyViews: {
            // Assets to watch:
            files: ['frontend/views/**'],
            tasks: ['copy:development']
        },
        copyImg: {
            // Assets to watch:
            files: ['frontend/img/**'],
            tasks: ['copy:development']
        },
        copyFonts: {
            // Assets to watch:
            files: ['frontend/fonts/**'],
            tasks: ['copy:development']
        },
        js: {
            // Assets to watch:
            files: ['frontend/js/**'],
            tasks: ['copy:jsDevelopment']
        },
        backendSass: {
            // Assets to watch:
            files: ['backend/sass/**'],
            tasks: ['sass:backendDevelopment']
        },
        backendCopyViews: {
            // Assets to watch:
            files: ['backend/views/**'],
            tasks: ['copy:backendDevelopmentViews']
        },
        backendCopyImg: {
            // Assets to watch:
            files: ['backend/img/**'],
            tasks: ['copy:backendDevelopmentImg']
        },
        backendCopyFonts: {
            // Assets to watch:
            files: ['backend/fonts/**'],
            tasks: ['copy:backendDevelopmentFonts']
        },
        backendCopyPageJson: {
            // Assets to watch:
            files: ['backend/pagejson/**'],
            tasks: ['copy:backendDevelopmentPageJson']
        },
        backendJs: {
            // Assets to watch:
            files: ['backend/js/**'],
            tasks: ['copy:jsBackendDevelopment']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};