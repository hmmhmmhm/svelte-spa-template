// For node_modules libraries.
import "core-js/stable"
import "regenerator-runtime/runtime"
import Svelte from './index.svelte'

export default new Svelte({
    target: document.body
})