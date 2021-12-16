import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './notes/notes.component';
import { NewNoteComponent } from './newnote/newnote.component';
import { NoteDetailComponent } from './notedetail/notedetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: NotesComponent },
  { path: 'newnote', component: NewNoteComponent},
  { path: 'notedetail/:id', component: NoteDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
