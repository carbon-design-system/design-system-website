## Color

Inputs come in two different colors. The default input color is `$field-01` and is used on `$ui-01` page backgrounds. The light version input color is `$field-02` and is used on `$ui-02` page backgrounds.

| Attribute             | SCSS          | HEX      |
|-------------------|---------------|-----------|
| Background: default | $field-01     | #f4f7fb |
| Background: light | $field-02     | #ffffff |
| Label: enabled    | $text-01      | #152934   |
| Label: focused    | $brand-01     | #3d70b2   |
| Label: error      | $support-01   | #e0182d |
| Label: inline select  | $text-01      | #152934  |
| Caret             | $brand-01     | #3d70b2   |
| Text: input       | $text-01      | #152935   |
| Text: inline select | $brand-01     | #3d70b2   |
| Text: placeholder | $text-03      | #cdd1d4   |
| Text: error message      | $support-01        | #e0182d   |

![Default and new selection state examples for Select](images/select-style-1.png)
_Examples of default and new selection Select states in $field-02 (right) and $field-01 (left)_

## Typography

Select text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized. Select text should be three words or less.

| Property | Font-size       | Font-weight  | Type style |
|----------|-----------------|--------------|---|
| Label    | 14 / 0.875 | Semi-Bold / 600   | Zeta |
| Label: inline select    | 14 / 0.875 |  Normal / 400   | - |
| Text: input     | 14 / 0.875 | Normal / 400 | - |
| Text: inline select     | 14 / 0.875 | Semi-Bold / 600 | Zeta |
| Text: error message | 12 / 0.75 | Normal / 400 | - |

## Structure

| Property                    | px | rem   |
|-----------------------------|----|-------|
| Height                      | 40 | 2.5   |
| Spacing: Label & field      | 8  | 0.5 |
| Internal spacing            | 16 | 1     |
| Groupings: vertical         | 32 | 2     |
| Groupings: horizontal       | 16 | 1     |
| Border bottom: enabled      | 1 | 0.0625rem |
| Border bottom: focused      | 2 | 0.125 |

![Structure and spacing measurements for Select](images/select-style-2.png)
_Structure and spacing measurements for Select | px / rem_

### States

**Open:** Select menu styles are determined by browser. Each browser has a unique style. Shown in the example images is the Chrome select style.

**Help text:** Help text appears below the label when the input is active. Help text remains visible while the input is focused and disappears after focus away.

**Error:** Error messages appear below the input field and are always present while invalid.

**Disabled:** Disabled state has a `.not-allowed` cursor hover and appears at 50% opacity.

---
***
> 
![Open, disabled, and more information/help state examples for Select](images/select-style-3.png)

_Examples of open, disabled, and help Select states_

### Small Select

| Property                    | px | rem   |
|-----------------------------|----|-------|
| Height                      | 24 | 1.5   |
| Width                       | 56 | 3.5   |
| Internal spacing            | 8  | 0.5    |

<div data-insert-component="ImageGrid">
  <div>
    ![Structure and spacing measurements for Small Select](images/select-style-4.png)
  </div>
  <div>
    ![Structure and spacing measurements for Small Select](images/select-style-5.png)
  </div>
</div>
_Structure and spacing measurements for Small Select | px / rem_

_Examples of open and disabled Small Select states_



### Inline select

| Property                    | px | rem   |
|-----------------------------|----|-------|
| Height                      | 32 | 2     |
| Internal spacing            | 10  | 0.625    |


---
***
> 
![Structure and spacing measurements for Inline Select](images/select-style-6.png)

_Structure and spacing measurements for Inline Select (on hover) | px / rem_

### States

**Open:** Style determined by browser

**Help text:** Help text appears below the label when the input is active. Help text remains visible while the input is focused and disappears after focus away.

**Error:** Error messages appear below the input field and are always present while invalid.

**Disabled:** Disabled state has a `.not-allowed` cursor hover and appears at 50% opacity.
