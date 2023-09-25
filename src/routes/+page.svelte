<script lang="ts">
    import * as config from '$lib/config';
    import { formatDate } from '$lib/utils';
    import { ArrowRight, CalendarDays } from 'lucide-svelte';
    import Hero from '$lib/components/Hero.svelte';

    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<article>
    <Hero title="My Blog" subtitle="This is my blog hello ding dong" />
    <ul class="flex flex-col gap-8">
        {#each data.posts as post}
            <li class="flex flex-col gap-2 border-2 bg-base-100 border-base-300 rounded-xl p-12 shadow-xl">
                <h2 class="text-4xl text-primary">{post.title}</h2>
                <p class="flex gap-2 text-sm text-secondary items-center">
                    <CalendarDays size="16" />
                    {formatDate(post.date)}
                </p>
                <p class="text-base">{post.description}</p>
                <span class="self-end">
                    <a href={post.slug} class="btn btn-primary btn-sm">
                        Read more <ArrowRight size="18" />
                    </a>
                </span>
            </li>
        {/each}
    </ul>
</article>