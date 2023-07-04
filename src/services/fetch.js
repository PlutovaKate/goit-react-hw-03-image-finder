const API_KEY = '35881420-2d2d98e14b45a58eae8e32dce';
const URL = 'https://pixabay.com/api/';

export function getImages(nextSearchWord, page) {
  return fetch(
    `${URL}?q=${nextSearchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}
