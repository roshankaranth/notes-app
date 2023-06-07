const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')


// Create add command
yargs.command(
    {
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title:
            {
                describe: 'Note title',
                type: 'string',
                demandOption: true

            },

            body: {
                describe: 'Note body',
                type: 'string',
                demandOption: true
            }
        },
        handler: function (argv) {
            console.log(`Title : ${argv.title}\nBody: ${argv.body}`)
        }
    })

//Create remove node
yargs.command(
    {
        command: 'remove',
        describe: 'remove a note.',
        handler: function () {
            console.log('remove a note.')
        }
    })

// Create a read command
yargs.command(
    {
        command: 'read',
        describe: 'reading a note',
        handler: function () {
            console.log('reading a note')
        }
    })

// Create a list command
yargs.command(
    {
        command: 'list',
        describe: 'listing all notes',
        handler: function () {
            console.log('Listing all notes.')
        }
    })


yargs.parse()