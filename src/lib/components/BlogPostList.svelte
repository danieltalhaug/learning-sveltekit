<script lang="ts">
    import type { Post } from '$lib/types';
    import BlogPostCard from '$lib/components/BlogPostCard.svelte';

    export let posts: Post[];
</script>

<ul class="flex flex-col gap-8">
    {#each posts as post}
        <BlogPostCard {post} />
    {/each}
</ul>