import React from 'react'
import { Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Wrapper, PostCard2} from './../../components/dashboard'
import Button from '@material-ui/core/Button'
import { blue } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CardMedia from '@material-ui/core/CardMedia'



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
    },
    postInput: {
        border: 0,
        width: "95%",
        [theme.breakpoints.up("sm")]: {
          padding: theme.spacing(1) * 3
        },
        [theme.breakpoints.down("xs")]: {
          padding: theme.spacing(1) * 2
        },
        fontSize: "15px",
        outline: 0,
        backgroundColor: theme.palette.background.paper
      }
  }));


export const DH = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    console.log(value)
    const handleChange = (event) => {
    setValue(event.target.value)
    }
    return (
        <Grid>
            <Grid  item xs={12}>
                <Wrapper>
                   <Paper>
                        <CardMedia
                            image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                            title="Nombre de la Institucion"
                            className={classes.media}
                            style={{ paddingTop: 270 }}
                            />
                            <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="flex-start">
                            <Button>
                                Cambiar imagen
                            </Button>
                            </Grid>
                            <Grid>
                            <Wrapper>
                            <Typography variant="h4" gutterBottom>
                                Nombre de la Institucion
                            </Typography>
                            </Wrapper>
                        </Grid>
                    </Paper> 
                </Wrapper>
            </Grid>
            <Grid>
                <Wrapper>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={3}>
                                <Paper className={classes.paper}>
                                    <Grid container spacing={3}>
                                        <Grid item  xs={6} sm={12}> 
                                            Proxima Clase: 
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Matematicas - Ahora
                                            </Typography>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Lengua - Mañana
                                            </Typography>
                                        </Grid>
                                        <Grid item  xs={6} sm={12}> 
                                            Tareas Pendiente:
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Matematicas - Comer pizza
                                            </Typography>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                Fisica Termonuclear Cuántica - Crear un Mini Sol
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <Wrapper>
                                <Card className="mb-xs">
                                    <form>
                                        <Wrapper>
                                            <textarea
                                                placeholder="Escribe Un Post"
                                                rows="6"
                                                className={classes.postInput}
                                            />
                                        </Wrapper>
                                    </form>
                                    <Divider />
                                    <CardActions>
                                        <IconButton className="ma-0" aria-label="Insertar Imagen- Foto">
                                            <InsertPhotoIcon />
                                        </IconButton>
                                        <IconButton className="ma-0" aria-label="Insertar Enlace">
                                            <InsertLinkIcon />
                                        </IconButton>
                                        <IconButton className="ma-0" aria-label="Insertar Enlace">
                                            <LocationOnIcon />
                                        </IconButton>
                                        <span className="flexSpacer" />
                                        <Button variant="contained" color="primary">
                                            Publicar
                                        </Button>
                                    </CardActions>
                                </Card>
                                </Wrapper>
                                <Wrapper>
                                <PostCard2 spacing={12}
                                    title="Rolon Lautaro"
                                    subtitle="08-12-2020"
                                    text="EL Instituto le da la Bienvenida a la nueva Vida del Estudiante Terciario"
                                    avatar={
                                        <Avatar aria-label="Post" style={{ backgroundColor: blue[500] }}>
                                            RL
                                        </Avatar>
                                    }
                                    Comment={
                                        <Wrapper >
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
                                        </Wrapper>
                                    }
                                    buttons={
                                        <Wrapper variant="outlined">
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
                                        </Wrapper>
                                    }
                                />
                                </Wrapper>
                            </Grid>
                        </Grid>
                    </div>
                </Wrapper>
            </Grid>
        </Grid>
    )}
    /*<div className={classes.root}>
        <Wrapper>
            <Grid container spacing={4}>
                <Wrapper>
                    
                    <Grid item xs={12} sm={12} md={3} >
                    <Paper className={classes.paper}>
                        <Grid>
                            <Box component="span" border={3}>
                                <Typography variant="button" display="block" gutterBottom>Proxima Clase</Typography>
                                Matematicas- Ahora
                                Lengua- Mañana
                            </Box>
                        </Grid>
                    </Paper>
                    </Grid>

                </Wrapper>
            <Grid item xs={12} md={9}>

            
            </Grid>
            </Grid>
            </Wrapper>
        </div>
    )
}*/