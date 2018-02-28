import { http } from './http';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
    http.get('http://31.220.62.12/microposts/api/db.json')
        .then(data => console.log(data))
        .catch(err => console.log(err));
}