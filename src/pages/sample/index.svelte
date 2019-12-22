<script lang="typescript">

    // Page Query String
    export let params: any = {}

    // Component Declaration
    // @ts-ignore
    import Page from './index.ts'
    const { Components, Resources, Router, Store } = Page

    // Debug Declaration
    console.log(
        `%c🚧  ${Store.get(Router.location)} loaded`,
        'color: #908CFF;',
        params
    )

    // Test Intellisense.
    // @ts-ignore
    import { canYouSeeMe2 } from './'
    canYouSeeMe2(123)

    // Page Direct Declaration
    import { fly } from 'svelte/transition'

    // @ts-ignore
    import Sample from '../../components/sample.svelte'
</script>

<!-- Page Transition Animation -->
<div
    in:fly={{ x: 1000, duration: 500 }}
    out:fly={{ x: -1000, duration: 500 }}
    class="bg"
    style="height: 100%;"
>

    <!-- Page Define -->

    <!-- Component -->
    <Sample a="Svelte" b="Is" c="Awesome1" theme={{ fontSize: '20px' }} />

</div>

<style>
    .bg {
        color: #000000;
        background-color: #ffffff;
    }
</style>
