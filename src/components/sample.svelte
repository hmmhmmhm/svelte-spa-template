<script>
    import * as svelte from 'svelte'
    import { makeCSS } from 'svelte-css-in-js'

    export let a = ''
    export let b = ''
    export let c = ''

    // CSS Prop
    let themePrimaryColor = 'blue'

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
    console.log(svelte)
    const css = makeCSS({ style, theme, svelte })
</script>

<div class={css.background}>{a} {b} {c}</div>
