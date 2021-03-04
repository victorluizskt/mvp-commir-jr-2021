import {getGenresList} from '../Repository/Repository';

// Class responsible for taking all genres of films available on the platform.
class GenrerService {
    async getMovieList(){
        const respositoryResponse = await getGenresList();
        if(respositoryResponse.status){
            return show(respositoryResponse);
        };

        return {message: 'Failed to make the request.'};
    };

};

function show (response: any){
    let movieList: object[] = [];
    for(let i = 0; i < response.data['genres'].length; i++){
        movieList.push({id: response.data['genres'][i].id,
            name: response.data['genres'][i].name});
    };
    return movieList
}

export default GenrerService;