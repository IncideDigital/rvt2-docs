set -e

./autodoc.sh

vuepress build

# navigate into the build output directory
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push git@github.com:IncideDigital/rvt2-docs.git master:gh-pages

cd -
