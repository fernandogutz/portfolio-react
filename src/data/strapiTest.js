export const peticion = () => {

    fetch('http://localhost:1337/api/posts?populate=*', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(({data}) => console.log(data));
}

