import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  Notes: Note[] = [
    { id: 'gyjvo', date: '2021-12-08', title: 'Reminder', text: 'Get kids to funfair.' },
    { id: 'axfsd', date: '2021-12-05', title: 'Reminder', text: 'Mown the lawn.' },
    { id: 'jkhks', date: '2021-12-17', title: 'Angular Project', text: 'Finish and send Angular project.' },
    { id: 'fghfc', date: '2021-11-29', title: 'Do Not Forget - Bills', text: 'Pay the bills of the month.' },
    { id: 'rerwe', date: '2021-12-11', title: 'Party Invitations', text: 'Send invitations to Marina and Christine for Alex\'s Christmas party.' },
    { id: 'kjdpo', date: '2021-12-12', title: 'Reminder - Presentation', text: 'Prepare the presentation for next week\'s meeting.' },
    { id: 'lmnfa', date: '2021-12-11', title: 'SuperMarket List', text: '- milk\n- bread\n- cheese\n- eggs\n- sugar\n- apples\n- toothpaste\n- washing powder' },
    { id: 'rewqb', date: '2021-12-02', title: 'Mary\'s Addres', text: '381 Smith Store Street Hopewell Junction, NY 12533'}
  ];

  constructor() { }

  getNotes(): Observable<Note[]> {
    return of(this.Notes);
  }

  getNote(id: string): Observable<Note> {
    return of(this.Notes.find(h => h.id === id)!);
  }

  getUniqueId(): string {
    while (true) {
      const newId = Math.random().toString(36).substring(2,7); // Get a random 5-letter string
      if (! this.Notes.find(h => h.id === newId)) {
        return newId; // Return new id if it doesn't already exists
      }
    }
  }

  addNote(note: Note): void {
    this.Notes.push(note);
  }

  editNote(note: Note, editedNote: Note): void {
    this.deleteNote(note);
    this.addNote(editedNote);
  }

  deleteNote(note: Note): void {
    const index = this.Notes.indexOf(note); // Find the position of note in Notes array
    if (index !== -1) {
      this.Notes.splice(index, 1);
    }
  }

  
}
