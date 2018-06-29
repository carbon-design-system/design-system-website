## Contents

1.  **[Overview](#overview)**

    - Editorial Guidance
    - Voice & Tone
    - Catalog Principles
    - Catalog Governance

2.  **[Summary Card](#summary card)**

    - Title
    - Short Description
    - Icon
    - Tags

3.  **[Offering Detail Page](#offering detail page)**
    - Metadata
    - Configuration
    - Overview
    - Features
    - Supporting Media
    - Pricing Guidance
4.  **[Search & Categorization](#Search & Categorization)**

    - Categorization
    - Filtering
    - Search tags

5.  **[Usage & Analytics](#usage & analytics)**

## Overview

The IBM Cloud Catalog ("Catalog") is the place developers, data scientists, IT admins, and other IBM Cloud users go to discover, evaluate, and create offerings. The following guidelines will help you create or update an offering listing to ensure that it meets IBM Cloud quality standards and meets your users' needs.

The Catalog consists of several pages and content types:
A main page with an "All Categories" view and individual categories' views. The main page displays summary cards for each offering listing. This page also has search and filter functionality.
An offering detail page, which contains metadata, text and media that describe your offering.
Configuration fields or page(s), depending on the complexity of your offering's configuration.

## Editorial Guidance

### Voice & Tone

Reference the [Voice & Tone guidelines](http://design-system.stage1.mybluemix.net/guidelines/content/general) when writing content for the Catalog or anywhere in the IBM Cloud.

### Catalog Principles

The Catalog is the place users go to discover, evaluate, and create. User testing studies and data has shown that users are less likely to be interested in or purchase an offering if the following best practices are not met:

- **Know your user:** none of the following best practices can be met if you do not know your user. Knowing where they come from, their pain points, and their needs allows you to decide how to best help them find and learn about your offering. It is the service provider's responsibility to
- **The right amount of information:** Too much information or a "wall of text" makes it less likely users will read the information at all. Less information allows users to skim and evaluate more quickly.
- **Relevant information:** Only include information that helps users understand what your offering does and how they can use it. Ask yourself "Will this content help my user make a decision?"
- **Reduce cognitive load:** Asking your users to read information and make choices contributes to their cognitive load; too much load prevents users from making a decision. Whenever possible, simplify content and processes, for example: pre-fill configuration fields or inputs.

### Catalog governance

To ensure that offerings meet the criteria outlined in these guidelines, the catalog team will be responsible for reviewing any proposed changes to offerings.

See [Catalog Governance](https://ibm.ent.box.com/notes/290560698464) document (WIP)

## Search and Categorization

Users will encounter your offering through a variety of funnels, including web search and both authenticated and unauthenticated visits to the Catalog. In the Catalog, they can use a combination of searching, browsing, and filtering tools to identify what they're looking for and start using it. It's important to configure your offering to show up in the right place so users discover it when it is relevant to them.

### Categorization

The catalog team will work with individual offering teams to determine which category their offerings belong in.

### Filtering

Tag your service with the appropriate required metadata, so users can narrow down their options and easily find your offering.

- **Author:** Use the IBM tag If your service has been created by an IBM team or acquisition. Use the Third-Party tag if your service is the result of a business partnership and an external brand will be shown, even if the experience has been created by IBM. The community tag is only used for community buildpacks.
- **Compliance:** Use the EU-Supported tag if your service meets the [criteria for EU-Supported Cloud](https://ibm.box.com/s/kdqtyq7rplwkpk31her53i14vg1lnt17).
- **Plans:** Our IBM teams will work with you to determine if your service is a good candidate for our "Lite" plan.
- **Release:** Only use the experimental or beta tag if your offering is going through the process of creating a new offering in the catalog.

### Search tags (optional)

Search tags allow you to add specific keywords to your offering so it will appear in Catalog search results.
Do:
Include keywords that you think your users will search for that pertain to your offering.
Include alternate or previous names for your offering
Include common misspellings
Don't:
Add words that are only slightly related to or not at all related to your offering

## Summary Card

The summary card appears on the main Catalog page and contains a title, short description, icon, and metadata labels/tags. The summary card gives your users a quick overview of your offering and allows them to evaluate whether it meets their needs.

![](images/summary-card-1.png)

### Title

| **Do**                                                                        |
| :---------------------------------------------------------------------------- |
| Use a title that is logical and descriptive of your offering                  |
| Use title case (unless it goes against overriding brand guidelines, like box) |
| 2-3 words or 45 characters                                                    |
| Maximum of two lines                                                          |

| **Don't**                                                                                                                |
| :----------------------------------------------------------------------------------------------------------------------- |
| Use the words "IBM" or "IBM Cloud," as it is assumed by using the IBM tag.                                               |
| Include unnecessary words or details — this information belongs in the short description or on the offering detail page. |
| Use punctuation like dashes, colons or slashes.                                                                          |

| **Examples**                                                                     |
| :------------------------------------------------------------------------------- |
| Bare Metal Server (17 characters)                                                |
| Internet of Things Platform (27 characters)                                      |
| Watson Natural Language Understanding Basic (43 characters, approaching the max) |

### Short description

| **Do**                                                        |
| :------------------------------------------------------------ |
| Focus on what the user will be able to do with your offering  |
| Start with a verb                                             |
| Write one concise sentence, about 10 words is recommended.    |
| Maximum of three lines for 120 characters (about 17-20 words) |

| **Don't**                                                                                                               |
| :---------------------------------------------------------------------------------------------------------------------- |
| Write more than 120 characters, as the short description doesn't appear anywhere else in the UI and will never be read. |
| Repeat the name of the offering, as it will always be shown in combination with the title.                              |
| Begin the sentence with "the service is...", as it is implied.                                                          |

| **Examples**                                                                                                                                               |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Deploy secure, highly available apps in a native Kubernetes experience." (70 characters)                                                                  |
| "Use deep learning algorithms to analyze images that can give you insights into your visual content." (99 characters)                                      |
| "Analyze text to extract meta-data from content such as concepts, entities, emotion, relations, sentiment and more." (114 characters, approaching the max) |

### Icon

Review the [service icon guidelines](http://design-system.stage1.mybluemix.net/your-product-on-ibm-cloud/service-providers/general#) for information on the design, production, approval, and submission of service icons.

### Tags

Some tags are visible on the summary cards. See Filtering in the Search & Categorization section above for guidelines pertaining to tags.
Visible tags:
Author: IBM, Third Party, Community
Pricing plan: Lite
Compliance: EU Supported
Release: Beta, Experimental

## Offering Detail Page

Once users select an offering, they are taken to the Offering Detail page. This page is where users configure your offering (unless configuration is too complex, see below). It also provides space for more details, as well as metadata, media, and pricing information.

![](images/offering-detail-1.png)

### Metadata

The left hand column of the offering detail page displays some of the metadata listed under Filtering in the Search & Categorization section above, as well as some additional details.
Metadata shown:
Author
Published
Updated
Type
Locations
Docs link
Terms link
Any tags from the summary card

### Configuration

There are currently two options for configuration. The first is to include configuration fields at the top of the Offering Detail page, above the overview. The second, for more complex scenarios, is to include configuration fields on a separate page after the detail page.

Remember to follow the best practice of reducing cognitive load. This includes choosing default Region/Org/Space or Resource Groups, auto-creating an instance or service name, and auto-selecting the least expensive pricing plan.

**Simple configuration (on page):**

- Called "Instance Details" on the offering detail page
- This includes basic information such as offering name, Region/Org/Space or Resource Group, and pricing plan. If your offering requires more than these fields use the complex configuration.

**Complex configuration (new page):**

- This page has more space for additional configuration fields. Use headings (especially on longer configurations) to delineate logical sections. For example, a Starter Kit has an "App Details" and a "Service Details" section. This page also includes a cost/order summary on the right side.
- This configuration option may have multiple steps. For now, use the [Carbon progress indicator component](http://design-system.stage1.mybluemix.net/components/progress-indicator/code) and your best judgement when implementing steps.
- Your offering team is responsible for building complex configuration pages using carbon components as needed, including [order summary](http://v8.carbondesignsystem.com/add-ons/order-summary/code) and [forms](http://www.carbondesignsystem.com/components/form/code). Please follow the above grid.

### Overview

Called "long description" in global catalog

| **Do**                                                                                     |
| :----------------------------------------------------------------------------------------- |
| Explain your offering in more detail to your users, expanding upon your short description. |
| Use about 2-4 sentences; about 60-65 words is recommended.                                 |
| Write a maximum of 480 characters                                                          |
| Write in complete sentences.                                                               |
| Use facts and common use-cases.                                                            |

| **Don't**                                                    |
| :----------------------------------------------------------- |
| Write less than 100 characters or more than 480 characters.  |
| Write content that's overly persuasive or marketing-focused. |

| **Examples**                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Cloudant NoSQL DB provides access to a fully managed NoSQL JSON data layer that's always on. This service is compatible with CouchDB, and accessible through a simple to use HTTP interface for mobile and web application models." (226 characters)                                                                                                                                                                                                                            |
| "Create a cluster of compute hosts and deploy highly available containers. A Kubernetes cluster lets you securely manage the resources that you need to quickly deploy, update, and scale applications." (190 characters)                                                                                                                                                                                                                                                        |
| "Add a natural language interface to your application to automate interactions with your end users. Common applications include virtual agents and chat bots that can integrate and communicate on any channel or device. Train Watson Assistant service through an easy-to-use web application, designed so you can quickly build natural conversation flows between your apps and users, and deploy scalable, cost effective solutions." (424 characters, approaching the max) |

### Features (optional)

Called "bullets" in global catalog.

| **Do**                                                                                                      |
| :---------------------------------------------------------------------------------------------------------- |
| Add a bulleted list of specific aspects of your product that are especially valuable to users.              |
| Choose the most important features to highlight that might help users answer the question "Why [offering]?" |
| Write 2-4 short feature highlight titles and supporting text for each                                       |
| Write a feature title of no more than 3-5 words, max 100 characters.                                        |
| Write 3-4 lines of supporting text for each bullet, max 420 characters.                                     |

| **Don't**                                                                                                                         |
| :-------------------------------------------------------------------------------------------------------------------------------- |
| List features that are a given, such as "easy to use" or "fast UI"                                                                |
| Write more than 520 characters (combined title and description) per feature                                                       |
| Write an odd number of features unless one is significantly longer than the other two (features may be shown in a 2-column grid). |

**Example 1**

Authentication (14 characters)

- Add user sign-in and sign-up functionality to your mobile and web apps, and secure access to back-end resources and APIs from unauthorized users. Includes enterprise, social, and email/password sign-in. (202 characters)

Profiles (8 characters)

- Build custom app experiences for your users. Use profiles to store and access user data that you need to build engaging experiences, such as user app preferences. (162 characters)

User Management (15 characters)

- Leverage a scalable user registry for your apps so users can sign-up and sign-in with an email and password. Users can manage their own accounts through self-service flows like reset password and forgot password. (212 characters)"

**Example 2**

"Fully Managed DBaaS (19 characters)

- Work with self-describing JSON documents through a RESTful API that makes every document in your Cloudant database accessible as JSON via a URL. Documents can be retrieved, stored, or deleted individually or in bulk and can also have files attached. IBM takes care of the provisioning, management, and scalability of the data store, freeing up your time to focus on your application. (383 characters, approaching max)

* Powerful query, analytics, replication and sync (47 characters)
  Cloudant indexing is flexible and powerful, and includes real-time MapReduce, Apache Lucene-based full-text search, advanced Geospatial, and declarative Cloudant Query. Cloudant makes it easy to conduct advanced analytics on JSON data with dashDB Warehousing and Apache Spark integrations. Replication enables cross-geo deployments and Cloudant Sync provides data access for mobile devices to run connected or off-line. (419 characters, approaching max)"

### Supporting Media (optional)

| **Do**                                                                                                                            |
| :-------------------------------------------------------------------------------------------------------------------------------- |
| Only submit supporting media if it will bring your users value and clarity                                                        |
| Upload 2-6 images/videos that are useful and relevant                                                                             |
| Submit media of the correct size and proportions: the minimum size is 750x450 pixels and we recommend a 16:9 or 4:3 aspect ratio. |

| **Don't**                                                                          |
| :--------------------------------------------------------------------------------- |
| Show supporting media of a different or out-of-date UI                             |
| Include marketing videos that aren't specific to using your offering in IBM Cloud. |

| **Examples**                                                                                                                                                                                                                                         |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tutorial video showing someone setting up or working with our offering. Do not include videos with more marketing-type overview information; this does not perform well with users and that content should be in the Overview and Features sections. |
| Architecture diagram                                                                                                                                                                                                                                 |
| Image of an application built using your offering, such as a chatbot or mobile application.                                                                                                                                                          |
| Images of actual code that pertains to your offering                                                                                                                                                                                                 |
| Screenshots of your offering in use IF this will help users understand how they might use it.                                                                                                                                                        |

### Pricing Guidance

| **Do**                                                                                  |
| :-------------------------------------------------------------------------------------- |
| Offer multiple plan options with expected titles like "lite," "standard" and "premium". |
| Use as few charge units/features as necessary to communicate pricing                    |

| **Don't**                                                                                                     |
| :------------------------------------------------------------------------------------------------------------ |
| Use sentence format for features/charge units.                                                                |
| Write more details per plan than needed -- if the features are easily understood, there is no need to expand. |

| **Examples**                      |
| :-------------------------------- |
| ![](images/pricing-example-1.png) |
| ![](images/pricing-example-2.png) |

## Usage & Analytics

Your offering is automatically instrumented in Amplitude. For a list of what is instrumented and best practices, see the [Platform Analytics Documentation](https://pages.github.ibm.com/Bluemix/platform-analytics/).
