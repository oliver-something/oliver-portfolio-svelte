<script>
    export let item  = {
        title: '',
        address: '',
        icon: '',
        url: ''
    }
</script>

<a href="{item.url}" class="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-left transition hover:border-white/25 hover:bg-white/[0.05]">
    <svelte:component this={item.icon} size="24"/>
    <span class="mt-4 block font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">{item.title}</span>
    <span class="mt-3 block text-sm text-white/84">{item.address}</span>
</a>