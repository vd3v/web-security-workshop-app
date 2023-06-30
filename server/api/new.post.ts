import { useNotesDatabase } from '../database/useNotesDatabase'
import { Note } from '../../models/Note'


export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const id = await addNote(Note.parse(body))
    return { id }
})



async function addNote(note: Note) {
    const id = await getNewId()
    await useNotesDatabase().writeValue(`${id}`, ({
        ...note,
        id
    }))
    await useNotesDatabase().writeValue('lastId', id)
    return id
}

export async function getLastId() {
    try {
        const lastId = await useNotesDatabase().readValue('lastId')
        return (Number(lastId) || 0)
    } catch (error) {
        console.error('Notes had no lastId')
        console.error(error)
        await useNotesDatabase().writeValue('lastId', 0)
        return 0;
    }
}

async function getNewId() {
    return (await getLastId()) + 1
}