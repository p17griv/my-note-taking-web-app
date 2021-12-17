import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity.model';
import { NoteService } from '../services/note.service';
import { OpenApiIntegrationService } from '../services/open-api-integration.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  activity: Activity | undefined;

  constructor(
    private apiService: OpenApiIntegrationService,
    private noteService: NoteService
    ) { }

  ngOnInit(): void {
    this.callActivityApi();
  }

  callActivityApi(): void {
    delete this.activity;
    this.apiService.getOpenApiResult().subscribe(result => {this.activity = Object.assign({}, result)});
  }

  addActivityToNotes(): void {
    const note = {id: this.noteService.getUniqueId(), date: new Date().toISOString().substring(0,10), title: "Activity", text: String(this.activity?.activity)};
    this.noteService.addNote(note);
  }

}
