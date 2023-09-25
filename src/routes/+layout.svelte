<script lang="ts">
    import '../app.css';
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';
    import Container from '$lib/components/Container.svelte';
    import Transition from '$lib/components/Transition.svelte';

    export let data;
</script>

<main>
    <AppHeader />
    <main class="min-h-screen bg-base-200">
        <Container>
            <Transition url={data.url}>
                <slot />
            </Transition>
        </Container>
    </main>
    <AppFooter />
</main>