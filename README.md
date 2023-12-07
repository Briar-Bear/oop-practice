#Super Library

Super Libaray is a javascript library I have created. It started off as a way to practice coding using OOP, however it quickly became a project that I'll continue to update overtime.

###SuperElement

This method allows the creation of elements such as a div or button.

```javascript
 const btn = $e('element', {type: 'button', name: 'exampleBtn', options: [['value', 'Example']] })

 btn.appendTo(document.body)
```

please refer to https://briar-bear.github.io/super-element/docs/SuperElement.html for more info.

###SuperContent

this method allows the creation of content. It also inherits methods from SuperElement. An example for this could be creating containers and using the appendTo() prototype to append an item inside of the container created by SuperContent.

```javascript
const contentContainer = $e('content', { type: 'ol' })

const btn = $e('element', {type: 'button', name: 'exampleBtn', options: [['value', 'Example']] })

contentContainer.appendTo(document.body)
btn.appendTo(contentContainer)
```

Please refer to https://briar-bear.github.io/super-element/docs/SuperContent.html for more info.

