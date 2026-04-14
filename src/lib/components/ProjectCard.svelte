<script>
  export let project = {
    title: '',
    summary: '',
    stack: []
  };
</script>

<article class="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] md:p-8">
  <div class="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70"></div>
  <div class="space-y-5">
    <div class="flex items-center justify-between gap-3">
      <p class="font-mono type-label uppercase tracking-[0.28em] text-white/45">Featured build</p>
      <span class="rounded-full border border-white/10 px-3 py-1 type-label text-white/55">Static showcase</span>
    </div>

    <div class="space-y-3">
      <h3 class="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
      <p class="type-body leading-7 text-white/70">{project.summary}</p>
    </div>

    <div class="flex flex-wrap gap-2 pt-2">
      {#each project.stack as item}
        <span class="rounded-full border border-white/12 bg-black/35 px-3 py-1.5 type-label text-white/70">{item}</span>
      {/each}
    </div>
  </div>
</article>
