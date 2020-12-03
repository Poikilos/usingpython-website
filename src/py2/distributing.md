---
footer: 'Created by Jake Gustafson 2015. Training materials are released under the [Creative Commons Attribution Sharealike 3.0](https://creativecommons.org/licenses/by-sa/3.0/us/) license.'
---

# Distributing Your Python 2 Program

If you're not concerned with your user's level of technical skill, you
can just zip your whole folder & give it to them, & tell them to get
python 2.7 (and pygame or wxPython or Panda3D end-user runtime--if any
apply to your program). Otherwise, you can make your program easier to
install using the instructions below.

To Make installers so that end users only need a single file to install
your program, you may want to try [Zero-Install](https://0install.net)
from 0install.net and use it to not only prepackage the whole folder
that contains your program & source files, but also prepackage python
and pygame (or python and wxPython, or Panda3D end-user runtime)
installers into one installer file for them. Don't forget to tell
Zero-Install to make an icon for your pyw, **and to instruct the user**
(in a readme file or something that you can tell Zero-Install to show)
**to choose `C:\Python27\pythonw.exe` if Windows asks which program to
use for pyw files** (`C:\Python27\python.exe` for py files). Change
Python27 to the directory where you installed Python 2 if it differs.

If you didn't tell Zero-Install to install python & pygame (or python &
wxPython, or python & Panda3D end-user runtime) automatically, you'll
also have to instruct the user to install them from the folder where
they installed your program as long as you put the two installers in
the same folder as your program before creating the installer
(otherwise you'll have to give the user the bulleted steps above,
except wxGlade--and they won't need wxPython if you didn't use that in
your program, and they won't need pygame if you didn't use that in your
program).

Don't forget to include a license with your program! If you are using
python, your program is already open source (unless you made it into an
executable with [py2exe](https://www.py2exe.org) from py2exe.org & did
not include the py nor pyw files with your installer), so unless your
lawyer writes a license for your program, you may want to do a web
search for "open source licenses" and pick one that suits your needs
such as GPL (or perhaps "shared source" if you want to retain sole
distribution rights to your code).

Remember to include a readme file with your program and/or code
comments in each python source code file that state with **credits**!
Make sure you include your name, names of any creators of content
(images, sounds, music, etc), and website and/or contact info if
desired. You never know how far your program will go. I once made a CD
for one person, of someone else's program, merely adding an autorun
icon and programming a simple autorun menu, and that disc got copied
across the PSU campus from just that one friend! It spread at least
that far for sure, and this was even in the days of dial-up when dsl
was barely out. I have no idea how far copies of my disc menu & icon
went after that. Adding a friendly installer can ensure that whoever
tries to use your program can use it and and that will increase your
chances that they will recommend your program to others.
