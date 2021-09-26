rm -rf dist &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'update' &&
git remote add origin git@github.com:tgbf2674/wx-cash-website.git &&
git push --force origin master  &&
cd ..
