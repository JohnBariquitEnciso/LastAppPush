
const url = "https://api.github.com/orgs/vuejs/repos";

const fetchUsers = () => {
    return fetch(url, {
        method: "GET",
    })
    .then((response) => response.json())
    .catch((error) => {
        throw error;
    });
}

export default fetchUsers;