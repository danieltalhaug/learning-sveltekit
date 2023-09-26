<script lang="ts">
    export let title: string;
    export let subtitle: string;
</script>

<section>
    <div class="hero h-96 bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold text-secondary">{title}</h1>
                <p class="py-6 text-accent">{subtitle}</p>
          </div>
        </div>
    </div>
</section>