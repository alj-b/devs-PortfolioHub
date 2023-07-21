import axios from "axios";

// a file to bundle and export the various developer APIs (find all, filter, find one by ID, find active user)

// const BASE_URL = "http://localhost:8000/"
const BASE_URL = "http://35.204.79.162/"

export async function getAllDevelopers () {
    try {        
        let foundDevelopers = await axios.get(BASE_URL + "api/user/users/", { withCredentials: true });
        console.log(foundDevelopers)
        return foundDevelopers;
    } catch (error) {
        console.log(error);
    }
};

// the filters parameter is simply a placeholder for now for the actual filters we want to use depending on the backend API provided

export async function getFilteredDevelopers (name, tags) {
    try {        
        let foundDevelopers = await axios.get(BASE_URL + "api/user/users/", {params: {name: name, tags: tags}}, { withCredentials: true });
        return foundDevelopers;
    } catch (error) {
        console.log(error);
    }
};

// the actual implementation depends on the backend API - i.e. id in params or in url? /api/user/users/{id}/

export async function getDeveloperById (id) {
    try {        
        let foundDeveloper = await axios.get(BASE_URL + "api/user/users/" + id, { withCredentials: true });
        return foundDeveloper;
    } catch (error) {
        console.log(error);
    }
};