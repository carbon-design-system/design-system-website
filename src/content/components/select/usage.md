## General guidelines

### Labels

Labels are essential to the usability of forms because they provide guidance to the data a user might provide. Do not place a label inside a Select element. Use sentence case and no more than three words.

### Validation

Real time validation helps to streamline the process and keep data clean when the user is filling out forms. For full guidelines, refer to the [Forms](/components/form) usage page.

---
***
> 
![validation on select element](images/select-usage-1.png)
_Validation on Select_

### Order

The order of the Select list should be based on the frequency of use. If applicable, the list should be in increasing order relative to the content. In cases of Forms, alternative orders such as alphabetical may be more fitting. A horizontal rule can be used to group similar items together.

### Styling Select dropdowns

It is strongly recommended not to style Select dropdowns due to accessibility purposes.
One of the [WCAG 2.0 standards](https://www.w3.org/TR/WCAG20-TECHS/G202.html) for accessibility is “Ensuring keyboard control for all functionality.” CSS alternatives to `select` elements to not meet this requirement.

---
***
> 
![Select element rendered in Chrome](images/select-usage-2.png)
_Rendering of Select element in Chrome_

### Accessibility

While you can make a Select element easily usable by a mouse, making it usable with keyboard navigation is complex. The default `select` element should follow this process:

|         | Mouse                                    | Keyboard                                            |
|---------|------------------------------------------|-----------------------------------------------------|
| :hover  | move your cursor over the select element | use the tab key to focus the select element         |
| :focus  | click on the select element              | press enter                                         |
| :       | move your cursor over the desired option | use the top and bottom arrow keys to pick an option |
| :select | click on the desired option              | press enter                                         |

## Small select

Small selects are commonly used in [Data Tables](/components/data-table). When using a small select for a number selection, the increments in the select should be 10, 25, 50 and 100. The maximum amount of items a user can see per page is 100.
