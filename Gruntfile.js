/**
 * Created by Gonzalo on 8/23/2015.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        name: 'small',
                        width: 320,
                        height: 240
                    },{
                        width: 900,
                        suffix: '_large_1x',
                        quality: 50
                    },{
                        name: "large",
                        width: 1024,
                        separator: "-",
                        suffix: "_x2",
                        quality: 0.6
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images/',
                    dest: 'images/'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);

};
