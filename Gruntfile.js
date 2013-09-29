"use strict";
module.exports = function(grunt){

	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON( "package.json" ),

		cssmin: {
			minify: {
			    expand: true,
			    cwd: 'css/',
			    src: [ '*.css', '!*.min.css' ],
			    dest: 'css/',
			    ext: '.min.css'
			  },
			add_banner: {
				options: {
					report : "min",
					banner: "/*! \n" +
							" * <%= pkg.name %> \n" +
							" * Luiz Felipe Copyright (<%= grunt.template.today(' dd-mm-yyyy, HH:MM ') %>) \n" +
							" */"
				},
				files: {
					"css/style.min.css" : "css/style.min.css"
				}
			}
		},

		csslint: {
			strict: {
				options: {
					'import': 2,
					'ids': false,
					'box-sizing': false,
					'outline-none': false
				},
				src: [ 'css/style.css' ]
			}
		},

		 uglify: {
		 	options: {
		 		report: 'min',
		 		banner: '/*! \n' +
		 				' * <%= pkg.name %> <%= pkg.version %> \n' +
		 				' */ \n'
		 	},
		    my_target: {
				files: {
					'js/script.min.js': [ 'js/script.js' ]
				}
		    }
		}

	});

	// Dependences
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-csslint' );
	//grunt.loadNpmTasks( 'grunt-contrib-uglify' );

	// Defaul task
	grunt.registerTask( 'default', [ 'cssmin' ] );

	// Run testes
	grunt.registerTask( 'lint', [ 'csslint' ] );
};