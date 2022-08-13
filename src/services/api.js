import axios from 'axios';

const SERVER_BASE_URL = 'http://localhost:5000/api/v1'

const makeRequest = (apiEndPoint, method, data, customHeaders) => {
    const authToken = localStorage.getItem("token") ?? '';
    let apiResponse;
    try {
        switch (method) {
            case 'GET':
                apiResponse = await axios.get(`${SERVER_BASE_URL}/${apiEndPoint}`, {
                    headers: {
                        "Authorization": authToken,
                        ...customHeaders
                    }
                });
            case 'POST':
                apiResponse = await axios.post(`${SERVER_BASE_URL}/${apiEndPoint}`, {
                    headers: {
                        "Authorization": authToken,
                        ...customHeaders
                    },
                    data
                });
            case 'PUT':

                apiResponse = await axios.put(`${SERVER_BASE_URL}/${apiEndPoint}`, {
                    headers: {
                        "Authorization": authToken,
                        ...customHeaders
                    },
                    data
                });
        }

    } catch (error) {
        console.log("API ERROR: ", error);
        return error;
    }
    console.log("API RESPONSE: ", apiResponse);
    return apiResponse;
}