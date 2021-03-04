import {getPersonId} from '../Repository/Repository';

interface Person {
    name: string;
    age: string;
    birthday: string;
    biography: string;
    profile_path: string;
}

// Class responsible for taking the movie that came from the repository, and treating the data
// -> Show only the information useful to the user.
class PersonService {
    async getPersonId(id:number) {
        const respositoryResponse = await getPersonId(id);
        if(respositoryResponse.status){
            return show({
                name:  respositoryResponse.data['name'],
                age: respositoryResponse.data['age'],
                birthday: respositoryResponse.data['birthday'],
                biography: respositoryResponse.data['biography'],
                profile_path: respositoryResponse.data['profile_path']
            });
        };

        return {message: 'Failed to make the request.'};
    };
};

function show({name, age, birthday, biography, profile_path}: Person) {
    const dadosProfile = 
    {name: name, 
    age: age,
    birthday: birthday,
    biography: biography,
    profile_path: profile_path};

    return dadosProfile;
}

export default PersonService;