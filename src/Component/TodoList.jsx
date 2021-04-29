import React, { useState } from 'react';
import Tabs from './Tabs';
import AddIcon from '@material-ui/icons/Add';
import ListItem from './ListItem';
import './TodoList.css';

const TodoList = () => {
    const [userInput, setUserInput] = useState("");
    const [listItem, setListItem] = useState([])
    const [Line, setLine] = useState(false);

    const addEvent = () => {
        if (userInput !== "") {
            setListItem(prevVal => {
                return [...prevVal, userInput];
            })
            setUserInput("")
        } else {
            alert("You must have to write something...")
        }
    }

    const deleteItem = (id) => {
        setListItem(oldArray => {
            return oldArray.filter((ele, index) => {
                return index !== id;
            })
        })
    }

    const eraseListItem = () => {
        setLine(true)
    }

    const newArr = listItem.map((item, index) => {
        return (<ListItem key={index} id={index} text={item} selected={deleteItem} erase={eraseListItem} line={Line} />)

    })

    const input = (e) => {
        setUserInput(e.target.value);
    }

    return (<>
        <div className="card">
            <div className="card-header">
                <div className="d-md-none d-block" id="tab">
                    <Tabs />
                </div>
                <div className="form-group">
                    <input type="text" autoComplete="off" placeholder="Take a note..." className="form-control" value={userInput} onChange={input} />
                    <button onClick={addEvent}>{<AddIcon />}</button>
                </div>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {newArr}
                </ul>
            </div>
        </div>
    </>)
}

export default TodoList;