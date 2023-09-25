<script lang="ts">
    import * as config from '$lib/config';
    import { formatDate } from '$lib/utils';
    import { ArrowRight, CalendarDays } from 'lucide-svelte';

    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<article>
    <section>
        <div class="hero h-96 bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Welcome to my blog</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              </div>
            </div>
        </div>
    </section>
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