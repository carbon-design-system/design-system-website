**_Color_ brings a design to life. Color is versatile; it's used to express emotion and tone, as well as place emphasis and create associations. Color should always be used in meaningful and intentional ways in order to create patterns and visual cues.**

## Color palette

The Carbon color palette is designed and implemented in a theme-able manner. The universal color variables are determined by common roles and usage; it is not based singularly on a color value (i.e. unique hex code). The same color value may be assigned to multiple variables in a theme's palette when the values have distinctly different roles.

A universal variable can also have multiple associated roles when the color is consistently used across those roles. This allows for uniform color application across themes while giving each theme the freedom to express its own individuality at a more detailed level.

### Color terms

TERM | DEFINITION
-----|-----------
**Value** | A unique color (hex code) assigned to a universal variable
**Role** | The systematic usage/s of a color value
**Variable** | The code identifier for a unique role or set of roles. Variables are universal and never change across themes. Within a theme variables are assigned appropriate values.
**Theme** | The set of unique color values assigned to the universal palette
**Palette** | The complete set of universal variables. The palette is the naming conventions of colors used in the UI. Each theme will use the same palette of variables.

## Color roles

VARIABLE | ROLE/S | VALUE
---------|--------|------
**brand-01** | Primary brand <br /> Interactive text <br /> Primary icon color <br /> Border highlight <br /> Emphasis background | #3d70b2
**brand-02** | Supporting brand <br /> brand-01 hover | #5596e6
**brand-03** | Secondary brand <br /> Loading| #00b4a0
**ui-01** | Primary background <br /> Layer 1 background | #ffffff
**ui-02** | Default background <br /> Layer 0 background <br /> Secondary background | #f5f7fa
**ui-03** | Tertiary background | #f0f3f6
**ui-04** | Subtle border | #dfe3e6
**ui-05** | Emphasis border <br /> Secondary icons | #8c9ba5
**text-01** | Primary text <br /> Body copy | #152935
**text-02** | Secondary text <br /> Subtle text | #5a6872
**text-03** | Hint text | #5a6872
**inverse-01** | Inverse text color <br /> Inverse icon color | #ffffff
**field-01** | Field background | rgba(60,112,178,0.10)
**support-01** | Error | #e71d32
**support-02** | Success | #5aa700
**support-03** | Warning | #efc100
**support-04** | Information | #5aaafa
**nav-01** | Super global header background | #0f212e
**nav-02** | Global header background | #152934
**nav-03** | Header id - services | #ba8ff7
**nav-04** | Left nav id - services | #734098
**nav-05** | Header id - application | #00b4a0
**nav-06** | Left nav id - application | #008571
**nav-07** | Header id - infrastructure | #5aaafa
**nav-08** | Left nav id - infrastructure | #3d70b2

## Color contrast | WCAG AA standards

All type color combinations on Carbon must pass <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target=blank>WCAG AA standards</a> of 4.5:1 for normal text and 3:1 for large text. For larger text, if the font weight is light (300) or normal (400) the text should be no smaller than 24px. If the font weight is bold (700) then the large text should be no smaller than 19px. In the table below are approved Carbon color combinations.

<div data-insert-component="ColorContrast"></div>

## Resources

- <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html" target=blank>IBM accessible color guide</a>
- <a href="http://w3-03.ibm.com/able/devtest/quick/" target=blank>IBM accessibility quick guidance</a>
- <a href="https://marijohannessen.github.io/color-contrast-checker/" target=blank>Color contrast checker</a>
- <a href="http://www.ibm.com/design/language/framework/visual/color" target=blank>IBM Design Language colors</a>
