import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

const Notes = ({username, notes, addNote}) => {
  return ( 
    <div> 
      <h3> {username}</h3>
      <AddNote username={username} addNote={addNote} />
      <NotesList notes={notes} />
    </div>
  )
}

Notes.propTypes = {
  username: React.PropTypes.string,
  notes: React.PropTypes.array,
  addNote: React.PropTypes.func
}
export default Notes;