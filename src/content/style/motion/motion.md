## Principles

Elements of every IBM product should behave with awareness and precision. Our content moves to clarify information hierarchy, inform intent, and give feedback in order to guide users through complex experiences.

### Be progressive and thoughtful.

In the modern digital world, motion is a requirement. Treat motion as an integrated aspect of design, not an afterthought. Anticipate user expectations and needs, such as feedback for action, visual indicator of backend processing, and keep exploring ways to add value through motion.

### Be essential, be a pro for pro.

Avoid motion that is decorative, obtrusive, or unnecessary. It distracts users from their tasks. We are professionals working with professionals; make the experience efficient, quick, and responsive. Every use of motion should have a purposed based on a user need or business requirement. If all of the problems are solvable without motion, consider not adding motion. A purpose could be:

- to perform a function (e.g. loading, processing, alert)
- to provide feedback (e.g. hover states, dropdown opening, overflow menu)
- to communicate spatial relationship of information (e.g. side-panel flying sliding  in and out, going from overview to detailed view, drilling deeper in a progressively disclosed data set)

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

There are three specific easing curves: ease-in-out, ease-out, and ease-in.

You can think of “in” and “out” as referring to the side of the curve where more time will be spent. So an ease-out will slow down into it's final position. More time is dedicated to the end of the curve or the "out".

**Ease-in-out:** cubic-bezier(0.2, 0, 0.38, 0.9)

Use ease-in-out (previously standard easing) when an element is already visible on stage when the motion starts, and is still visible on stage when the motion ends. For example, card expansion and list sorting. The element does not enter or exit stage completely, but becomes repositioned or transformed.

<div data-insert-component="MotionExample" data-props="standard"></div>

One exception to use ease-in-out when an element is in the existing stage, is if the element leaves the stage only stays near it, ready for recall upon user action. A good example of this is a side panel. The panel would leave the stage, but slows down as it exists, implying it would quickly come to rest, not far off stage.

**Ease-out:** cubic-bezier(0, 0, 0.38, 0.9)

Use ease-out when adding elements to the stage (e.g. entrance of model, toaster), or changing states as a result of users' input for micro-interactions (e.g.  dropdown opening or toggle). The element would appear quickly and come to rest naturally in position.

<div data-insert-component="MotionExample" data-props="ease-out"></div>

**Ease-in:** cubic-bezier(0.2, 0, 1, 0.9)

Use ease-in when removing elements from stage. Good examples are closing a model or deleting a card. The element would speed up as it exits, implying it is not coming back.

<div data-insert-component="MotionExample" data-props="ease-in"></div>

### Duration

Along with easing, duration is one of the two main components in designing motion. Consider the following two concepts for duration.

**Dynamic duration**

The duration should change as the distance of the motion changes. For example,  the longer an element travels, the longer the motion should take. This will ensure that the elements look and feel consistent.

**Speed scale**

The relationship between the speed (duration) and the distance is called speed scale. Our speed scale is non-linear.  The speed increases slightly to maintain the consistency of the perceived motion. This implies that the same interface motion on small screen are going to take longer than when on a big screen, and this is necessary to make sure a meaningful behavior is not missed by the user.

Carbon-components have built in support for many micro-interactions with this dynamic duration. When creating custom motion, use the <a href="">motion calculator</a> to find the duration for your motion.

## Tools

**<a href="">Motion Calculator</a>**

Outputs dynamic duration based on the user-defined context.

**<a href="">Keynote Animations</a>**

Coming soon
