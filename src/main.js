// clear all btn doesnt work as intended
// complete all button doesn't work as intended

import superTypes from '../lib/main'

const toDoApp = {
  list: [],
  start ({
    clearText = 'Clear All',
    completeText = 'Complete All',
    unfinishedText = 'Unfinished',
    minCharacterLength = 0,
    maxCharacterLength = 20,
    fontType = 'sans-serif'
  } = {}) {
    // all required elements
    this.toDoForm = superTypes('form')
    this.toDoContainer = superTypes('display', { alignment: 'centerBoth', direction: 'column' })
    this.toDoHeader = superTypes('content', { type: 'h1', content: 'To Do List', font: fontType, fontSize: '16' })
    this.toDoInput = superTypes('input', { type: 'input', name: 'to-do-text', options: [['min', minCharacterLength], ['max', maxCharacterLength]] })
    this.submitBtn = superTypes('input', { type: 'submit', name: 'Submit' })
    this.clearBtn = superTypes('input', { type: 'button', name: 'clearBtn', options: [['value', clearText]] })
    this.completeAllBtn = superTypes('input', { type: 'button', name: 'completeAllBtn', options: [['value', completeText]] })
    this.inCompleteBtn = superTypes('input', { type: 'button', name: 'UnfinishedBtn', options: [['value', unfinishedText]] })
    // to do list appends
    this.toDoForm.appendTo(document.body)
    this.toDoContainer.appendTo(this.toDoForm)
    this.toDoHeader.appendTo(this.toDoContainer)
    this.toDoInput.appendTo(this.toDoContainer)
    this.submitBtn.appendTo(this.toDoContainer)
    this.clearBtn.appendTo(this.toDoContainer)
    this.completeAllBtn.appendTo(this.toDoContainer)
    this.inCompleteBtn.appendTo(this.toDoContainer)
    // EVENT LISTENERS
    // a button that clears to-do items
    this.clearBtn.click(() => {
      this.clearContent()
      this.clearBtn.disable()
    })
    // a listener that listens for key up events in the input bar
    this.toDoInput.keyUp(() => {
      this.keyUpListener()
    })
    // a button that marks content as incomplete
    this.inCompleteBtn.click(() => {
      this.changeResult('black', 'unStrike')
      this.inCompleteBtn.disable()
      this.completeAllBtn.enable()
    })
    // a button that completes all to-do list items
    this.completeAllBtn.click(() => {
      this.changeResult('green', 'strike')
      this.completeAllBtn.disable()
      this.inCompleteBtn.enable()
    })
    // the form body with events inside
    this.toDoForm.submit(() => {
      this.formComponents()
    }, { preventDefault: true })
    // disable buttons
    this.clearBtn.disable()
    this.completeAllBtn.disable()
    this.inCompleteBtn.disable()
    this.submitBtn.disable()
  },
  // TO-DO LIST FUNCTIONS
  // A function that clears content
  clearContent () {
    for (let i = 0; i < this.list.length; i++) {
      const dataClear = this.list[i]

      dataClear.remove()
    }
  },
  keyUpListener () {
    const toDoText = this.toDoForm.getValue('to-do-text')
    if (toDoText) {
      this.submitBtn.enable()
    } else this.submitBtn.disable()
  },
  changeResult (colour, strike) {
    for (let i = 0; i < this.list.length; i++) {
      const storedData = this.list[i]
      storedData.strike(strike)
      storedData.colour(colour)
    }
  },
  formComponents () {
    const toDoText = this.toDoForm.getValue('to-do-text')

    const toDoItem = superTypes('content', { type: 'li', content: toDoText, font: 'sans-serif', fontSize: '20' })
    const deleteBtn = superTypes('input', { type: 'button', name: 'deleteBtn', options: [['value', 'X']] })
    const completeBtn = superTypes('input', { type: 'button', name: 'completeBtn', options: [['value', 'Completed']] })
    const reDoBtn = superTypes('input', { type: 'button', name: 'reDoBtn', options: [['value', 'Re-Do']] })

    // resets completed tasks
    reDoBtn.click(() => {
      toDoItem.unStrike()
      toDoItem.colour('black')
      completeBtn.colour('black')
    })

    // completes tasks
    completeBtn.click(() => {
      toDoItem.strike()
      toDoItem.colour('green')
      completeBtn.colour('green')
    })

    // deletes tasks
    deleteBtn.click(() => {
      deleteBtn.remove()
      toDoItem.remove()
      completeBtn.remove()
    })

    toDoItem.appendTo(this.toDoContainer)
    completeBtn.appendTo(toDoItem)
    deleteBtn.appendTo(toDoItem)
    reDoBtn.appendTo(toDoItem)
    this.list.push(toDoItem)

    this.clearBtn.enable()
    this.completeAllBtn.enable()
    this.inCompleteBtn.enable()
  }
}

toDoApp.start()
