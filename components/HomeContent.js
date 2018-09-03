import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostContent from './PostContent'
import SlideContent from './SlideContent'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
    },
});

function HomeContent(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={8}>
                <Grid item sm={8} xs={12}>
                    <PostContent

                    />
                </Grid>
                <Grid item sm={4} xs={12}>
                    {/*<SlideContent*/}
                        {/*title={'Search in here'}*/}
                    {/*/>*/}
                    <SlideContent
                        title={'Category'}
                    />
                    {/*<SlideContent*/}
                        {/*title={'Lastest Post'}*/}
                    {/*/>*/}
                    {/*<SlideContent*/}
                        {/*title={'Most View Post'}*/}
                    {/*/>*/}
                    <SlideContent
                        title={'Popular Tag'}
                    />
                </Grid>
            </Grid>

        </div>
    );
}

HomeContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeContent);