<script lang="typescript">
    // @ts-ignore
    import * as Utils from '../utils'

    export let label = ''

    // CSS Prop
    let themePrimaryColor = 'black'

    // CSS Style
    export let style = {
        background: {
            color: themePrimaryColor,
        },
    }

    // CSS Theme
    export let theme = {
        background: {
            fontSize: '30px',
        },
    }

    import { makeCSS } from 'svelte-css-in-js'
    const css = makeCSS({ style, theme })
</script>

<div class={css.background}>{label}</div>
