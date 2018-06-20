## Color

Inputs come in two different colors. The default input color is `$field-01` and is used on `$ui-01` page backgrounds. The light version input color is `$field-02` and is used on `$ui-02` page backgrounds.

| Class                                               | Property         | SCSS          | HEX     |
|-----------------------------------------------------|------------------|---------------|---------|
| `bx--search bx--search--sm` </br> `bx--search-input`| background-color | $field-01     | #f4f7fb |
|`bx--search bx--search--sm bx--search--light`        | background-color | $field-02     | #ffffff |
| Text: user input                                    | color            | $text-01      | #152935 |
|`.bx--search-magnifier`                              | fill             | $ui-05        | #5a6872 |

### States

| Class                        | Property         | SCSS          | HEX     |
|------------------------------|------------------|---------------|---------|
|::placeholder                 | color            |  $text-03     | #cdd1d4 |
|border: focus                 | border           | $brand-01     | #3d70b2 |


![Example of Search using $field-01 and $field-02](images/search-style-4.png)
_Example of Search using $field-02 (top) and $field-01 (bottom)_

![Normal, hover, and input search states](images/search-style-1.png)
_Examples of normal, hover, and input Search states_

## Typography

Search text should be set in sentence case, with only the first letter of the first word capitalized.

| Property            | Font-size       | Font-weight         |  Type style |
|---------------------|-----------------|---------------------|-------------|
| `.bx--search-input` | 14 / 0.875      | Semi-Bold / 600     | Zeta        |
| Placeholder text    | 14 / 0.875      | Normal italic / 400 | -           |

## Structure

The width of the Search field should appropriately fit the design and layout of content. Larger Search fields can include a filter button and a list/card view button.

| Class                | Property    | px | rem   |
|----------------------|----|-------|-------|
| Height: regular      | 44 | 2.75  |
| Height: small        | 32 | 2     |
| `.bx--search-magnifier` </br> `.bx--search-close` | height, width| 16 | 1     |
| Spacing: search icon | 8  | 0.5 |
| Spacing: small search icon | 12 | 0.75  |

![Structure and spacing measurements for regular search](images/search-style-2.png)
_Structure and spacing measurements for Regular Search | px | rem_
![Structure and spacing measurements for small search](images/search-style-3.png)
_Structure and spacing measurements for Small Search | px | rem_
