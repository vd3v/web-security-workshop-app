import { useNotesDatabase } from '../database/useNotesDatabase'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    if (body.id) {
        const note = await useNotesDatabase().readValue(`${body.id}`)
        return note
    } else {
        throw new Error('No id provided')
    }
})
