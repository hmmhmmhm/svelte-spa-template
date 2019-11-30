import { writable, get } from 'svelte/store'
import { cookieStorage, getCacheItem } from './storage'

let defaultHasLogin = false
let defaultToken = null

try{
    let load
    if((load = getCacheItem('account.hasLogin') ) != null) defaultHasLogin = load
    if((load = getCacheItem('account.token') ) != null) defaultToken = load
}catch(e){
    console.log(e)
}

if(typeof defaultToken != 'string') defaultHasLogin = false

export const hasLogin = writable(defaultHasLogin)
hasLogin.subscribe((value)=>{ cookieStorage.setItem('account.hasLogin', String(value)) })

export const tokenStore = writable(defaultToken)
tokenStore.subscribe((value)=>{ cookieStorage.setItem('account.token', String(value) ) })

export const getToken = () => get(tokenStore)