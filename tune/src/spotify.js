import axios from 'axios'

const authEndPoint = "https://accounts.spotify.com/authorize?"
const clientId = "3b6f5190c4d240628247ebaf818038cf"
const redirectUri = "https://tune-eight.vercel.app/";
const scopes = ["user-library-read", "playlist-read-private"]


export const loginEndPoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`


const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1/'
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config) {
        config.headers.Authorization =  `Bearer ${token}`;
        return config;
    });
};

export default apiClient;
