---
footer: 'Created by Jake Gustafson 2015-2020. Training materials are released under the [Creative Commons Attribution Sharealike 3.0](https://creativecommons.org/licenses/by-sa/3.0/us/) license.'
---
# Setting up Geany for Pygame (Python 3)

### Automated Setup

- Install using the Poikilos installer at
  [expertmultimedia.com/downloads/setup-Geany-Pygame-Python32.exe](http://expertmultimedia.com/downloads/setup-Geany-Pygame-Python32.exe)
- During setup, please read the instructions under "This program
  requires" to install python and a matching version of pygame from the
  web.

### Manual Setup (optional)

I don't recommend this method since it changes your default Geany
installation to use an older version of python, but you can easily
change the Execute string to something else to undo this but still keep
Python indentation:

- Download python 3.2 from
  [python.org/ftp/python/3.2.5/python-3.2.5.msi](https://www.python.org/ftp/python/3.2.5/python-3.2.5.msi)
  (must be 3.2 for pygame to work) and install (during install, choose
  install for All Users)
- Download Pygame 1.9.2 py3.2 (make sure you get python 3.2 version)
  from
  [pygame.org/ftp/pygame-1.9.2a0.win32-py3.2.msi](http://pygame.org/ftp/pygame-1.9.2a0.win32-py3.2.msi)
  and install
- Download Geany from the "File" column in the "Windows" row on
  [geany.org/download/releases/](https://geany.org/download/releases/)
  such as [1.37](http://download.geany.org/geany-1.37_setup.exe)
  and install it.
- In Geany, change options for python: open a python file or save the
  untitled file to untitled.py (in order to be able to change py file
  settings), then click Edit, Preferences
  - Click the "Editor" side tab., then click the "Indentation" tab.
  - For Type choose "Spaces"
  - Make sure tab width is set to 4 spaces.
  - Make sure "Tab key indents" is unchecked.
  - For your benefit, in the "Display" side tab you can check "Show indentation guides"
  - On "Files" side tab, make sure "Replace tabs by space" is checked
  - OK
- To use the new settings for the current file, Click "Project," "Apply
  Default Indentation"
