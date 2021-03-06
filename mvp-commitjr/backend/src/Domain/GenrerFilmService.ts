import {getMovieGenre, getMovieDetails, getKey} from '../Repository/Repository';

class GenreMovieService {
    async getGenreList(genre:string) {
        const respositoryResponse = await getMovieGenre(genre);

        if(respositoryResponse.status){
            return show(respositoryResponse);
        };

        return {message: 'Failed to make the request.'};
    };
};

async function show(response:any) {
    let listGender:object[] = [];

    for(let i = 0; i < response.data['results'].length; i++){
        let valor = await getDetails(parseInt(response.data['results'][i].id));

        let namesGenres = valor['genres'].map(function (item:any, indice:string) {
            return item.name;
        })
        
        let key = await getVideo(parseInt(response.data['results'][i].id));
        let keyYoutube = key['results'].map(function (item:any, indice:string) {
            return item.key;
        });
        
        listGender.push({title: ` ${response.data['results'][i].title}`, 
        overview: `${response.data['results'][i].overview}`,
        popularity: `${response.data['results'][i].popularity}`,
        votes: `${response.data['results'][i].vote_count}`,
        keyVideo: `${keyYoutube}`,
        poster_path: `${response.data['results'][i].poster_path}`,
        backdrop_path: `${response.data['results'][i].backdrop_path}`,
        original_title: `${response.data['results'][i].original_title}`,
        genre_ids: `${namesGenres.toString()}`,
        genre_tot: `${response.data['results'][i].genre_ids}`,
        release_date: `${response.data['results'][i].release_date}`,
        adult: `${response.data['results'][i].adult}`,
        vote_average: `${response.data['results'][i].vote_average}`,
        runtime: `${valor['runtime']}`});
    };
    

    return listGender;

}

async function getDetails(id:number){
    const respositoryResponse = await getMovieDetails(id);

    return respositoryResponse.data;
}

async function getVideo(id:number){
    const respositoryResponse = await getKey(id);
    return respositoryResponse.data;
}

export default GenreMovieService;