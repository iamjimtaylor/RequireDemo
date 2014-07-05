module.exports = function(grunt) {
  // Init grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    /**
    * Watch files for changes
    **/
    watch: {
      sass: {
        files: ["stylesheets/*.scss", "stylesheets/**/*.scss"],
        tasks: ["sass"],
        options: {
          livereload: true
        }
      },
      js: {
        files: ["javascripts/*.js", "javascripts/**/*.js"],
        options: {
          livereload: true
        }
      }
    },
    /**
    * Run node-sass
    **/
    sass: {
      dist: {
        options: {
          outputStyle: "compressed"
        },
        files: {
          "stylesheets/style.css": "stylesheets/style.scss"
        }
      }
    }
  });

  // Load grunt tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Grunt tasks
  grunt.registerTask("default", ["watch"]);
};
