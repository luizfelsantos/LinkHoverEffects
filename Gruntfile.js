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
					banner: "/* \n" +
							" * Link Hover Effects (<%= grunt.template.today(' dd/mm/yyyy, HH:MM ') %>) \n" +
							" * Copyright (C) 2013 Luiz Felipe dos Santos \n" +
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
		}

	});

	// Dependences
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-csslint' );

	// Defaul task
	grunt.registerTask( 'default', [ 'cssmin' ] );

	// Run tests
	grunt.registerTask( 'lint', [ 'csslint' ] );
};