import { Router } from 'express';
const router = Router();
import { PersonController, GenreListController, GenreMovieController } from '../API/api';

const personService = new PersonController();
const movieList = new GenreListController();
const genreMovie = new GenreMovieController();

// First param -> Route, second param -> Function to be performed.
router.get('/movielist', movieList.getMovieList);

router.get('/getperson/:id', personService.getPerson);

router.get('/getgenrer/:genrer', genreMovie.getGenreList);

export default router;

/**
 * Class responsible for creating all routes, and the functions that each one will perform
 * all routes are created here, and the second parameter is what function that route will have.
 * So, this function comes from api.ts which in turn calls where the data processing is done,
 * and this data comes from the Repository, where the raw data comes in thickly.
 */
