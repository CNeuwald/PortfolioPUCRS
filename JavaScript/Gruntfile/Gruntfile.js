module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
          build: {
              src: 'src/app.js',
              dest: 'build/app.min.js'
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify'); // Load the plugin that provides the "uglify" task
  grunt.registerTask('default', ['uglify']); // Default task(s)
};

console.log('Gruntfile.js loaded');

  