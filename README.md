# gulp-tpl-to-js #
### 该gulp插件主要是将一个目录下的html文件内容生成到一个js文件当中，可以生成位commonjs、cmd、json格式的模板。

__安装:__ `npm install gulp-tpl-to-js --save-dev`
#### 使用方式：
###### 目录结构如下

> template

>> 1.html

>> 2.html

>>> d1

>>>> d1_1.html

>>>> d1_2.html

>>>>> d1_dd1

>>>>>> d1\_dd1_1.html

>>>>>> d1\_dd1_2.html 

###### 当生成的js文件中导出的对象结构跟目录结构是类似的，目录名对应为一个对象，文件名对应文件内容.

###### 示例代码

	var gulp = require('gulp');
	var tpl=require('gulp-tpl2js');
	gulp.task('default',function(done){
		tpl({
			dir:'./template',
			dest:'.template.js/',
            type:'cmd'
		});
		done();
	});
type 字段是可选的，不传入的时候为commonjs模块。