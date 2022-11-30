import axios from "axios";

async function getContact() {
    try {
        const response = await axios({
            url: process.env.REACT_APP_URL + "?results=3",
            method: "GET",
        });
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
}

export default getContact;