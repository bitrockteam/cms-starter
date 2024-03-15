# CMS Starter 🚀

<img width="1918" alt="Schermata 2024-03-15 alle 12 02 07" src="https://github.com/bitrockteam/cms-starter/assets/24392867/5fbe753e-afec-4892-8229-1b94a3ba2245">

Welcome to CMS Starter! This boilerplate project powered by Next.js and Sanity CMS, integrated with TurboRepo for efficient development of static sites and blogs, provides you with everything you need to kickstart your project.

## Project Structure 📂
This project is managed as a monorepo using TurboRepo, allowing for streamlined development across multiple applications.

## Package Manager 📦

The project utilizes pnpm as the package manager for managing dependencies.

## What's Included? 📦

### Applications 🖥️

- `web`: A Next.js application for the actual web content
- `cms`: A Sanity CMS application for content management

Each application is developed using TypeScript.

### Shared Configurations 🛠️

Two shared configuration packages are included:

- `@repo/eslint-config`: ESLint configurations shared among all apps.
- `@repo/typescript-config`: TypeScript configurations used throughout the monorepo.

These configurations ensure consistency and quality across all applications.

### Additional Features ✨

Within the project, you'll find:

- **Tailwind CSS**: Integrated for easy styling and customization.
- **Base Template**: Includes a home page, a page displaying all posts, and single post pages that fetch data directly from the Sanity Studio CMS project.

## Getting Started 🚀

After cloning the repository, navigate to the root directory of your project and run the following commands:

```sh
pnpm install # Install dependencies
pnpm dev # Start the development server
```

This will install all required dependencies and start the development server for both the web and cms applications.

## Configuration

To configure the applications, you need to create a .env file based on .env.example and fill in the following fields:

```sh
SANITY_STUDIO_PROJECT_ID=
SANITY_STUDIO_PROJECT_DATASET=
```

These fields should be populated with the data provided during the creation of a new project with Sanity in the remote environment.

## Start Building! 🛠️
Now that you're all set up, start building amazing static sites and blogs with ease using CMS Starter! Happy coding! 🎉

