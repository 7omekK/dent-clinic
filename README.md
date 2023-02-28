## Motivation
My motivation to start the project was primarily to get some experience in newest version of next.js as a tool for building fullstack application (before considered Node.js). In my career, I was developing projects using Angular 1, Angular 7+, React or Lit, but React is the framework of my choice to grow further as front-end developer.

## Design system
I made decision to create design system of my own using Browser and Figma. I follow guidelines from "Refactoring UI" book by tialwindcss creators, but also decided to not use tialwindcss framework in my project. Besides many methodologies like BEM, OOCSS or SMACSS, I chose to use pure css with Sass preprocesor. Interesting fact is, that only css variables can cross boundarie of shadow dom, not global css classes (think of Web Components).

Current state of design system:
- Basic spacing and sizing system (including breakpoints)
- Basic Typography (for now native for every OS)
- Picking colors for project is postponed untill development of index page

Please treat my visual part of my app as something between high and low fidelity prototypes. Details come later.

## Getting Started
To run development server use:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```