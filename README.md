Easy integration of React into existing RequireJS application
=============================================================

App creation
------------

- `npm install -g yo`
- `npm install -g generator-webapp`
- `yo webapp`

Pre-commit hook
---------------
- `npm install -g jshint`
- `npm install -g jsxhint`
- `npm install -g eslint`
- `npm install doctrine --save-dev`

RequireJS
---------

- `bower install underscore --save`
- `bower install requirejs --save`
- `npm install grunt-requirejs --save-dev`
- Gruntfile.js - `grunt.loadNpmTasks('grunt-requirejs');`, add `requirejs` task
- Gruntfile.js - disable bowerInstall

React
-----
- `bower install react --save`
- download and install https://github.com/philix/jsx-requirejs-plugin
- add paths to `require.config()` in main.js and Gruntfile.js
- Gruntfile.js - modify watch, requirejs tasks
- `npm install grunt-jsxhint --save-dev`

After checkout
--------------

- `npm install`
- `bower install`
- `cd hooks` then run `create-links.cmd` as administrator

Useful links
------------

- [React docs](http://facebook.github.io/react/docs/getting-started.html)
- [JSX-RequireJS plugin](https://github.com/philix/jsx-requirejs-plugin)
- [ESLint](http://eslint.org/)
- [ESLint - full list of .eslintrc options](https://github.com/eslint/eslint/blob/master/conf/eslint.json)
- [JSHint](http://www.jshint.com/docs/)
- [JSHint - full list of .jshintrc options](https://github.com/jshint/jshint/blob/master/examples/.jshintrc)
- [JSXHint](https://github.com/STRML/JSXHint)
- [JSXHint for Grunt](https://github.com/tillarnold/grunt-jsxhint)
- [Yeoman and Require.js in 2014](http://webdesignporto.com/3-steps-to-fully-automatized-javascript-environment-with-yeoman-and-require-js-for-lazy-people/)
