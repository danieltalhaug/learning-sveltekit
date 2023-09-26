<script lang="ts">
    import Card from '$lib/components/Card.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import { formatDate } from '$lib/utils.js';

    export let data;
</script>

<svelte:head>
    <title>{ data.meta.title }</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="py-12">
    <header>
        <Hero title={data.meta.title} subtitle={formatDate(data.meta.date)} />
    </header>

    <Card element="article">   
        <section class="prose">
            <svelte:component this={data.content} />
        </section>
    </Card>
</div>