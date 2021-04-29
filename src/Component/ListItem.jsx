import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

const ListItem = (props) => {
    return <li style={{ textDecoration: props.line ? 'line-through' : 'none' }} className="list-group-item" ><div>{props.text}</div><div><button className="CheckBtn" onClick={props.erase}><CheckIcon /></button><button className="deleteBtn" onClick={() => {
        props.selected(props.id);
    }}><DeleteIcon /></button></div></li>
}

export default ListItem;