## Color

| COLOR                      | SCSS       | HEX      |
|----------------------------|------------|----------|
| Background                 | $ui-01     | #ffffff  |
| Background: active, hover  | $ui-01     | #f0f3f6  |
| Text                       | $text-01   | #152935  |
| Text: active, :hover       | $brand-01  | #3d70b2  |
| Border-right               | $ui-04     | #dfe3e6  |
| Footer, nav closed         | $ui-01     | #f0f3f6  |
| Footer, nav closed: hover  | $ui-04     | #dfe3e6  |
| Caret                      | $ui-05     | #8C9BA5  |
| Chevron                    | $brand-01  | #152935  |

_
![Various select and hover states for the Interior Left Navigation]() 
_
_Select and hover states for Interior Left Navigation_

## Typography

All left navigation text should be set in title case, with the first letter of each word capitalized. Labels should not exceed three words. 

| Property                | Font-size       | Font-weight  |
|-------------------------|-----------------|--------------|
| List item               | 14px / 0.875rem | Bold / 700   |
| List item               | 12px / 0.75rem  | Roman / 300  |
| List item: selected    | 12px / 0.75rem  | Bold / 700   |

## Layer

| LAYER      | ELEVATION     | BOX-SHADOW      |
|------------|----------|----------|
| Temporary nav     | 16        | `0 8px 16px 0 rgba(0,0,0,0.10);`  |

## Structure

The width of the menu stays consistent, while the menu height varies based on the height of the viewport, always spanning from the global header to the bottom of the viewport. 

| PROPERTY                      | PX  | REM    |
|-------------------------------|-----|--------|
| Height                        | Varies by browser height||
| Width: open                   | 200 | 12.5   |
| Width: closed                 | 48  | 3      |
| Right-border                  | 1   | -      |
| Height: collapse section      | 48  | 3      |
| Spacing: internal sides       | 20  | 1.25   |
| Spacing: top                  | 24  | 1.5    |
| Spacing: collapse and chevron | 12  |.75     |
| Spacing: chevron & bottom     | 14  | .875   |

![Structure and spacing measurements for the open Interior Left Nav ]()
![Structure and spacing measurements for the closed Interior Left Nav]()
_Structure and spacing measurements for open and closed Interior Left Nav | px / rem_

