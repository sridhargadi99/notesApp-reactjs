// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesMainContainer,
  NotesMainHeading,
  NotesInputContainer,
  Input,
  TextArea,
  AddButton,
  EmptyContainer,
  EmptyImage,
  EmptyHeading,
  EmptyDescription,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNote = event => setNote(event.target.value)
  const onSubmitForm = event => {
    event.preventDefault()
    const newNoteList = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesList(prevState => [...prevState, newNoteList])
    setTitle('')
    setNote('')
  }

  return (
    <NotesMainContainer>
      <NotesMainHeading>Notes</NotesMainHeading>
      <NotesInputContainer onSubmit={onSubmitForm}>
        <Input
          placeholder="Title"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <TextArea
          type="text"
          rows={3}
          placeholder="Take a Note..."
          value={note}
          onChange={onChangeNote}
        />
        <AddButton type="submit">Add</AddButton>
      </NotesInputContainer>
      {notesList.length < 1 ? (
        <EmptyContainer>
          <EmptyImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <EmptyDescription>Notes you add will appear here</EmptyDescription>
        </EmptyContainer>
      ) : (
        <NotesList>
          {notesList.map(eachNote => (
            <NoteItem noteDetails={eachNote} key={eachNote.id} />
          ))}
        </NotesList>
      )}
    </NotesMainContainer>
  )
}

export default Notes
