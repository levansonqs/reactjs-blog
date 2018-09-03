// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PlaylistPlay from '@material-ui/icons/PlaylistPlay';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import SettingsPower from '@material-ui/icons/SettingsPower';
import ReportIcon from '@material-ui/icons/Report';

export const mailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Newest" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Series" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Trending" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PlaylistPlay />
            </ListItemIcon>
            <ListItemText primary="Video" />
        </ListItem>
    </div>
);

export const otherMailFolderListItems = (
    <div>
        {/*<ListItem button>*/}
            {/*<ListItemIcon>*/}
                {/*<MailIcon />*/}
            {/*</ListItemIcon>*/}
            {/*<ListItemText primary="All mail" />*/}
        {/*</ListItem>*/}
        <ListItem button>
            <ListItemIcon>
                <SettingsPower />
            </ListItemIcon>
            <ListItemText primary="Setting" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Spam" />
        </ListItem>
    </div>
);