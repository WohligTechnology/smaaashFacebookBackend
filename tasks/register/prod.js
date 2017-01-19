/**
 * `prod`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist will be executed instead of `default` when
 * your Sails app is lifted in a production environment (e.g. using
 * `NODE_ENV=production node app`).
 *
 * For more information see:
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/prod-js
 *
 */
module.exports = function(grunt) {
    grunt.registerTask('prod', [
        'clean:upload', 'copy:upload', 'clean:uploadApp',
        'copy:assets', 'clean:backend', 'sass:backendDevelopment', 'copy:backendDevelopment', 'copy:jsBackendDevelopment', 'copy:backendDevelopment',
        'clean:development', 'copy:production', 'sass:production', 'concat:production', 'htmlmin', 'uglify:production', 'cssmin:production', 'clean:productionFiles'
    ]);
};
