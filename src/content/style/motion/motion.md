## Principles

Elements of every IBM product should behave with awareness and precision. Our content moves to clarify information hierarchy, inform intent, and give feedback in order to guide users through complex experiences.

### Be progressive and thoughtful.

In the modern digital world, motion is a requirement. Treat motion as an integrated aspect of design, not an afterthought. Anticipate user expectations and needs, such as feedback for action, visual indicator of backend processing, and keep exploring ways to add value through motion.

### Be essential, be a pro for pro.

Avoid motion that is decorative, obtrusive, or unnecessary. It distracts users from their tasks. We are professionals working with professionals; make the experience efficient, quick, and responsive. Every use of motion should have a purposed based on a user need or business requirement. If all of the problems are solvable without motion, consider not adding motion. A purpose could be:

- a function (eg. a dropdown menu opening)
- a solution to a problem (eg. progressive disclosure)
- a message (eg. loading animation, interaction feedback, "Welcome to Cloud")
- a meaning (eg. "this is important", "there is more")


## Guidelines

<!-- ### Duration

Movement should be slow enough that the user can recognize what's happening, but fast enough that they are never waiting. The magnitude of change in an animation and its importance combine to determine its duration. Most animations in our component library last between 100 and 300 milliseconds.-->

<!-- <div data-insert-component="MotionExample" data-props="duration,300ms,600ms"></div> -->

<!-- | TYPE                     | DURATION  | -->

<!-- | Buttons/small components | 100-200ms | -->
<!-- | Alerts/table reorder     | 250-300ms | -->
<!-- | Panels/modals            | 300-400ms | -->
<!-- | Page transitions         | 500-700ms | -->

### Easing

IBM elements are responsive, efficient, and yet elegant — they do not speed up or slow down excessively, obeying the physics of a light-weight medium.


<div data-insert-component="MotionExample" data-props="easing,Easing,No-Easing"></div>

There are three specific easing curves: `ease-in-out`, `ease-out`, and `ease-in`.

You can think of “in” and “out” as referring to the side of the curve where more time will be spent. So an `ease-out` curve will slow down into it's final position, while an `ease-in` curve will start slowly and accelerate. An `ease-in-out` curve combines both, featuring a slow start and a slow finish.

**Ease-in-out:** `cubic-bezier(0.2, 0, 0.38, 0.9)`

Use ease-in-out (previously standard easing) when an element is already visible when the motion starts, and is still visible when the motion ends. For example, card expansion and list sorting. The element does not completely enter or exit the view (the screen, or browser window), but becomes repositioned or transformed.

<div data-insert-component="MotionExample" data-props="standard"></div>

One exception to use ease-in-out when an element is in the view, is if the element leaves the view but stays near it, ready for recall upon user action. A good example of this is a side panel. The panel would leave the view, but slows down as it exists, implying that it would come to rest just outside the view.

**Ease-out:** `cubic-bezier(0, 0, 0.38, 0.9)`

Use ease-out when adding elements to the view (e.g. entrance of model, toaster), or changing states as a result of users' input for micro-interactions (e.g.  dropdown opening or toggle). The element would appear quickly and decelerates as it arrives final state.

<div data-insert-component="MotionExample" data-props="ease-out"></div>

**Ease-in:** `cubic-bezier(0.2, 0, 1, 0.9)`

Use ease-in when removing elements from the view. Good examples are closing a model or deleting a card. The element would speed up as it exits, implying it is not coming back.

<div data-insert-component="MotionExample" data-props="ease-in"></div>

### Dynamic Duration

Along with easing, duration is one of the two main elements in motion.

The duration is never fixed - elements traveling over longer distances should take longer time. In our model, the relationship between duration and distance (duration scale) is non-linear.  The rate of increase of duration drops slightly as the distance of travel increases to maintain the consistency of the perceived motion.

Carbon-components have built in support for many micro-interactions with this dynamic duration. When creating custom motion, we recommend the following durations. <!-- use the <a href="https://ibm.github.io/motion/" target="_blank">motion calculator</a> to find the duration for your motion. -->

Duration for move, or linear translations, is dependent on both distance and size of the element. For small elements around 64 x 64 px size:

| Distance (px)| Duration (ms) |
| ------------ |---------------|
| > 240        | 102           |
| 480          | 109           |
| 720          | 123           |
| 1024         | 139           |

For large elements around 512 x 512 px size:

| Distance (px)| Duration (ms) |
| ------------ |---------------|
| > 240        | 102           |
| 480          | 109           |
| 720          | 128           |
| 1024         | 143           |


Fade (opacity change) duration is dependent on size of the element. Larger element fades slower than smaller element. Below is a list of durations for 100% opacity change for elements of a range of sizes.

| Fade (size)   | Duration (ms) |
| ------------- |---------------|
| 64 x 64       | 80            |
| 256 x 256     | 82            |
| 512 x 512     | 94            |
| 980 x 980     | 109           |

For more precise dynamic durations, we are in the process of developing a Motion Calculator for designers and developers interested in creating custom motions. Be sure to check in for updates!

<!-- ## Tools

**<a href="https://ibm.github.io/motion/" target="_blank">Motion Calculator</a>**

Use this tool to generate accurate IBM motion for your design. -->
