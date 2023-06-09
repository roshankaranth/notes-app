const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your Notes..'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // for (let i = 0; i < notes.length; i++) {
    //     if (title == notes[i].title) {
    //         console.log("Duplicate note")
    //     }
    // }

    const Duplicate_arr = notes.filter((note) => title == note.title)

    if (Duplicate_arr == 0) {

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

module.exports = { getNotes: getNotes, addNote: addNote, removeNote: removeNote } // Exporting an object
