/**
 * Created by dp on 2015/6/12.
 */
var gulp=require('gulp'),
    tpl=require('../tpl.js');
gulp.task('default',function(done){
    tpl({
        dir:'./template',
        dest:'./template.js',
        type:'commonjs'
    });
    done();
});