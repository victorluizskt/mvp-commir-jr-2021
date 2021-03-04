import api from './baseAPI';

// Class responsible for searching for some films from my back end, using the baseAPI.
async function getGenre(props) {
    try {
        const response = await api.get(`/getgenrer/${props}`);
            if(response.status === 200){
                const movies = response.data;
                return ({
                    data: movies,
                    status: true,
                });
            };

            return ({
                data: response.data,
                status: false
            });

    } catch(err){
        throw err;
    }
}

export default getGenre;