<script lang="ts">
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'
    import { Themes } from '$lib/enum'

    onMount(() => {
        themeChange(false)
    });
</script>

<details class="dropdown dropdown-end">
    <summary>Theme</summary>
    <ul class="dropdown-content z-[1] mt-0 p-2 shadow bg-base-100 w-52">
        {#each Object.values(Themes) as theme}
        <li>
            <button data-set-theme={theme}>{theme}</button>
        </li>
        {/each}
    </ul>
</details>