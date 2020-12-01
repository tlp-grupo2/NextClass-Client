import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStylesFacebook = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    bottom: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    top: {
        color: '#1a90ff',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
    circle: {
        strokeLinecap: 'round',
    },
}));
  
function FacebookCircularProgress(props){
    const classes = useStylesFacebook();
  
    return (
        <div className={classes.root}>
            <CircularProgress
                variant="determinate"
                className={classes.bottom}
                size={40}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.top}
                classes={{
                    circle: classes.circle,
                }}
                size={40}
                thickness={4}
                {...props}
            />
        </div>
    );
}
  
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
    },
});
  
export default function Loader1(){
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
            <FacebookCircularProgress />
        </div>
    );
}