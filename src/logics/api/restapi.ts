import {
    RestAPI,
    getToken
} from '../../reuseable/logics'

export const BackEndAPI = new RestAPI({
    address: 'http://localhost',
    isUseAuth: true,
    getToken,
    faultTolerance: (e)=> console.log(e),
})
