# Super Library

Super Libaray is a javascript library I have created. It started off as a way to practice coding using OOP, however it quickly became a project that I'll continue to update overtime.

### SuperEvent

This method allows the creation of prototypes that listen for specific events to happen to trigger. This method is inherited by SuperElement which is the catalyst for all the other methods in this library.

```javascript
const btn = $e('input', {type: 'button', name: 'exampleBtn', options: [['value', 'Example']] }) 

const keyBtn = $e('input', {type: 'button', name: 'keyBtn', options: [['value', 'Key Up']] }) 

// these create buttons

btn.click(() => {
    console.log('You have clicked the button!')
}) // a click event that listens for when the button is clicked

keyBtn.keyUp(() => {
    console.log('You have pressed a key!')
}) // a key-up event that listens for when a key has been pressed
```

Please refer to https://briar-bear.github.io/super-element/docs/addListener.html for more info.

### SuperElement

This method allows the creation of elements such as a div or button and can be used to create prototypes to append these elements to a web page. SuperElement inherits from SuperEvent.

```javascript
 const btn = $e('input', {type: 'button', name: 'exampleBtn', options: [['value', 'Example']] }) // creates a button

 btn.appendTo(document.body) // appends btn to the body
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperElement.html for more info.

### SuperContent

This method allows the creation of content. It also inherits methods from SuperElement. An example for this could be creating containers and using the appendTo() prototype to append an item inside of the container created by SuperContent.

```javascript
const contentContainer = $e('content', { type: 'ol' }) // creates a container to house different inputs and aligns them to the center of the page.

const btn = $e('input', {type: 'button', name: 'exampleBtn', options: [['value', 'Example']] }) // creates a button

contentContainer.appendTo(document.body) // appends container to the page
btn.appendTo(contentContainer) // appends btn to the container
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperContent.html for more info.

### SuperDisplay

This method allows you to adjust the position of items on the web page. SuperDisplay also inherits from SuperElement.

```javascript
const contentContainer = $e('display', { position: 'centerBoth', direction: 'column' }) // creates a container to house different inputs and aligns them to the center of the page.
contentContainer.appendTo(document.body) // appends container to the page
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperDisplay.html for more info.

### SuperForm

This method allows the creation of form formats. This could be used to create an enquiry form on a web page. SuperForm also inherits from SuperElement.

```javascript
const exampleForm = $e('form') // creates the form.
const contentContainer = $e('display', { position: 'centerBoth', direction: 'column' }) // creates a container to house different inputs and aligns them to the center of the page.
const formInput = $e('input', { type: 'input', name: 'text', options: [['min', 1], ['max', 20]] }) // creates a text box.
const formBtn = $e('input', {type: 'button', name: 'submitBtn', options: [['value', 'Submit']] }) // creates a submit button

exampleForm.appendTo(document.body) // appends the form to the document body.
contentContainer.appendTo(exampleForm) // appends the container to the form.
formInput.appendTo(contentContainer) // appends to text box to the container.
formBtn.appendTo(contentContainer) // appends the submit button to the container.
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperForm.html for more info.

### SuperImage

This allows you to add images to a webpage. It also inherits from SuperElement.

```javascript
const exampleImg = $e('image', {src: 'place URL here', width: 100, height: 100}) // takes an image and adjusts it's width and height.

exampleImg.appendTo(document.body) // appends image to the page.
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperImage.html for more info.

### SuperInput

This method allows you to create different types of inputs such as text boxes or buttons. I created it with a purpose to work along side SuperForm to help create enquiry forms easier. This inherits from SuperElement.

```javascript
const exampleForm = $e('form') // creates the form.
const contentContainer = $e('display', { position: 'centerBoth', direction: 'column' }) // creates a container to house different inputs and aligns them to the center of the page.
const formInput = $e('input', { type: 'input', name: 'text', options: [['min', 1], ['max', 20]] }) // creates a text box.
const formBtn = $e('input', {type: 'button', name: 'submitBtn', options: [['value', 'Submit']] }) // creates a submit button.

exampleForm.appendTo(document.body) // appends the form to the document body.
contentContainer.appendTo(exampleForm) // appends the container to the form.
formInput.appendTo(contentContainer) // appends to text box to the container.
formBtn.appendTo(contentContainer) // appends the submit button to the container.
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperInput.html for more info.