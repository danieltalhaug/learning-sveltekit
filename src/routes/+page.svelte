<script lang="ts">
    import * as config from '$lib/config';
    import Hero from '$lib/components/Hero.svelte';
    import BlogPostList from '$lib/components/BlogPostList.svelte'

    export let data;
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<article>
    <Hero title="My Blog" subtitle="This is my blog hello ding dong" />
    <BlogPostList posts={data.posts} />
</article>