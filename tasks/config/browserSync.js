module.exports = function (grunt) {

    grunt.config.set('browserSync', {
        bsFiles: {
            src: ['.tmp/public/frontend/css/*.css', '.tmp/public/frontend/js/**/*.js', '.tmp/public/frontend/img/**/*.png', '.tmp/public/frontend/img/**/*.jpg', '.tmp/public/frontend/img/**/*.gif', '.tmp/public/frontend/views/**', '.tmp/public/backend/css/*.css', '.tmp/public/backend/js/**/*.js', '.tmp/public/backend/img/**/*.png', '.tmp/public/backend/img/**/*.jpg', '.tmp/public/backend/img/**/*.gif', '.tmp/public/backend/views/**']
        },
        options: {
            open: false,
            watchTask: true,
            proxy: "localhost:1337",
            port: 80
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
};