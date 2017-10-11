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

Motion should fast enough to not attract attention, but slow enough to not feel sudden. When calculating the duration of your motion, consider the following factors:

- larger magnitude of motion needs a longer duration
- an important or unexpected change deserves a longer duration than expected changes
- motion happening on a smaller screen should take longer than when happening on a large screen

<!-- <div data-insert-component="MotionExample" data-props="duration,300ms,600ms"></div> -->

| TYPE                     | DURATION  |
| -------------------------| ----------|
| Buttons/small components | 60-100ms  |
| Alerts/table reorder     | 100-140ms |
| Panels/modals            | 110-200ms |
| Page transitions         | 200-500ms |

### Easing

Strictly linear movement appears strange and distracting to the human eye. IBM elements speed up and slow down smoothly and quickly, obeying the physics of a light-weight material.

"Easing curves" are useful to describe the precise amount of accelerations in motion. Our easing curves start with a small, but non-zero, velocity, giving an energetic, crisp feel to the behaviors of the elements. There are three easing curves, `ease-in`, `ease-out`, and `ease-in-out`, each fitted for a different situations.

<div data-insert-component="MotionExample" data-props="easing,Easing,No-Easing"></div>

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


<div class="bx--form-item bx--checkbox-wrapper">
  <label for="bx--checkbox-1" class="bx--checkbox-label">
    <input id="bx--checkbox-1" class="bx--checkbox" type="checkbox" value="yellow" name="checkbox">
    <span class="bx--checkbox-appearance">
      <svg class="bx--checkbox-checkmark" width="12" height="9" viewBox="0 0 12 9" fill-rule="evenodd">
        <path d="M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z"></path>
      </svg>
    </span>
    <p>Is your motion **progressive**?</p>
  </label>
</div>

- Can we do without this motion?
- What user need does this piece of motion serve?

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

- Are there immediate visual feedback for important user actions?
- Micro-interactions should use `ease-out` on user input, with a static duration ranging from 60 - 100ms.
- If there are large, or full screen, transitions in your product, are there continuous elements to guide the user?

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

- Did you use the correct easing curves?
- Is each motion individually considered?
- Remember larger elements and motions on smaller screens should take more time.

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

- The best interface motion may go unnoticed, because motion must not distract the user from their tasks. If your motion frequently noticed by the average users, consider removing it, or minimizing it.

</br>

<div class="bx--form-item bx--checkbox-wrapper"></div> <!-- somehow this line is needed for proper spacing -->


<!-- ## Tools

**<a href="https://ibm.github.io/motion/" target="_blank">Motion Calculator</a>**

Use this tool to generate accurate IBM motion for your design. -->
