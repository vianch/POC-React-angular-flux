'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
           options: {
             banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
               '<%= grunt.template.today("yyyy-mm-dd") %> */'
           },
           my_target: {
             files: {
               'app/module/react-angular.min.js': ['app/module/react-angular.js']
             }
           }
         },

        // Watches for changes in files and runs certain Grunt tasks.
        watch: {
            js: {
                files: ['app/module/index.js'],
                tasks: ['browserify','uglify']
            },
            styles: {
                files: ['app/styles/less/*.less'],
                tasks: ['less','cssmin']
            } 
        },
        // Compiles ES6 modules so we can use it in the browser.
        // I am using its transform option so it will also transpile the code from ES6 to JavaScript with Babel.
        browserify: {
            dist: {
                files: {
                    'app/module/react-angular.js': ['app/module/index.js'],
                },
                options: {
                    transform: ['babelify'],
                    browserifyOptions: {
                        debug: false
                    }
                }
            }
        },

        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "app/styles/styles.css": "app/styles/less/react-angular.less"
                }
            }
        },

         cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'app/styles',
                    src: ['*.css', '!*.min.css'],
                    dest: 'app/styles',
                    ext: '.min.css'
                }]
            }
        },

    });

    //libs
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //custom taks
    grunt.registerTask('default', []);

};