**_Motion_ brings your work to life. It guides you forward faster—from here to there, now to next, start to finish—towards progress. Purposeful, responsive, and precise motion creates productive interactions for the user.**

## Character

### Energetic

Motion feels alive, presenting information with vigor and vibrancy. Each movement expresses enthusiasm as it brings users closer to their goals.  

### Rhythmic

Elements work together in a steady rhythm and pace. Careful choreography balances small and sweeping movements to orient and guide users in the flow.  

### Sensitive

Motion acts with awareness to create a two-way conversation. It anticipates needs and provides subtle signals, helping users respond to changing conditions.

## Guidelines

### Provide value

Before applying motion, always ask: is motion adding value? Will it orient, guide, or empower people to advance their work? Take time to articulate key moments in the interface where applying animation could enhance or augment the experience.

Examples of opportunities for purposeful UI motion:

- give feedback, such as hover states, active states
- component behaviors, such as opening a drop-down menu
- solutions to UX need, such as reducing cognitive load with progressive disclosure
- provide guidance, such as revealing a call for action button last to draw users' attention

### Dynamic duration

Motion should be fast enough to be invisible, but slow enough to be felt. When calculating the duration of your motion, consider the following factors:

- larger magnitude of motion needs a longer duration
- an important or unexpected change deserves a longer duration than expected changes
- allow for larger distance or longer duration on mobile to make it more perceivable

<!-- <div data-insert-component="MotionExample" data-props="duration,300ms,600ms"></div> -->

| TYPE                     | DURATION  |
| -------------------------| ----------|
| Buttons/small components | 60-100ms  |
| Alerts/table reorder     | 100-140ms |
| Panels/modals            | 110-200ms |
| Page transitions         | 200-500ms |

### Precise easing

Strictly linear movement appears unnatural to the human eye. Elements on the screen speed up quickly and slow down smoothly, obeying the physics of a light-weight material.

"Easing curves" describe the precise amount of accelerations in motion. Our easing curves start with a small, but non-zero, velocity, giving an energetic, crisp feel to the behaviors of the elements. Three easing curves, `ease-in`, `ease-out`, and `ease-in-out`, each serve different purposes.

<div data-insert-component="MotionExample" data-props="easing,Easing,No-Easing"></div>

The beginning and end of a motion are called "in" and "out." An `ease-in` motion will start slowly and accelerate while an `ease-out` motion slows down to its final position. An `ease-in-out` motion combines both, featuring a slow start and a slow finish.

**Ease-out:** `cubic-bezier(0, 0, 0.38, 0.9)`

Use ease-out when adding elements to the view (example: entrance of model, toaster), or changing states as a result of users' input for micro-interactions (example:  dropdown opening or toggle). An element should appear energetically and decelerate as it arrives at its final state.

<div data-insert-component="MotionExample" data-props="ease-out"></div>

**Ease-in:** `cubic-bezier(0.2, 0, 1, 0.9)`

Use ease-in when removing elements from the view (examples: closing a model, toaster). The element should speed up as it exits, implying that it's not coming back.

<div data-insert-component="MotionExample" data-props="ease-in"></div>

**Ease-in-out:** `cubic-bezier(0.2, 0, 0.38, 0.9)`

Use `ease-in-out` when an element is visible in the beginning, and is still visible at the end of the motion. Tiles expanding and table rows sorting are good examples. The element does not completely enter or exit the view (the screen, or browser window), but simply becomes repositioned or transformed.

<div data-insert-component="MotionExample" data-props="standard"></div>

One exception to use `ease-in-out` is if the element leaves the view but stays near it, ready to reappear upon user action. A good example of this is a side panel. The panel would leave the view, but slows down as it exits, implying that it would come to rest just outside the view.

## Motion Evaluation Checklist


<div class="bx--form-item bx--checkbox-wrapper">
  <label for="bx--checkbox-1" class="bx--checkbox-label">
    <input id="bx--checkbox-1" class="bx--checkbox" type="checkbox" value="yellow" name="checkbox">
    <span class="bx--checkbox-appearance">
      <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
        <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
      </svg>
    </span>
    <p>Is your motion **purposeful**?</p>
  </label>
</div>

- Does it enhance the user experience?
- What problem is motion solving?

</br>

<div class="bx--form-item bx--checkbox-wrapper">
  <label for="bx--checkbox-2" class="bx--checkbox-label">
    <input id="bx--checkbox-2" class="bx--checkbox" type="checkbox" value="yellow" name="checkbox">
    <span class="bx--checkbox-appearance">
      <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
        <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
      </svg>
    </span>
    <p>Is your motion **responsive**?</p>
  </label>
</div>

- Do important user actions receive immediate feedback that's seen and felt?
- Do my micro-interactions use `ease-out` on user input?
- Do my micro-interactions fall within a static duration ranging from 60 - 100ms?
- If there are large, or full screen, transitions in your product, are some elements continuous to guide the user?

</br>

<div class="bx--form-item bx--checkbox-wrapper">
  <label for="bx--checkbox-3" class="bx--checkbox-label">
    <input id="bx--checkbox-3" class="bx--checkbox" type="checkbox" value="yellow" name="checkbox">
    <span class="bx--checkbox-appearance">
      <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
        <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
      </svg>
    </span>
    <p>Is your motion **meticulous**?</p>
  </label>
</div>

- Did you use the appropriate easing curves?
- Is each motion individually considered and choreographed across elements?
- Are larger elements and motions on smaller screens taking more time than on larger screens?

</br>

<div class="bx--form-item bx--checkbox-wrapper">
  <input id="bx--checkbox-4" class="bx--checkbox" type="checkbox" value="red" name="checkbox">
  <label for="bx--checkbox-4" class="bx--checkbox-label">
    <span class="bx--checkbox-appearance">
      <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
        <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
      </svg>
    </span>
    <p>Is your motion **unobtrusive**?</p>
  </label>
</div>

- The best interface motion may go unnoticed, because motion must not distract the user from their tasks. Is your motion frequently noticed by the average users? If so consider removing it, or minimizing it.

</br>

<div class="bx--form-item bx--checkbox-wrapper"></div> <!-- somehow this line is needed for proper spacing -->


<!-- ## Tools

**<a href="https://ibm.github.io/motion/" target="_blank">Motion Calculator</a>**
Use this tool to generate accurate IBM motion for your design. -->
