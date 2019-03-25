const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === title)
  if(!duplicateNote){
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log("Saved note")
  } else {
    console.log("Duplicate Note")
  }
}

const getNotes = (title, body) => {
  console.log("get notes")
}

const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}


const removeNotes = (title) => {
  const notes = loadNotes()
  const newArray = notes.filter(note => note.title !== title)
  if(notes.length !== newArray.length){
    saveNotes(newArray)
    console.log(chalk.green('Note Removed'))
  }else {
    console.log(chalk.red('Note Not found'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  notes.forEach(note => console.log(note.title))
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find(n => n.title === title)
  if(note){
    console.log(note.title)
    console.log(note.body)
  }else{
    console.log('Note Not Found')
  }
}

module.exports = {
  addNotes: addNotes,
  getNotes: getNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote
}
