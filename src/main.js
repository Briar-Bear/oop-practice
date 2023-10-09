// and a button that filters active, completed and all the to-do

import { SuperContent } from './SuperContent'
import { SuperDisplay } from './SuperDisplay'
import { SuperForm } from './SuperForm'
import { SuperInput } from './SuperInput'


const toDoApp = {
  list: [],
  start({
    clearText = 'Clear All',
    completeText = 'Complete All',
    unfinishedText = 'Unfinished',
    minCharacterLength = 0,
    maxCharacterLength = 20,
    fontType = 'sans-serif'
  } = {}) {
    // all required elements
    const toDoContainer = new SuperDisplay('centerBoth')
    const toDoForm = new SuperForm()
    const toDoHeader = new SuperContent('h1', 'To Do List', fontType, maxCharacterLength)
    const toDoInput = new SuperInput('text', 'list', [['min', minCharacterLength], ['max', maxCharacterLength]])
    const toDoBtn = new SuperInput('submit', 'Submit')
    const clearBtn = new SuperInput('button', 'clearBtn', [['value', clearText]])
    const completeAllBtn = new SuperInput('button', 'completeAllBtn', [['value', completeText]])
    const inCompleteBtn = new SuperInput('button', 'completeAllBtn', [['value', unfinishedText]])
  }
}

toDoApp.start({
  clearText,
  completeText,
  unfinishedText,
  minCharacterLength,
  maxCharacterLength,
  fontType
})



const dataStore = []
const completedTasks = []

clearBtn.disable()
completeAllBtn.disable()
inCompleteBtn.disable()

inCompleteBtn.click(() => {
  for (let i = 0; i < completedTasks.length; i++) {
    const storedData = completedTasks[i]
    console.log(storedData)

    
      storedData.unStrike()
      storedData.colour('black')
      inCompleteBtn.disable()
    
  }
})

completeAllBtn.click(() => {
  for (let i = 0; i < completedTasks.length; i++) {
    const storedData = completedTasks[i]
    console.log(storedData)

    
      storedData.strike()
      storedData.colour('green')
      completeAllBtn.disable()
    
  }
})

clearBtn.click(() => {
  for (let i = 0; i < dataStore.length; i++) {
    const dataClear = dataStore[i]
    
    dataClear.remove()
  }

  clearBtn.disable()
})


toDoForm.submit(() => {
  const list = toDoForm.getValue('list')
  const toDoItem = new SuperContent('li', list, 'sans-serif', '20')
  const deleteBtn = new SuperInput('button', 'deleteBtn', [['value', 'X']])
  const completeBtn = new SuperInput('button', 'completeBtn', [['value', 'Completed']])
  const reDoBtn = new SuperInput('button', 'reDoBtn', [['value', 'Re-Do']])
  toDoItem.appendTo(toDoContainer.element)
  completeBtn.appendTo(toDoItem.element)
  deleteBtn.appendTo(toDoItem.element)
  reDoBtn.appendTo(toDoItem.element)
  dataStore.push(toDoItem)
  completedTasks.push(toDoItem)

  clearBtn.enable()
  completeAllBtn.enable()
  inCompleteBtn.enable()

  if (!toDoItem) {
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

// to do list appends
toDoForm.appendTo(document.body)
toDoContainer.appendTo(toDoForm.element)
toDoHeader.appendTo(toDoContainer.element)
toDoInput.appendTo(toDoContainer.element)
toDoBtn.appendTo(toDoContainer.element)
clearBtn.appendTo(toDoContainer.element)
completeAllBtn.appendTo(toDoContainer.element)
inCompleteBtn.appendTo(toDoContainer.element)
