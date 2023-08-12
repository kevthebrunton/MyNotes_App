import React, { useState } from 'react';
import DisplayNote from './DisplayNote';
import { useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config';


const Note = () => {
  //state to hold notes
  const [notes, setNotes] = useState([])

  //state for new notes
  const [addNote, setAddNote] = useState({ title: "", content: "" })

  //state to track selected note id for updates
  const [id,setId] = useState("")

  //reference to note collection
  const noteRef = collection(db, "note")

  useEffect(() => {
    //fetch notes from firestore when component mounts
    const getNotes = async () => {
      const data = await getDocs(noteRef)
      //console.log(data);
      setNotes(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })))

    }
    getNotes()

  }, [noteRef])


  const handleChange = (e) => {
    //handle input changes for adding and updating notes
    const name = e.target.name;
    const value = e.target.value;
    setAddNote({ ...addNote, [name]: value })

  }

  const handleSubmit = async (e) => {
    //add a new note to database
    e.preventDefault()
    //console.log(addNote);
    await addDoc(noteRef, addNote)


  }

  const deleteNote = async (id) => {
    //console.log(id);
    //reference to the note to be deleted and delete note from firestore
    const deleteNote = doc(noteRef, id)
    await deleteDoc(deleteNote)

  }

  const updateNote = async (note) => {
    //prefill input fields for editing a note
    //console.log(note);
    setAddNote({title:note.title, content:note.content})
    setId(note.id)

  }

  const updatedNote = async (id) => {
    console.log(id);

   //reference to the note to be updated and update note in firestore
    const updateNote = doc(db,"note", id)
    await updateDoc(updateNote,addNote)

  }
  return (
    <div className='container'>
      <form method='post' onSubmit={handleSubmit}>
        <input type='text' name='title' placeholder='Enter the title.. ' onChange={handleChange} value={addNote.title} />
        <textarea name='content' placeholder='Type the content here' rows='4' onChange={handleChange} value={addNote.content}></textarea>
        <div style={{"display":"flex"}}> 
          <button type='submit'>Submit</button>
          <button style={{ "marginLeft": "10px" }} type='button'onClick={()=>updatedNote(id)}>Update</button>
        </div>

      </form>
      <div className='note-container'>
        {notes && notes.map((note) => {
          return <DisplayNote title={note.title} content={note.content} id={note.id} getId={deleteNote} getUpdateNoteId={updateNote} />
        })}

      </div>
    </div>
  )
}

export default Note;