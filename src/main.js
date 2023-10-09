// make a button that shows all completed tasks -- IN PROGRESS needs to only access completed items
// another button that shows all uncompleted tasks
//  a button that removes the line-through element -- DONE
// and a button that filters active, completed and all the to-do

import { SuperContent } from './SuperContent'
import { SuperImage } from './SuperImage'
import { SuperDisplay } from './SuperDisplay'
import { SuperForm } from './SuperForm'
import { SuperInput } from './SuperInput'
import { SuperBoxMaker } from './SuperBoxMaker'

/**
 * the name of the element
 * @typedef {string} elementTag
 */

const header = new SuperContent('h1', 'Constructor Functions')

const paragraph = new SuperContent('p',
  "I've created a header and paragraph using a constructor function that creates HTML elements and content responsively. This is done by calling upon the constructor function/object using 'new' which is an instance of an object that has a constructor function i.e: SuperElement(), I then pass the required parameters to create the HTML element and content i wish to use. This has all been done using on Javascript with the goal of creating responsive code. "
)

const greenBox = new SuperBoxMaker('green', 100, 100)

const blueBox = new SuperBoxMaker('blue', 100, 100)
const redBox = new SuperBoxMaker('red', 100, 100)
const purpleBox = new SuperBoxMaker('purple', 100, 100)
const orangeBox = new SuperBoxMaker('orange', 100, 100)

const ghostDog = new SuperImage('https://images.unsplash.com/photo-1604186838309-c6715f0d3e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2761&q=80', 300, 300)

const imageParagraph = new SuperContent('p', "I have taken what I've learned from making the SuperElement() constructor function and tried making a responsive function that allows me to create resposnive images using Javascript. this constructor required more parameters to be passed however fundamentally it was the same. now whenever i use the 'new' instance to call upon the ImageCreator() function i can create basic images without repeating any code and if i want to make more complicated images I'll just need to adjust the ImageCreator() function to do so. ")

const boxContainer = new SuperDisplay('centerRight')

const toDoContainer = new SuperDisplay('centerBoth')
const toDoForm = new SuperForm()
const toDoHeader = new SuperContent('h1', 'To Do List', 'sans-serif', '20')
const toDoInput = new SuperInput('text', 'list', [['min', '0'], ['max', '20']])
const toDoBtn = new SuperInput('submit', 'Submit')
const clearBtn = new SuperInput('button', 'clearBtn', [['value', 'Clear All']])
const doneBtn = new SuperInput('button', 'doneBtn', [['value', 'Completed Tasks']])
const dataStore = []
const completedTasks = []

clearBtn.click(() => {
  for (let i = 0; i < dataStore.length; i++) {
    const dataClear = dataStore[i]
    dataClear.remove()
  }
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

const form = new SuperForm()
const textInput = new SuperInput('text', 'firstName', [['min', '0'], ['max', '10']])
const submitBtn = new SuperInput('submit', 'Submit')
const bigBtn = new SuperInput('button', 'BigBtn', [['value', 'Big Button']])

form.submit(() => {
  const firstName = form.getValue('firstName')
  boxContainer.alignment(firstName)
  console.log(firstName)
}, { preventDefault: true })

bigBtn.appendTo(form.element)
form.appendTo(document.body)
textInput.appendTo(form.element)
submitBtn.appendTo(form.element)

boxContainer.appendTo(document.body)
ghostDog.appendTo(boxContainer.element)
greenBox.appendTo(boxContainer.element)
blueBox.appendTo(boxContainer.element)
redBox.appendTo(boxContainer.element)
purpleBox.appendTo(boxContainer.element)
orangeBox.appendTo(boxContainer.element)

header.appendTo(document.body)
paragraph.appendTo(document.body)
imageParagraph.appendTo(document.body)

// to do list appends
toDoForm.appendTo(document.body)
toDoContainer.appendTo(toDoForm.element)
toDoHeader.appendTo(toDoContainer.element)
toDoInput.appendTo(toDoContainer.element)
toDoBtn.appendTo(toDoContainer.element)
clearBtn.appendTo(toDoContainer.element)
doneBtn.appendTo(toDoContainer.element)
