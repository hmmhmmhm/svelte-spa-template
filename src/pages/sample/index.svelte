<script lang="typescript">
    // Modules
    import { fly } from 'svelte/transition'
    // @ts-ignore
    import Page from './utils'

    // Components
    const { Sample } = Page.Components

    // Logics
    export let params: any = {}
    Page.pageInit({ params })
</script>

<!-- Page Transition Animation -->
<div
    in:fly={{ x: 1000, duration: 500 }}
    out:fly={{ x: -1000, duration: 500 }}
    class="bg"
    style="height: 100%;"
>

    <!-- Component -->
    <Sample a="Svelte" b="Is" c="Awesome1" theme={{ fontSize: '20px' }} />

</div>

<style>
    .bg {
        color: #000000;
        background-color: #ffffff;
    }
</style>
