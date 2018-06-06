## Color

| Attribute                   | SCSS                   | HEX                    |
|-----------------------------|------------------------|-----------------------|
| `bx--btn--primary` `bx--btn--secondary` | $brand-01  | #3d70b2               |
| `bx--btn--primary:hover`     | $hover-primary        | #30588c               |
| `bx--btn--primary:disabled`  | $brand-01             | #3d70b2 at 50% opacity|
| `bx--btn--secondary:hover`   | $hover-secondary      | #3d70b2               |
| `bx--btn--tertiary`          | $ui-05                | #5a6872               |
| `bx--btn--tertiary:hover`    | $ui-05                | #5a6872               |
| `bx--btn--danger--primary` `bx--btn--danger--secondary` |$support-01                   | #e0182d               |
| `bx--btn--danger--primary:hover` | $hover-danger     | #bd1427               
| `bx--btn--danger--secondary:hover` | $support-01     | #e0182d               |



<div data-insert-component="ImageGrid">
  <div>
    ![Example of a normal Primary Button](images/button-style-1.png)
  </div>
  <div>
    ![Example of a Primary Button on hover](images/button-style-2.png)
  </div>
  <div>
    ![Example of a disabled Primary Button](images/button-style-3.png)
  </div>
  <div>
    ![Example of a Secondary Button](images/button-style-4.png)
  </div>
  <div>
    ![Example of a Secondary Button on hover](images/button-style-5.png)
  </div>
  <div>
    ![Example of a disabled Secondary Button](images/button-style-6.png)
  </div>
  <div>
    ![Example of a normal Ghost Button](images/button-style-15.png)
  </div>
  <div>
    ![Example of a Ghost Button on hover](images/button-style-16.png)
  </div>
  <div>
    ![Example of a disabled Ghost Button](images/button-style-17.png)
  </div>
</div>
_Primary, Secondary, and Ghost Button state examples_



## Typography

Button text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized.

| Property       | Font-size (px/rem) | Font-weight     |
|----------------|--------------------|-----------------|
|`bx--btn`       | 14 / 0.875         | Semi-Bold / 600 |

## Structure

| Height                     | px | rem |
|----------------------------|----|-----|
| `bx--btn--primary` | 40 | 2.5 |
| `bx--btn--sm`   | 32 | 2   |

<div data-insert-component="ImageGrid">
  <div>
    ![Structure for a Primary Button](images/button-style-7.png)
  </div>
  <div>
    ![Structure for a small Primary Button](images/button-style-8.png)
  </div>
</div>
_Stucture measurements for small and regular Primary Button | px / rem_

### Spacing

A Button cannot have any element or text within 16 pixels / 1 rem of its borders. For Button groups, the primary button is positioned on the outside of the set, while the secondary button is positioned inside. For a Button with a glyph, the space between the button label and the glyph must be greater than or equal to 16 pixels / 1 rem. This is to accommodate for instances where two or more buttons with glyphs appear together.

| Spacing                   | Property | px | rem  |
|---------------------------|----------|----|------|
| `bx--btn`                 | padding-left, padding-right | 16 | 1     |
| `bx--btn--sm`             | padding-left, padding-right |16 | 1     |
| `.bx--btn .bx--btn__icon` | margin-left | 8 | 0.5     |
| `.bx--btn--ghost .bx--btn__icon`| margin-left | 8 | 0.5     |
| External: button          | 10 | 0.625 |
| Button pairings           | 16 | 1     |

<div data-insert-component="ImageGrid">
  <div>
    ![Spacing for Primary Button](images/button-style-9.png)
  </div>
  <div>
    ![Spacing for small Primary Button](images/button-style-10.png)
  </div>
  <div>
    ![External Button spacing](images/button-style-11.png)
  </div>
  <div>
    ![Internal spacing for a Button with glyph](images/button-style-12.png)
  </div>
  <div>
  ![Ghost button spacing](images/button-style-13.png)
  </div>
  <div>
  ![Small Ghost button spacing](images/button-style-14.png)
  </div>
</div>
_Spacing measurements for various Button types | px / rem_
