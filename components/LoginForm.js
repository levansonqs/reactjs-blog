import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import SocialForm from "./SocialForm";
import Validator from "validator";
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'
import {api_url} from '../constants/config'
const styles = theme => ({
    layout: {
        width: 'auto',
    },

    avatar: {
        margin: 'auto',
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        display:'flex',
        margin:'auto'
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            error:{},
            loading:false
        }
    }

    handleChange = (e) =>
        this.setState({[e.target.name]:e.target.value})

    validate = (data) => {
        const error = {}
        if (!Validator.isEmail(data.email)) error.email = "Invalid email";
        if (!data.password) error.password = "Can't be blank";
        return error
    }

    onSubmit = (e) => {
        e.preventDefault()
        const error = this.validate(this.state)
        if(Object.keys(error).length === 0){
            this.setState({ loading: true });
            axios.post(`${api_url}auth/login`,this.state).then((respon)=>{
                console.log(respon);
                })
        }else {
            this.setState({ error });
        }
    }

    render(){
        const {classes} = this.props;
        const {email, password, error,loading} = this.state
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Avatar className={classes.avatar}>
                        <LockIcon/>
                    </Avatar>
                    <Typography variant="headline">Sign in</Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth error={error.email} aria-describedby="name-error-text">
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                autoComplete="off"
                                value={email}
                                onChange={this.handleChange}
                                autoFocus
                            />
                            <FormHelperText id="name-error-text">{error.email}</FormHelperText>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth error={error.password} aria-describedby="name-error-text">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={this.handleChange}
                                autoComplete="current-password"
                            />
                            <FormHelperText id="name-error-text">{error.password}</FormHelperText>
                        </FormControl>
                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                        <Button
                            type="submit"

                            variant="raised"
                            color="primary"
                            className={classes.submit}
                            onClick={this.onSubmit}
                        >
                            Sign in
                            <CloudUploadIcon className={classes.rightIcon} />
                        </Button>
                    </form>
                    {/*OR*/}
                    {/*<SocialForm />*/}
                </main>
            </React.Fragment>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);