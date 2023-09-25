<script lang="ts">
    import '../app.css';
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';
    import Container from '$lib/components/Container.svelte';
</script>

<main>
    <AppHeader />
    <main class="min-h-screen bg-base-200">
        <Container>
            <slot />
        </Container>
    </main>
    <AppFooter />
</main>