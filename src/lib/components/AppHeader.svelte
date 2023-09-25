<script lang="ts">
    import { title } from '$lib/config';
    import { Routes, Themes } from '$lib/enum'
    import Container from '$lib/components/Container.svelte';
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
                    <a href={Routes.ABOUT}>About</a>
                </li>
                <li>
                    <a href={Routes.CONTACT}>Contact</a>
                </li>
                <li>
                    <a href={Routes.RSS} target="_blank">RSS</a>
                </li>
    
                <li>
                    <details class="dropdown dropdown-end">
                        <summary>Theme</summary>
                        <ul class="dropdown-content z-[1] mt-0 p-2 shadow bg-base-100 w-52">
                            <li><span>{Themes.LIGHT}</span></li>
                            <li><span>{Themes.DARK}</span></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </section>
    </header>
</Container>