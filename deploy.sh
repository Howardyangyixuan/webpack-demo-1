yarn build && 
git checkout gh-pages &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist 
ga . &&
gc -m 'update' &&
gp