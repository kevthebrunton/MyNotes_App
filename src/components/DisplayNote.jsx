import React from 'react'

const DisplayNote = (props) => {

    // Handle the click event to delete a note
    const handleClick = (id) => {
        props.getId(id)

    }
    
    // Handle the click event to update a note
    const handleUpdate = (note) => {
      props.getUpdateNoteId(note)
    }
  return (
    <div className='note' key={props.id}>
        <p className='title'>{props.title}</p>
        <p className='content'>{props.content}</p>
        <button onClick={() =>handleClick(props.id)}>Delete</button>
        <button style={{"marginLeft":"10px"}} onClick={() =>handleUpdate({content:props.content, title:props.title, id: props.id})}>Update</button>

      </div>
  )
}

export default DisplayNote