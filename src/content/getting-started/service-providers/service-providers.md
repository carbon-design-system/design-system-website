## Using Carbon

We encourage service teams to utilize the Carbon Design System for visual styles, user experience guidance, and a coded component library with UI elements. By utilizing the [Carbon Component Library](https://github.com/carbon-design-system/carbon-components), your development teams can easily implement our ready-made components and elements to create a comprehensive UI.

In order to onboard your service into IBM Cloud, there are **3 stages** your service must go through before launching to GA. Design approval is required prior to an Experimental, Beta, or GA launch.

## Experimental

### Design requirements for Experimental

#### Catalog service icon

The catalog service icon is an opportunity for you to create or utilize an icon or logo that illustrates your service. All icons should follow the Catalog Service Icon Guidelines at the bottom of this page. Before submitting, your icon will need to be approved by your offerings design manager and IBM legal team.

#### Service dashboard

Service Dashboards are used for showing information and details of an instance that exists. Use the service dashboard templates in the [Carbon Design Kit](https://github.com/carbon-design-system/carbon-design-kit) as a starting point and foundation for your design.

#### Service configuration pages

Configuration pages appear when a user has clicked on a category or service from the Bluemix catalog. Use the service configuration templates in the [Carbon Design Kit](https://github.com/carbon-design-system/carbon-design-kit) as a starting point and foundation for your design.

#### Net Promoter Score (NPS)

IBM Cloud uses Net Promoter Score (NPS) to track user feedback. The NPS question, “How likely are you to recommend this service to a friend or coworker?” will be presented to users in the product on their third use of your service. Users answer on a scale from 0-10, and will have the opportunity to provide additional feedback through a follow-up response. Services should begin measuring NPS in Experimental, working toward a goal of NPS 26 by Beta release.

**When you have met the above requirements, schedule a playback and show a live walk-through of your product from discovery to implementation to usage in staging.**

## Beta

### Design requirements for Beta

#### NPS
Services should achieve and maintain a minimum NPS of 30 from a minimum of 25 non-IBM users.

#### User testing
User Testing is an important part of the Beta process, as it can help you find problems within your design. Refer to this [User Testing Guideline](https://ibm.ent.box.com/notes/220208728866?s=9zaeshrkbe3u0xxsuj65kojx8ey0qw81) to help you conduct these tests. You must complete five User Tests while your service is in Beta. Each A/B test in production constitutes one of the five.

#### Playback/Design review

Plan to communicate the current state of your work and any plans moving forward.

## GA
### NPS
Services should achieve and maintain a minimum NPS of 30 from a minimum of 25 non-IBM users.

### Major changes
Agree to bring major design changes or additional functionality changes to design review/playback.

## Catalog service icon
### Design guidelines
You design team has complete control over your icons design. We recommend that all icons try to look and feel like IBM, or reflect your product portfolios style.

**Do:**

* Get creative
* Be symmetrical
* Use a bold line weight/stroke
* Use two similar colors to create depth and value

**Don't:**

* Gradients
* Drop shadows
* Use a color background
* Use decimals in x and y coordinates or width and height fields.

#### Color
If you have multiple services, you should either use the same icon with a different color for each service or use the same color scheme for each distinct icon. The examples here show how a row of services from the same provider could look in the catalog. Refer to the [IBM Design Language](https://www.ibm.com/design/language/resources/color-library/) color palette for color inspiration and accessibility guidelines.

![Multiple services in the Bluemix catalog A](images/service-providers-1.svg)
![Multiple services in the Bluemix catalog B](images/service-providers-3.svg)

### Submitting your service icon

**What sizes do I need to submit?**

Only one SVG is required for your service icon. It should be submitted at the dimensions of `32 x 32` px. In the product, service icons only appear at the below four sizes. These size changes will be done in code and no longer require multiple assets.

![Catalog service icon sizing](images/service-providers-2.svg)
_Borders are used here to show total dimensions; icons should not include a border when submitted._

**How do I ensure my icon is production ready?**

* Make your icon pixel perfect and aligned to the pixel grid
* Draw vectors to whole pixels
* Expand all strokes

For full guidelines and tips on exporting SVGs, refer to the [Carbon iconography guidelines.](http://carbondesignsystem.com/style/iconography/contribution)


**How do I submit my service icon?**

Once you meet the above guidelines, your service icon is ready to be submitted via your service broker. Your engineering or development team should be able to update this file for your offering.
