## Color

| Class                         | Property         | SCSS                | HEX       |
|-------------------------------|------------------|---------------------|-----------|
| `.bx--link`                   | color            | $brand-01           | #3d70b2   |
| `.bx--link:hover`             | color            | $hover-primary-text | #294c86   |
| `.bx--breadcrumb-item::after` | color            | $text-02            | #5a6872   |
| Overflow text  | $text-01  | #152934   |
| Row:hover                     | background-color | $hover-row | #5596e6 at 10% opacity |


## Typography

When a user hovers overs a Breadcrumb, the Breadcrumb title should be underlined.

| Class         | Font-size (px/rem) | Font-weight  |
|---------------|--------------------|--------------|
| `.bx--link`   | 14 / 0.875         | Roman / 400  |
| Dropdown text | 14 / 0.875         | Roman / 400  |

![Breadcrumb typography treatment example](images/breadcrumb-style-1.png)
_Breadcrumb typography treatment example_

## Structure

The on-click dropdown should follow the [Overflow Menu](/components/overflow-menu) specs for sizing, padding, and interaction.

| Class                        | Property   | px | rem|
|------------------------------|------------|----|----|
| `.bx--breadcrumb-item::after`| margin-left| 16 | 1  |
| Icon & dropdown | 8  | 0.5 |

![Truncated breadcrumb dropdown example](images/breadcrumb-style-2.png)
_Structure and spacing measurements for Breadcrumb | px / rem_
