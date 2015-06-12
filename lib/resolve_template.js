/**
 * Created by dp on 2015/5/11.
 */
module.exports=function(source){
    var fs = require('fs');
    var _p=require('path');
    var obj=(function(dir){
        var ex={},
            stat,
            path;
        var files=fs.readdirSync(dir);
        for(var i= 0,len=files.length;i<len;++i){
            path=_p.join(dir,files[i]);
            stat=fs.statSync(path);
            if(stat.isFile()){
                ex[files[i]]=fs.readFileSync(path).toString();
            }
            if(stat.isDirectory()){
                ex[files[i]]=arguments.callee(_p.join(dir,files[i]));
            }
        }
        return ex;
    })(source);
    return JSON.stringify(obj);
};
