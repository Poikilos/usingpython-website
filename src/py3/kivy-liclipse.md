---
footer: 'Created by Jake Gustafson 2015-2020. Training materials are released under the [Creative Commons Attribution Sharealike 3.0](https://creativecommons.org/licenses/by-sa/3.0/us/) license.'
---
# Using LiClipse IDE for Kivy Mobile Development

The entirety of these instructions would not be possible without the
"Pydev Adventures" article by Zadrozny (2014). I added several
troubleshooting tips and clarifications.

LiClipse is a fork of Eclipse with many addons preconfigured, such as
PyDev. This is a helpful start, but there are several steps required to
get Kivy working smoothly with autocomplete and run button, all
explained below. For easier configuration, try using
[PyCharm](kivy-pycharm.md) instead.

### Configuring LiClipse for Kivy 1.8.0 (Python 3)

- Make sure you have completed the instructions for "Installing Kivy
  for Python 3."

- Download and install LiClipse from [liclipse.com](http://www.liclipse.com/)

#### Setup a workspace automatically
(only for Kivy 1.8.0 Python 3.3)

- Go to
  [https://github.com/poikilos/kivyWorkspace-1.8.0-py33](https://github.com/poikilos/kivyWorkspace-1.8.0-py33)
  and **Download Zip**.
- Double-click the workspace folder in the zip file, and drag the
  .metadata folder to whatever folder you want to use to store all of
  your Kivy 1.8.0 (Python 3.3) projects.
- Skip to [Creating a Project](#creating-a-project)

#### Create a workspace manually

- After installing, open LiClipse using icon
- For workspace, choose where to save all of your projects (such as
  `Documents\KivyProjects`, or if on a network you could choose your
  home drive such as T:\\_username_ or H:). This is where LiClipse will
  store all of your settings for Kivy, so this folder should be used
  for all Kivy projects so you don't have to repeat these steps.

- Click Window, Preferences, PyDev, Interpreters, Python Interpreter
  - For the interpreter, browse and choose the kivy python.exe such as
  - `C:\Kivy-1.8.0-py3.3-win32\Python33\python.exe`

- In the "Libraries" tab click "New folder" then paste
  `C:\Kivy-1.8.0-py3.3-win32\kivy`
  - then push OK
  - Drag it (the path you pasted which was added to the bottom of the
    list) to the top of the list (this makes kivy first in python path
    like dragging a py file to kivy.bat would usually)

- In the "forced builtins" tab click "New" then type
  `kivy`
  - then push OK

- In the Environment tab, create these 3 variables to exactly the same
  value as your kivy.bat, such as (to make each, click new, then type
  the name then the value, change Kivy-1.8.0-py3.3-win32 to your kivy
  directory, then push OK):
  - Click "New"
    - `GST_PLUGIN_PATH`
    - `C:\Kivy-1.8.0-py3.3-win32\gstreamer\lib\gstreamer-1.0`
    - Click "OK"
  - Click "New"
    - `GST_REGISTRY`
    - `C:\Kivy-1.8.0-py3.3-win32\gstreamer\registry.bin`
    - Enter
  - Click "New"
     - PATH
     - `C:\Kivy-1.8.0-py3.3-win32\;C:\Kivy-1.8.0-py3.3-win32\Python33;C:\Kivy-1.8.0-py3.3-win32\tools;C:\Kivy-1.8.0-py3.3-win32\Python33\Scripts;C:\Kivy-1.8.0-py3.3-win32\gstreamer\bin;C:\Kivy-1.8.0-py3.3-win32\MinGW\bin;%PATH%`
     - Enter

- and EXCEPT for Window, Interpreters, Python Interpreter, Environment
  tab, set each variable same as in `C:\Kivy-1.8.0-py3.3-win32\kivy.bat`
  like:
  - `set kivy_portable_root=C:\Kivy-1.8.0-py3.3-win32\`
  - `set GST_REGISTRY=C:\Kivy-1.8.0-py3.3-win32\gstreamer\registry.bin`
  - `set GST_PLUGIN_PATH=C:\Kivy-1.8.0-py3.3-win32\gstreamer\lib\gstreamer-1.0`
  - `set PATH=C:\Kivy-1.8.0-py3.3-win32\;C:\Kivy-1.8.0-py3.3-win32\Python33;C:\Kivy-1.8.0-py3.3-win32\tools;C:\Kivy-1.8.0-py3.3-win32\Python33\Scripts;C:\Kivy-1.8.0-py3.3-win32\gstreamer\bin;C:\Kivy-1.8.0-py3.3-win32\MinGW\bin;%PATH%`

\[Liclipse may ask to add the following to the "System PYTHONPATH" --if so, click OK or Add All\]

### Creating a Project

For each project, make sure you have chosen the same workspace (which
is where all the settings above are stored) and select the Grammar
version and Interpreter as explained below:

- File, New, PyDev Project
  - Name it: kivypydevprojecttry1
  - Grammar Version: 3.0
  - Interpreter: `C:\Kivy-1.8.0-py3.3-win32\Python33\python.exe`
  - Check "Add project directory to the python path"
  - Click "Finish"

\[Liclipse may ask, "This kind of project is now associated with the
PyDev perspective. Do you want to open this perspective now?" Check
"Remember my decision" then click "Yes"\]

- File, New, File
  - If asks which project, choose the one you named above
  - Right-click "kivypydevprojecttry1" then click "New file"
  - Name the new file "kivytry1.py" then click "Finish"
  - Copy an example kivy file and past into that blank file you named kivytry1

#### Running a program
(follow these steps the first time you run each new project)

Click the green arrow to run.

\[Liclipse may ask about
"Save and Launch": check "Always save sources before launching", make sure all files are checked, OK\]

(may take a while if bottom status bar says [loading something])

- Double-click "Python Run"
  - At the top, change the name from New_configuration to "Kivy1"
  - Browse, choose your project you made
  - for "main module" choose your kivytry1.py or whatever your main module is (py file you want to run)
  - Click "Run"

### Troubleshooting

- IF the wrong program is running (wrong filename is in title bar of
  console panel), make sure you have the correct project selected on
  the left panel.
- IF your are missing the left panel, click Window, Show View, PyDev
  Package Explorer. Make sure the correct project you want to run is
  selected.
- IF your python file ends with pyw, it may not run in Kivy. Rename it,
  remove the pyw, and instead make it py.
- IF your name project appears on the left but is blank, the folder must
  have moved. Right-click, delete (this will not delete the folder from
  disk, unless you check that box to delete it), then re-add it (follow
  the instructions above under "Creating a Project," but for project
  name type the folder name where your program resides, and for
  Directory choose the directory above it such as "kivyProjects"--also
  still make sure you have chosen grammar version that matches your
  Kivy installation, such as 3.0 for any version of Python 3).
- IF your project and all related files appear on the left but nothing
  runs when you press the green Run button, the main py file must have
  been renamed or moved--also again make sure you save as a name ending
  in .py not .pyw. Click the small black down arrow by the Run button
  then click "Run Configurations," then follow the instructions above
  under "Running a program."
- IF your project does not run due to "jnius" not found, but you did not
  intentially use jnius, LiClipse may have accidentally imported
  something you don't need. Try removing or commenting lines at the
  beginning of your program such as
  `from plyer.platforms.android.accelerometer import instance`
- IF your program just says "Program Terminated", and you drag the file
  to your Kivy icon on the desktop and you get "The program can’t start
  because MSVCR100.dll is missing from your computer." you are missing
  the x86 version of Microsoft Visual C++ Redistributable Package,
  which is needed even though you are using a 64-bit computer--see
  [Installing Kivy](installing-kivy.md) for instructions.

## References

Zadrozny, F. (2014, February 13). Pydev adventures: Configuring kivy on
pydev. PyDev Adventures.
https://pydev.blogspot.com/2014/02/configuring-kivy-on-pydev.html
