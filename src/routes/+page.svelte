<script lang="ts">
    import * as config from '$lib/config';
    import BlogPostList from '$lib/components/BlogPostList.svelte'
    import BioCard from '$lib/components/BioCard.svelte';

    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<article>
    <section class="flex flex-col-reverse lg:flex-row gap-8 pt-12">
        <BlogPostList posts={data.posts} />
        <BioCard />
    </section>
</article>