# usingpython-website
This is the ViewPress backend data for the Using Python Training Series
Official Website.

## How to make a site like this one
- See
  [poikilos.org/use-vuepress-to-build-static-html-files](https://poikilos.org/use-vuepress-to-build-static-html-files/)
  to setup the repository.

### Editing
(These instructions assume that you have cloned the repo as described
in the poikilos.org article.)

- Edit the page on GitHub
- Go to the server console and run:

```
# cd to the correct directory or do
# (set the WWW_USER variable then):
# sudo su $WWW_USER -s /bin/bash
# (set the SUBDIR and WWW_HOME variables then:)
# cd $WWW_HOME
# wget -O vuepress-vars-expertmm-subdirs.rc https://raw.githubusercontent.com/poikilos/usingpython-website/main/doc/HOME/vuepress-vars-expertmm-subdirs.rc
# source vuepress-vars-expertmm-subdirs.rc $SUBDIR
# for help with the meaning of the variables, see the article
cd $WWW_HOME/$MAINSITE-meta/$SUBDIR-meta
git pull
./export-html.sh
```
