const getApi = () => {
return fetch(
    "https://hp-api.onrender.com/api/characters"
)
    .then((response)=> response.json())
    .then((response) => {
        return response;
    });
};

export default getApi;