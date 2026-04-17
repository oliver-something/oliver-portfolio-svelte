# Personal Portfolio Website

A personal portfolio website built with **Svelte**, **Vite**, and **Tailwind CSS**.

## Overview

This project is my personal portfolio website. It is designed to present my background, skills, experience, and contact information in a clean and modern interface.

## Tech Stack

- **Svelte** — UI framework
- **Vite** — build tool and development server
- **Tailwind CSS** — styling
- **Geist / Geist Mono** — typography
- **Phosphor Svelte** — icons

## Getting Started

### Prerequisites

Make sure one of the following is installed on your machine:

- **npm**
- **Bun**

## Installation

### Using npm

```bash
npm install
```

### Using Bun

```bash
bun install
```

## Running the Project Locally

### Using npm

```bash
npm run dev
```

### Using Bun

```bash
bun run dev
```

The development server will usually be available at:

```text
http://localhost:5173
```

## Production Build

### Using npm

```bash
npm run build
```

### Using Bun

```bash
bun run build
```

## Preview Production Build

### Using npm

```bash
npm run preview
```

### Using Bun

```bash
bun run preview
```

## Important Note About Lockfile

Because of network limitations during development, the committed `package-lock.json` may contain registry references that are not ideal for every environment.

If you run into dependency installation issues:

1. Remove `package-lock.json`
2. Reinstall dependencies locally using your preferred package manager

Example:

```bash
rm package-lock.json
npm install
```

or

```bash
rm package-lock.json
bun install
```

## Project Structure

```text
.
├── public/              # static assets
├── src/
│   ├── lib/
│   │   ├── components/  # reusable UI components
│   │   ├── data/        # structured content such as projects and skills
│   │   └── assets/      # imported assets
│   ├── app.css          # global styles and typography tokens
│   ├── App.svelte       # main application layout
│   └── main.js          # application entry point
├── index.html
├── package.json
└── vite.config.js
```

## Deployment

This project builds to static files and can be deployed to any static hosting platform.

Build output is generated in:

```text
dist/
```

## License

This project is intended for personal and portfolio use.
