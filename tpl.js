var gulpUtil=require('gulp-util'),
    through2=require('through2'),
    fs=require('fs'),
    util=require('util'),
    resolve_template=require('./lib/resolve_template');
module.exports=function(options){
  if(!options||!options.hasOwnProperty('dir')||!options.hasOwnProperty('dest')) {
      var err=new gulpUtil.PluginError('gulp-tpl2js','expect option path or dest');
      gulpUtil.log(err);
      return false;
  }
    options.type=options.type||'commonjs';
    var typeAction={
        'commonjs':'module.exports=%s;',
        'cmd':'define(function(require,exports,module){module.exports=%s;});',
        'json':'%s'
    };
  var renderedStr=resolve_template(options.dir);
  fs.writeFileSync(options.dest,util.format(typeAction[options.type],renderedStr));
};
