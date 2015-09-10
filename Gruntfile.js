module.exports = function(grunt) {

    'use strict';

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                outputStyle: 'compressed'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dev/scss',
                    src: ['*.scss'],
                    dest: 'assets/css',
                    ext: '.css'
                }]
            }
        },
        browserSync: {
            bsFiles: {
                src: ['assets/css/*.css', 'index.html']
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        },
        watch: {
            css: {
                files: ['dev/scss/*.scss'],
                tasks: ['newer:sass:dist'],
                options: {
                    spawn: false
                }
            },
            processhtml: {
                files: ['dev/*.html', 'dev/template/*.html'],
                tasks: ['processhtml'],
                options: {
                    spawn: false
                }
            }
        }
    };

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-sass');

    grunt.initConfig(config);
    grunt.registerTask('default', ['sass', 'browserSync', 'watch']);

};
