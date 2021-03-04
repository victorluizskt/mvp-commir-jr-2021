import api from './baseAPI';

// Class responsible for fetching all my genres from the backend
async function getMovie() {

    try {
        const response = await api.get('/movielist');

            if(response.status === 200){
                const data = response.data;
                return ({
                    movies: data,
                    status: true,
                });
            };

            return ({
                movies: response.data,
                status: false
            });

    } catch(err){
        throw err;
    }
}

export default getMovie;