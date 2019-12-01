
<script>
    import css from 'svelte-css-vars'

    // a 설명
    export let _a = ''
    // b 설명
    export let _b = ''
    // c 설명
    export let _c = ''

    /**
     * [THEME CODE]
     * {
     * textColor: 'red',
     * blabla: 'hoho'
     * }
     * [THEME CODE]
     */
    export let _theme = undefined
</script>

<!-- Custom CSS Bind -->
<div use:css="{_theme}">

    <div class="test">
        {_a} {_b} {_c}
    </div>
</div>

<style>
    .test {
        color: var(--textColor);
    }
</style>