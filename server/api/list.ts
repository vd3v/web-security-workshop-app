import { useNotesDatabase } from '../database/useNotesDatabase'
import { getLastId } from './new.post'

const PAGINATION_SIZE = 10

export default defineEventHandler(async (event) => {
  const lastId = await getLastId()
  const lastIdToShow = ((lastId - PAGINATION_SIZE) > 0) ? lastId - PAGINATION_SIZE : 0
  const results = await useNotesDatabase().readValues(range(lastIdToShow, lastId).map(id => `${id}`))
  return { notes: results.filter(result => !!result).filter(result => !result.private).reverse() }
})


function range(min: number, max: number): number[] {
  var len = max - min + 1;
  var arr = new Array(len);
  for (var i = 0; i < len; i++) {
    arr[i] = min + i;
  }
  return arr;
}