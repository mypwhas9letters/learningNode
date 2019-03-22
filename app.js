const yargs = require('yargs')
const utils = require('./util.js')
console.log(utils.getNotes())

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
  handler: function(argv) {
    utils.addNotes(argv.title, argv.body)
  }
})

yargs.parse()
