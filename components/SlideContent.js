import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
    }
});

function FolderList(props) {
    const { classes,title } = props;
    return (
        <Paper className={classes.root}>
            <List
                component="nav"
                subheader={<ListSubheader component="div"><h2>{title}</h2></ListSubheader>}
            >
                <ListItem>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
            </List>
        </Paper>
    );
}

FolderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);


