<!--
in case
border border-white/12 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]
-->


<script>
    export let project = {
        eyebrow: '',
        company: '',
        role: '',
        timeframe: '',
        location: '',
        summary: '',
        highlights: [],
        stack: []
    };
</script>

<article class="card-outline rounded-[2rem] p-6 md:p-8">
    <div class="flex items-start gap-4">
        <div class="min-w-0 flex-1 space-y-3">
            <p class="font-mono type-label uppercase tracking-[0.28em] text-white/44">
                {project.eyebrow}
            </p>

            <div class="space-y-1">
                <h3 class="type-card-title font-semibold tracking-tight text-white">
                    {project.company}
                </h3>
                <p class="type-body-sm text-white/62">
                    {project.role}
                </p>
            </div>

            <div class="flex flex-wrap gap-x-3 gap-y-1 font-mono type-label uppercase tracking-[0.18em] text-white/42">
                {#if project.timeframe}
                    <span>{project.timeframe}</span>
                {/if}
                {#if project.location}
                    <span>{project.location}</span>
                {/if}
            </div>
        </div>
    </div>

    <p class="mt-6 type-body-sm text-white/72">
        {project.summary}
    </p>

    {#if project.highlights?.length}
        <ul class="mt-6 divide-y divide-white/8">
            {#each project.highlights as item}
                <li class="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                    <span class="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full bg-white/38"></span>
                    <p class="type-body-sm text-white/78">{item}</p>
                </li>
            {/each}
        </ul>
    {/if}

    {#if project.stack?.length}
        <div class="mt-6 flex flex-wrap gap-2 border-t border-white/8 pt-5">
            {#each project.stack as item}
        <span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono type-label uppercase tracking-[0.18em] text-white/52">
          {item}
        </span>
            {/each}
        </div>
    {/if}
</article>