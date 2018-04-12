Loading is applied when additional information takes an extended amount of time to process and appear on screen. Skeleton states and the Loading component are two interactions that communicate to users that data is currently loading and the screen is not frozen.


## Skeleton States

Skeleton States are simplified versions of Carbon Components used on an initial page load to indicate to the user that the information on the page has not entirely loaded in yet. They should only appear for 1-5 seconds, disappearing once the actual content loads in.

A Carbon Skeleton State is shown as a stripped down, bare bones version of a component as well as a `field-01` rectangular block for text. Motion is used in a Skeleton State to convey that the page is not stuck loading but rather that data is still being pulled in.

*Image example of a component loading from skeleton state to full component > Table might be a good example of this*


### Usage
Skeleton States are not meant to represent every component on a page but rather to illustrate the overall architecture of the page while it's loading. Typically components that should have Skeleton States are container-based components (Tiles, Structured List, etc.), data-based components (Data Tables, Cards, etc.), and data-based text. Action components (Button, Input Fields, Checkboxes, Toggle, etc.) do not need to have a Skeleton State in most use cases as they are not pulling in data and do not need additional time to load in.  

There are several components that should **never** be represented by a Skeleton State since the data for these items should already be loaded in by the time a user interacts with them. These include:

- Toast Notification
- Overflow Menu
- Dropdown Items
- Modal (elements inside a modal may have a Skeleton State, however the Modal itself should not be skeletonized)
- Small and Large Loader (used for other loading cases but not Skeleton States)


### Progressive loading

When utilizing Skeleton States, the order in which components, data, and content load in needs to be planned and designed for using the progressive loading technique. Progressive loading is when content loads in batches. The first batch to load should be the most simplified view of the page, followed by the secondary and tertiary batches, with each batch adding more page detail until the entire viewport has been loaded. The primary batch should illustrate a page's structural layout (the Skeleton State versions of the container-based components), data-based text (the Skeleton State version of text) and non-data text. Secondary and tertiary batches can include images, content below the fold, interactive (action-based) components, and/or data-based text. Remember that not all items need a Skeleton State, but instead can be expressed as negative or white space until they load in. For example a 600 x 600px image could be shown as a 600 x 600px area of white space until the secondary or tertiary batch when the full image loads in.

![Example of a dashboard using Skeleton States, to load in with progressive loading over three screens.](images/Progressive-Loading.png)
_Example of a dashboard using Skeleton States to demonstrate progressive loading_



### Code

<!--Need Alison to write this documentation-->


## Loading component

A Loading component is a rotating shape indicating the application is processing and informs users that the system has reacted to an action taken.

Use cases include:

- When data processing takes more than a few seconds but no longer than one minute to load in
- User inputted data is being saved or submitted


### Large Loader

The Large Loading component should be used when the entire page is processing, for example when data is being submitted or saved by the user.

![Example of a Large Loader in the context of a form page where data is being submitted.](images/Large-Loader.png)
_Example of a Large Loader in context._

### Small Loader
The Small Loading component is used when a single component is processing and appears inline to the relative component. For example, when a user tries to restart a stopped application, a Small Loading component indicates the system is processing the restart request.

![Example of Small Loader in the context of a Detail Page Header.](images/small-loading-1.gif)
_Example of Small Loader in context._

### 'Load more' Button

A 'Load more' Button may be used to extend a list where there are a large number of options (25 or more) that the user can choose from. It can also be used in cases where the list of options is populated via a database. Using 'Load more' allows the data to load in progressive batches.

![Example of a 'Load More' Button inside of a Filter Dropdown.](images/load-more.png)
_Example of 'Load more' Button in context._

**
![Example of a 'Load More' Button inside of an enabled Filter Dropdown.](images/load-more-1.png)
![Example of a 'Load More' Button inside of a Filter Dropdown on hover.](images/load-more-2.png)
**
_Example of 'Load more' Button in context._

<!--## Progress Loader

A Progress Loader is used to represent a specific load time for an item. This amount of time, whatever unit, can be measured based on actual events.

Use cases for a Progress Loader include:

- A file being uploaded (0 to 100%)
- A new item being provisioned (0 to 10 minutes)

*Example gif of file being uploaded (Is this the best use case?*-->
