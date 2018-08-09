<style>
.images-container {
  margin: 50px 0 100px 0;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
}

.small-container {
  margin: 50px 0 100px 0;
  max-width:610px;
  display: flex;
}

.checkmark {
  max-width: 24px;
  height: auto;
  vertical-align:middle;
}

.x-mark {
  max-width: 24px;
  height: auto;
  vertical-align:middle;
}

.example {
  max-width: 260px;
  height: auto;
  vertical-align: middle;
  padding-left: 20px;
}

.small-example {
  max-width: 80px;
  height: auto;
  vertical-align: middle;
  padding-left: 20px;
}

.small-column {
  margin: 0 60px 0 0;
}

@media (max-width: 645px) {
  .images-container {
    flex-direction: column;
  }

  .column {
    margin-bottom: 15px;
  }
}
</style>

## Using Carbon for accessibility

**As Designers, we should ensure that elements in the interface are perceivable and operable. Accessibility standards are integrated into the Carbon components; using them appropriately is key!**

## Typography

**Use appropriate kerning and leading to separate text enough to be easily read**

Kerning and leading that is too tight or too spaced out makes information difficult to read.

<div class='images-container'>
  <div class='column'>
    <img src='./images/check.png' alt='checkmark' class='checkmark'/>
    <img src='./images/1.1-Y.png' alt='Example of text with proper kerning' class='example'/>
  </div>
  <div class='column'>
    <img src='./images/x.png' alt='x-mark' class='x-mark'/>
    <img src='./images/1.1-N.png' alt='Example of text with incorrect kerning' class='example'/>
  </div>
</div>

**Avoid words in all capital letters and avoid excessive use of italic fonts**

Words in all capital letters and italic fonts are generally harder to read. They also pose an extra challenge to those with dyslexia.

<div class='images-container'>
  <div class='column'>
    <img src='./images/check.png' alt='checkmark' class='checkmark'/>
    <img src='./images/1.2-Y.png' alt='Example of proper text capitalization' class='example'/>
  </div>
  <div class='column'>
    <img src='./images/x.png' alt='x-mark' class='x-mark'/>
    <img src='./images/1.2-N.png' alt='Example of text with incorrect text capitalization and inappropriate use of italics' class='example'/>
  </div>
</div>

## Text contrast

**For large text, the minimum contrast ratio must be 3:1. For anything smaller or lighter than large text, the minimum contrast ratio is 4.5:1**

Large text = either 18pt regular weight or 14pt bold weight and above.

<div class='images-container'>
  <div class='column'>
    <img src='./images/check.png' alt='checkmark' class='checkmark'/>
    <img src='./images/2.1-Y.png' alt='Example of correct text contrast ratio for large text' class='example'/>
  </div>
  <div class='column'>
    <img src='./images/x.png' alt='x-mark' class='x-mark'/>
    <img src='./images/2.1-N.png' alt='Example of incorrect text contrast ratio for large text' class='example'/>
  </div>
</div>

**For anything smaller or lighter than large text, the minimum contrast ratio must be 4.5:1**

<div class='images-container'>
  <div class='column'>
    <img src='./images/check.png' alt='checkmark' class='checkmark'/>
    <img src='./images/2.2-Y.png' alt='Example of correct text contrast ratio for small text' class='example'/>
  </div>
  <div class='column'>
    <img src='./images/x.png' alt='x-mark' class='x-mark'/>
    <img src='./images/2.2-N.png' alt='Example of incorrect text contrast ratio for small and light text' class='example'/>
  </div>
</div>

**Watch out for text against non-static backgrounds**

There are times that text is rendered on a gradient background. You need to make sure the text color contrast meets standards for the entire gradient. This is especially important for parallax applications or animations where text or backgrounds are moving independently of each other.

<div class='images-container'>
  <div class='column'>
    <img src='./images/check.png' alt='checkmark' class='checkmark'/>
    <img src='./images/2.3-Y.png' alt='Example of correct color contrast for text on a gradient background' class='example'/>
  </div>
  <div class='column'>
    <img src='./images/x.png' alt='x-mark' class='x-mark'/>
    <img src='./images/2.3-N.png' alt='Example of incorrect color contrast for text on a gradient background' class='example'/>
  </div>
</div>


## Iconography

**Glyphs should be at least 24 x 24 pixels and icons should be at least 32 x 32 pixels large**

Icons should be large enough to easily see. This helps people with moderately low vision or color blindness more easily see icons in the user interface.
<br/>
<br/>

**Clickable/touch-target areas should be at least 44 x 44 pixels**

Clickable/touch-target area should be large enough, especially for mobile.

<div class='small-container'>
  <div class='small-column'>
    <img src='./images/check.png' alt='checkmark' class='checkmark'/>
    <img src='./images/3.4-Y.png' alt='Example of a mobile icon that is large enough to click on' class='small-example'/>
  </div>
  <div class='small-column'>
    <img src='./images/x.png' alt='x-mark' class='x-mark'/>
    <img src='./images/3.4-N.png' alt='Example of a mobile icon that is too small to click on' class='small-example'/>
  </div>
</div>

## Link contrast

**Underline or provide enough color contrast (a minimum ratio of 3:1) for links**

Using colored backgrounds under links that have surrounding text can be a challenge.If you don’t use white or black backgrounds, you may find it easier to simply underline your links.

<div class='images-container'>
  <div class='column'>
    <img src='./images/check.png' alt='checkmark' class='checkmark'/>
    <img src='./images/4.1-Y.png' alt='Example of a link with proper underline styling' class='example'/>
  </div>
  <div class='column'>
    <img src='./images/x.png' alt='x-mark' class='x-mark'/>
    <img src='./images/4.1-N.png' alt='Example of a link with incorrect styling' class='example'/>
  </div>
</div>

## Color

**Don't rely on color alone to convey meaning**

People who are color blind, visually impaired, or have deteriorating vision can have difficulty perceiving color differences. Do not use color as the only visual means of: conveying information, indicating an action, prompting the user for a response, or distinguishing a visual element from another.

<div class='images-container'>
  <div class='column'>
    <img src='./images/check.png' alt='checkmark' class='checkmark'/>
    <img src='./images/5.1-Y.png' alt='Example of an error message that provides an additional indication of error aside from color' class='example'/>
  </div>
  <div class='column'>
    <img src='./images/x.png' alt='x-mark' class='x-mark'/>
    <img src='./images/5.1-N.png' alt='Example of an error message that only relies on color to indicate error' class='example'/>
  </div>
</div>

## Visible states

**Provide highly visible focus and selection indicators**

Default browser behavior is that focus moves to an element when it is clicked with a mouse. Keep this in mind when designing a focus state. It is not only keyboard-only users who will see the focus treatment. Additionally, it must be obvious what is the currently selected element versus which element has the keyboard focus. Otherwise, the cursor focus may be hidden and the user may get lost.

<div class='images-container'>
  <div class='column'>
    <img src='./images/check.png' alt='checkmark' class='checkmark'/>
    <img src='./images/6.1-Y.png' alt='Example of a button with a focus state indicator' class='example'/>
  </div>
  <div class='column'>
    <img src='./images/x.png' alt='x-mark' class='x-mark'/>
    <img src='./images/6.1-N.png' alt='Example of a button without a focus state indicator' class='example'/>
  </div>
</div>
