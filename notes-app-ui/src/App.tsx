import NotesList from "./components/NotesList.js";
import { useState } from "react";
import {nanoid} from "nanoid";
const App=()=>{
  const [notes, setNotes]=useState([
    {
      id:nanoid(),
      text:"This is my first note.",
      date:"28/11/24"
    },
    {
      id:nanoid(),
      text:"This is my second note.",
      date:"29/11/24"
    },
    {
      id:nanoid(),
      text:"This is my third note.",
      date:"30/11/24"
    }
  ]);

const addNote = (text: string ) => {
 
    const date=new Date();
    const newNote={
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes=[...notes, newNote];
    setNotes(newNotes);

}

const deleteNote=(id : string)=>{
  const newNotes=notes.filter((note)=> note.id !== id );
  setNotes(newNotes);
}

  return <div className="container"> 
    <NotesList notes={notes}  handleAddNote={addNote} handleDeleteNote={deleteNote}/>
  </div>;

}

export default App;