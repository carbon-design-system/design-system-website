## Color

 Inputs come in two different colors. The default input color is `$field-01` and is used on `$ui-01` page backgrounds. The light version input color is `$field-02` and is used on `$ui-02` page backgrounds.

If a `min date` is set on the calendar, then any text appearing before that date will be `#152934 @ 50%`, otherwise all text should be `#152934` (unless the number is selected or highlighted). Please refer to [Select](/components/select), for inline select styling.

| Color                    | SCSS       | HEX       |
|--------------------------|------------|-----------|
| Background: input default | $field-01     | #f4f7fb |
| Background: input light  | $field-02     | #ffffff |
| Label: enabled           | $text-01   | #152934   |
| Label: focused           | $brand-01  | #3d70b2   |
| Label: error             | $support-01 | #e0182d |
| Text: user input         | $text-01   | #152934   |
| Text: placeholder        | $text-02   | #5a6872   |
| Text: selected date      | $inverse-01    | #ffffff   |
| Text: highlighted range  | $text-01   | #5596e6   |
| Text: error message      | $support-01        | #e0182d   |
| Background: calendar widget | $ui-01     | #ffffff   |
| Background: selected date | $brand-01  | #3d70b2   |
| Background: highlighted range | $brand-02  | #5596e6   |
| Icon                     | $brand-01  | #3d70b2   |
| Border: current date     | $brand-01  | #3d70b2   |
| Border bottom: enabled | $ui-05 | #5a6872 |
| Border bottom: focused | $brand-01 | #3d70b2 |
| Border bottom: error | $support-01 | #e0182d |

![Example of a Date Picker](images/date-picker-style-1.png)
_Structure for Date Picker | px / rem_



## Typography
Labels should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized, and no more than three words.

| Property         | Font-size       | Font-weight  | Type style |
|------------------|-----------------|--------------|----|
| Label            | 14 / 0.875      | Semi-Bold / 600   | Zeta |
| Text: user input  | 14 / 0.875     | Roman / 400  | - |
| Text: month & year | 12 / 0.75     | Semi-Bold / 600  | Omega |
| Text: day of the week | 12 / 0.75  | Semi-Bold / 600   | Omega |
| Text: day        | 12 / 0.75       | Roman / 400  | - |
| Text: error message | 12 / 0.75 | Normal / 400 | - |


## Layer
| Component                     | Layer    |
|-------------------------------|----------|
| Calendar widget               | Overlay  |


## Structure

### Simple & Single Date Pickers

| Property                     | px  | rem    |
|------------------------------|-----|--------|
| Height                       | 40  | 2.5    |
| Width: Simple Date Picker (mm/yyyy) | 91 | 5.7   |
| Width: Simple Date Picker (mm/dd/yyyy) | 114 | 7.125  |
| Width: Single Date Picker    | 144 | 9      |
| Calendar icon                | 16  | 1      |
| Internal spacing             | 16  | 1      |
| Spacing: icon & input text   | 8  | 0.5|
| Border bottom: enabled | 1 | 0.0625rem |
| Border bottom: focused | 2 | 0.125 |

<div data-insert-component="ImageGrid">
  <div>
    ![Structure for Simple & Single Date Pickers](images/date-picker-style-4.png)
  </div>
  <div>
    ![Spacing for Simple & Single Date Pickers](images/date-picker-style-5.png)
  </div>
  <div>
    ![Structure for Simple & Single Date Pickers](images/date-picker-style-6.png)
  </div>
  <div>
    ![Spacing for Simple & Single Date Pickers](images/date-picker-style-7.png)
  </div>
</div>
_Structure and spacing for Simple & Single Date Pickers | px / rem_


### Range Date Picker

| Property                     | px  | rem    |
|------------------------------|-----|--------|
| Height                       | 230 | 14.375 |
| Width                        | 280 | 17.5   |
| Calendar icon                | 16  | 1      |
| Spacing: right of text input | 8   | 0.5    |
| Internal spacing             | 16  | 1      |
| Spacing: month & days of week| 20  | 1.25   |
| Spacing: days of week & days | 20  | 1.25   |
| Current date border          | 2   | -      |


![Structure for Date Picker](images/date-picker-style-2.png)
_Structure for Date Picker | px / rem_

![Spacing for Date Picker](images/date-picker-style-3.png)
_Spacing for Date Picker | px / rem_

### Time Picker
There are two types of time pickers; a 12-hour and 24-hour time picker. The 12-hour Time Picker is accompanied by a time period (am/pm) input, while the 24-hour clock is not.

| Property                     | px  | rem   |
|------------------------------|-----|-------|
| Height                       | 40  | 2.5   |
| Width                        | 80  | 5     |
| Internal spacing             | 16  | 1     |
| Spacing: time picker & inline select | 16  | 1  |



<div data-insert-component="ImageGrid">
  <div>
    ![Structure for a Time Picker](images/time-picker-style-1.png)
  </div>
  <div>
    ![Spacing for a Time Picker](images/time-picker-style-2.png)
  </div>
</div>
_Structure and spacing for a Time Picker | px / rem_

### States

**Active:** Placeholder text should remain when the user clicks into the text input and gets a cursor. Once the user starts typing the hint text is replaced with the user input text.

**Error:** Error messages appear below the input field and are always present while invalid.

**Disabled:** Disabled state a `.not-allowed` cursor hover and appears at 50% opacity.
