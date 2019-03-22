const fs = require('fs')

const addNotes = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(Dasa)
  notes.push({
    title: title,
    body: body
  })
  saveNotes(notes)
}

const getNotes = (title, body) => console.log("get fdsfsdfsf")

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

module.exports = {
  addNotes: addNotes,
  getNotes: getNotes,
  loadNotes: loadNotes,
}
