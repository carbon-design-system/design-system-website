## Color

| ATTRIBUTE                    | SCSS      | HEX       |
|--------------------------|-----------|-----------|
| Background with Tabs     | $ui-01    | #ffffff   |
| Background with Interior Left Nav  | $ui-02    | #f5f7fa   |
| Title                    | $text-02  | #5a6872   |
| Secondary text           | $text-01  | #152935   |

## Typography

Detail Page Header titles, Breadcrumb text, and Tab labels should all be set in sentence case.

| Property   | Font-size (px/rem)       | Font-weight  |
|------------|-----------------|--------------|
| Title      | 28 / 1.75  | Light / 300  |
| Secondary text     | 14 / 0.875 | Normal / 400 |
| Breadcrumb | 14 / 0.875 | Normal / 400 |

## Layer

| COMPONENT                     | LAYER    | ELEVATION | BOX-SHADOW  |
|----------                     |----------|---------- |-------------|
| Detail page header            | Base     | 0         | none  |
| Detail page header with tabs  | Flat     | 1         | none  |
| Detail page header on scroll  | Overlay  | 8         | `0 4px 8px 0 rgba(0,0,0,0.10);`  |

## Structure

The width of the Detail Page Headers extend across the entire browser, therefore the width of the Detail Page Header is determined by the width of the browser.

### Detail Page Header with Interior Left Nav

| PROPERTY                     | PX | REM   |
|------------------------------|----|-------|
| Height                       | 88 | 5.5   |
| Height: on scroll            | 64 | 4     |
| Icon                         | 36 | 2.25  |
| Spacing: above breadcrumb    | 10 | 0.625  |
| Spacing: breadcrumb & title  | 12 | 0.75   |
| Spacing: below title         | 14 | 0.875  |
| Spacing: icon, title & status| 10 | 0.625  |

![Structure and spacing measurements for Detail Page Header](images/detail-page-header-style-1.png)
![Detail Page Header on scroll](images/detail-page-header-style-2.png)
_Structure and spacing measurements for Detail Page Header and Detail Page Header on scroll | px / rem_

### Detail Page Header with Tabs

| SPACING                      | PX  | REM  |
|------------------------------|-----|------|
| Height                       | 124 | 7.75 |
| Height: on scroll            | 64  | 4    |
| Spacing: above breadcrumb    | 12  | 0.75  |                   
| Spacing: breadcrumb & title  | 8   | 0.5  |
| Spacing: title & tabs        | 20  | 1.25 |
| Spacing: icon, title & status| 10  | 0.625 |

![Structure and spacing measurements for Detail Page Header with tabs ](images/detail-page-header-style-3.png)
_Structure and spacing measurements for Detail Page Header with tabs | px / rem_

### Detail Page Header for mobile

Please see [Dropdown](/components/dropdown/style) for additional styling specs.

| SPACING                         | PX  | REM  |
|---------------------------------|-----|------|
| Height                          | 116 | 7.25 |
| Height: on scroll & no tabs     | 64  | 4    |
| Width                           | Varies based on browser width | |    
| Spacing: internal sides         | 20  | 1.25 |   
| Spacing: internal, top & bottom | 12  | 0.75  |              
| Spacing: title & dropdown       | 12  | 0.75  |
| Spacing: icon, title & status   | 10  | 0.625 |
| Icon                            | 36  | 2.25 |

![Structure and spacing measurements for Detail Page Header mobile ](images/detail-page-header-style-4.png)
_Structure and spacing measurements for Detail Page Header on mobile | px / rem_
