import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
    this.notes.sort((a,b) => (Date.parse(a.date) > Date.parse(b.date)) ? -1 : ((Date.parse(b.date) > Date.parse(a.date)) ? 1 : 0)); // Sort notes from newest to oldest (based on date of last edit)
  }

  getNotes(): void {
    this.noteService.getNotes().subscribe(notes => this.notes = notes);
  }

  deleteNote(note: Note): void {
    this.noteService.deleteNote(note);
  }

}
