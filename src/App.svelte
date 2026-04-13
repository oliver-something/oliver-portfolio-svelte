<script>
  import BinaryRain from './lib/components/BinaryRain.svelte';
  import ProjectCard from './lib/components/ProjectCard.svelte';
  import SectionTitle from './lib/components/SectionTitle.svelte';
  import SkillBadge from './lib/components/SkillBadge.svelte';
  import portrait from './assets/oliver-portrait.png';
  import {FileCodeIcon, GithubLogoIcon, LinkedinLogoIcon, TerminalWindowIcon, WrenchIcon} from "phosphor-svelte";
  import InfoCard from "./lib/components/InfoCard.svelte";

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
    'System Design',
  ];

  const focusAreas = [
    {
      title: 'Backend architecture',
      text: 'Clean service boundaries, maintainable code, and systems that still make sense six months later.'
    },
    {
      title: 'API engineering',
      text: 'Reliable endpoints, robust auth flows, and data models that do not collapse into spaghetti after version two.'
    },
    {
      title: 'Shipping mindset',
      text: 'Practical engineering choices, careful debugging, and a steady bias toward useful software over ornamental hype.'
    }
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
          description: 'FullStack development, Designing WebAPIs',
          icon: TerminalWindowIcon,
      },
      {
          title: 'Core Skills',
          description: 'Python, Django, Relational Databases, Svelte',
          icon: FileCodeIcon,
      },
      {
          title: 'Soft Skills',
          description: 'Building practical and scalable solutions',
          icon: WrenchIcon,
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
    <BinaryRain/>
  <div class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_26%),linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.72))]"></div>

  <header class="sticky top-0 z-30 border-b border-white/10 bg-black/55 backdrop-blur-xl">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
      <a href="#home" class="font-mono text-sm uppercase tracking-[0.34em] text-white/90">Oliver Something</a>

      <nav class="hidden items-center gap-8 text-sm text-white/65 md:flex">
        <a class="transition hover:text-white" href="#about">About</a>
        <a class="transition hover:text-white" href="#stack">Stack</a>
        <a class="transition hover:text-white" href="#work">Work</a>
        <a class="transition hover:text-white" href="#contact">Contact</a>
      </nav>
    </div>
  </header>
  <main class="flex flex-col flex-1">
      <section id="home" class="section-shell flex min-h-[calc(100vh-72px)] items-center justify-center">

          <div class="flex w-full flex-col items-center justify-center gap-8">
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

              <div class="flex max-w-4xl flex-col items-center gap-5 text-center">
                  <p class="font-mono text-xs uppercase tracking-[0.35em] text-white/55">
                      Hey There, I'm
                  </p>

                  <h1 class="text-5xl font-semibold leading-none tracking-tight text-white sm:text-6xl md:text-7xl">
                      Oliver Something
                  </h1>

                  <p class="max-w-2xl text-xl leading-8 text-white/74 md:text-2xl">
                      I build clean and efficient digital experiences.
                  </p>

                  <div class="flex flex-row gap-4 pt-2">
                      <a
                              href="#work"
                              class="inline-flex items-center justify-center rounded-2xl border bg-white px-3 py-3 text-sm font-medium text-black transition hover:border-white hover:bg-white/70 hover:animate-pulse"
                      >
                          <GithubLogoIcon size="25" />
                      </a>

                      <a
                              href="#contact"
                              class="inline-flex items-center justify-center rounded-2xl border border-white/18 bg-white/[0.04] px-3 py-3 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/[0.08] hover:animate-pulse"
                      >
                          <LinkedinLogoIcon size="25" />
                      </a>
                  </div>
              </div>

              <div class="grid w-full gap-4 pt-4 sm:grid-cols-3">
                  {#each infoCardItems as item}
                      <InfoCard
                              title={item.title}
                              description={item.description}
                              icon={item.icon}
                      />
                  {/each}
              </div>
          </div>
      </section>

    <section id="about" class="section-shell pt-4 md:pt-10">
      <SectionTitle
        eyebrow="About"
        title="A backend portfolio with more signal than glitter"
        description="This layout keeps the spotlight on engineering craft: scalable Django services, thoughtful architecture, and systems built to do real work instead of collecting decorative buzzwords."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-10">
          <div class="space-y-6 text-white/74">
            <p class="text-lg leading-8">
              I build backend systems with Python and Django, focusing on APIs, business logic, database design, and the kind of reliability people only notice when it is missing.
            </p>
            <p class="text-base leading-8">
              The visual language here mirrors the work: black, white, contrast, structure. No sugar fog. Just a clean one-page portfolio with a cinematic portrait, a responsive layout, and a binary rain background threaded quietly behind the content.
            </p>
            <div class="rounded-2xl border border-white/10 bg-black/35 p-5">
              <p class="font-mono text-xs uppercase tracking-[0.3em] text-white/48">Current angle</p>
              <p class="mt-3 text-sm leading-7 text-white/72">
                Python backend engineering, Django application design, RESTful services, async processing, authentication flows, and database-heavy product work.
              </p>
            </div>
          </div>
        </div>

        <div class="grid gap-4">
          {#each focusAreas as area}
            <div class="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 md:p-7">
              <p class="font-mono text-xs uppercase tracking-[0.28em] text-white/44">{area.title}</p>
              <p class="mt-4 text-base leading-8 text-white/72">{area.text}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section id="stack" class="section-shell">
      <SectionTitle
        eyebrow="Stack"
        title="Tools and backend habits"
        description="The page uses a black-and-white system throughout, while the stack section keeps the content practical and easy to scan on desktop or mobile."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
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
    </section>

    <section id="work" class="section-shell">
      <SectionTitle
        eyebrow="Work"
        title="Featured backend directions"
        description="These project cards are written as polished placeholders so you can swap in your real work later without having to rewire the whole page."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        {#each projects as project}
          <ProjectCard {project} />
        {/each}
      </div>
    </section>

    <section id="contact" class="section-shell pb-24">
      <div class="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 md:p-12">
        <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div class="space-y-4">
            <p class="font-mono text-xs uppercase tracking-[0.35em] text-white/48">Contact</p>
            <h2 class="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Need a backend developer who prefers solid systems over chaos confetti?
            </h2>
            <p class="max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Replace the placeholder links below with your real contact details, GitHub, and LinkedIn. The structure is already in place, so you only need to swap the URLs and the copy.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:your-email@example.com"
              class="rounded-2xl border border-white/12 bg-black/35 px-5 py-5 text-sm text-white/84 transition hover:border-white/30 hover:bg-black/50"
            >
              <span class="block font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">Email</span>
              <span class="mt-3 block">your-email@example.com</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              class="rounded-2xl border border-white/12 bg-black/35 px-5 py-5 text-sm text-white/84 transition hover:border-white/30 hover:bg-black/50"
            >
              <span class="block font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">GitHub</span>
              <span class="mt-3 block">github.com/yourusername</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              class="rounded-2xl border border-white/12 bg-black/35 px-5 py-5 text-sm text-white/84 transition hover:border-white/30 hover:bg-black/50 sm:col-span-2"
            >
              <span class="block font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">LinkedIn</span>
              <span class="mt-3 block">linkedin.com/in/yourusername</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="border-t border-white/10 px-6 py-6 text-center font-mono text-xs uppercase tracking-[0.28em] text-white/36 md:px-10">
    Oliver Something • Python & Django Backend Developer
  </footer>
</div>
