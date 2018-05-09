## Color

| Attribute              | SCSS      | HEX       |
|--------------------|-----------|-----------|
| Icon               | $brand-01 | #3d70b2   |
| Label               | $text-01  | #152935   |
| Background: Definition Tooltip  | $inverse-02 | #272d33 |
| Background: Interactive Tooltip  | $ui-01    | #ffffff   |
| Text: Definition Tooltip  | $inverse-01 | #ffffff   |
| Text: Interactive Tooltip | $text-01  | #152935   |
| Tooltip border     | $ui-03    | #dfe3e6   |

---
***
>  
![Closed and open states for a Tooltip](images/tooltip-style-1.png)

_Example of closed and open states for a Tooltip_

## Typography

Tooltip labels and text should be set in sentence case.

| Property | Font-size (px/rem)     | Font-weight  | Type style |
|----------|-----------------|--------------|---|
| Label   | 14 / 0.875    | Semi-Bold / 600   | Zeta |
| Text     | 12 / 0.75 | Normal / 400 | Caption |

## Layer

| Layer      | Elevation     | Box-shadow      |
|------------|----------|----------|
| Overlay    | 8        | `0 4px 8px 0 rgba(0,0,0,0.10);`  |

## Structure

| Property                | px  | rem   |
|-------------------------|-----|-------|
| Height: Tooltip  | Varies based on content  | -    |
| Width: Definition Tooltip  | 170 | 0.625 |
| Icon: width & height    | 16  | 1     |
| Spacing: label & icon   | 10  | 0.625 |
| Spacing: icon & Tooltip | 10  | 0.625 |
| Spacing: Definition Tooltip internal       | 8  | 0.5   |
| Spacing: Interactive Tooltip internal       | 16  | 1   |


---
***
>  
![Structure and spacing measurements for a definition tooltip](images/tooltip-style-4.png)

_Structure and spacing measurements for a Definition Tooltip | px / rem_

---
***
>  
![Structure and spacing measurements for an Interactive tooltip](images/tooltip-style-2.png)

_Structure and spacing measurements for an Interactive Tooltip | px / rem_

### Placement

Tooltips should always be placed below the Tooltip icon unless it is within the height of the Tooltip box plus 16px / 1em of the bottom of the page. In that instance, the Tooltip should appear to the right of the Tooltip icon. On mobile, Tooltips can only appear below the Tooltip icon.

![Placement examples for a Tooltip](images/tooltip-style-3.png)
_Placement examples for a Tooltip_
