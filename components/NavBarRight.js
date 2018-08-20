import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import Https from "@material-ui/icons/Https";
import Translate from "@material-ui/icons/Translate";
import Notifications from "@material-ui/icons/Notifications";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Face from '@material-ui/icons/Face';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from "prop-types";

const styles = theme => ({
    loginButon: {
        color: '#fff',
    },
});

class NavBarRight extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null, NavBarRight
        }
    }

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {token, classes} = this.props
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        if (!token) {
            return (
                <React.Fragment>
                    <div>
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <Translate/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Việt Name</MenuItem>
                            <MenuItem onClick={this.handleClose}>English</MenuItem>
                        </Menu>
                    </div>
                    <div>
                        <a href="http://localhost:8000/login" className={classes.loginButon}>
                            <IconButton
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <Https/>
                            </IconButton>
                        </a>
                    </div>
                </React.Fragment>
            )
        }

        return (
            <div>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                >
                    <Notifications/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                >
                    <Face/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
            </div>
        )
    }
}

NavBarRight.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NavBarRight)