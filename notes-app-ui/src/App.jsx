import NotesList from "./components/NotesList.js";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search.js";
import Header from "./components/Header.js";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('react-notes-app-data');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('react-notes-app-dark-mode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  // Save dark mode to localStorage
  useEffect(() => {
    localStorage.setItem('react-notes-app-dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
