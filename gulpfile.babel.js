import gulp from 'gulp';
import ts from 'gulp-typescript';
import del from 'del';

const tsProj = ts.createProject('tsconfig.json');

gulp.task('clean', () => {
	del.sync('./bin');
});

gulp.task('ts', ['clean'], () => {
	const tsResult = tsProj.src()
		.pipe(ts(tsProj));
	return tsResult.js.pipe(gulp.dest('./bin'));
});

gulp.task('watch', () => {
	gulp.watch('./src/*.ts', ['ts']);
});

gulp.task('default', ['watch', 'ts']);