const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    // for (let i = 0; i < notes.length; i++) {
    //     if (title == notes[i].title) {
    //         console.log("Duplicate note")
    //     }
    // }

    // const Duplicate_arr = notes.filter((note) => title == note.title)
    const Duplicate_arr = notes.find((note) => title == note.title)

    if (!Duplicate_arr) {

        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.bgGreen("Note Added!"))

    } else {
        console.log(chalk.bgRed("Note with title already exists."))
    }



}

const removeNote = (title) => {
    const notes = loadNotes()
    const new_notes = notes.filter((note) => note.title != title)

    saveNotes(new_notes)

    if (new_notes.length == notes.length) {
        console.log(chalk.bgRed('No note found!'))
    } else {
        console.log(chalk.bgGreen('Note removed!'))
    }



}

const readNote = (title) => {
    const notes = loadNotes()
    const readnote = notes.find((note) => note.title == title)

    if (readnote) {
        console.log(chalk.cyan.underline(readnote.title))
        console.log(readnote.body)
    } else {
        console.log(chalk.bgRedBright("No note with entered title found!"))
    }
}

const listNotes = () => {
    console.log(chalk.bgCyanBright("Your notes: "))
    const notes = loadNotes()
    for (let i = 0; i < notes.length; i++) {
        console.log(notes[i].title)
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer)

    } catch (e) {
        return []

    }


}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = { addNote: addNote, removeNote: removeNote, listNotes: listNotes, readNote: readNote } // Exporting an object
