<script>
    export let eyebrow = '';
    export let title = '';
    export let description = '';
    export let centered = false;
</script>

<div class="max-w-3xl space-y-4" class:mx-auto={centered} class:text-center={centered}>
    {#if eyebrow}
        <p class="font-mono type-label uppercase tracking-[0.35em] text-white/55">{eyebrow}</p>
    {/if}

    <h2 class="type-section-title font-semibold tracking-tight text-white">{title}</h2>

    {#if description}
        <p class="max-w-2xl type-body leading-8 text-white/70" class:mx-auto={centered}>
            {description}
        </p>
    {/if}
</div>
