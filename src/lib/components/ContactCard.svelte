<script>
    export let item = {
        title: '',
        icon: null,
        url: ''
    };
</script>

<a href={item.url} class="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:border-white/25 hover:bg-white/[0.05]">
    <div class="flex items-center gap-3 justify-center">
        {#if item.icon}
            <svelte:component this={item.icon} size={24} />
        {/if}

        <span class="font-mono type-label uppercase tracking-[0.28em] text-white/45">
			{item.title}
		</span>
    </div>
</a>