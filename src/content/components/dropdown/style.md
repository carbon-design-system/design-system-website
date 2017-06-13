## Color

| ATTRIBUTE              | SCSS            | HEX       |
|--------------------|-----------------|-----------|
| Background         | $field-01 @ 10% | #3d70b2   |
| Drawer background  | $ui-01          | #ffffff   |
| Caret              | $brand-01       | #3d70b2   |
| Text               | $text-01        | #152935   |
| Drawer: hover      | $brand-01       | #3d70b2   |
| Text: hover        | $inverse-01     | #ffffff   |
| Border: active     | $brand-01       | #3d70b2   |

![Normal, active, open, and disabled states for Dropdown](images/dropdown-style-1.png)
_Normal, active, open, and disabled states for Dropdown_

## Typography

All Dropdown text should be set in sentence case with the first letter of each word capitalized. Dropdown options should not exceed three words.

| PROPERTY  | FONT-SIZE (px/rem)      | FONT-WEIGHT  |
|-------------|-----------------|--------------|
| Label       | 14 / 0.875 | Bold / 700   |
| Option text | 14 / 0.875 | Normal / 400 |

## Layer

| LAYER      | ELEVATION     | BOX-SHADOW      |
|------------|----------|----------|
| Overlay    | 8        | `0 4px 8px 0 rgba(0,0,0,0.10);`  |

## Structure

Dropdowns have two states, open and closed. An open and closed Dropdown should be the same width and appropriately fit the design, layout, and content. The height of a closed Dropdown stays consistent while the height of an open Dropdown will vary based on the amount of options it has. Please note the various color differences for closed and open Dropdowns.

| PROPERTY         | PX | REM |
|------------------|----|-----|
| Height           | 40 | 2.5 |
| Internal spacing | 16 | 1   |

![Structure and spacing for a closed dropdown](images/dropdown-style-2.png)
_Structure and spacing measurements for Dropdown | px / rem_
