import {MdDeleteForever} from "react-icons/md";
const Note=()=>{
    return <div className="note">
        <span>Hello! </span>
        <div className="note-footer">
            <small>01/12/2024</small>
            <MdDeleteForever classNmae="delete-icon" size="1.3em"/>
        </div>
    </div>
};

export default Note;