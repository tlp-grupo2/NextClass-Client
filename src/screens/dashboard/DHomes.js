import React from 'react'
import { Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Wrapper, PostCard2, Comment} from './../../components/dashboard'
import Button from '@material-ui/core/Button'
import { blue } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      '& .MuiTextField-root': {
        margin: theme.spacing(1)
      },
    },
    paper: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
    },
    textField: {
        width: '25ch',
      }
  }));


export const DH = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
    setValue(event.target.value)
    }
    return (
    <Wrapper>
        <Grid  item xs={12}>
            <Paper className={classes.paper}>
                <Grid  item xs={12}>
                    <PostCard2 spacing={3}
                        title="Instituto Politecnico Formosa- IPF"
                        subtitle="asadsad"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={250}
                    />
                </Grid>
                <div className={classes.root}>
                  <Grid container spacing={3}>
                    <Grid item xs>
                    <Paper className={classes.paper}>
                    <Typography variant="button" display="block" gutterBottom>Proxima Clase</Typography>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs>
                            Matematicas- Ahora
                        </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs>
                            Lengua- Mañana
                        </Grid>
                    </Grid>
                    </Paper>
                    </Grid>
                    <Grid item xs={8}>
                    <PostCard2 spacing={3}
                        title="Bienvenidos al IPF"
                        subtitle="Rolon Lautaro"
                        text="EL Instituto le da la Bienvenida a la nueva Vida del Estudiante Terciario"
                        avatar={
                            <Avatar aria-label="Post" style={{ backgroundColor: blue[500] }}>
                                RL
                            </Avatar>
                        }
                        Comment={
                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                     <Avatar>R</Avatar>
                                 </Grid>
                                  <Grid item xs>
                                <Typography variant="button" display="block" gutterBottom>Roberto Silva</Typography>
                                <Typography variant="body2" gutterBottom>
                                    La puta vieja de que te re mil pario ahrre
                                </Typography>
                                </Grid>
                                </Grid>
                            </Paper>
                        }
                        buttons={
                            <Paper className={classes.paper}>
                                <form className={classes.root} noValidate autoComplete="off">
                                <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                     <Avatar>R</Avatar>
                                </Grid>
                                <Grid item xs>
                                <TextField
                                    fullWidth
                                    id="outlined-multiline-flexible"
                                    label="Escribe un comentario..."
                                    multiline
                                    rowsMax={4}
                                    onChange={handleChange}
                                    variant="outlined"
                                />
                                </Grid>
                                <Button to="">Comentar</Button>
                                </Grid>
                                </form>
                            </Paper>
                        }
                    />
                    </Grid>
                    <Grid item xs>
                    <Paper className={classes.paper}>
                    <Typography variant="button" display="block" gutterBottom>Profesores</Typography>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>SR</Avatar>
                        </Grid>
                        <Grid item xs>
                            Silva Roberto
                        </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>RL</Avatar>
                        </Grid>
                        <Grid item xs>
                            Rolon Lautaro
                        </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>DF</Avatar>
                        </Grid>
                        <Grid item xs>
                            Ditter Federico
                        </Grid>
                    </Grid>
                    </Paper>
                    </Grid>
                  </Grid>
                </div>
            </Paper>
        </Grid>
    </Wrapper>
    )
}