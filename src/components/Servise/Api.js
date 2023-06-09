export default async function getImages(query, page = 1) {
    const url = 'https://pixabay.com/api/';
    const API_KEY = '31248055-e075bd58b7f60ee40b8d7aef1';

    return await fetch(`${url}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(
                new Error(`No result`),
            ) 
        });
}