## Design guidelines
Your design team has complete control over your icon's design. We recommend that all icons try to look and feel like IBM, or reflect your product portfolios style. Below are some best practices to consider when making your service's icon.

### Do:

- Get creative
- Keep it simple
- Be symmetrical
- Use a bold line weight/stroke
- Use two similar colors to create depth and value
- Draw vectors to be whole pixels
- Make the icon pixel perfect

### Don't:

- Use gradients
- Use drop shadows
- Use a color background
- Use lines or strokes less than 1 pixel (px)
- Add internal padding

### Color
If you have multiple services, you should either use the same icon with a different color for each service or use the same color scheme for each distinct icon. The examples here show how a row of services from the same provider could look in the catalog. Refer to the [IBM Design Language](https://www.ibm.com/design/language/resources/color-library) color palette for color inspiration and accessibility guidelines.

![Multiple services in the Bluemix catalog A](images/service-providers-1.svg)
![Multiple services in the Bluemix catalog B](images/service-providers-3.svg)

### Size

Only one SVG is required of your service icon for production purposes. It should be submitted at the dimensions of `32 x 32` px.

## Production guidelines
### Icon requirements

1. SVG is sized at 32 x 32 pixels.
![Icon requirement 1 correct example](images/service-icon-1.png)
![Icon requirement 1 incorrect example](images/service-icon-2.png)
- All vectors should be squarely on the pixel grid (completing requirements 3-6 will help with this but if you need further help check out the FAQ section at the bottom of this page).
![Icon requirement 2 correct example](images/service-icon-3.png)
![Icon requirement 2 incorrect example](images/service-icon-4.png)
- There should be no decimals in the x or y coordinates.
![Icon requirement 3 correct example](images/service-icon-5.png)
![Icon requirement 3 incorrect example](images/service-icon-6.png)
- The width and height of the icon should be full pixels (no fractions of pixels).
![Icon requirement 4 correct example](images/service-icon-7.png)
![Icon requirement 4 incorrect example](images/service-icon-8.png)
- All strokes and lines are at least 1px, (i.e. 0.75px is not an acceptable stroke thickness).
![Icon requirement 5 correct example](images/service-icon-9.png)
![Icon requirement 5 incorrect example](images/service-icon-10.png)
- All strokes and lines are whole pixels (no decimals).
![Icon requirement 6 correct example](images/service-icon-11.png)
![Icon requirement 6 incorrect example](images/service-icon-12.png)
- All stokes are expanded or converted to outlines.
![Icon requirement 7 correct example](images/service-icon-13.png)
![Icon requirement 7 incorrect example](images/service-icon-14.png)
- All possible layers are merged so there are as few paths as possible.
![Icon requirement 8 correct example](images/service-icon-15.png)
![Icon requirement 8 incorrect example](images/service-icon-16.png)
- All layers are ungrouped.
- All layers are and artboards are properly named (these names will also be exported and carried over into the code).

#### Pro tips

- Set your workspace up from the start to snap to pixels and round values to whole pixels to avoid correcting shapes later.
- Never use `center` borders. Centering can cause half pixels.
- Avoid using the line tool and use the rectangle tool instead. The line tool will place the vector on half pixels.
- Be aware of automatic alignments which can either place vectors on uneven or half pixels.

### Exporting

#### How to export SVGs from Sketch

1. Draw a 32 x 32 pixel stand-alone artboard.
2. Place icon in the pixel perfect center of the artboard.
3. Convert all strokes to outlines `(Shift + ⌘ + O)`.
4. Select any overlapping shapes and click the `Union` icon from the top navigation, to merge all of the shapes together.
5. Select the artboard and click `Make Exportable` at the bottom of the right toolbar in Sketch.
6. In the export widget select `SVG` in the format dropdown.
7. Click `Export 'Artboard-Name'`.
8. Name icon with the name of your service. Do not name it or include "Bluemix icon" or "cloud icon".

#### How to export SVGs from Adobe Illustrator

1. Draw a 32 x 32 pixel stand-alone artboard.
2. Place icon in the pixel perfect center of the artboard.
3. Expand all strokes `(Object > Expand)`.
4. Select all overlapping shapes and click the `Unite` icon in the `Pathfinder` panel, to merge all of the shapes together.
5. Select `File` from the top navigation bar.
6. Select `Save A Copy...` which will open a dialog.
7. On the `Format` dropdown select SVG (svg).
8. Below `Format` select `Use Artboard` then select either all or a range of artboards depending on your need.
9. Click `Save`.
10. The `SVG Options` dialog will then open.
11. Make sure the preferences are the same as in the image below.
![export icons from Illustrator](images/service-icon-17.png)

### Optimize icon
Once your icon is exported as an SVG you'll need to optimize and clean up the XML code.

Run SVG XML code through [SVGOMG](https://jakearchibald.github.io/svgomg/).
Inspect the code and make sure that your XML doesn't include the following:

- `<g>` tags
- `class` attribtues
- `stroke` attributes
- `stroke-width` attributes

## Icon approval & submission

1. Ensure your icon meets all of the above icon requirements and is pixel perfect.
2. Submit your icons for review by opening an issue on the [service icons repo](https://github.ibm.com/Bluemix/service-icons) and labeling the issue as "review needed".
3. One of the Carbon team reviewers will review the icon within 3 days of the request, so please plan and allow time to process your approval. If changes are needed, the icon must be resubmitted for approval.
4. Once the icon has been approved, it can be added to your service broker. Only one icon at 32 x 32 px is needed.


## FAQ

**What icon sizes do I need to submit?**

Only one SVG is required for your service icon. It should be submitted at the dimensions of 32 x 32 px.

**What are you looking for during the approval process?**

We only check for production quality and do not critique visual styling. The list of `Icon requirements` listed above is what we will be evaluating your icon against.

**I don't understand what you mean by pixel perfect and/or pixel grid and alignment.**

Icon design best practices mandate that all vectors be flush to the base level pixel grid. This means the straight edges of vectors should be aligned with pixels exactly and the points of curves should be aligned whenever possible.

Check out these [Sketch](https://medium.com/sketch-app-sources/getting-the-pixels-right-in-sketch-2386c730af90) and [Illustrator](http://iconutopia.com/how-to-design-pixel-perfect-icons/) tutorials to learn how to best set up your document and align your icon to the pixel grid. There are also some helpful [Sketch plug-ins](https://github.com/swiadek/pixel-perfecter-sketch-plugin) and [Illustrator tools](https://helpx.adobe.com/illustrator/how-to/pixel-perfect.html) that can do this work for you.

**How do I turn on the pixel grid in Sketch or Illustrator?**

In Sketch in the top navigation bar select `View` > `Canvas` > `Show Pixel Grid`.
In Illustrator, in the top navigation bar select `View` > `Pixel Preview`.

**Why does the icon need to be pixel perfect if its an SVG?**

Even with SVGs, unaligned vectors can cause icons to look fuzzy on low-resolution screens. Unaligned vectors also reflects poorly on the craft of the product and can lessen user trust.
