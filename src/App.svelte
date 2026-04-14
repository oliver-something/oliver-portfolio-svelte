<script>
    import BinaryRain from './lib/components/BinaryRain.svelte';
    import SkillBadge from './lib/components/SkillBadge.svelte';
    import portrait from './assets/oliver-portrait.png';
    import InfoCard from './lib/components/InfoCard.svelte';
    import SectionTitle from './lib/components/SectionTitle.svelte';
    import ContactCard from "./lib/components/ContactCard.svelte";
    import NavLinks from "./lib/components/NavLinks.svelte";
    import ExperienceAccordion from "./lib/components/ExperienceAccordion.svelte";

    import {
        GhostIcon,
        AddressBookIcon,
        CopyrightIcon
    } from 'phosphor-svelte';

    import {contactInfoCardItems, infoCardItems, personalInfoCardItems, points, projects, skills} from "./lib/contents/index.js";
</script>

<svelte:head>
    <title>Oliver Something | Back-End / Full-Stack Developer</title>
    <meta
            name="description"
            content="Freelance / Part-time Developer focusing on FullStack and Backend Development."
    />
</svelte:head>

<div class="noise relative min-h-screen overflow-x-hidden bg-black text-white">
    <BinaryRain />
    <div class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.72))]"></div>

    <NavLinks/>

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
                    <p class="font-mono type-label uppercase tracking-[0.35em] text-white/55">Hey There, I'm</p>

                    <h1 class="type-hero font-semibold leading-none tracking-tight text-white sm:text-6xl">
                        Oliver Something
                    </h1>

                    <p class="max-w-2xl type-body-lg leading-8 text-white/74">
                        I build clean and efficient digital experiences.
                    </p>

                    <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <a
                                href="#work"
                                class="inline-flex items-center justify-center rounded-2xl border bg-white px-4 py-3 type-body-sm font-medium text-black transition hover:border-white hover:bg-white/70"
                        >
                            <GhostIcon size="20" />
                            <span class="ml-2">See Work</span>
                        </a>

                        <a
                                href="#contact"
                                class="inline-flex items-center justify-center rounded-2xl border border-white/18 bg-white/[0.04] px-4 py-3 type-body-sm font-medium text-white transition hover:border-white/35 hover:bg-white/[0.08]"
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
                        <InfoCard title={item.title} description={item.description} icon={item.icon}/>
                    {/each}
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
                    <div class="card-outline rounded-[2rem] p-6 md:p-8 border border-white/12 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
                        <div class="flex items-start gap-4">
                            <div class="min-w-0 flex-1 space-y-3">
                                <p class="font-mono type-label uppercase tracking-[0.28em] text-white/44">
                                    What I care about
                                </p>

                                <h3 class="type-card-title font-semibold tracking-tight text-white">
                                    Backend work that still makes sense six months later
                                </h3>

                                <p class="type-body-sm max-w-xl text-white/62">
                                    Less framework theater, more systems that are readable, reliable,
                                    and painless to evolve.
                                </p>
                            </div>

                            <div class="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/45 md:flex">
                                <span class="font-mono type-label">01</span>
                            </div>
                        </div>

                        <ul class="mt-8 divide-y divide-white/8">
                            {#each points as point}
                                <li class="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                                    <span class="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full bg-white/38"></span>
                                    <p class="type-body-sm text-white/78">{point}</p>
                                </li>
                            {/each}
                        </ul>
                    </div>

                    <div class="card-outline rounded-[2rem] p-6 md:p-8 border border-white/12 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
                        <div class="flex items-start gap-4">
                            <div class="min-w-0 flex-1 space-y-3">
                                <p class="font-mono type-label uppercase tracking-[0.28em] text-white/44">
                                    Core toolkit
                                </p>

                                <h3 class="type-card-title font-semibold tracking-tight text-white">
                                    Tools I actually like building with
                                </h3>

                                <p class="type-body-sm max-w-xl text-white/62">
                                    A backend-first stack shaped around clarity, delivery speed,
                                    and systems that are easy to reason about.
                                </p>
                            </div>

                            <div class="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/45 md:flex">
                                <span class="font-mono type-label">02</span>
                            </div>
                        </div>

                        <div class="mt-8">
                            <div class="flex flex-wrap gap-3">
                                {#each skills as skill}
                                    <SkillBadge label={skill} />
                                {/each}
                            </div>
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
                        description="Not shiny app-store tiles. Real backend ideas with clear scope, system thinking, and room for actual implementation details."
                        centered
                />

                <ExperienceAccordion items={projects}/>
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
                    {#each contactInfoCardItems as item}
                        <ContactCard {item} />
                    {/each}
                </div>
            </div>
        </section>
    </main>

    <footer class="border-t border-white/10">
        <div class="mx-auto max-w-6xl px-6 py-6 md:px-10">
            <ul class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center font-mono type-label uppercase tracking-[0.18em] text-white sm:tracking-[0.28em]">
                <li>Oliver Something</li>
                <li class="flex items-center">
                    <CopyrightIcon size={window.innerWidth > 640 ? 24 : 16} />
                </li>
                <li>{new Date().getFullYear()}</li>
            </ul>
        </div>
    </footer>
</div>

<!--

    1. TODO Add the logo to the navbar and favicon
    2. TODO Add animation to the Info cards : DONE!
    3. TODO Add Download CV
    4. TODO Complete the about me section
    5. TODO The stack section needs real content
    6. TODO Work needs to be redefined and real content
    7. TODO The contact requires real work to be done!
    8. Todo Fix all of the remaining text-sizes : DONE!
    9. Separation of concerns! Fuck!!!!!
-->