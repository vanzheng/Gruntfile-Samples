module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            options: {
                process: function (content, srcpath) {
			    	return content.replace(/body/g,"body_body");
			    },
                //noProcess: true
            },
            onefile: {
            	src: 'css/cat_cellphone.css',
            	dest: 'dest/css/cat_cellphone.css'
            },
            twofile: {
            	// File object.
            	files: {
            		'dest/css/wallet/post.min.css': 'css/wallet/post.min.css',
            		'dest/css/wallet/set_pay.css' : 'css/wallet/set_pay.css'
            	}
            },
            twoanotherfile: {
            	// File array
            	files: [
            		{src: 'images/account-tips-bg.png', dest: 'dest/images/account-tips-bg.png'},
            		{src: 'images/account-tips-bg02.png', dest: 'dest/images/account-tips-bg02.png'}
            	]
            },
            allfiles: {
            	files: [
            		{src: 'css/**/*', dest: 'dest/'},
            		{src: 'images/**/*', dest: 'dest/'}
            	]
            },
            flatteningfiles: {
            	files: [
            		{expand: true, cwd: 'css/', src: '**/*', dest: 'dest/', flatten: true, filter: 'isFile'},
            		{expand: true, cwd: 'images/', src: '**/*', dest: 'dest/', flatten: true, filter: 'isFile'}
            	] 
            }
        }
    });

    // Load the plugin that provides the "copy" task.
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['copy']);
};
