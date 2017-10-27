## Version 8.0.0 🎉
**October 27, 2017**

Today, we’re excited to announce our Version 8 (V8) release of the Carbon Design System!

V8 marks the beginning of a full ecosystem behind Carbon. Carbon Components becomes the core library, with the new Add-on libraries bringing in product specific components and additional functionality. This release also contains Carbon updating to IBM Plex, the new IBM font, and migrating away from Helvetica Neue.

### Ecosystem
**Carbon Components**

* [Carbon Components](https://github.com/carbon-design-system/carbon-components) is the core library for Carbon, now only containing generic and global components.
* Carbon Add-ons are product specific components such as Interior Left Nav, Detail Page Header, and Cards.
* Carbon has a growing number of add-on repos, including [Data Vis](https://github.com/carbon-design-system/carbon-addons-data-viz-react) and [Bluemix](https://github.com/carbon-design-system/carbon-addons-bluemix).
* `carbon-eslint-config` / `carbon-eslint-react-config` are used on all repositories to synchronize code styles.
* All repositories share a similar build release process, and all libraries ship with semantic-release.


**Carbon Design Kit**

* Reflecting the new ecosystem of Carbon, the V8 Design Kit now separates components from Add-ons.
* Product specific templates have been removed and replaced with a variety of templates showcasing best practices in using Carbon Components.

***
<a href="https://github.com/carbon-design-system/carbon-design-kit" target="_blank">Download the V8 Kit</a>

### Typography
Carbon now uses the new IBM open-sourced typeface, [IBM Plex](https://github.com/ibm/type). To use IBM Plex with Carbon components, simply toggle the scss variable `$css--plex` to true and the components will automatically update.

```scss
$css--plex: true;
```

* **Type styles** are pre-set configurations of typographic elements (font-size, weight, line-height, etc) and are most commonly used as headers. Each type style has an assigned CSS classname. These classes are independent of location or type of element, meaning you can use them anywhere. They are not restricted to a certain place in the code.
* Carbon's **type scale** has been updated to complement IBM Plex.
* Check out these updates and more on our [Typography](/style/typography) page!


### Carbon website
You may have noticed an updated look and feel to our website. We're continually working to improve your Carbon experience, therefore we've made some small improvements:

* Adding more tooling to our [Resources](/resources) page, such as our [CodePen](https://codepen.io/team/carbon/) and [React Storybook.](http://react.carbondesignsystem.com/?selectedKind=Accordion&selectedStory=Default&full=0&down=1&left=1&panelRight=0&downPanel=storybook%2Factions%2Factions-panel))
* Writing clearer [Contributing](/guidelines/contributing) guidelines, to encourage outside design contributions.
* Adding quick links and more informational content on the homepage.



Don't hesitate to reach out to us with questions or feedback at carbon@us.ibm.com, or tweet us at [@_carbondesign](https://twitter.com/_carbondesign)!
