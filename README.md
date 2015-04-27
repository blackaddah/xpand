xpand
========
Chromium extension that automatically finds and loads the full size version of the thumbnails and images of several social networks.

# Installation
Simply load the extension unpacked (or pack it and load it) inside chrome://extensions.

# Usage
When active, every time you open a image from one of the supported sites it will try to find a bigger version and, if exists, you will be redirected to it.

For example, this image:
[https://40.media.tumblr.com/ae20e657dab44cc671d78522ba9015ae/tumblr_nlj7bjaRro1s05o0yo1_250.jpg](https://40.media.tumblr.com/ae20e657dab44cc671d78522ba9015ae/tumblr_nlj7bjaRro1s05o0yo1_250.jpg)

will redirect to:

[https://40.media.tumblr.com/ae20e657dab44cc671d78522ba9015ae/tumblr_nlj7bjaRro1s05o0yo1_1280.jpg](https://40.media.tumblr.com/ae20e657dab44cc671d78522ba9015ae/tumblr_nlj7bjaRro1s05o0yo1_1280.jpg)

# Websites supported
At the moment xpand is able to find and load the bigger versions of the images in the following sites:
* **Tumblr**: can load both the images from the content and the profile pictures.
* **Deviantart**: can load a bigger version of the images (the one you see if you click in a thumbnail). It cannot, however, load the very full version (if present) of some images that have available a higher resolution.
* **Twitter**: can load the full size of the image.

# Problems
In the stable version of Chrome it will complain everytime about it not being in the store, and thus, trusted. It's a recent change from Google and cannot be disabled. You can ignore it, switch to the dev version or, if you have a Google Developer Account, publish it to the store (as public or private) and install from there.
