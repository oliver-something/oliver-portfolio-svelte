<script>
    import { fade, fly } from 'svelte/transition';
    import logo from '../../assets/racoon-logo.png';

    let isOpen = false;

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Stack', href: '#stack' },
        { label: 'Work', href: '#work' },
        { label: 'Contact', href: '#contact' }
    ];

    function toggleMenu() {
        isOpen = !isOpen;

        if (typeof document !== 'undefined') {
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }
    }

    function closeMenu() {
        isOpen = false;

        if (typeof document !== 'undefined') {
            document.body.style.overflow = '';
        }
    }
</script>

<header class="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
    <div class="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
                href="#home"
                class="z-[60] inline-flex items-center gap-3 text-white/90"
                onclick={closeMenu}
        >
            <span class="font-mono type-body-sm tracking-[0.28em] text-white/90">
		        Digital
	        </span>
            <img
                    src={logo}
                    alt="Digital Raccoon"
                    class="h-12 w-12 object-contain sm:h-20 sm:w-20"
            />
            <span class="font-mono type-body-sm tracking-[0.28em] text-white/90">
                Raccoon
	        </span>
        </a>

        <nav class="hidden items-center gap-8 type-nav text-white/65 md:flex">
            {#each navItems as item}
                <a class="transition hover:text-white" href={item.href}>
                    {item.label}
                </a>
            {/each}
        </nav>

        <button
                type="button"
                class="z-[60] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-white/20 hover:bg-white/[0.08] md:hidden"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                onclick={toggleMenu}
        >
            <div class="relative h-4 w-5">
				<span
                        class={`absolute left-0 top-0 h-[1.5px] w-5 bg-white transition-all duration-300 ${
						isOpen ? 'translate-y-[7px] rotate-45' : ''
					}`}
                ></span>
                <span
                        class={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-white transition-all duration-300 ${
						isOpen ? 'opacity-0' : ''
					}`}
                ></span>
                <span
                        class={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-white transition-all duration-300 ${
						isOpen ? '-translate-y-[7px] -rotate-45' : ''
					}`}
                ></span>
            </div>
        </button>
    </div>

    {#if isOpen}
        <div
                class="fixed inset-0 z-40 flex min-h-screen items-center justify-center bg-black/94 backdrop-blur-2xl md:hidden"
                transition:fade={{ duration: 220 }}
        >
            <nav
                    class="flex flex-col items-center justify-center gap-8 text-center"
                    transition:fly={{ y: -24, duration: 280 }}
            >
                {#each navItems as item, index}
                    <a
                            href={item.href}
                            class="font-mono type-overlay-nav uppercase tracking-[0.22em] text-white/78 transition-all duration-300 hover:scale-[1.03] hover:text-white"
                            style={`transition-delay: ${index * 60}ms`}
                            onclick={closeMenu}
                    >
                        {item.label}
                    </a>
                {/each}
            </nav>
        </div>
    {/if}
</header>