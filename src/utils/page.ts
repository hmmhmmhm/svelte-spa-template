import { Router } from './index'
import * as Store from 'svelte/store'

/**
 * A function that is execute
 * when the page is first load.
 */
export const pageInit = ({ params }) => {
    console.log(
        `%c🚧  ${Store.get(Router.location)} loaded`,
        'color: #908CFF;',
        params
    )
}
