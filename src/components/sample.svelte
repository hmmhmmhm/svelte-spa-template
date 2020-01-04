<script lang="typescript">
    // @ts-ignore
    import Utils from './utils'

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

    import { makeCSS } from 'svelte-css-in-js'
    const css = makeCSS({ style, theme })
</script>

<div class={css.background}>{a} {b} {c}</div>
