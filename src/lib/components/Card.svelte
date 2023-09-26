<script lang="ts">
    export let color: string = 'bg-base-100';
    export let element: string = 'div'
</script>

<svelte:element this={element} class="card card-normal card-bordered card-body shadow-lg {color}">
    <slot />
</svelte:element>