module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      angular: {
        files: ['angular/appModule.js', 'angular/*/*.js'],
        tasks: ['jshint', 'uglify']
      },
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['jshint']
      }, 
      sass: {
        files: ['sass/*.sass', 'sass/*.scss'],
        tasks: ['compass', 'cssbeautifier', 'cssmin']
      } 
    },
    jshint: {
      files: ['Gruntfile.js', 'angular/appModule.js', 'angular/*/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      'angular/app.min.js': ['angular/appModule.js', 'angular/*/*.js']
    },
    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          outputStyle: 'nested',
          environment: 'production'
        }
      }
    },
    cssbeautifier: {
      files: [
        'css/*.css'
      ] 
    },
    cssmin: {
      target: {
        files: {
          'css/main.min.css': ['css/*.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-cssbeautifier');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'uglify']);

};