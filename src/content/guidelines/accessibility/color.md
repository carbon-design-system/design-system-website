**Web Content Accessibility Guidelines (WCAG) contain recommendations for making the web accessible to users with disabilities, including color blindness or low vision. Carbon is committed to following and complying with best practices when it comes to accessibility. Each component and element was built following WCAG and met the AA standard. Our patterns are perceivable, operable, and understandable to users, even when using a screen reader or other assistive technology.**

## Keyboard accessibility

Keyboard accessibility is important for users who rely on or prefer using a keyboard. Encourage accessibility by providing keyboard functionality to all available content. Common keyboard interactions include using the `Tab` key to select different interactive elements on a page and using the `Enter` key or the Spacebar to activate an in-focus element.

### Focus indicators

The `tab` key navigates through various interactive elements on a page. A default visual indicator is provided by the web browser in use. The display is an outlined border around the focused element. When an element is in focus, it can be further activated using the keyboard.

### Navigation order

The order in which interactive elements receive focus is logical and predictable. Create the tab flow hierarchy by using the source code to arrange the keyboard navigation. Begin with the header, followed by the main navigation, then page navigation (from left to right, top to bottom), and end with the footer.

Use natively-accessible elements in navigation to activate links, buttons, and form controls with a keyboard. Reinforce semantic HTML to convey intent and meaning instead of simply defining the look and feel of an element. Enhance with ARIA (Accessible Rich Internet Application) labels when necessary. For additional customization, use `tabindex=“0”` to ensure a navigable element receives a focus indicator.

Provide a “Skip to content” option when there is lengthy navigation so a user may access main content faster. This option is a link that is visually hidden by default and appears when it receives keyboard focus via the `tab` key.

<a href="http://webaim.org/techniques/skipnav/" target=blank>WebAIM</a> recommends the following to enable a “Skip to content” link.

```html
<body>
    <a href="#maincontent">Skip to main content</a>
    ...
    <main id="maincontent>
        <h1>Heading</h1>
        <p>This is the first paragraph</p>
    </main>
</body>
```


## Visual accessibility

Web and software experiences should be accessible for everyone, regardless of a person's abilities or impairments. Visual impairments can range in severity, from low vision, to color blindness, to complete blindness. The Carbon team has done extensive research and testing to ensure each component was designed with accessibility as our top priority.

### Color contrast
There are different levels of compliance for WCAG, ranging from A to AAA. **Carbon meets AA standards across our entire system.**

AA requirements state that:

* Text and images of text must have a contrast ratio of at least **4.5:1**. An exception is large text (at least 24px / 19px semi-bold) which must have a contrast ratio of **3:1.**
* UI components: Visual information used to indicate states and boundaries of UI components must have a contrast ratio of **3:1** against adjacent colors.


You can read more and view the entire guidelines for [WCAG 2.1](https://www.w3.org/TR/WCAG21/) on their website. Please refer to our [usage](/style/colors/usage) section on the Colors page to learn more about color contrast ratios. You can also use this [color contrast](https://marijohannessen.github.io/color-contrast-checker/) tool to ensure your ratios pass WCAG AA standards.

To view best practices for using color in Data Visualization, view the [Data Vis color](/data-vis/overview/colors) page.

### Color blindness
Color blindness involves difficulty in perceiving or distinguishing between colors, as well as sensitivity to color brightness. It affects approximately 1 in 12 men and 1 in 200 women worldwide.

| Type | Color deficiency |
|------| ----------------|
| Protanopia | Red/green |
| Tritanopia | Blue      |
| Deuteranopia | Green   |
| Monochromacy | All colors |  

### Designing for color blindness
When designing color palettes, it's always good to run them through a color blind simulator. If you're working in Sketch, we recommend the [Stark](http://www.getstark.co/) plugin.


![rainbow palette](images/color-accessibility-1.png)
_Non-color blind user vs. color blind user_


### Low vision
Low vision can include partial sight in one or both eyes, and range from mild to severe. It affects 246 million people, or about 4% of the world’s population.

| Type | Color deficiency |
|------| ----------------|
| Low acuity | Also known as **blurred vision.** Can make text difficult to read, since it would appear fuzzy. |
| Low contrast sensitivity | The ability to determine fine detail and distinguish one object from another.     |
| Obstructed visual field | The user's view is partially obstrucuted. Can include central vision and spotty vision.  |
| Retinitis Pigmentosa | Also known as **tunnel vision**. Obstructed peripheral vision - user is only able to see central elements  |

_[Source: NoCoffee - Visual impairments ](https://accessgarage.wordpress.com/2013/02/09/458/)_

![blurred vision and tunnel vision on Google.com](images/color-accessibility-2.png)

_Low vision disabilities_

### Designing for low vision
To get an understanding of the various low vision disabilities, we recommend using the [NoCoffee](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl) Chrome plugin to preview websites. Low vision users may be using a screen reader to preview your website or experience, so ensure you're following [keyboard guidelines](/guidelines/accessibility/keyboard) to ensure the page is read to the user in a logical order.


## Resources
- [WCAG 2.1 guidelines](https://www.w3.org/TR/WCAG21/)
- [IBM accessibility quick guidance](https://w3.ibm.com/able/devtest/quick/) - (Internal only)
- [W3C low vision requirements](https://www.w3.org/TR/low-vision-needs/)

## Tools
- [High Contrast Chrome plugin](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph/related?hl=en)
- [Stark Sketch Plugin](http://www.getstark.co/)
- [NoCoffee vision simulator](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl)
