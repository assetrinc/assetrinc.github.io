var path = require("path");

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-gitbook');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        'gitbook': {
            development: {
                input: "./",
                github: "assetrinc/assetrinc"
            }
        },
        'gh-pages': {
            options: {
                base: '_book',
                branch: 'master',
                user: {
                    name: 'Grunt GitBook',
                    email: 'grunt-gh-pages@assetrinc.github.io'
                }
            },
            src: ['**']
        },
        'clean': {
            files: '.grunt'
        }
    });

    grunt.registerTask('publish', [
        'gitbook',
        'gh-pages',
        'clean'
    ]);
    grunt.registerTask('default', 'gitbook');
};
