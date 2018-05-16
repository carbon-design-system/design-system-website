**Users approach your product with specific goals in mind. You can delight
users by helping them achieve their goals quickly, giving them a sense of
power. Thoughtful content and clean visual design are essential ingredients.**

## Discovery

Every Product has a set of public URLs for direct entry via internet search, and
is also listed in the IBM Cloud Catalog. Users can discover and enter a Service
in one of two primary ways:

1.  direct entry by URL (from an internet search, Product marketing page, Solution
    page, or other link)

2.  discovery in Cloud Catalog (or an embedded Catalog component)

Users do not need to visit the Cloud Catalog or Dashboard in order to enter a Service.
They can enter it directly, as illustrated in this user flow diagram:

The expected URL paths are:

|                | Target Path                               | Legacy Path                        |
| -------------- | ----------------------------------------- | ---------------------------------- |
| Product UI     | cloud.ibm.com/{product}                   | console.bluemix.net/{product}      |
| Marketing Page | www.ibm.com/cloud/{product}               |                                    |
| Docs           | www.ibm.com/cloud/{product}/docs          | console.bluemix.net/docs/{product} |
| API Endpoint   | api.ibm.com/cloud/{product} [speculative] |                                    |

## From the Product Marketing Page

Users discover your product via internet search, forums, tweets, partner promotions, etc.
They come to your Product Marketing Page to understand how the product can help them. You
supply all the metadata for this page. Answer the user's questions, including:

* What job does this Product do for me?
* What are its differentiating features?
* Why should I use this product over a competing one?
* What does it cost? What is it likely to cost for my level of usage?
* If I decide to use it, what will I be doing?

Be clear about the job the service does, and provide accurate technical overview content.
The conversion performance of the Product Marketing Page will determine how highly
the Service is ranked in the Catalog.

## From the Catalog

When the user finds your Product in the Catalog and clicks on it, they will be
taken directly into the Product UI. This is a change from previous flows (2014-2017).

Optionally, the user can click a secondary action to browse to the corresponding
Product Marketing Page or Documentation home page.

## Product UI

When a user lands on your Product UI for the first time, show a Welcome screen.
Briefly state what job the Product will do for them. Tell the user the first 3 things
they will achieve with it.

Do not act like a Product Marketing Page. Link out to the Product Marketing Page
for details of features and pricing. Only summarize key points here.

Show a Guided Walkthrough on first entry into the Service UI. (See Evaluation.)

Once the user has interacted with your product (e.g. by creating a resource),
skip the Welcome screen on entry.

## Provisioning and Loading

Perceived performance is absolutely essential on a cloud platform. Users will
interpret slow loading performance as a sign of how their own app or data
project will perform on the platform. When a user enters your Service, either
from the Cloud Catalog or via direct link, it must load within two seconds.

Show skeleton states when content is not available immediately. This gives the
user a frame of reference for where to expect the content to appear. Use the
skeleton states shown for each component [in the
Storybook](http://react.carbondesignsystem.com/).

When creating a Resource, wait times of several seconds or even minutes are not
unusual. Do not make the user wait to see the Resource appear. Show the Resource
in list views, and allow the user to drill into its details page, even before it
is fully provisioned. Display whatever information is available. If the
provisioning fails with an error, show the error state and let the user correct
it from the Details page.

## Evaluation

The evaluation phase is when a user is learning about your service, trying to
achieve a few small but concrete things, and determining whether it has enough
value to bet a full project on it. During evaluation, the user must gain a clear
understanding of what job your Service will do for them, and be able to achieve
3 basic steps:

1.  create a Resource

2.  modify that Resource in a meaningful way, and confirm the impact of that
    change

3.  connect the Resource to another Resource in another Service

A guided walkthrough is an essential tool for enabling the user to achieve this.
Use the Walkthrough component in the SDK.

## State Memory

When the user returns to your Service, it must maintain the state in which they
left it. To achieve this, developers must store the essential state elements in
the URL. The Cloud Header will track the URL and return the user to that URL
automatically upon return.

To store more advanced state than what can fit in a URL, place it in the User
Profile object, then retrieve it when the Service UI loads. If User Profile data
is corrupt or non-applicable, discard it and fail silently.

## First Spend and Increasing Spend

There is no single moment when a cloud user decides to buy. Users will make many
spending decisions, with progressive levels of commitment. Your Service should
encourage small spending upfront for a well-defined benefit, then scale up from
there as the user becomes increasingly confident in the value provided and the
predictability of its cost.

When crafting your Pricing Plan, ensure the user receives clear, tangible value
for the first dollar spent. A free tier is useful but not sufficient to make the
user confident that the first dollar spent will be worthwhile. Meanwhile, a user
who spends one dollar and feels confident they obtained value from it, will
happily spend hundreds or thousands of dollars when ready to scale up their
project.

Reserve enterprise-class features such as large scale, load balancing,
encryption, and fine-grained security, for premium pricing tiers. Make it
possible to test these premium-priced capabilities, so the user is confident
they actually work as intended.

## Connecting

IBM Cloud is designed to enable teams to collaborate around data. Your Service
should connect to at least one or two other Services to either get or put data.
Leverage our embeddable Connect widget within your user flows to enable the user
to quickly select a Resource within another Service, then either get data from
that Resource or send data to it.

Employ the Connect flow as follows:

1.  Place the Connect button/icon within your Service UI.

2.  When triggered, the user selects a target Resource within another Service

3.  The target Service provides a custom workflow action.

To make your Service's Resources a target for other Services to consume,
implement the Connect workflow action (step 3 in the flow above). When your
Service registers with the IBM Cloud Resource Controller, its Connect
capabilities will be registered for use by other Services.

## Resources

Users can browse all their Resources by visiting the Resource Finder service.
The purpose of the Resource Finder is to help users find things they've created
and worked on previously, and to provide a lookup system for making Connections
between Resources. It is not meant to give a fine-grained view of every detail
of a Resource. To see granular data, the user must open the Resource in its
Service UI.

Expose Resources using a coarse-grained granularity that is sufficient enough
to:

1.  help the user find a prior piece of work without wading through many
    detailed elements

2.  look up the Resource when establishing a Connection

3.  share the Resource with other users

When determining granularity, compare your candidates to filesystem documents
that feel familiar. You would not expose a separate file in the user's Documents
folder for every slide of a slide deck or every sheet in a workbook, or every
element in a graphic design file.

Likewise, a Service that is managing a complicated Machine Learning Model with
many nodes and parameters should only expose one resource corresponding to the
Model, not many resources corresponding to each of the individual nodes. A
Service managing a complex build pipeline for developers could expose just one
resource for the entire pipeline.

* TODO: Database example (Service Instance -\> Database -\> Table -\> Row -\>
  Cell)

## Navigation

Users can switch between your product and another one quickly by clicking the
Application Switcher icon or its keyboard shortcut. Your product will appear
there after the user has browsed to it and progressed beyond the welcome page.
See Application Switcher (TODO: anchor link to Product UX \> Shell and
Navigation \> Application Switcher).
