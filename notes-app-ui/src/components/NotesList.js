import Note from "./Note.js"
import AddNote from "./AddNote.js";
const NotesList= ({ notes })=>{
    return(
        <div className="notes-list">
            {notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date} />
            ))}
        <AddNote/>
        </div> 
    )  
};

export default NotesList;