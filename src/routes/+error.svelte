<script lang="ts">
    import { page } from '$app/stores';
    import Hero from '$lib/components/Hero.svelte';
</script>

<Hero title={String($page.status)} subtitle={String($page.error?.message)} />