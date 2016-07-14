'use strict';

module.exports = function(grunt){

  /* Configure
  ============================ */
  var configs = {   
    
    css_combine_files : [
      'src/vendor/css/bootstrap.min.css',
      'src/vendor/css/jquery.fullpage.min.css',
      'src/vendor/css/slick.css',
      'src/vendor/css/slick-theme.css',
      'src/vendor/css/jquery.countdown.css',
      'src/css/combined.css'],
    
    js_combine_files : [
      'src/vendor/js/jquery-1.10.1.min.js',
      'src/vendor/js/modernizr-2.6.2-respond-1.1.0.min.js',
      'src/vendor/js/bootstrap.min.js',
      'src/vendor/js/jquery.fullpage.min.js',
      'src/vendor/js/clipboard.min.js',
      'src/vendor/js/classie.js',
      'src/vendor/js/TweenMax.min.js',
      'src/vendor/js/slick.min.js',
      'src/vendor/js/jquery.plugin.js',
      'src/vendor/js/jquery.countdown.js',
      'src/js/main.js'],
    
    js_hint_files : [
      'src/js/main.js'],

    watch_files : [
      'src/less/*',
      'src/js/*',
      'src/vendor/css/*',
      'src/vendor/js/*']
  }

  /* Init
  ============================ */
  grunt.initConfig({
    less: {
      production: {
        files: {
          "src/css/combined.css" : "src/less/main.less"
        }
      }
    },
    jshint: {
      beforeconcat: configs.js_hint_files
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: configs.js_combine_files,
        dest: 'src/js/compiled.js',
      },
    },
    uglify: {
        my_target: {
          files: {
            'dist/js/compiled.min.js' : 'src/js/compiled.js'
          }
        }
    },
    cssmin: {
      combine: {
        files: {
          'dist/css/main.min.css' : configs.css_combine_files
        }
      }
    },
    watch: {
      options: {
        livereload: true
      }, 
      src: {
        files: configs.watch_files,
        tasks: ['build']
      }
    }
  });

  // Add plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-serve');

  // Register tasks
  grunt.registerTask('build', ['less','cssmin','concat','uglify','jshint']);
  grunt.registerTask('default', ['less','cssmin','concat','uglify','jshint']);

  grunt.event.on('watch', function(action, filepath) {
    grunt.log.writeln(filepath + ' has ' + action);
  });

};
