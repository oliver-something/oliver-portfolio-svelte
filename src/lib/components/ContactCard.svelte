<script>
    export let item = {
        title: '',
        address: '',
        icon: null,
        url: ''
    };
</script>

<a href={item.url} class="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-left transition hover:border-white/25 hover:bg-white/[0.05]">
    <div class="flex items-center gap-3">
        {#if item.icon}
            <svelte:component this={item.icon} size={24} />
        {/if}

        <span class="font-mono type-label uppercase tracking-[0.28em] text-white/45">
			{item.title}
		</span>
    </div>

    <span class="mt-3 block type-body-sm text-white/84">
		{item.address}
	</span>
</a>