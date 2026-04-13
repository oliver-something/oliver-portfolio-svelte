<script>
    import BinaryRain from './lib/components/BinaryRain.svelte';
    import ProjectCard from './lib/components/ProjectCard.svelte';
    import SkillBadge from './lib/components/SkillBadge.svelte';
    import portrait from './assets/oliver-portrait.png';
    import InfoCard from './lib/components/InfoCard.svelte';
    import SectionTitle from './lib/components/SectionTitle.svelte';
    import {
        CodeIcon,
        FileCodeIcon,
        GithubLogoIcon,
        LinkedinLogoIcon,
        WrenchIcon,
        GhostIcon,
        AddressBookIcon,
        UserIcon,
        GlobeIcon
    } from 'phosphor-svelte';

    const skills = [
        'Python',
        'Django',
        'Django REST Framework',
        'Relational Databases',
        'REST APIs',
        'Docker',
        'Celery',
        'Redis',
        'Linux',
        'Testing',
        'System Design'
    ];

    const projects = [
        {
            title: 'API Platform for Data-Heavy Workflows',
            summary:
                'A portfolio-style placeholder for a backend platform that handles structured business logic, async jobs, and database-heavy operations through a calm, scalable Django core.',
            stack: ['Python', 'Django', 'DRF', 'Relational Databases']
        },
        {
            title: 'Internal Operations Dashboard Backend',
            summary:
                'A backend service layer focused on permissions, reporting, audit-friendly endpoints, and the sort of operational plumbing that quietly keeps teams functional.',
            stack: ['Django', 'Redis', 'Celery', 'Docker']
        },
        {
            title: 'Authentication and Access Service',
            summary:
                'A clean authentication backbone with session control, role-based access, and backend rules built for products that need security without theatrical complexity.',
            stack: ['Python', 'JWT', 'RBAC', 'Testing']
        }
    ];

    const infoCardItems = [
        {
            title: 'My Focus',
            description: 'Full-stack development and backend-heavy web APIs.',
            icon: GhostIcon
        },
        {
            title: 'Core Skills',
            description: 'Python, Django, relational databases, and Svelte.',
            icon: FileCodeIcon
        },
        {
            title: 'Working Style',
            description: 'Practical, simple, scalable, and debug-friendly.',
            icon: WrenchIcon
        }
    ];

    const personalInfoCardItems = [
        {
            title: 'Full Name',
            description: 'Khashayar Hosseini',
            icon: UserIcon
        },
        {
            title: 'Based In',
            description: 'Tehran, Iran',
            icon: GlobeIcon
        },
        {
            title: 'Available For',
            description: 'Freelance / Part-time',
            icon: CodeIcon
        }
    ];
</script>

<svelte:head>
    <title>Oliver Something | Python & Django Backend Developer</title>
    <meta
            name="description"
            content="Oliver Something builds robust Django and Python backend systems with a monochrome portfolio experience and binary rain animation."
    />
</svelte:head>

<div class="noise relative min-h-screen overflow-x-hidden bg-black text-white">
    <BinaryRain />
    <div class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.72))]"></div>

    <header class="sticky top-0 z-30 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
            <a href="#home" class="font-mono text-sm uppercase tracking-[0.34em] text-white/90">
                Oliver Something
            </a>

            <nav class="hidden items-center gap-8 text-sm text-white/65 md:flex">
                <a class="transition hover:text-white" href="#about">About</a>
                <a class="transition hover:text-white" href="#stack">Stack</a>
                <a class="transition hover:text-white" href="#work">Work</a>
                <a class="transition hover:text-white" href="#contact">Contact</a>
            </nav>
        </div>
    </header>

    <main class="flex flex-1 flex-col">
        <section id="home" class="section-shell flex min-h-[calc(100vh-72px)] items-center justify-center">
            <div class="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center">
                <div class="relative h-[280px] w-[280px] shrink-0 sm:h-[320px] sm:w-[320px]">
                    <div class="absolute inset-[-6px] rounded-full bg-linear-to-r/srgb from-black/30 to-gray-400/40 animate-[spin_6s_linear_infinite]"></div>

                    <div class="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-black/60">
                        <img
                                src={portrait}
                                alt="Portrait of Oliver Something"
                                class="h-full w-full object-cover object-center grayscale"
                        />
                    </div>
                </div>

                <div class="flex max-w-4xl flex-col items-center gap-5">
                    <p class="font-mono text-xs uppercase tracking-[0.35em] text-white/55">Hey There, I'm</p>

                    <h1 class="text-5xl font-semibold leading-none tracking-tight text-white sm:text-6xl md:text-7xl">
                        Oliver Something
                    </h1>

                    <p class="max-w-2xl text-xl leading-8 text-white/74 md:text-2xl">
                        I build clean and efficient digital experiences.
                    </p>

                    <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <a
                                href="#work"
                                class="inline-flex items-center justify-center rounded-2xl border bg-white px-4 py-3 text-sm font-medium text-black transition hover:border-white hover:bg-white/70"
                        >
                            <GhostIcon size="20" />
                            <span class="ml-2">See Work</span>
                        </a>

                        <a
                                href="#contact"
                                class="inline-flex items-center justify-center rounded-2xl border border-white/18 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/[0.08]"
                        >
                            <AddressBookIcon size="20" />
                            <span class="ml-2">Contact Me</span>
                        </a>
                    </div>
                </div>

                <div class="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-3">
                    {#each infoCardItems as item}
                        <InfoCard title={item.title} description={item.description} icon={item.icon} />
                    {/each}
                </div>
            </div>
        </section>

        <section id="about" class="section-shell">
            <div class="mx-auto w-full max-w-6xl">
                <SectionTitle
                        eyebrow="About Me"
                        title="Software engineer with a backend-first brain"
                        description="I care about systems that stay readable under pressure: clean Django services, API design that makes sense, and architecture that solves actual product problems instead of dressing up as complexity."
                        centered
                />

                <div class="mx-auto mt-10 grid w-full max-w-5xl gap-4 md:grid-cols-3">
                    {#each personalInfoCardItems as item}
                        <InfoCard title={item.title} description={item.description} icon={item.icon} />
                    {/each}
                </div>

                <div class="mx-auto mt-6 max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-10">
                    <p class="text-base leading-8 text-white/74 md:text-lg">
                        This portfolio keeps the layout simple on purpose. The goal is to put the work, the thinking, and the engineering
                        signal in front, without drowning it in decorative UI tricks. A backend portfolio should feel calm, legible, and structured.
                        Not like it inhaled three landing-page templates and a bag of confetti.
                    </p>
                </div>
            </div>
        </section>

        <section id="stack" class="section-shell">
            <div class="mx-auto w-full max-w-6xl">
                <SectionTitle
                        eyebrow="Stack"
                        title="Tools and backend habits"
                        description="The stack is practical, the workflow is simple, and the habits matter as much as the tools."
                        centered
                />

                <div class="mx-auto mt-10 grid w-full max-w-5xl gap-6 lg:grid-cols-2">
                    <div class="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-10">
                        <p class="font-mono text-xs uppercase tracking-[0.28em] text-white/44">What I care about</p>
                        <ul class="mt-6 space-y-4 text-sm leading-8 text-white/72 md:text-base">
                            <li>Reliable API design with clean boundaries</li>
                            <li>Readable backend architecture that ages gracefully</li>
                            <li>Database models that support the product instead of sabotaging it</li>
                            <li>Thoughtful performance work and debugging discipline</li>
                            <li>Deployment-ready habits without infrastructure theater</li>
                        </ul>
                    </div>

                    <div class="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-10">
                        <p class="font-mono text-xs uppercase tracking-[0.28em] text-white/44">Core toolkit</p>
                        <div class="mt-6 flex flex-wrap gap-3">
                            {#each skills as skill}
                                <SkillBadge label={skill} />
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="work" class="section-shell">
            <div class="mx-auto w-full max-w-6xl">
                <SectionTitle
                        eyebrow="Work"
                        title="Featured backend directions"
                        description="These project cards are placeholders for now, but the layout is ready for real work and real links."
                        centered
                />

                <div class="mt-10 grid gap-6 lg:grid-cols-3">
                    {#each projects as project}
                        <ProjectCard {project} />
                    {/each}
                </div>
            </div>
        </section>

        <section id="contact" class="section-shell pb-24">
            <div class="mx-auto w-full max-w-6xl">
                <SectionTitle
                        eyebrow="Contact"
                        title="Need a backend developer who prefers solid systems over drama?"
                        description="Replace the placeholder details below with your real links and you’re done. No special contact block circus required."
                        centered
                />

                <div class="mx-auto mt-10 grid w-full max-w-5xl gap-4 md:grid-cols-3">
                    <a
                            href="mailto:your-email@example.com"
                            class="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-left transition hover:border-white/25 hover:bg-white/[0.05]"
                    >
                        <AddressBookIcon size="20" />
                        <span class="mt-4 block font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">Email</span>
                        <span class="mt-3 block text-sm text-white/84">your-email@example.com</span>
                    </a>

                    <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            class="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-left transition hover:border-white/25 hover:bg-white/[0.05]"
                    >
                        <GithubLogoIcon size="20" />
                        <span class="mt-4 block font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">GitHub</span>
                        <span class="mt-3 block text-sm text-white/84">github.com/yourusername</span>
                    </a>

                    <a
                            href="https://www.linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noreferrer"
                            class="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-left transition hover:border-white/25 hover:bg-white/[0.05]"
                    >
                        <LinkedinLogoIcon size="20" />
                        <span class="mt-4 block font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">LinkedIn</span>
                        <span class="mt-3 block text-sm text-white/84">linkedin.com/in/yourusername</span>
                    </a>
                </div>
            </div>
        </section>
    </main>

    <footer class="border-t border-white/10">
        <div class="mx-auto max-w-6xl px-6 py-6 text-center font-mono text-xs uppercase tracking-[0.28em] text-white/36 md:px-10">
            Oliver Something • Python & Django Backend Developer
        </div>
    </footer>
</div>
