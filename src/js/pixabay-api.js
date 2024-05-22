export function searchPhoto(word) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const API_KEY = '44013925-160a3698223f11c3c7b6b04f2';
  const params = new URLSearchParams({
    key: API_KEY,
    q: word,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url)
    .then(res => res.json())
    .catch(error => console.error('Error fetching posts:', error));
}
