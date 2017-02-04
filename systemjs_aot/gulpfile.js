const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
const SystemBuilder = require('systemjs-builder');

gulp.task('aot-bundle', function () {
    const builder = new SystemBuilder();

    builder.loadConfig('./aot/systemjs.config.js')
        .then(function () {
            return builder.buildStatic('aot/app/boot-aot.js', './aot/dist/bundle.js', {
                encodeNames: false,
                mangle: false,
                minify: true,
                rollup: true,
                sourceMaps: true
            });
        })
});

gulp.task('copy-from-ag-grid', () => {
    return gulp.src(['../../ag-grid/*', '../ag-grid/dist/**/*'], {base: '../../ag-grid'})
        .pipe(gulp.dest('./node_modules/ag-grid'));
});

gulp.task('copy-from-ag-grid-enterprise', () => {
    return gulp.src(['../../ag-grid-enterprise/*', '../../ag-grid-enterprise/dist/**/*'], {base: '../../ag-grid-enterprise'})
        .pipe(gulp.dest('./node_modules/ag-grid-enterprise'));
});

gulp.task('copy-from-ag-grid-ng2', () => {
    return gulp.src(['../../ag-grid-ng2/*', '../../ag-grid-ng2/dist/**/*'], {base: '../../ag-grid-ng2'})
        .pipe(gulp.dest('./node_modules/ag-grid-ng2'));
});

gulp.task('clean-nm-ag-grid-enterprise', () => {
    del(['node_modules/ag-grid-enterprise', '!node_modules']);
});

gulp.task('clean-nm-ag-grid', () => {
    del(['node_modules/ag-grid', '!node_modules']);
});

gulp.task('copy-nm-dirs', (callback) => {
    runSequence('copy-from-ag-grid', 'copy-from-ag-grid-enterprise', callback);
});

gulp.task('watch', ['copy-nm-dirs'], () => {
    gulp.watch(['../ag-grid/dist/**/*', '../ag-grid/src/**/*'], ['copy-from-ag-grid']);
    gulp.watch(['../ag-grid-enterprise/dist/**/*', '../ag-grid-enterprise/src/**/*'], ['copy-from-ag-grid-enterprise']);
});