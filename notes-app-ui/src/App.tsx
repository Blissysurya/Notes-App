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
  ])
  return <div className="container"> 
    <NotesList notes={notes}/>
  </div>;
}

export default App;