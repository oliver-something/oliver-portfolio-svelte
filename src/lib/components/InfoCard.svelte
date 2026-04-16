<script>
    export let title;
    export let description;
    export let icon; // dynamic component
</script>

<div class="rounded-2xl px-5 py-4 border border-white/12 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
    <div class="flex flex-row gap-1.5 items-center">
        <svelte:component this={icon} />
        <p class="font-mono type-label uppercase tracking-[0.24em] text-white/42">
            {title}
        </p>
    </div>

    <p class="mt-2 type-body-sm text-white/82">
        {description}
    </p>
</div>