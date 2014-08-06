react-requirejs-sample
======================

Easy integration of React into existing RequireJS application

App creation
------------

- `npm install -g yo`
- `npm install -g generator-webapp`
- `npm install -g jshint`
- `npm install -g eslint`
- `yo webapp`

RequireJS
---------

- `bower install underscore --save`
- `bower install requirejs --save`
- `npm install grunt-requirejs --save-dev`
- Gruntfile.js - `grunt.loadNpmTasks('grunt-requirejs');`, add `requirejs` task
- Gruntfile.js - disable bowerInstall

After checkout
--------------

- `npm install`
- `bower install`
- `cd hooks` then run `create-links.cmd` as administrator
