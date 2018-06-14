## Color

| Class                      | Property   | SCSS     | HEX     |
|----------------------------|------------------|----------|---------|
|`.bx--modal-container`      | background-color | $ui-01   | #ffffff |
|`.bx--modal-container`      | border-top       | $brand-01| #3d70b2 |
|`.bx--modal-header__label`  | color            | $text-02 | #5a6872 |
|`.bx--modal-header__heading`| color            | $text-02 | #5a6872 |
|`text`                      | color | $text-02| #5a6872 |
|`.bx--modal-close__icon`    | fill             | $ui-05   | #5a6872 |
|`.bx--modal-footer`         | background-color | $ui-05   | #5a6872 |
|`.bx--modal                 | background-color | $ui-03   | #dfe3e6 @ 50% opacity |



## Typography

Modal labels are optional and should be set in all caps when used. Modal titles should be set in sentence case and should not exceed three words. Important directions or information in the Modal text can be bold, otherwise it should be in roman.

| Class                       | Font-size (px/rem)| Font-weight     | Type style |
|-----------------------------|-------------------|-----------------|------------|
|`.bx--modal-header__label`   | 14 / 0.875        | Semi-Bold / 600 | Zeta       |
|`.bx--modal-header__heading` | 28 / 1.75         | Light / 300     | Beta       |
| Text                        | 16 / 1            | Normal / 400    | -          |

## Layer

| Class                 |Layer      | Elevation  | Box-shadow                         |
|-----------------------|-----------|------------|------------------------------------|
|`.bx--modal-container` | Pop-out   | 24         | 0 12px 24px 0 rgba(0,0,0,0.10);  |

## Structure

| Class                                    | Property                     | px | rem    |
|------------------------------------------|------------------------------|----|--------|
| `.bx--modal-container`                   | border-top                   | 5  | 0.313  |
| `.bx--modal-close__icon`                 | height, width                | 10 | 0.625  |
| Footer: height                           |                              | 88 | 5.5    |
| `.bx--modal-container`                   | padding-left, padding-right  | 48 | 3      |
| `.bx--modal-container`                   | padding-top                  | 40 | 2.5    |
| `.bx--modal-container`                   | padding-top                  | 40 | 2.5    |
| `bx--modal-header__label bx--type-delta` | margin-bottom                | 8  | 0.5    |
| `bx--modal-header`                       | margin-bottom                | 24 | 1.5    |
| `bx--modal-content`                      | margin-bottom                | 48 | 3      |

![Structure and spacing measurements for Passive Modal](images/modal-style-1.png)
_Structure and spacing measurements for a Passive Modal | px / rem_
![Structure and spacing measurements for Transactional Modal elements](images/modal-style-2.png)
_Structure and spacing measurements for a Transactional Modal | px / rem_

## Mobile

Modals should be full screen on mobile.

---
***
> 
![Modal on mobile](images/modal-style-3.png)

_Example of a Modal on a mobile screen_
