# yong-ju.me
[![Build Status](https://travis-ci.org/sei40kr/yong-ju.me.svg?branch=master)](https://travis-ci.org/sei40kr/yong-ju.me)
[![Code Climate](https://codeclimate.com/github/sei40kr/yong-ju.me/badges/gpa.svg)](https://codeclimate.com/github/sei40kr/yong-ju.me)

My portfolio website.
Based on the source code generated by
[generator-yeogurt@2.0.0](https://github.com/larsonjj/generator-yeogurt).
Automatically built and deployed by Travis CI.

## Used Technologies
### JavaScript
- [Browserify](http://browserify.org/) with ES6/2015 support through [Babel](https://babeljs.io/)
- [Node](https://nodejs.org/)

### Styles
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

### Markup
- [Nunjucks](https://mozilla.github.io/nunjucks/)

### Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

### Server
- [BrowserSync](http://www.browsersync.io/)

### Linting
- [ESlint](http://eslint.org/)

### Automation
- [Gulp](http://gulpjs.com)

### Code Management
- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)

## Automated tasks
This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds.

|Command|Desciption|
|:---|:---|
|`gulp --production`|Same as `gulp serve --production` also run `gulp test` and  not boot up production server.|
|`gulp serve`|Compiles preprocessors and boots up development server.|
|`gulp serve --open`|Same as `gulp serve` but will also open up site/app in your default browser.|
|`gulp serve --production`|Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form.|
|`gulp test`|Lints all `*.js` file in the `source` folder using eslint.|
