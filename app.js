const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    })

//Create remove node
yargs.command(
    {
        command: 'remove',
        describe: 'remove a note.',
        builder: {
            title: {
                describe: 'Note to be removed',
                type: 'string',
                demandOption: true


            }
        },
        handler(argv) {
            notes.removeNote(argv.title)
        }
    })

// Create a read command
yargs.command(
    {
        command: 'read',
        describe: 'reading a note',
        handler() {
            console.log('reading a note')
        }
    })

// Create a list command
yargs.command(
    {
        command: 'list',
        describe: 'listing all notes',
        handler() {
            notes.listNotes()
        }
    })


yargs.parse()