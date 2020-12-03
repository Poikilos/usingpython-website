#!/bin/sh
cd src || exit 1
../node_modules/.bin/vuepress build
# ^ You must run vuepress directly! If you use yarn, it will cd to the
#   root of the repo which is wrong (You'll get bad absolute links
#   including to css; it won't use your .vuepress/config.js at all).
