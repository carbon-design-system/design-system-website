## Principles

Elements of every IBM product should behave with awareness and precision. Our content moves to clarify information hierarchy, inform intent, and give feedback in order to guide users through complex experiences.

### Responsive & Meticulous

In general, IBM's motion is faster than our competitors. We embrace speed and efficiency, yet our attitude is attentive and unassuming. This is why we designed a new set of easing curves and shortened durations to reflect this principle. Keep in mind that in our products, our role is to be a respectful host to the professionals across many industries, and we do not keep them waiting.

### Purposeful & Progressive

Constantly ask the question: is motion needed here? Is this motion going to better orient, guide, or empower our users to quickly complete their task? Here are some opportunities for purposeful and progressive motions in an interface:

- a function, such as opening a drop-down menu
- a solution to UX need, such as reducing cognitive load with progressive disclosure
- a message, such as "I'm working on it!" by giving instant feedback
- a guidance, such as revealing a call for action button last to draw users' attention

## Guidelines

### Duration

Movement should be slow enough that the user can recognize what's happening, but fast enough that they are never waiting. The magnitude of change in an animation and its importance combine to determine its duration. Most animations in our component library last between 100 and 300 milliseconds.

<!-- <div data-insert-component="MotionExample" data-props="duration,300ms,600ms"></div> -->

| TYPE                     | DURATION  |
| -------------------------| ----------|
| Buttons/small components | 60-100ms |
| Alerts/table reorder     | 250-300ms |
| Panels/modals            | 300-400ms |
| Page transitions         | 500-700ms |

### Easing

Strictly linear movement appears strange and distracting to the human eye. IBM elements speed up and slow down smoothly and quickly, obeying the physics of a light-weight material.

"Easing curves" are useful to describe the precise amount of accelerations in motion. Our easing curves start with a small, but non-zero, velocity, giving an energetic, crisp feel to the behaviors of the elements. There are three easing curves, `ease-in`, `ease-out`, and `ease-in-out`, each fitted for a different situations.

You can think of "in" and "out" as referring to the beginning and end of a motion. So an `ease-out` motion will slow down into its final position, while an `ease-in` motion will start slowly and accelerate. An `ease-in-out` motion combines both, featuring a slow start and a slow finish.

**Ease-out:** `cubic-bezier(0, 0, 0.38, 0.9)`

Use ease-out when adding elements to the view (example: entrance of model, toaster), or changing states as a result of users' input for micro-interactions (example:  dropdown opening or toggle). The element would appear energetically and decelerates as it arrives final state.

<div data-insert-component="MotionExample" data-props="ease-out"></div>

**Ease-in:** `cubic-bezier(0.2, 0, 1, 0.9)`

Use ease-in when removing elements from the view. Good examples are closing a model or deleting a card. The element would speed up as it exits, implying it is not coming back.

<div data-insert-component="MotionExample" data-props="ease-in"></div>

**Ease-in-out:** `cubic-bezier(0.2, 0, 0.38, 0.9)`

`ease-in-out` is used when an element is visible in the beginning, and is still visible at the end of the motion. Card expansion and list sorting are good examples – the element does not completely enter or exit the view (the screen, or browser window), but simply becomes repositioned or transformed.

<div data-insert-component="MotionExample" data-props="standard"></div>

One exception to use `ease-in-out` is if the element leaves the view but stays near it, ready to reappear upon user action. A good example of this is a side panel. The panel would leave the view, but slows down as it exits, implying that it would come to rest just outside the view.

## Motion Evaluation Checklist

All those theory might be overwhelming. We created a checklist to help you evaluate your motion design:

Is your motion **progressive**?
What is lost if you do without this motion? Does motion meet user expectations and needs, provide feedback, and orientation?

Is your motion **responsive**?
Durations for motion should generally not exceed 300ms. Micro-interactions should use `ease-out` on user input, with a static duration ranging from 60 - 100ms.

Is your motion **meticulous**?
Did you use the correct easing curve?

Is your motion **unobtrusive**?
The best interface motion may go unnoticed, because motion must not distract the user from their tasks. If your motion is picked up by the average user, consider removing it, or minimizing it.


<!-- ## Tools

**<a href="https://ibm.github.io/motion/" target="_blank">Motion Calculator</a>**

Use this tool to generate accurate IBM motion for your design. -->
