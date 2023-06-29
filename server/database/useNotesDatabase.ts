import { Level } from 'level'
const db = new Level('notes_db', { valueEncoding: 'json' })

export function useNotesDatabase(){
    function readValue(key:string): Promise<any> {
        return db.get(key)
    }
    function readValues(keys:string[]): Promise<any[]> {
        return db.getMany(keys)
    }
    function writeValue(key:string, value:any): Promise<void> {
        return db.put(key, value)
    }

    return {
        readValue,
        readValues,
        writeValue
    }
}
