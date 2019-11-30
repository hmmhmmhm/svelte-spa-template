<script>
    // Page Query String
    export let params = {}

    // Component Declaration
    import Page from './index.ts'
    const { Components, Resources, Router, Store } = Page

    // Debug Declaration
    console.log(`%c🚧  ${Store.get(Router.location)} loaded`, 'color: #908CFF;', params)
    
    // Page Direct Declaration
    import { fly } from 'svelte/transition'
</script>

<!-- Page Transition Animation -->
<div
    in:fly="{{x:1000, duration: 500}}"
    out:fly="{{x:-1000, duration: 500}}"

    class="bg"
    style="height: 100%;">

    <!-- Page Define -->
    Test Loading?
</div>

<style>
    .bg {
        color: #ffffff;
        background-color: #ffffff;
    }
</style>