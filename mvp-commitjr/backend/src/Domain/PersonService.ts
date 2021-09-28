import { getPersonId } from '../Repository/Repository';

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
        const repositoryResponse = await getPersonId(id);
        if(repositoryResponse.status){
            return show({
                name:  repositoryResponse.data['name'],
                age: repositoryResponse.data['age'],
                birthday: repositoryResponse.data['birthday'],
                biography: repositoryResponse.data['biography'],
                profile_path: repositoryResponse.data['profile_path'],
            });
        };
        return {message: 'Failed to make the request.'};
    };
};

function show({name, age, birthday, biography, profile_path}: Person) {
    const dadosProfile = {
        name: name, 
        age: age,
        birthday: birthday,
        biography: biography,
        profile_path: profile_path,
    };
    return dadosProfile;
}

export default PersonService;