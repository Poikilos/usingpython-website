---
footer: 'Created by Jake Gustafson 2015-2020. Training materials are released under the [Creative Commons Attribution Sharealike 3.0](https://creativecommons.org/licenses/by-sa/3.0/us/) license.'
---
# Using PyCharm for Kivy app development

PyCharm works very well with Kivy and for Kivy I recommend it above any
other IDE (Integrated Development Environment). PyCharm works with Kivy
very easily if you copy your kivy.bat and name the copy python.bat and
choose that as your Python. These instructions help you do that and
make that python.bat the default interpreter for default projects which
makes starting new projects easier.

### Configuring PyCharm Kivy 1.9.0 (Python 3)

[Install Kivy 1.9.0 for Python 3 first](installing-kivy.md)

Download and install PyCharm (Community Edition is distributed free
under Apache License) from
[jetbrains.com/pycharm](http://www.jetbrains.com/pycharm/)

Make a python.bat (the kivy.bat must be copied to a file named
python.bat for PyCharm to use kivy)

- Open your Kivy folder (such as `C:\Kivy-1.9.0-x86`)
- Select the kivy batch file such as kivy-3.4 (may just be named
  kivy.bat for some versions), then press Ctrl C (Hold Ctrl key on
  keyboard and press C once then let go of Ctrl) to **Copy**.
- Press Ctrl V to **Paste**.
- A new copy will appear, such as "kivy-3.4 - Copy.bat": right-click
  that, and click Rename.
- Change the name to `python.bat`.

Setting up PyCharm to use Kivy (your python.bat you made above):

- When you first open PyCharm, it will ask to import settings--you can just leave the default setting: do not import.
- When asked about Keymap scheme and other options, you can leave the defaults and push OK
- On the welcome screen, click "Configure," "Settings," "Default Project," "Project Interpreter"
- To the far right of "Project Interpreter:" click the gear button to choose your own, then "Add Local"
- Navigate to your python.bat you made, such as `C:\`, then `Kivy-1.9.0-py3.4-win32-x86`, then `python.bat`
- Wait for "Updating skeletons" for autocomplete to work (may take several minutes)

### Creating a Project

For each project, the first time you run a file you'll have to change
interpreter from "Default - None" to Python.bat (instruction are
below):

- Create Project (or File, New Project)
- Choose Interpreter (such as `3.4.3 at C:\Kivy-1.9.0-py3.4-win32-x86\python.bat`
- Name it such as kivyProjectTry1 (you can use an existing folder if you already have a Kivy program)

