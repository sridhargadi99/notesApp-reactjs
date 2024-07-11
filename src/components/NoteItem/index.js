// Write your code here
import {NotesEachList, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails
  return (
    <NotesEachList>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </NotesEachList>
  )
}

export default NoteItem
