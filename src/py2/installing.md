---
footer: 'Created by Jake Gustafson 2015. Training materials are released under the [Creative Commons Attribution Sharealike 3.0](https://creativecommons.org/licenses/by-sa/3.0/us/) license.'
---

# Installing Python 2

Here is how you can get setup with python 2.7 in Windows:

- Install [python 2.7](https://www.python.org/downloads/windows/) from
  python.org (choose Python2 then **x86 msi installer** for best
  compatibility)--must be done before installing versions of libraries
  such as Pygame, wxPython, or Panda3D mentioned in this guide.
  - You must select the add to system PATH option so that other programs
    can find Python, but *only* if you plan *not* to install Python 3
    on the same computer. You can make a new user on your computer such
    as python2 to avoid the issue and install to path without causing a
    version conflict (do not install for all users in that case).

To make an IDLE icon on the desktop go to Start, All Programs, Python
2.7, RIGHT-click on "IDLE (Python GUI)" then click "Send To", "Desktop
(Create Shortcut)". The icon links to:
C:\Python27\Lib\idlelib\IDLE.BAT

(may be in C:\Program Files (x86)\Python27
