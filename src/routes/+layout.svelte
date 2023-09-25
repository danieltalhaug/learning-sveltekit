<script lang="ts">
    import '../app.css';
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';
</script>

<main>
    <AppHeader />
    <slot />
    <AppFooter />
</main>