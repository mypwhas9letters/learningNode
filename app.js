const chalk = require('chalk')
const yargs = require('yargs')

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title:{
      describe: "Note title",
      demandOption: true,
      type: 'string'
    }
  }
  handler: function(argv) {
    console.log('Removing a note')
  }
})

console.log(yargs.argv)
