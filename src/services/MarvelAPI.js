import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = 'ed902c8012bedc62c50bd24e1f8129de';

export default {
    getAllComics: (limit, callback) => {
        const urlComics = urlBaseMarvel + 'comics?apikey=' + apiKey + '&limit=' + limit;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics);
            }
        })
    }
}