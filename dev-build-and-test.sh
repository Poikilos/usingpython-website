#!/bin/sh
./export-html.sh
cd src
# ^ go here so we can use the same relative path as config.js to avoid confusion
cd ../../../www/expertmultimedia.com/usingpython
cd ..
# ^ go back one so that the subdirectory exists
if [ -f "`command -v python3`" ]; then
    python3 -m http.server 8000
else
    python -m SimpleHTTPServer 8000
fi

