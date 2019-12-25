// For node_modules libraries.
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// @ts-ignore
import Svelte from './index.svelte'

export default new Svelte({
    target: document.body,
})
