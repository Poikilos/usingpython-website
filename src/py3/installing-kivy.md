---
footer: 'Created by Jake Gustafson 2015. Training materials are released under the [Creative Commons Attribution Sharealike 3.0](https://creativecommons.org/licenses/by-sa/3.0/us/) license.'
---
# Installing Kivy for Python 3

### Installing Kivy and Python (system-wide, recommended)

(see also [Linux Instructions](installing-kivy-linux.md))

These steps are recommended now since Kivy can work along with a
standard python installation, as a "wheel" (package) delivered by "pip"
(python package management system). You can safely ignore (skip) the
color areas (untested future ready options), and the light ghosted
areas (tips, such as doing the step the long way).

~~(These steps are required \[instead of the [official
instructions](https://kivy.org/docs/installation/installation-windows.html)\]
since as of Nov 2016 there is no sdl2 for Python 3.5, so Python 3.4 and
a manually-downloaded wheel is required; also, because a weird Windows
update is needed)~~

Update Windows
for Windows 7, install [Windows6.1-KB2999226-x86.msu](https://www.microsoft.com/en-us/download/details.aspx?id=49077)

If you don't have Python Yet, get it [here](https://www.python.org/ftp/python/3.4.4/python-3.4.4.amd64.msi)
~~or the long way:~~

- ~~Download Python 3.4.4 \[Go to the [Python Releases for
  Windows](https://www.python.org/downloads/windows) page (or Go to
  [python.org](http://www.python.org/), Downloads, Windows)~~
- ~~Beside Python 3.4.4 (the last version of 3.4 that will have Windows
  binaries), click Download\]~~
- ~~Scroll down and click Windows x86-64 MSI installer~~
- ~~(you must get python 3.4 since sdl2 is not on python 3.5 yet as of
  November 2016--otherwise go to latest version instead)~~
- ~~Scroll down and choose 64-bit Windows~~


After you have Python:
- Double-click the 64-bit Python 3.4 installer (or skip to 3.5 instructions)
- Install for All users (this will change destination to `C:\Python34`
- Click "Next"
- Click 'x' by Add Python to Path and change it to "Entire Feature"
- Click "Next"
- Wait then click "Finish" when it is done.

Now that Python is installed, update pip and wheel and install kivy
wheel:
- (Windows 10) right-click Windows menu then "Command Prompt (Admin)"
- type:
```
python --version
```

~~(if version 3 or higher is not shown, close Command Prompt and try
uninstalling python and trying the steps above again, making sure you
check environment variables option)~~

~~Now you can follow the instructions to install the wheel as per
https://kivy.org/docs/installation/installation-windows.html#install-win-dist
(shown below):~~
```
python -m pip install --upgrade pip wheel setuptools
python -m pip install docutils pygments pypiwin32 kivy.deps.sdl2 kivy.deps.glew
```

~~(if you get an error that says sdl2 cannot be found, it is not
available for your version of Python yet. Try installing Python 3.4.4
as per the instructions above. This is due to "upstream" issues, aka
someone outside of the Kivy project didn't include the package
gstreamer, which Kivy uses, on pip for your version of python yet)~~

~~Either way, install gstreamer wheel manually using the steps below,
since the package is not available due to similar packaging issues:~~
- Go to https://kivy.org/downloads/appveyor/deps/gstreamer/
- Or otherwise click on this download:
  [pypi.org/project/kivy-deps.gstreamer](https://pypi.org/project/kivy-deps.gstreamer/#files)
  ~~[kivy.deps.gstreamer-0.1.6-cp34-none-win\_amd64.whl](https://kivy.org/downloads/appveyor/deps/gstreamer/kivy.deps.gstreamer-0.1.6-cp34-none-win_amd64.whl)~~
  - (cp39 if your Python version is 3.9)
- Right-click Windows menu, "Command Prompt"
  (not admin) then type or paste the command (all in one line):

  `copy "%USERPROFILE%\Downloads\kivy.deps.gstreamer-0.1.6-cp34-none-win_amd64.whl" C:\WINDOWS\Temp\`
  (change `kivy.deps.gstreamer-0.1.6-cp34-none-win_amd64.whl` to the name of your file)

- Close that window

- Go to "Command Prompt (Admin)" then do:

```
cd C:\WINDOWS\Temp
python -m pip install kivy.deps.gstreamer-0.1.6-cp34-none-win_amd64.whl
python -m pip install kivy
```



### ~~\[optional\] Installing Kivy 1.9.0 with its own Python~~

- ~~Download the self-extracting 7-zip file such as
  Kivy-1.9.0-py3.4-win32-x86.exe (recommended) from
  [kivy.org](http://kivy.org/#download)~~
- ~~Open/Run the file~~
- ~~**Before clicking** Extract, erase the Extract to field and change
  it to only `C:\` (you must include the backslash \[or it will just
  extract to downloads or wherever you saved it\] but no other info is
  needed--it will make a subfolder automatically since the archive
  contains a folder such as Kivy-1.9.0-py3.4-win32-x86)~~
- ~~Wait for the extraction to finish. The result will be that Kivy is
  installed such as to `C:\Kivy-1.9.0-py3.4-win32-x86`~~
- ~~To make apps you can use [PyCharm](kivy-pycharm.md)
  Community Edition distributed for free under the Apache License and
  then follow the [tutorials](tutorials.md) on this website!~~

#### ~~\[optional\] Installing Kivy 1.8.0 for Python 3~~

~~(includes link to Expert Multimedia installer script with additional
script placing it in the SendTo menu of another user)~~

- ~~[Download](http://expertmultimedia.com/downloads/Kivy-1.8.0-py3.3-win32-with-expertmultimedia-installer.zip)
  the Expert Multimedia repack with easy installer (or try
  [here](http://www.expertmultimedia.com/downloads), or for latest Kivy
  news and version without easy installer go
  [here](http://www.kivy.org/))~~
- ~~**Extract All** Files, then run the **Install** **Kivy** script.~~
- ~~If desired, also open "**Create Userspace SendTo shortcut**" which
  will allow you (while logged in to each Windows profile you used to
  double-click it) to right-click py files (must be py not pyw) and
  then click "Send to" "Kivy 1.8.0 Python 3"~~
- ~~Since Kivy is x86 architecture, you will first need the [Microsoft
  Visual C++ 2010 Redistributable Package
  (x86)](http://www.microsoft.com/en-us/download/confirmation.aspx?id=5555)
  in order to run Kivy programs (otherwise when running you will get
  the LiClipse error "Program Terminated" or when running outside
  LiClipse you will get the the Windowse error "The program can’t start
  because MSVCR100.dll is missing from your computer.").~~

