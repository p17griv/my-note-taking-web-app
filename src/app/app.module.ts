import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AutosizeModule } from 'ngx-autosize';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotesComponent } from './notes/notes.component';
import { NewNoteComponent } from './newnote/newnote.component';
import { NoteDetailComponent } from './notedetail/notedetail.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotesComponent,
    NewNoteComponent,
    NoteDetailComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AutosizeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
