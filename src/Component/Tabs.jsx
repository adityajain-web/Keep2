import React from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LabelIcon from '@material-ui/icons/Label';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import './Tabs.css'

const Tabs = () => {
    return (<>
        <div>
            <ul className="d-flex justify-content-around align-items-center">
                <li className="active"><Tooltip title="Note">
                    <EmojiObjectsIcon />
                </Tooltip></li>
                <li><Tooltip title="Reminder">
                    <NotificationsIcon />
                </Tooltip></li>
                <li><Tooltip title="Inspiration">
                    <LabelIcon />
                </Tooltip></li>
                <li><Tooltip title="Personal">
                    <LabelIcon />
                </Tooltip></li>
                <li><Tooltip title="Work">
                    <LabelIcon />
                </Tooltip></li>
                <li><Tooltip title="Edit Label">
                    <EditIcon />
                </Tooltip></li>
                <li><Tooltip title="Archive">
                    <ArchiveIcon />
                </Tooltip></li>
                <li><Tooltip title="Bin">
                    <DeleteIcon />
                </Tooltip></li>
            </ul>
        </div>
    </>)
}

export default Tabs;