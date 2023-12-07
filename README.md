#Super Library

Super Libaray is a javascript library I have created. It started off as a way to practice coding using OOP, however it quickly became a project that I'll continue to update overtime.

###SuperElement

This method allows the creation of elements such as a div or button. SuperElement inherits from SuperEvent.

```javascript
 const btn = $e('element', {type: 'button', name: 'exampleBtn', options: [['value', 'Example']] })

 btn.appendTo(document.body)
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperElement.html for more info.

###SuperContent

This method allows the creation of content. It also inherits methods from SuperElement. An example for this could be creating containers and using the appendTo() prototype to append an item inside of the container created by SuperContent.

```javascript
const contentContainer = $e('content', { type: 'ol' })

const btn = $e('element', {type: 'button', name: 'exampleBtn', options: [['value', 'Example']] })

contentContainer.appendTo(document.body)
btn.appendTo(contentContainer)
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperContent.html for more info.

###SuperDisplay

This method allows you to adjust the position of items on the web page. SuperDisplay also inherits from SuperElement.

```javascript
const contentContainer = $e('display', { position: 'centerBoth', direction: 'column' })
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperDisplay.html for more info.

###SuperForm

This method allows the creation of form formats. This could be used to create an enquiry form on a web page. SuperForm also inherits from SuperElement.

```javascript
const exampleForm = $e('form')
const contentContainer = $e('display', { position: 'centerBoth', direction: 'column' })
const formInput = $e('input', { type: 'input', name: 'text', options: [['min', 1], ['max', 20]] })
const formBtn = $e('input', {type: 'button', name: 'submitBtn', options: [['value', 'Submit']] })

exampleForm.appendTo(document.body)
contentContainer.appendTo(exampleForm)
formInput.appendTo(contentContainer)
formBtn.appendTo(contentContainer)
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperForm.html for more info.

### SuperImage

This allows you to add images to a webpage. It also inherits from SuperElement.

```javascript
const exampleImg = $e('image', {src: 'place URL here', width: 100, height: 100})

exampleImg.appendTo(document.body)
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperImage.html for more info.