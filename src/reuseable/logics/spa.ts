// @ts-ignore
import { location } from 'svelte-spa-router'
import { get } from 'svelte/store'
let onceList = {}

location.subscribe((currentLocation)=>{
    for(let onceListKey of Object.keys(onceList))
        if(onceListKey != currentLocation)
            delete onceList[onceListKey]
})

export const once = (
    callback: () => void,
    identifier?: string
) => {
    let registeredLocation = get(location)

    if(typeof onceList[registeredLocation] == 'undefined' ||
        typeof onceList[registeredLocation][identifier] == 'undefined'){

        if(typeof onceList[registeredLocation] == 'undefined')
            onceList[registeredLocation] = {}
            onceList[registeredLocation][identifier] = true
        callback()
    }
}

export const _setInterval = (
    handler,
    timeout: number,
) => {
    let registeredLocation = get(location)
    let intervalHandler = setInterval(()=>{
        if(get(location) != registeredLocation){
            clearInterval(intervalHandler)
        }else{
            handler()
        }
    }, timeout)
    return intervalHandler
}

export const _setTimeout = (
    handler,
    timeout: number,
) => {
    let registeredLocation = get(location)
    let timeoutHandler = setTimeout(()=>{
        if(get(location) != registeredLocation){
            clearTimeout(timeoutHandler)
        }else{
            handler()
        }
    }, timeout)
    return timeoutHandler
}