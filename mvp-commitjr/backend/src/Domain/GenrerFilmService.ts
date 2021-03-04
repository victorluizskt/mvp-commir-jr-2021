import {getMovieGenre} from '../Repository/Repository';

class GenreMovieService {
    async getGenreList(genre:string) {
        const respositoryResponse = await getMovieGenre(genre);

        if(respositoryResponse.status){
            return show(respositoryResponse);
        };

        return {message: 'Failed to make the request.'};
    };
};

function show(response:any) {
    let listGender:object[] = [];

    for(let i = 0; i < response.data['results'].length; i++){
        listGender.push({title: ` ${response.data['results'][i].title}`, 
        overview: `${response.data['results'][i].overview}`,
        popularity: `${response.data['results'][i].popularity}`,
        votes: `${response.data['results'][i].vote_count}`,
        poster_path: `${response.data['results'][i].poster_path}`,
        backdrop_path: `${response.data['results'][i].backdrop_path}`,
        original_title: `${response.data['results'][i].original_title}`,
        genre_ids: `${response.data['results'][i].genre_ids}`,
        release_date: `${response.data['results'][i].release_date}`,
        adult: `${response.data['results'][i].adult}`});
    };

    return listGender;

}

export default GenreMovieService;