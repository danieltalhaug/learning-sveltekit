<script lang="ts">
    import '../app.css';
    import AppFooter from '$lib/components/AppFooter.svelte';
</script>

<main>
<slot />
    <AppFooter />
</main>