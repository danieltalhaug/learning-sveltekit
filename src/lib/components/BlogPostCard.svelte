<script lang="ts">
    import type { Post } from '$lib/types';
    import { formatDate } from '$lib/utils';
    import { ArrowRight, CalendarDays } from 'lucide-svelte';
    import Card from '$lib/components/Card.svelte';

    export let post: Post;
</script>

<Card element="li">
    <h2 class="text-3xl text-secondary font-medium">{post.title}</h2>
    <p class="flex gap-2 text-sm text-accent items-center">
        <CalendarDays size="16" />
        {formatDate(post.date)}
    </p>
    <p class="text-base">{post.description}</p>
    <span class="card-actions self-end">
        <a href={post.slug} class="btn btn-primary btn-sm">
            Read more <ArrowRight size="18" />
        </a>
    </span>
</Card>