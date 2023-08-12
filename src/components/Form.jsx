import React,{useState} from 'react';

const Form = (props) => {
    //state to manage the input values for the new note
    const [note,setNote] = useState({title:"", content: ""})

    //handle input changes for the new note
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNote({...note, [name]: value})

    }

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(note);
        props.onCreate(note)
        setNote({title:"",content:""})

    }
  return (
    <form method='post' onSubmit={handleSubmit}>
        <input type='text' name='title' placeholder='Enter the title.. ' onChange={handleChange} value={note.title}/>
        <textarea name='content' placeholder='Type the content here' rows='4' onChange={handleChange} value={note.content}></textarea> 
        <button type='submit'>Submit</button>

    </form>
  )
}

export default Form;