**_Typography_ is used to create clear hierarchy throughout the layout. It is the core structure of well designed interfaces. When type scaling is used appropriately it creates intentional flows, user focus, and progressive emphasis.**

## Typeface

IBM uses a custom version of Helvetica Neue for both its Marketing and Product brands. It is a strong but neutral typeface that lends personality to the page without overpowering the content.

```scss
@mixin helvetica {
  font-family: 'IBM Helvetica', Helvetica Neue, HelveticaNeue, Helvetica, sans-serif;
}
```

## Normalized Major Second type scale | 1.125

Carbon uses the Major Second scale with a base size of 16px for 1 rem. It's been normalized to account for whole pixel rounding where the 1.125 ratio was applied to whole pixel values. Exclusively using sizes from this type scale will create visual, as well as hierarchical consistency, throughout the product. To reference the font size, use the mixin and reference the pixel value.

```scss
@include font-size('18');
```

<div data-insert-component="TypographyTable"></div>

## Font weights

Font weight is another typographic style that can add emphasis and differentiate content in the hierarchy of the design. Font weight, in conjunction with type size, must be carefully balanced. At the same size, a bold weight will always have more emphasis than a lighter weight font. However, a larger, lighter weight font is ranked higher than a smaller, bold font.

---
***
|  |  |
|--------------|------------|
| Font-weight: 300 / Light <br> _Should only be used at sizes greater than or equal to 18px / 1.125rem_  | Light 300  |
| Font-weight: 400 / Normal | Normal 400 |
| Font-weight: 700 / Bold   | Bold 700   |

## Headers

The size of a header is determined by layout or template structure. Each UI may have several levels of architecture and areas that require varying header sizes. Nevertheless, all headers must be sized from the Major Second type scale and paired with a thoughtfully considered font weight.

## Body copy

### Font size

We recommend using two sizes for body copy. The first is UI specific. Due to valuable screen real estate we chose a smaller 14px / 0.875rem body copy size for the standard UI console. However, for areas that have prolonged reading, like Documentation, we use a larger body copy size of 16px / 1rem to enhance readability.

**Standard Console: 14px / 0.875rem**

**Prolonged reading: 16px / 1rem**

### Line-height

Line-height, traditionally known as leading, is one of several factors that directly contribute to readability and pacing of copy. Line-heights are based on the size of the font itself. Ideal line-heights for standard copy have a ratio of 1.5. For example, a type at 1em/16px would have a line-height of 24px (16 x 1.5). The exception to this rule are headings, which need less spacing and therefore have a line-height ratio of 1.25.

**Standard line-height: type size x 1.5**

**Headings line-height: type size x 1.25**

### Line-length

Line-length, traditionally known as measure, is the number of characters in a single line. It also directly contributes to the readability and pacing of copy. Lines that are too long degrade eye tracking from line to line, making it difficult to gauge which line to read next. In contrast, lines that are too short make it difficult for a reader to maintain a steady reading rhythm. Short lines often create disproportionate ragged edges that negatively affect the design.

**Line-length: 52 - 78 characters**

## Custom styling

### Letter-spacing

Custom letter-spacing is used only on a few special styles. The styles that it can be applied to are headers, bold weights and always to All Caps.

**Letter-spacing: 0.5px**

### Font-smoothing

Font-smoothing is only used on bold weights (700). It is never used on thin (200) and light (300) weights.
