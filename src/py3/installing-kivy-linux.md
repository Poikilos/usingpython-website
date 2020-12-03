## Installing Kivy and Python on Linux

(see also [Windows Instructions](py3/installing-kivy.md))

### Fedora 25 or 26

You have to first install the [rpmfusion
repo](https://rpmfusion.org/Configuration/) or other repo with
ffmpeg-libs. Then you can install Kivy using the following commands
using Terminal:

```
#kivy says install:
#(khrplatform-devel is not found though so use android-opengl-api instead)
sudo dnf install \
    make \
    mercurial \
    automake \
    gcc \
    gcc-c++ \
    SDL_ttf-devel \
    SDL_mixer-devel \
    android-opengl-api \
    mesa-libGLES \
    mesa-libGLES-devel \
    gstreamer-plugins-good \
    gstreamer \
    gstreamer-python \
    mtdev-devel \
    python-devel \
    python-pip

sudo dnf install patch
#may or may not be needed:
sudo dnf group install "C Development Tools and Libraries"

#prevent missing redhat-hardened-cc1 error:
sudo dnf install redhat-rpm-config

#is in Ubuntu instructions on kivy.org, and seemed to get rid of some errors:
sudo dnf install git

#these were derived from the Ubuntu instructions:
sudo dnf install python-devel ffmpeg-libs SDL2-devel SDL2_image-devel \
    SDL2_mixer-devel SDL2_ttf-devel portmidi-devel libavdevice \
    libavc1394-devel zlibrary-devel ccache mesa-libGL mesa-libGL-devel
sudo python -m pip install --upgrade pip
sudo python -m pip install cython
sudo python -m pip install --upgrade pip wheel setuptools
sudo python -m pip install docutils pygments
#had error still --see https://github.com/SerpentAI/SerpentAI/issues/58
#so added the following line (other method \[using git version\] on the page above didn't work):
sudo python -m pip install Cython==0.26
#however, be aware, kivy.org says:
#Different versions of Kivy have only been tested up to a certain Cython
#version. It may or may not work with a later version.
#Kivy	Cython
#1.8	0.20.2
#1.9	0.21.2
#1.9.1	0.23
#1.10.1	0.25

sudo python -m pip install kivy --no-cache-dir
```
