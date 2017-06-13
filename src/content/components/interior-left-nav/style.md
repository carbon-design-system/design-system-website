## Color

| ATTRIBUTE                      | SCSS       | HEX      |
|----------------------------|------------|----------|
| Background                 | $ui-01     | #ffffff  |
| Background: active, hover  | $ui-01     | #f0f3f6  |
| Text                       | $text-01   | #152935  |
| Text: active, :hover       | $brand-01  | #3d70b2  |
| Border-right               | $ui-04     | #dfe3e6  |
| Footer, nav closed         | $ui-01     | #f0f3f6  |
| Footer, nav closed: hover  | $ui-04     | #dfe3e6  |
| Caret                      | $ui-05     | #8c9ba5  |
| Chevron                    | $brand-01  | #152935  |

<div data-insert-component="ImageGrid">
  <div>
    ![Various select and hover states for the Interior Left Navigation](images/interior-left-nav-style-1.png)
  </div>
  <div>
    ![Various select and hover states for the Interior Left Navigation](images/interior-left-nav-style-2.png)
  </div>
</div>

![Various select and hover states for the Interior Left Navigation](images/interior-left-nav-style-3.png)

_Select and hover states for Interior Left Navigation_


## Typography

All left navigation text should be set in title case, with the first letter of each word capitalized. Labels should not exceed three words.

| Property                | Font-size (px/rem)      | Font-weight  |
|-------------------------|-----------------|--------------|
| List item               | 14 / 0.875 | Bold / 700   |
| List item               | 12 / 0.75  | Roman / 300  |
| List item: selected    | 12 / 0.75  | Bold / 700   |

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
| Spacing: collapse and chevron | 12  | 0.75     |
| Spacing: chevron & bottom     | 14  | 0.875   |

<div data-insert-component="ImageGrid">
  <div>
    ![Structure and spacing measurements for the open Interior Left Nav](images/interior-left-nav-style-4.png)
  </div>
  <div>
    ![Interior left nav collapse](images/interior-left-nav-style-5.png)
  </div>
</div>

_Structure and spacing measurements for open and closed Interior Left Nav | px / rem_
