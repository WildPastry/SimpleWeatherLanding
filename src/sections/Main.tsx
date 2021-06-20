import logo from '.././logo.svg';
import {Col, Row} from 'react-bootstrap';
import NewNoteInput from "./NewNoteInput";
import { useAppDispatch } from '../redux/hooks';
import { useSelector } from "react-redux";
import { NotesState } from "../redux/reducers/notesReducer";
import { addNote } from "../redux/actions/loadAction";
const Main = () => {

  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  
  const dispatch = useAppDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <Row>
      <Col xs={12}><p>MAIN</p></Col>
      <Col xs={12}><img src={logo} className='appLogo' alt='SimpleWeather' /></Col>
      <Col xs={6}>
      <NewNoteInput addNote={onAddNote} />
        </Col>
         <Col xs={6}>
        <ul>
                  {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
        </ul>
        </Col>
    </Row>
  );
};

Main.displayName = 'Main';

export default Main;
