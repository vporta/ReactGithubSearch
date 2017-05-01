import React from 'react';

class AddNote extends React.Component {
  setRef(ref) {
    this.note = ref;
  }
  handleSubmit() {
    let newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote);
  }
  render() {
    return ( 
      <div className="input-group"> 
        <input type="text" className="form-control" placeholder="Add New Note" ref={(ref) => this.setRef(ref)}/>
        <span className="input-group-btn"> 
          <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}> Submit </button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string,
  addNote: React.PropTypes.func
}
export default AddNote;