## Color
| Color              | SCSS            | HEX       |
|--------------------|-----------------|-----------|
| Background         | $field-01 @ 10% | #3d70b2   |
| Drawer background  | $ui-01          | #ffffff   |
| Caret              | $brand-01       | #3d70b2   |
| Label              | $text-01        | #152935   |
| Drawer: hover      | $brand-01       | #3d70b2   |
| Option text: hover | $inverse-01     | #ffffff   |
| Label: filter      | $text-03        | #5a6872   |
| User input text    | $text-01        | #152935   |


![Normal, active, open, and disabled states for Dropdown](images/dropdown-style-1.png)
_Normal, active, open, and disabled states for Dropdown_

## Typography
All Dropdown text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized. Dropdown options should not exceed three words.

| Property  | Font-size (px/rem)      | Font-weight  |
|-------------|-----------------|--------------|
| Label       | 14 / 0.875 | Bold / 700   |
| Option text | 14 / 0.875 | Normal / 400 |
| Label: filter | 14 / 0.875 | Normal / 400   |
| Placeholder text: filter | 14 / 0.875 | Normal / 400   |
| User input text | 14 / 0.875 | Bold / 700   |


## Layer
| Layer      | Elevation     | Box-shadow    |
|------------|----------|----------|
| Overlay    | 8        | `0 4px 8px 0 rgba(0,0,0,0.10);`  |


## Structure
Dropdowns have two states, open and closed. An open and closed Dropdown should be the same width and appropriately fit the design, layout, and content. The height of a closed Dropdown stays consistent while the height of an open Dropdown will vary based on the amount of options it has. Please note the various color differences for closed and open Dropdowns.

| Property         | px | rem |
|------------------|----|-----|
| Height           | 40 | 2.5 |
| Internal spacing | 16 | 1   |

![Structure and spacing for a closed dropdown](images/dropdown-style-2.png)
_Structure and spacing measurements for Dropdown | px / rem_

## Multi-Select Dropdown

| Property                           | px | rem   |
|------------------------------------|----|-------|
| Height                             | 40 | 2.5   |
| Internal spacing                   | 16 | 1     |
| Row height                         | 40 | 2.5   |
| Spacing: checkbox & checkbox label | 8  | 0.5   |
| Spacing: badge & label             | 8  | 0.5   |
| Spacing: label & caret             |16≤ | 1≤    |
| Badge height                       | 18 | 1.125 |
| Badge width                        | Varies based on value |  |


![Structure and spacing for a Multi-Select Dropdown](images/dropdown-style-3.png)
_Structure and spacing measurements for a Multi-Select Dropdown | px / rem_

<!--![Hover and focus states for a Multi-Select Dropdown](images/dropdown-style-4.png)
_Hover and focus zstates for a Multi-Select Dropdown_-->



## Inline Dropdown

| Property                           | px | rem   |
|------------------------------------|----|-------|
| Height                             | 32 | 2     |
| Internal spacing                   | 10 | 0.625 |
| Spacing: label & dropdown menu     | 10 | 0.625 |
| Row height                         | 40 | 2.5   |
| Spacing: checkbox & checkbox label | 8  | 0.5   |
| Spacing: badge & label             | 10 | 0.625 |
| Spacing: label & caret             | 8≤ | 0.5≤  |
| Badge height                       | 18 | 1.125 |
| Badge width                       | Varies based on value |  |


![Structure and spacing for Inline Dropdown](images/dropdown-style-5.png)
_Structure and spacing for Inline Dropdown | px / rem_


### Inline Dropdown states
Inline select has two different states, one for mouse hover and one for keyboard focus.

---
***
> 
![Hover and focus states for Inline Dropdown](images/dropdown-style-6.png)

_Hover and focus states for Inline Dropdown_

## Filtering
Filtering can be used with Dropdown and Multi-select Dropdown but not Inline Dropdown.

| Property                           | px | rem   |
|------------------------------------|----|-------|
| Clear icon height & width          | 10 | 0.625 |
| Spacing: caret & clear icon        | 16 | 1     |
| Spacing: clear icon & typed text   | 16 | 1     |

![Spacing for Multi-select Dropdown with Filtering](images/dropdown-style-7.png)
_Spacing for Multi-select Dropdown with Filtering | px / rem_

![Interation states for Multi-select Dropdown with Filtering](images/dropdown-style-8.png)
_Interaction states for Multi-select Dropdown with Filtering | px / rem_
