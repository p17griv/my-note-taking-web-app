import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../models/note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notedetail',
  templateUrl: './notedetail.component.html',
  styleUrls: ['./notedetail.component.css']
})
export class NoteDetailComponent implements OnInit {

  note: Note | undefined;
  id = String(this.route.snapshot.paramMap.get('id'));
  error = 0;
  title = "";
  text = "";
  date = "";

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getNote();
    if (this.note == null)
      this.error = 1;
    else {
      this.title = this.note.title;
      this.text = this.note.text;
      this.date = this.note.date;
    }
  }

  getNote(): void {
    this.noteService.getNote(this.id).subscribe(note => this.note = note);
  }

  editNote(): void {
    if (this.text === "")
      this.error = 2;
    else {
      const editedNote = {id: this.id, date: new Date().toISOString().substring(0,10), title: this.title, text: this.text};
      this.noteService.editNote(this.note!, editedNote);
      this.router.navigate(["home"]);
    }
  }

  deleteNote(note: Note): void {
    this.noteService.deleteNote(note);
    this.router.navigate(["home"]);
  }

}
