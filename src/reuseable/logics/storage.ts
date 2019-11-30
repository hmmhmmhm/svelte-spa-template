import { CookieStorage } from 'cookie-storage'

export const cookieStorage = new CookieStorage()
export const getCacheItem = (tag) => {
    let data = cookieStorage.getItem(tag)

    try{
        if(typeof data == 'string'){
            let parsed = JSON.parse(data)
            data = parsed
        }
    }catch(e){}

    return data
}
