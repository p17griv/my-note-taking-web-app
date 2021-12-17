import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.css']
})
export class NewNoteComponent implements OnInit {

  title = "";
  text = "";
  error = "";

  constructor(
    private noteService: NoteService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    if (this.text === "")
      this.error = "Add some text to your note!";
    else {
      this.error = "";
      const note = {id: this.noteService.getUniqueId(), date: new Date().toISOString().substring(0,10), title: this.title, text: this.text};
      this.noteService.addNote(note);
      this.router.navigate(["home"]);
    }
  }

}
