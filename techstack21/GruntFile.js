
var mozjpeg = require('imagemin-mozjpeg');
var imageminPngquant = require('imagemin-pngquant');

module.exports = function (grunt) {
    grunt.initConfig({

        clean: {
            folder: ['dist/**'],
            subfolders: ['dist/img/**'],
            contents: ['dist/**/**/**/**'],
            all_css: ['dist/**/*.css'],
            all_img: ['dist/img/**/.*']
        },

        imagemin: {// Task
            static: {// Target
                options: {// Target options
                    optimizationLevel: 7,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg(), imageminPngquant()]
                }
            },
            dynamic: {// Another target
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'public_html/', // Src matches are relative to this path
                    src: ['assets/img/**/*.{png,jpg,gif,svg}'], // Actual patterns to match
                    dest: './'                  // Destination path prefix
                }]
            }
        },

        cssmin: {
            options: {
                banner: '/*! MyLib.css 1.0.0 | techstack21 Technologies (techstack21) | MIT Licensed */',
                'processImport': false
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'public_html/',
                    src: ['assets/css/*', 'assets/vendor/css/*', '!*.min.css'],
                    dest: './',
                    ext: '.min.css'
                }]
            }
        },

        //        uglify: {
        //            build: {
        //                files: [{
        //                        expand: true,
        //                        cwd: 'public_html/',
        //                        src: 'assets/js/*.js',
        //                        dest: 'dist/'
        //                    }]
        //            }
        //        },

        //        riot: {
        //            options: {
        //                concat: true
        //            },
        //            dist: {
        //                expand: true,
        //                cwd: 'public_html/',
        //                src: 'Tags/*.tag',
        //                dest: 'dist/',
        //                ext: '.js'
        //            }
        //        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-riot');
    grunt.registerTask('default', ['clean', 'imagemin', 'cssmin']);
};