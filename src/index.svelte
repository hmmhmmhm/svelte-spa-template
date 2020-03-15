<script>
    import ResourceManager from './resources/index.ts'
    import Notifications from 'svelte-notifications'
    import Router from 'svelte-spa-router/Router.svelte'
    import { wrap } from 'svelte-spa-router'

    import { ChunkGenerator } from 'svelte-spa-chunk'
    import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte'
    const Chunk = ChunkGenerator(ChunkComponent)

    const routeLoaded = event => {
        const { location, querystring } = event.detail
        console.log(`%c🚧  ${location} loaded`, 'color: #908CFF;', {
            querystring,
        })
    }

    const routes = {
        '/': Chunk(() => import('./pages/_template.svelte')),
        '/_template/:id': Chunk(() => import('./pages/_template.svelte')),
        '*': Chunk(() => import('./pages/_template.svelte')),
    }

</script>

<!-- START Container -->
<div id="container">
    <Notifications>
        <Router {routes} on:routeLoaded={routeLoaded} />
    </Notifications>
</div>
<!-- ENDED Container -->

<style>
    #container {
        margin: 0;
        height: max-content;
        overflow: auto;
    }
</style>
