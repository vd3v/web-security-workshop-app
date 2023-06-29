export class Note {
    public id?: number;
    public title: string;
    public content: string;
    public date: Date;
    public author: string;
    public private: boolean = false;

    constructor(title: string, content: string, date: Date, author: string, is_private = false) {
      this.title = title;
      this.content = content;
      this.date = date;
      this.author = author;
      this.private = is_private;
    }
  
    static parse(json: NoteDTO): Note {
      return new Note(
        json.title,
        json.content,
        json.date,
        json.author,
        json.private
      );
    }
  }

export type NoteDTO = {
    title: string;
    content: string;
    date: Date;
    author: string;
    private: boolean;
}