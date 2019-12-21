import { RestAPI, getToken } from '../../utils'

export const BackEndAPI = new RestAPI({
    // Type the Back-End API Server address.
    address: 'http://localhost',

    // Enable this option if you use an
    // authentication token for API connection.
    isUseAuth: true,

    // Enter the token (string) if
    // want to use when the API connection.
    getToken,

    // Specifies the function that will run
    // if an error occurs during communication.
    faultTolerance: e => console.log(e),
})
