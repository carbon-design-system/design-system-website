
## Cursors

Cursors are used to indicate to the user the action they can take. Below is a chart of common cursors that are built into the Carbon components. Hover over a row to see each particular cursor in action.

| Cursor property  | Example | Usage |
|------------------|---------|-------|
| `default`        | ![Example of a Default cursor](images/Default.svg)| The cursor a system automatically defaults to. Can be white or black depending on the operating system. |
| `not-allowed`    | ![Example of a not-allowed cursor](images/Disabled.svg) | Used to indicate that an item is disabled and no action can be taken on the component.|
| `pointer`        | ![Example of a hover cursor](images/Hover.svg) | Used to indicate a link or clickable object. |
| `text`           | ![Example of a text cursor](images/Text.svg) | Used to indicate that a user can type into a designated area, or that the text can be highlighted. |


For a more comprehensive list of cursors checkout [mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).

### Browser Tooltip

A browser tooltip appears when a user hovers over an item for an extended period of time.   A use case for Browser Tooltips are to show the entire string of a piece of truncated text.

To enact a browser tooltip use the `title` attribute.

![Example of a Browser Tooltip](images/system-preference.png)
