import { RestAPI, Account } from '../utils'
import axios from 'axios'

export const API = new RestAPI({
    // Type the Back-End API Server address.
    address: 'https://localhost',

    // Enable this option if you use an
    // authentication token for API connection.
    isUseAuth: true,

    // Enter the token (string) if
    // want to use when the API connection.
    getToken: Account.getToken,

    // Specifies the function that will run
    // if an error occurs during communication.
    faultTolerance: e => console.log(e),
})

// For IE8 Compatible
axios.defaults.headers.get['Pragma'] = 'no-cache'
axios.defaults.headers.get['Cache-Control'] = 'no-cache, no-store'
