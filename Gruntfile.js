module.exports = function(grunt) {

		// Project configuration.
		grunt.initConfig ({

    jshint: {
      files: ['js/*.js', 'Gruntfile.js']  
    },

		sass: {
      		options: {
        		sourceMap: true
       		},
          dist: {
       			files: {
          			'css/style.css': 'sass/style.sass'
        		}
     		}
    	},

    browserSync: {
      bsFiles: {
        src : ['css/*.css', 'js/*.js', '*.html']
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./"
        }
      }
    },

    watch: {
    	scripts: {
        files: ['sass/*.sass', 'js/*.js', 'Gruntfile.js'],
        tasks: ['sass', 'jshint'],

    		options: {
    			spawn: false
    		},
    	}
    }



		});
		// Load the plugins tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-browser-sync');    
    grunt.loadNpmTasks('grunt-contrib-watch');



		// Default task(s).
		grunt.registerTask('default', ['jshint', 'sass', 'browserSync', 'watch']);
};