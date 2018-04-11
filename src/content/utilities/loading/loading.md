## Loading

Loading is when additional data or information takes an extended amount of time to process and appear on screen. There are components and tactics used to communicate to users that the page, content or interaction will load as soon as possible and is not frozen. Below are a list of components and use cases to help convey loading to the user.


## Skeleton States

Skeleton States are simplified versions of a Carbon Component that are used on an initial page load to indicate to the user that the entire page and information has not loaded in yet. They should only appear for 3-5 seconds, disappearing once the actual content loads in.

A Carbon Skeleton State can be shown as a stripped down, bare bones version of a component or as a `field-01` rectangular block for text. Motion is used in a Skeleton State to convey that the page is not stuck loading but rather that data is still being pulled in.

*Image example of a component loading from skeleton state to full component > Table might be a good example of this*


### Usage
Skeleton States should not be used to represent every component on a page but rather used to illustrate the overall architecture of the page while its loading. Typically components that should have Skeleton States are container based components (Tiles, Structured List, etc.), data-based components (Data Tables, Cards, etc.), and data-based text. Action components (Button, Input Fields, Checkboxes, Toggle, etc.) do not need to have a Skeleton State in most use cases as they are not pulling in data and do not need additional time to load in.  

*Example or two of the skeleton states*

There are several components that should **never** be represented by a Skeleton State since the data for these items should already be loaded in by the time a user interacts with them. These include:

- Toast Notification
- Overflow Menu
- Dropdown Items
- Modal
- Loading Spinner (used for other loading cases, not Skeleton States)


### Progressive loading

When utilizing Skeleton States, the order in which components, data, and content load in needs to be planned and designed for using the idea of progressive loading. Progressive loading is when content is loaded in, in batches. The first batch to load should be the most simplified view of the page, followed by the secondary and tertiary batches, with each batch adding more page detail, until the entire viewport has been loaded. The primary batch should illustrate a page's structural layout (the Skeleton State versions of the container-based components), data-based text (the Skeleton State version of text) and non-data text. Secondary and tertiary batches can include images, content below the fold, interactive (action-based) components, and/or data-based text. Remember that not all items need a Skeleton State, but instead can be expressed as negative (blank?) space until they load in. For example a 600 x 600px image could be shown as a 600 x 600px area of white space, until the secondary or tertiary batch, when the full image loads in.

*Show short video of a page loading, then show a timeline of the screens of how they load in over time @ 150ms, 300ms, 1sec, etc.*


### Code

<!--Need Alison to write this documentation-->


## Loading component

A Loading component is a rotating shape that indicates the application is processing. Utilizing the Loading component informs the user that the system has reacted to the action they have taken.

Some use cases include:

- When data processing is more than few seconds but longer than one minute
- User inputted data is being saved or submitted


### Large Loader

The Large Loading component should be used when the entire page is processing, for example when data is being subnmitted or saved by the user.

*Example gif of an a form where data is submitted/saved.*

### Small Loader

The Small Loading component should be used inline, within a component when something for that component, and that component only is loading. For example, when a user tries to restart their stopped application.

*Example gif of a card restarting? In the header component*

### 'Load more' Button

When there are an excessive amount of options that need to be loaded into a Dropdown menu, a 'Load more' Button may be used to


<!--## Progress Loader

A Progress Loader is used to represent a specific load time for an item. This amount of time, whatever unit, can be measured based on actual events.

Use cases for a Progress Loader include:

- A file being uploaded (0 to 100%)
- A new item being provisioned (0 to 10 minutes)

*Example gif of file being uploaded (Is this the best use case?*-->
