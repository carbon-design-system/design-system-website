## Component usage

LAYER | COMPONENTS
------|-----------
**Base** | Detail page header without tabs
**Flat** | Interior left nav, Detail page header with tabs, Tables
**Raised** | Modules, Cards
**Overlay** | Overflow menu, dropdowns, tooltips
**Sticky Nav** | Global header (on scroll), Detail page header (on scroll)
**Temporary Nav** | Global left nav
**Pop-out** | Modals

![Layer usage](images/layer-usage-604.png)

## Code usage
To use in code, just include the layer mixin like so with the appropriate layer value from the table above:
`@include layer('raised');`
