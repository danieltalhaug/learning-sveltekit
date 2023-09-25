<script lang="ts">
    import { CalendarDays } from 'lucide-svelte';
    import { formatDate } from '$lib/utils.js';

    export let data;
</script>

<svelte:head>
    <title>{ data.meta.title }</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
    <header class="py-12">
        <hgroup class="flex flex-col gap-2">
            <h1 class="text-primary text-6xl">{data.meta.title}</h1>
            <p class="flex gap-2 text-sm text-secondary items-center">
                <CalendarDays size="16" />
                {formatDate(data.meta.date)}
            </p>
        </hgroup>
    </header>

    <section class="prose">
        <svelte:component this={data.content} />
    </section>
</article>