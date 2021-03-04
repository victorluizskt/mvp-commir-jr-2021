import './style.css'
import MovieList from '../../models/MovieList/index'
import React, {useState, useEffect, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import getMovie from '../../APIs/getMovie';
import getGenre from '../../APIs/getGenre';

// ui material configuration
const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

function Lancamentos() {
    const classes = useStyles();

    // We use generos and setgeneros to set all these values ​​on my screen below.

    const [generos, setGeneros] = useState([]);
    const [genero, setGenero] = useState(28);

    const[movies, setMovies] = useState([]);

    // Function responsible for taking the entire array of movie genres and setting them on the page click.
    async function getGeneros() {
        const genresList = await getMovie();
        const genres = genresList.status ? genresList.movies : ([]);
        setGeneros(genres);
    };

    async function getMovies(){
        const movieList = await getGenre(genero);

        const moviesResp = movieList.status ? movieList.data : ([]);

        moviesResp.splice(5, moviesResp.length);

        setMovies(moviesResp);
    };

    // Used so that when the page loads, it already loads all genres on my page.
    useEffect(() => {
        getGeneros();
    }, []);

    useEffect(() => {
      getMovies();
    }, [genero]);

    // Material ui configuration 
    const [open, setOpen] = useState(false);
  
    // Material ui configuration 
    const handleSetGenero = (event) => {
      setGenero(event.target.value);
    };
  
    // Material ui configuration 
    const handleClose = () => {
      setOpen(false);
    };

    // Material ui configuration 
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (

        <section className="secao-destaques">
            <h1 className="title">Highlights</h1>

        <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Genres</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={genero}
                    onChange={handleSetGenero}
                    >

                    {generos.map((genero) => (
                        <MenuItem value={genero.id}>
                            {genero.name}
                        </MenuItem>
                    ))}

                </Select>
            </FormControl>

            <div className="cards">
                <MovieList movies={movies}/>
            </div>
            <div className="button-load">
                <Button variant="contained" color="default">Load More</Button>
            </div>
        </section>
    )
}

export default Lancamentos;