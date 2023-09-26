<script lang="ts">
    import { title } from '$lib/config';
    import { Routes } from '$lib/enum'
    import Container from '$lib/components/Container.svelte';
    import ThemeSelector from '$lib/components/ThemeSelector.svelte';
</script>

<Container>
    <header class="navbar bg-base-100 justify-between">
        <section>
            <h1 class="btn btn-ghost normal-case text-xl">
                <a href={Routes.HOME}>{title}</a>
            </h1>
        </section>
    
        <section>
            <ul class="menu menu-horizontal px-1">
                <li>
                    <a href={Routes.RSS} target="_blank">RSS</a>
                </li>
    
                <li>
                    <ThemeSelector />
                </li>
            </ul>
        </section>
    </header>
</Container>