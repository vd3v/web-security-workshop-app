import {useNotesDatabase} from '../database/useNotesDatabase'
import {Note} from '../../models/Note'

const PAGINATION_SIZE = 10

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    if(body.id){
        const note = await useNotesDatabase().readValue(`${body.id}`)
        return note
    } else {
        throw new Error('No id provided')
    }
  })
  