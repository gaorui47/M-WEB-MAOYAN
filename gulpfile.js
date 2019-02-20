
const gulp=require('gulp');
const webserver=require('gulp-webserver');
const sass=require('gulp-sass');
const watch=require('gulp-watch');
const Path=require('path');
const del=require('del');
const webpack=require('webpack-stream');
const {path,serverconfig,webpackConfig}=require('./config');


//复制html
gulp.task('copy-html',()=>{
    let {src,dist}=path;
    return gulp.src(src+'/*.html')
            .pipe(gulp.dest(dist))
});

//复制static文件
gulp.task('copy-static',()=>{
    let {static,dist}=path;
    return gulp.src(static+'/**/*')
            .pipe(gulp.dest(dist+'/static'))
});

//处理sass文件
gulp.task('compile-sass',()=>{
    let {src,dist}=path;
    return gulp.src(src+'/stylesheets/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest(dist+'/stylesheets'))
});

// 处理js文件
gulp.task('pack-js',()=>{
    let {src,dist}=path;
    return gulp.src(src+'/javascripts/**/*.js')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest(dist+'/javascripts'))
});

//开启开发服务器
gulp.task('webserver',()=>{
    let {dist}=path;
    return gulp.src(dist)
            .pipe(webserver(serverconfig))
});

//监听变化
gulp.task('watch',()=>{
    let {src,static,dist}=path;
    //监听html发生变化,就会执行copy-html函数 复制到dist文件夹里面
    gulp.watch(src+'/*.html',['copy-html']);
    gulp.watch(src+'/javascripts/**/*.js',['pack-js']);
    gulp.watch(src+'/stylesheets/**/*.css',['compile-sass']);
        // 监听static中静态资源的变化
        watch(src + '/static/**/*', (v) => {
            if ( v.event === 'unlink' ) { // 如果是删除文件
                // 将dist/static中的对应文件也删掉
                let _path = Path.resolve(dist + '/static/', v.path.split('\\static\\')[1])
                del(_path) // 删除
            } else {
                gulp.start(['copy-static']) // 执行复制静态文件的任务
            }
        })
});

gulp.task('default',['copy-static','copy-html','compile-sass','pack-js','watch','webserver'],()=>console.log('gulp'))