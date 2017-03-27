## Color

| COLOR            | SCSS                   | HEX                    |
|------------------|------------------------|------------------------|
| Normal           | $brand-01              | #3d70b2                |
| Primary:hover    | $brand-02              | #5596e6               |
| Secondary:hover  | $brand-01              | #3d70b2                |
| Disabled         | $brand-01              | #3d70b2 at 50% opacity |


<div data-insert-component="ImageGrid">
  <div>
    ![Example of a normal Primary Button](images/button-style-1.png)
  </div>
  <div>
    ![Example of a Primary Button on hover](images/button-style-2.png)
  </div>
  <div>
    ![Example of a disabled Primary Button](images/button-style-3.png)
  </div>
  <div>
    ![Example of a normal Secondary Button](images/button-style-4.png)
  </div>
  <div>
    ![Example of a Secondary Button on hover](images/button-style-5.png)
  </div>
  <div>
    ![Example of a disabled Secondary Button](images/button-style-6.png)
  </div>
</div>
_Primary and Secondary Button state examples_

## Typography

Button text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized.

| PROPERTY  | FONT-SIZE      | FONT-WEIGHT  |
|-------------|------------------|--------------|
| Button text | 14px / 0.875rem  | Bold / 700   |

## Structure

| HEIGHT          | PX | REM |
|-----------------|----|-----|
| Regular buttons | 40 | 2.5 |
| Small buttons   | 32 | 2   |

<div data-insert-component="ImageGrid">
  <div>
    ![Structure for a Primary Button](images/button-style-7.png)
  </div>
  <div>
    ![Structure for a small Primary Button](images/button-style-8.png)
  </div>
</div>
_Stucture measurements for small and regular Primary Button | px / rem_

### Spacing

A Button cannot have any element or text within 16 pixels / 1 rem of its borders. For Button groups, the primary button is positioned on the outside of the set, while the secondary button is positioned inside. For a Button with an icon, the space between the button label and the icon must be greater than or equal to 16 pixels / 1 rem. This is to accommodate for instances where two or more buttons with icons appear together.

| SPACING                 | PX | REM   |
|-------------------------|----|-------|
| Text & button           | 16 | 1     |
| External: regular button| 16 | 1     |
| Internal: small button  | 10 | 0.625 |
| Button pairings         | 16 | 1     |
| Button & icon           | 16 | 1     |

<div data-insert-component="ImageGrid">
  <div>
    ![Spacing for Primary Button](images/button-style-9.png)
  </div>
  <div>
    ![Spacing for small Primary Button](images/button-style-10.png)
  </div>
  <div>
    ![External Button spacing](images/button-style-11.png)
  </div>
  <div>
    ![Internal spacing for a Button with icon](images/button-style-12.png)
  </div>
</div>
_Spacing measurements for various Button types | px / rem_
