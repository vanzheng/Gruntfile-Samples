module.exports = function(grunt) {
    var _ = require("underscore");
    var htmlFiles = grunt.file.expand("*.html");
        htmlMapping = {};

    _.each(htmlFiles, function(file) {
        var distPath = file.replace(/(.*).html$/, "_output/$1.html");
        htmlMapping[distPath] = file;
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-processhtml");

    grunt.registerTask('default', ['less', 'processhtml', 'copy']);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    '_output/styles/main.css': 'styles/main.less'
                }
            }
        },
        processhtml: {
            dist: {
                files: htmlMapping
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['images/**'],
                    dest: '_output'
                }]
            }
        }
    });
}
