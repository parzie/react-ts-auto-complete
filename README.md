# Pokemon Autocomplete Component with React + TypeScript + Vite

## About

Simple Autocomplete Component built with pure React, TS and basic CSS as part of a code challenge without using any 3th party library. Input Element that consumes a public API (Pokemon API [https://pokeapi.co/](https://pokeapi.co)) when user starts typing and suggests a list of results, highlightning the word in common.

### Main features and practices

- Debounce Hook for autocomplete feature to improve usability.
- Spinner to improve usability when Api request is too long.
- Responsive design.
- Api call request with cached data to improve performance.
- Bem CSS architecture to manage the scope of the styles.

## Getting Started

To run project locally, follow these simple example steps.

### Prerequisites
- A browser to open the main file
- Latest verion of Node.js (v21.4.0)
- Yarn

### Local deploy
- Clone the repository to your local machine git clone( `git clone https://github.com/parzie/react-ts-auto-complete.git``).
- Install dependencies by running `yarn`.
- Run the app with `yarn dev`.
- Display page by default in http://localhost:5173/

## Building for Production

- When it is time to deploy the app for production, simply run the command `yarn build`. By default, it uses root/index.html as the build entry point, and produces an application bundle that is suitable to be served over a static hosting service.

