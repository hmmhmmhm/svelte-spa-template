<script>
    import Router from 'svelte-spa-router/Router.svelte'
    import ResourceManager from './resources/index.ts'

    import { ChunkGenerator } from 'svelte-spa-chunk'
    import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte'
    const Chunk = ChunkGenerator(ChunkComponent)

    const routes = {
        '/': Chunk(() => import('./pages/sample/index.svelte')),
        '/sample': Chunk(() => import('./pages/sample/index.svelte')),
        '*': Chunk(() => import('./pages/sample/index.svelte')),
    }
</script>

<!-- START Container -->
<div id="container">
    <Router {routes} />
</div>
<!-- ENDED Container -->

<style>
    #container {
        margin: 0;
        height: max-content;
        overflow: auto;
    }
</style>
