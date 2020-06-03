import axios from "axios"

// Creating an axios instance for connecting to firebase
const instance = axios.create({
    baseURL: "https://react-my-burger-8bf73.firebaseio.com/"
});

export default instance;