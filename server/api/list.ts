import {useNotesDatabase} from '../database/useNotesDatabase'
import {Note} from '../../models/Note'
import { getLastId } from './new.post'

// TODO:
/*
* Broken access control: private notes are available on a public endpoint
* Injection: XSS for the note title and on a page where you can search for the auther, something like "GOTCHA was not found"
* Insecure design: All notes are finable by id, so hackers can easliy parse them all
* Security Misconfiguration: server over http, no XSRF, no security headers
* Security Logging and Monitoring Failures: no logging at all
* 
* 
*/

const PAGINATION_SIZE = 10

export default defineEventHandler(async (event) => {
    const lastId = await getLastId()
    const lastIdToShow = ((lastId - PAGINATION_SIZE)>0) ? lastId - PAGINATION_SIZE : 0
    const results = await useNotesDatabase().readValues(range(lastIdToShow, lastId).map(id => `${id}`))
    return {notes: results.filter(result=>!!result).filter(result=>!result.private).reverse()}
  })
  

  function range(min: number, max: number): number[] {
    var len = max - min + 1;
    var arr = new Array(len);
    for (var i=0; i<len; i++) {
      arr[i] = min + i;
    }
    return arr;
  }