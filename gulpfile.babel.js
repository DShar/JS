import {src, dest, watch, parallel, series} from 'gulp';
import del from 'del';
import livereload from 'gulp-livereload';
import babel from 'gulp-babel';




// Build Directories
// ----
const dirs = {
  src: 'src',
  dest: 'build'
};



// File Sources
// ----
const sources = {
  scripts: `${dirs.src}/**/*.js`
};

// Scripts
export const buildScripts = () => src(sources.scripts)
  .pipe(babel({ presets: ['@babel/preset-env'] }))
  .pipe(dest(dirs.dest))
  .pipe(livereload());


// Clean
export const clean = () => del(['build']);


// Watch Task
export const devWatch = () => {
  livereload.listen();
  watch(sources.scripts, buildScripts);
};


// Development Task
export const dev = series(clean, buildScripts, devWatch);

// Serve Task
export const build = series(clean, buildScripts);

// Default task
export default dev;