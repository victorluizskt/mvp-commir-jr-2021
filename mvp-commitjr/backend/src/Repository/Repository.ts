import api from '../config/axios';
import api_key from '../config/env';

// Method responsible for searching for a movie by id.
async function getPersonId(id:number){
    try {
        const response = await api.get(`/3/person/${id}?api_key=${api_key}&language=en-US`);
        if(response.status >= 200 && response.status < 300){
            const getPerson = response.data;
            return {
                status: true,
                data:getPerson
            };
        };
        return {
            status:false,
            data:"Failed to make the request."
        };
        } catch(err){
            throw(err);
        };
};

// Method responsible for listing the available genres.
async function getGenresList(){
    try {
        const response = await api.get(`/3/genre/movie/list?api_key=${api_key}&language=en-US`);
        if(response.status >= 200 && response.status < 300){
            const movieList = response.data;
            return {
                status:true,
                data:movieList
            };
        };
        return {
            status:false,
            data: "Failed to make the request."
        };
    } catch (err){
        throw (err);
    };
};

// Method responsible for returning the film according to genre.
async function getMovieGenre(genre:string){
    try {
        const response = await api.get(`/3/discover/movie?api_key=${api_key}&language=en-US&year=2021&with_genres=${genre}`);
        if(response.status >= 200 && response.status < 300){
            const genreList = response.data;
            
            return {
                status: true,
                data:genreList
            };
        };
        return {
            status: false,
            data: "Failed to make the request."
        };
    } catch (err) {
        throw (err);
    };
};

async function getMovieDetails(id:number){
    const response = await api.get(`/3/movie/${id}?api_key=${api_key}&language=en-US`);
    try {
        if(response.status >= 200 && response.status < 300){
            const detailsMovie = response.data;
            
            return {
                status: true,
                data: detailsMovie
            };
        };
        return {
            status: false,
            data: "Failed to make the request."
        };
    } catch (err) {
        throw (err);
    };
}

async function getKey(id:number){
    try {
        const response = await api.get(`/3/movie/${id}/videos?api_key=${api_key}&language=en-US`);
        if(response.status >= 200 && response.status < 300){
            const genreList = response.data;
            
            return {
                status: true,
                data:genreList
            };
        };
        return {
            status: false,
            data: "Failed to make the request."
        };

    } catch (err) {
        throw (err);
    };
};

// Export to the Domain package, class MovieService, where the data will be processed.
export {getPersonId, getGenresList, getMovieGenre, getMovieDetails, getKey};