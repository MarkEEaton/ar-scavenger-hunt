## An Augmented Reality library tour, built on LibGuides ##

![Screenshot of the application](img/screenshot.png?raw=True)

This is our AR tour game that we built for our library using LibGuides. I'll admit that this is a bit of a stretch of what LibGuides is normally used for, but for better or worse, it's our CMS, and we'll build what we can with it.

There are limitations here. Some files that you'd might want to upload to customize the AR.js experience are not uploadable in LibGuides. I also wanted to use Vue.js as a framework, but it was easier to stick with AFrame. I've worked around these problems as much as I can. It's a hack, but it's a fun one :)

### Some details

In our experience, the AR game works on >90% of phones. It does not work on a small percentage of phones is because AR.js does not always identify the camera correctly (sometimes it picks the wrong camera when there are multiple outward-facing options). This problem has not been solved by the AR.js developers, so my odds of solving it are very low. At our library, we have worked around this issue by having students whose phones don't work either partner with other students or use a library-provided tablet. This has been a successful workaround, and has allowed us to proceed with the game as an orientation activity.

#### This project was built in with the invaluable collaboration of Prof. Carrie Jedlicka.
