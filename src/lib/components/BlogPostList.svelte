<script lang="ts">
    import type { Post } from '$lib/types';
    import BlogPostCard from '$lib/components/BlogPostCard.svelte';
    import { Rows, LayoutGrid } from 'lucide-svelte';

    type Grid = 'rows' | 'grid';

    export let posts: Post[];
    let displayListAs: Grid = 'rows';

    $: grid = displayListAs === 'rows' ? 'sm:grid-cols-1' : 'sm:grid-cols-2';
    $: displayAsGrid = displayListAs === 'grid' ? 'btn-primary' : '';
    $: displayAsRows = displayListAs === 'rows' ? 'btn-primary' : '';

    function onChangeListDisplay(to: Grid) {
        displayListAs = to;
    }
</script>

<article>
    <section class="card mb-4">
        <div class="join self-end invisible lg:visible">
            <button class="btn join-item {displayAsRows}" on:click={() => onChangeListDisplay('rows')}>
                <Rows />
            </button>
            <button class="btn join-item {displayAsGrid}" on:click={() => onChangeListDisplay('grid')}>
                <LayoutGrid />
            </button>
        </div>
    </section>
    
    <ul class="grid {grid} gap-8 w-full">
        {#each posts as post}
            <BlogPostCard {post} />
        {/each}
    </ul>
</article>