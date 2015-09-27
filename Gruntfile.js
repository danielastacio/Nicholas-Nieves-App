module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      angular: {
        files: ['development/app/**/.js'],
        tasks: ['jshint']
      },
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['jshint']
      }, 
      sass: {
        files: ['development/content/sass/*.scss'],
        tasks: ['compass', 'cssbeautifier']
      } 
    },
    jshint: {
      files: ['Gruntfile.js', 'development/app/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      'production/app.min.js': ['development/app/**/.js']
    },
    compass: {
      dist: {
        options: {
          sassDir: 'development/content/sass',
          cssDir: 'development/content/css',
          outputStyle: 'nested',
          environment: 'production'
        }
      }
    },
    cssbeautifier: {
      files: [
        'development/content/css/*.css'
      ] 
    },
    cssmin: {
      target: {
        files: {
          'development/content/css/main.min.css': ['development/content/css/*.css']
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

  grunt.registerTask('default', ['jshint']);

};