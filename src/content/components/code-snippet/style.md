## Color

| Class                       | Property        |SCSS       | HEX     |
|-----------------------------|-----------------|-----------|---------|
| `.bx--snippet--single`      | background      | $ui-01    | #ffffff |
| `.bx--snippet--single`      | border          | $ui-03    | #DFE3E6 |  
| Code & terminal snippet: text           | $ui-01    | #152934 |
| `.bx--snippet__icon`        | color           | $brand-01 | #3d70b2 |
| `.bx--snippet--inline`      | background-color | $field-01| #ffffff |
| `.bx--snippet--inline` background on ui-01 | background-color    | $field-02  | #F4F7FB |
| `.bx--snippet--inline:hover` (background on ui-02 ) | background-color | $ui-02   | #D0DCED |
| `.bx--snippet--inline:hover` (background on ui-01 ) | background-color | $hover-row  | #5596e6 at 10% opacity|

| Inline code: text           | $text-02   | #5A6872 |


## Typography

| Class | Font-family | Font-size (px/rem) | Font-weight  |
|----------|-------------|--------------------|--------------|
| `.bx--snippet.code`| Monospace | 85% of body copy size |Normal / 400 |
| `.bx--snippet.code`| Monospace | 85% of body copy size | Normal / 400 |
| `.bx--snippet--inline.code`  | Monospace   | 85% of body copy size | Normal / 400 |

## Structure


### Code Snippet

| Class                  | Property           | px  | rem  |
|------------------------|--------------------|-----|------|
| `.bx--snippet--single` | height             | 56  | 3.5  |
| `.bx--snippet--single` | width (100%)       | 600 | 37.5 |
| `.bx--snippet--single` | padding-right (2.5)| 24  | 1.5  |
| `.bx--snippet--single` | padding-left       | 16  | 1    |

<!-- Not done with spacing but with positioning
|| Spacing: icon & tooltip | 4 | 0.5| -->

![](images/code-snippet-style-1.png)
_Structure and spacing measurements for Code Snippet | px / rem_


### Multi-line Code Snippet

| Class                | Property          | px  | rem  |
|----------------------|-------------------|-----|-------|
| `.bx--snippet--multi`| min-height        | 288 | 18    |
| `.bx--snippet--multi.bx--snippet-container`| max-height   | Varies based on amount of content |     |
| `.bx--snippet--multi`| width             | 600 | 37.5    |
| `.bx--snippet--multi`| padding-top, padding-bottom | 16  | 1     |
| `.bx--snippet--multi`| padding-right     | 48  | 3       |


|| Icon: height & width      | 16  | 1   |
|| Spacing: icon & tooltip | 4 | 0.5|

|| Spacing: external | 16  | 1     |

![](images/code-snippet-style-2.png)
_Structure and spacing measurements for Multi-line Snippet | px / rem_



### Inline Code Snippet

| Class          | Property          | px  | rem  |
|----------------|-------------------|-----|-------|
|| height             | 22 | 1.375 |
|| width | Varies based on content |  |
|`.bx--snippet--inline`| border-radius | 4 | - |
|`.bx--snippet--inline.code`| padding-right, padding-left | 8 | 0.5 |





---
***
> 
![](images/code-snippet-style-3.png)

_Structure and spacing measurements for Copy icon | px / rem_
