import {superElement} from '../lib/main'


clearBtn.disable()
completeAllBtn.disable()
inCompleteBtn.disable()
submitBtn.disable()

const toDoApp = {
  list: [],
  completedTasks: [],
  start({
    clearText = 'Clear All',
    completeText = 'Complete All',
    unfinishedText = 'Unfinished',
    minCharacterLength = 0,
    maxCharacterLength = 20,
    fontType = 'sans-serif'
  } = {}) {
    // all required elements
    const toDoForm = superElement('form')
    const toDoContainer = superElement('display', { alignment: 'centerBoth'})
    const toDoHeader = superElement('content', { type: 'h1', content: 'To Do List', font: fontType, fontSize: '16' })
    const toDoInput = superElement('input', { type: 'input', name: 'to-do-text', options: [['min', minCharacterLength], ['max', maxCharacterLength]] })
    const submitBtn = superElement('input', { type: 'submit', name: 'Submit' })
    const clearBtn = superElement('input', { type: 'button', name: 'clearBtn', options: [['value', clearText]] })
    const completeAllBtn = superElement('input',{ type: 'button', name: 'completeAllBtn', options: [['value', completeText]] })
    const inCompleteBtn = superElement('input',{ type: 'button', name: 'completeAllBtn', options: [['value', unfinishedText]] })
    // to do list appends
    toDoForm.appendTo(document.body)
    toDoContainer.appendTo(toDoForm)
    toDoHeader.appendTo(toDoContainer)
    toDoInput.appendTo(toDoContainer)
    submitBtn.appendTo(toDoContainer)
    clearBtn.appendTo(toDoContainer)
    completeAllBtn.appendTo(toDoContainer)
    inCompleteBtn.appendTo(toDoContainer)
    // EVENT LISTENERS
    // a button that clears to-do items
    clearBtn.click(() => {
      this.clearContent()
      clearBtn.disable()
    })
    // a listener that listens for key up events in the input bar
    toDoInput.keyUp(() => {
      this.keyUpListener()
    })
    // a button that marks content as incomplete
    inCompleteBtn.click(() => {
      storedData.unStrike()
      storedData.colour('black')
      inCompleteBtn.disable()  
    })
  // a button that completes all to-do list items
  completeAllBtn.click(() => {
    this.complete()
    storedData.strike()
    storedData.colour('green')
    completeAllBtn.disable()  
  })
  // the form body with events inside
  toDoForm.submit(() => {
    this.formComponents()
  

    if (!toDoText) {
      return
    }
  
    if (completeBtn === 'click') {
      toDoItem.unStrike()
      toDoItem.colour('green')
    }
  
    // resets completed tasks
    reDoBtn.click(() => {
      toDoItem.unStrike()
      completeBtn.colour('black')
    })
  
    // completes tasks
    completeBtn.click(() => {
      toDoItem.strike()
      completeBtn.colour('green')
    })
  
    // deletes tasks
    deleteBtn.click(() => {
      deleteBtn.remove()
      toDoItem.remove()
      completeBtn.remove()
    })
  }, { preventDefault: true })
  },
  // TO-DO LIST FUNCTIONS
  // A function that clears content
  clearContent () {
    for (let i = 0; i < this.list.length; i++) {
      const dataClear = this.list[i];

      dataClear.remove()
      
    }  
  },
  keyUpListener () {
    const toDoText = toDoForm.getValue('to-do-text')
    if (toDoText) {
      submitBtn.enable()
    } else submitBtn.disable()
  },
  inComplete () {
    for (let i = 0; i < this.completedTasks.length; i++) {
      const storedData = this.completedTasks[i]
      console.log(storedData)    
    }
  },
  complete() {
    for (let i = 0; i < this.completedTasks.length; i++) {
      const storedData = this.completedTasks[i]
      console.log(storedData)
    }
  },
  formComponents() {
    const toDoText = toDoForm.getValue('to-do-text')

    const toDoItem = new SuperContent('li', toDoText, 'sans-serif', '20')
    const deleteBtn = new SuperInput('button', 'deleteBtn', [['value', 'X']])
    const completeBtn = new SuperInput('button', 'completeBtn', [['value', 'Completed']])
    const reDoBtn = new SuperInput('button', 'reDoBtn', [['value', 'Re-Do']])

    toDoItem.appendTo(toDoContainer)
    completeBtn.appendTo(toDoItem)
    deleteBtn.appendTo(toDoItem)
    reDoBtn.appendTo(toDoItem)
    dataStore.push(toDoItem)
    completedTasks.push(toDoItem)
  
    clearBtn.enable()
    completeAllBtn.enable()
    inCompleteBtn.enable()
  }
}


