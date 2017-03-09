**_Color_ brings a design to life. Color is versatile; it's used to express emotion and tone, as well as place emphasis and create associations. Color should always be used in meaningful and intentional ways in order to create patterns and visual cues.**

## Color palette 

The carbon color palette is designed and implemented in a theme-able manner. The universal color variables are determined by common roles and usage; it is not based singularly on a color value (i.e. unique hex code). The same color value may be assigned to multiple variables in a theme's palette when the values have distinctly different roles.

A universal variable can also have multiple associated roles when the color is consistently used across those roles. This allows for uniform color application across themes while giving each theme the freedom to express its own individuality at a more detailed level.

### Color terms

<!--- CONTENT BELOW IN LIST/TABLE --->

TERM | DEFINITION
-----|-----------
**Value:** | A unique color (hex code) assigned to a universal variable 
**Role:** | The systematic usage/s of a color value
**Variable:** | The code identifier for a unique role or set of roles. Variables are universal and never change across themes. Within a theme variables are assigned appriopriate values.
**Theme:** | The set of unique color values assigned to the universal palette
**Palette:** | The complete set of universal variables. The palette is the naming conventions of colors used in the UI. Each theme will use the same palette of variables.


## Color roles

<!--- CONTENT BELOW IN LIST/TABLE --->

VARIABLE | ROLE/S | VALUE 
---------|--------|------
**brand-01** | - Primary brand - Interactive text - Primary icon color - Border highlight - Emphasis background | #3d70b2
**brand-02** | - Supporting brand - brand-01 hover | #5596e6
**brand-03** | - Secondary brand - Loading| #00b4a0
**ui-01** | - Primary background - Layer 1 background | #ffffff
**ui-02** | - Default background - Layer 0 background - Secondary background | #f5f7fa
**ui-03** | - Tertiary background | #f0f3f6
**ui-04** | - Subtle border | #dfe3e6
**ui-05** | - Emphasis border - Secondary icons | #8c9ba5
**text-01** | - Primary text - Body copy | #152935
**text-02** | - Secondary text - Subtle text | #5a6872
**text-03** | - Hint text | #5a6872
**inverse-01** | - Inverse text color - Inverse icon color | #ffffff
**field-01** | Field background | rgba(60,112,178,0.10)
**support-01** | Error | #e71d32
**support-02** | Success | #8cd211
**support-03** | Warning | #efc100
**support-04** | Information | #7cc7ff
**nav-01** | Super global header background | #0f212e
**nav-02** | Global header background | #152934
**nav-03** | Header id - services | #ba8ff7
**nav-04** | Left nav id - services | #734098
**nav-05** | Header id - application | #00b4a0
**nav-06** | left nav id - application | #008571
**nav-07** | Header id - infrastructure | #5aaafa
**nav-08** | Left nav id - infrastructure | #3d70b2

## Color contrast | 4.5 : 1 ratio

All type color combinations on Carbon must pass WCAG AA standards of 4.5 : 1. In the table below are approved color combinations.

<img> Normal Text

<img> Large Text: 18px bold or larger

<!--- CONTENT BELOW IN LIST/TABLE --->

##### TYPE COLORS
- brand-02 #5596e6
- brand-01 #3d70b2
- text-02 #5a6872
- text-01 #152935

##### BACKGROUND COLORS
- ui-01 #ffffff
- ui-02 #f5f7fa
- ui-03 #f0f3f6

## Resources

- [IBM accessible color guide] (https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)
- [IBM accessibility quick guidance] (http://w3-03.ibm.com/able/devtest/quick/)
- [Color contrast checker] (http://webaim.org/resources/contrastchecker/) 
- [IBM Design Language colors] (http://www.ibm.com/design/language/framework/visual/color)