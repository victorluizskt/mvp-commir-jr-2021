import {Request, Response} from 'express';
import PersonService from '../Domain/PersonService';
import GenrerService from '../Domain/GenrerService';
import GenreMovieService from '../Domain/GenrerFilmService';


class PersonController {
     async getPerson (req:Request, res:Response) {
        try {
            const data = new PersonService();
            const id = req.params.id;
            const person = await data.getPersonId(parseInt(id));
            if(Number.isInteger(parseInt(id)) && person != null){
                return res.send(person);
            };
            
            return res.send({param: 'Param invalid.'})
        } catch(err) {
            throw(err);
        }
    };
};

class GenrerListController {
    async getMovieList (req:Request, res:Response) {
        try {
            const data = new GenrerService();
            const movieList = await data.getMovieList();
            if(movieList != null) {
                return res.send(movieList);
            }

            return res.send({err: 'Err.'});
     } catch (err) {
         throw err;
     }
    };
};

class GenreMovieController {
    async getGenreList (req: Request, res:Response) {
        try {
            const data = new GenreMovieService();
            const genre = req.params.genrer;
            const genreMovie = await data.getGenreList(genre);
            if(Number.isInteger(parseInt(genre)) && genreMovie != null){
                return res.send(genreMovie)
            };

            return res.send({param: 'Param invalid.'});
        } catch(err) {
            throw err;
        }
    };
};

export {PersonController, GenrerListController, GenreMovieController};

/**
 * Class where all data arrives, in a previously treated manner, being sent to the front-end, 
 * where we will display the content produced here for the end user, each class represents a 
 * different type of function for the site to perform.
 */