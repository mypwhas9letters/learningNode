const yargs = require('yargs')
const utils = require('./util.js')

yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title:{
      describe: "Note title", //Name of params in the terminal
      demandOption: true, //require option
      type: 'string' //type of input
    },
    body: {
      describe: 'Node Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    utils.addNotes(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title:{
      describe: "Remove Note by Title", //Name of params in the terminal
      demandOption: true, //require option
      type: 'string' //type of input
    }
  },
  handler(argv) {
    utils.removeNotes(argv.title)
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title:{
      describe: "Read Note by Title", //Name of params in the terminal
      demandOption: true, //require option
      type: 'string' //type of input
    }
  },
  handler(argv) {
    utils.readNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'List notes',
  handler(argv) {
    utils.listNotes()
  }
})

yargs.parse()
