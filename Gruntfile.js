module.exports = function (grunt) {


  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 5000,
          base: 'src',
          keepalive: true
        }
      },
    },
    watch: {
      angular: {
        files: ['src/app/**/*.js'],
        tasks: ['jshint']
      },
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['src/content/sass/*.scss'],
        tasks: ['compass', 'cssbeautifier']
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/app/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    uglify: {
      'dest/js/app.min.js': [
        'src/app/app.module.js',
        'src/app/app.routes.js',
        'src/app/app.controller.js',
        'src/app/**/*.js'
        ]
    },
    compass: {
      dist: {
        options: {
          sassDir: 'src/content/sass',
          cssDir: 'src/content/css',
          outputStyle: 'nested',
          environment: 'production'
        }
      }
    },
    cssbeautifier: {
      files: [
        'src/content/css/*.css'
      ]
    },
    cssmin: {
      target: {
        files: {
          'dest/css/main.min.css': ['src/content/css/*.css']
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-cssbeautifier');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['jshint','uglify', 'cssmin']);
  

};