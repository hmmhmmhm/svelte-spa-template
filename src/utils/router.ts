import { Readable, get } from 'svelte/store'
import * as SPA from '../reuseable/logics/spa'

// @ts-ignore
import * as _spaRouter from 'svelte-spa-router'

export interface ISPARouter {
    link: (link: string) => void,
    pop: () => void,
    replace: (link: string) => void,
    location: Readable<string>,
    querystring: Readable<string>,
}

let spaRouter: ISPARouter = _spaRouter

export const Router = {
    ...spaRouter,
    getLocation: () => get(spaRouter.location),
    getQueryString: () => get(spaRouter.querystring),
    once: SPA.once,
    setInterval: SPA._setInterval,
    setTimeout: SPA._setTimeout,
}