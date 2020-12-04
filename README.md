# usingpython-website
This is the ViewPress backend data ("source code") for the Using Python
Training Series Official Website.

The website is at
[expertmultimedia.com/usingpython](https://expertmultimedia.com/usingpython).


## How to make a site like this one
These instructions are for making "sites" that are subdirectories of
the main website. For making VuePress the root of your website (to make
the domain go to the VuePress static html), you can find some tips in
the guide, but you will have to change the commands.
- See
  [poikilos.org/use-vuepress-to-build-static-html-files](https://poikilos.org/use-vuepress-to-build-static-html-files/)
  to setup the repository.

### Editing & Publishing
(These instructions assume that you have cloned the repo as described
in the poikilos.org article.)

#### First-time setup
1. Go to the server console and run:

```bash
# cd $WWW_HOME
# wget -O vuepress-vars-expertmm-subdirs.rc https://raw.githubusercontent.com/poikilos/usingpython-website/main/doc/HOME/vuepress-vars-expertmm-subdirs.rc
#
# For help with the meaning of the variables, see the article.
```

cd $WWW_HOME/$MAINSITE-meta/$SUBDIR-meta

2. Edit the vuepress-vars-expertmm-subdirs.rc file according to the
   following instructions (the example for this site assumes you are
   using Mail-in-a-Box, so that is why the following differ so much from
   the example file):
   - `WWW_USER` is usually `www-data`
   - `WWW_GROUP` is usually `www-data`
   - `WWW_HOME` is usually `/var/www`
   - `MAINSITE` is the name of your site (subdirectory under
     `$WWW_HOME`), usually `html`
   - `PUBLIC_HTML` is usually `$WWW_HOME/$MAINSITE`
   - `SUBDIR_REPO` is the name of your repository with the following
     at the base of the repo (or of an existing blank repository
     before you follow the instructions in the article):
     - `src/.vuepress`
     - `package.json`

3. Change `WWW_USER` and `SUBDIR` in the instructions below.

#### Edit & Publish

1. Edit the page on GitHub.

2. Change to the www user.

```bash
WWW_USER=user-data
sudo su $WWW_USER -s /bin/bash
```

3. Export html as the www user.

```bash
SUBDIR=usingpython
source vuepress-vars-expertmm-subdirs.rc $SUBDIR
cd $WWW_HOME/$MAINSITE-meta/$SUBDIR-meta
git pull
./export-html.sh
```

