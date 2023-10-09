// make a button that shows all completed tasks -- IN PROGRESS needs to only access completed items
// another button that shows all uncompleted tasks
//  a button that removes the line-through element -- DONE
// and a button that filters active, completed and all the to-do

import { SuperContent } from './SuperContent'
import { SuperDisplay } from './SuperDisplay'
import { SuperForm } from './SuperForm'
import { SuperInput } from './SuperInput'


/**
 * the name of the element
 * @typedef {string} elementTag
 */



const toDoContainer = new SuperDisplay('centerBoth')
const toDoForm = new SuperForm()
const toDoHeader = new SuperContent('h1', 'To Do List', 'sans-serif', '20')
const toDoInput = new SuperInput('text', 'list', [['min', '0'], ['max', '20']])
const toDoBtn = new SuperInput('submit', 'Submit')
const clearBtn = new SuperInput('button', 'clearBtn', [['value', 'Clear All']])
const doneBtn = new SuperInput('button', 'doneBtn', [['value', 'Completed Tasks']])
const dataStore = []
const completedTasks = []

clearBtn.disabled = true

clearBtn.click(() => {
  for (let i = 0; i < dataStore.length; i++) {
    const dataClear = dataStore[i]
    dataClear.remove()
  }

  clearBtn.disabled = true
})

toDoForm.submit(() => {
  const list = toDoForm.getValue('list')
  const toDoItem = new SuperContent('li', list, 'sans-serif', '20')
  const deleteBtn = new SuperInput('button', 'deleteBtn', [['value', 'X']])
  const completeBtn = new SuperInput('button', 'completeBtn', [['value', 'Completed']])
  const reDoBtn = new SuperInput('button', 'reDoBtn', [['value', 'Re-Do']])
  toDoItem.appendTo(toDoContainer.element)
  completeBtn.appendTo(toDoContainer.element)
  deleteBtn.appendTo(toDoContainer.element)
  reDoBtn.appendTo(toDoContainer.element)
  dataStore.push(toDoItem, deleteBtn, completeBtn)
  completedTasks.push(toDoItem)

  if (!toDoItem) {
    return
  }

  clearBtn.disabled = false

  // needs work
  doneBtn.click(() => {
    for (let i = 0; i < completedTasks.length; i++) {
      const storedData = completedTasks[i]
      console.log(storedData)

      if (completeBtn) {
        storedData.appendTo(toDoContainer.element)
        toDoItem.unStrike()
        toDoItem.colour('green')
      }
    }
  })

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
doneBtn.appendTo(toDoContainer.element)
