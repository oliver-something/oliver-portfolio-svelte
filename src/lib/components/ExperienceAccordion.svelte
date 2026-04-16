<script>
    import { CaretDownIcon } from 'phosphor-svelte';

    export let items = [];

    let openIndex = 0;

    function toggle(index) {
        openIndex = openIndex === index ? -1 : index;
    }
</script>

<div class="mx-auto mt-10 w-full">
    <div class="space-y-4">
        {#each items as item, index}
            <article class="card-outline w-full rounded-[2rem]">
                <!-- Header content -->
                <div class="p-6 md:p-8">
                    <div class="min-w-0 flex-1">
                        <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <p class="font-mono type-label uppercase tracking-[0.28em] text-white/44">
                                {item.eyebrow}
                            </p>

                            <span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono type-label uppercase tracking-[0.18em] text-white/50">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>

                        <div class="mt-4 space-y-2">
                            <h3 class="type-card-title font-semibold tracking-tight text-white">
                                {item.company}
                            </h3>

                            <p class="type-body-sm text-white/68">
                                {item.role}
                            </p>

                            <p class="font-mono type-label uppercase tracking-[0.18em] text-white/40">
                                {item.timeframe} · {item.location}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Toggle button -->
                <div class="px-6 pb-4 md:px-8 md:pb-5">
                    <button
                            type="button"
                            class="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.05] hover:text-white/80"
                            onclick={() => toggle(index)}
                            aria-expanded={openIndex === index}
                    >
                        <span class="font-mono type-label uppercase tracking-wider">
                            {openIndex === index ? 'Show less' : 'Show more'}
                        </span>
                        <span class="transition-transform duration-300 group-hover:translate-y-0.5">
                            <CaretDownIcon
                                    size={16}
                                    weight="bold"
                                    class={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                            />
                        </span>
                    </button>
                </div>

                <!-- Content - always in DOM, visibility controlled by CSS -->
                <div
                        class="w-full border-t border-white/8 transition-all duration-300 ease-in-out"
                        class:visible={openIndex === index}
                        class:invisible={openIndex !== index}
                        style="max-height: {openIndex === index ? '1000px' : '0'}; opacity: {openIndex === index ? '1' : '0'};"
                >
                    <div class="px-6 pb-6 pt-5 md:px-8 md:pb-8 md:pt-6">
                        <p class="type-body-sm max-w-3xl text-white/72 text-wrap">
                            {item.summary}
                        </p>

                        {#if item.highlights?.length}
                            <ul class="mt-6 space-y-3">
                                {#each item.highlights as point}
                                    <li class="flex items-start gap-4">
                                        <span class="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full bg-white/38"></span>
                                        <p class="type-body-sm text-white/78">
                                            {point}
                                        </p>
                                    </li>
                                {/each}
                            </ul>
                        {/if}

                        {#if item.stack?.length}
                            <div class="mt-6 flex w-full flex-wrap gap-2 border-t border-white/8 pt-5">
                                {#each item.stack as tech}
                                    <span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono type-label uppercase tracking-[0.18em] text-white/52">
                                        {tech}
                                    </span>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            </article>
        {/each}
    </div>
</div>

<style>
    .visible {
        visibility: visible;
        overflow: visible;
    }

    .invisible {
        visibility: hidden;
        overflow: hidden;
    }
</style>