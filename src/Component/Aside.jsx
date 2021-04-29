import React from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LabelIcon from '@material-ui/icons/Label';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import './Aside.css';



const Aside = () => {
    return (<>
        <div className="card">
            <div className="card-body">
                <ul>
                    <li className="active"><EmojiObjectsIcon /><span className="list-text">Note</span></li>
                    <li><NotificationsIcon /><span className="list-text">Reminder</span></li>
                    <li><LabelIcon /><span className="list-text">Inspiration</span></li>
                    <li><LabelIcon /><span className="list-text">Personal</span></li>
                    <li><LabelIcon /><span className="list-text">Work</span></li>
                    <li><EditIcon /><span className="list-text">Edit Label</span></li>
                    <li><ArchiveIcon /><span className="list-text">Archive</span></li>
                    <li><DeleteIcon /><span className="list-text">Bin</span></li>
                </ul>
            </div>
        </div>
    </>)
}

export default Aside;