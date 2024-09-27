## About

This is a Frontend for a survey system

## Tech Stack

1. **Next.js** - This is a full-fledged framework for reactjs. With batteries-included in terms of built-in features such as routing, data-fetching and image optimization. This came in handy as this application had dynamic routes for the chat history sections to render to the ui. The in-built backend api allowed for seemless intergration of the backend service with the UI.
2. **Tailwind CSS** - This is a utility-first css framework i used to style my markup. The choice was informed by a ton of advantages that are included. There's no need of creating separate files for styling-this saved me time! Tailwind also takes the mobile-first approach, and throwing afew utility classes handles components' responsiveness.
3. **Typescript** - Offered type safety by preventing errors at runtime caused by unexpected types.
4. **Redux** - This is a library that allowed me to manage the app-wide state of the application in a centralized way. It allowed me to pass data through the component tree without having to pass props down manually at every level.

## Implementation Decisions

- **Routing**: I moved to use the NextJS folder structure for routing since it is a very convenient and powerful tool. With the provision of next/navigaition's routing, I was able to send each chat details via the params and decoded the params allowing for fetching of the data in the individual chat's page.

### Project Structure

```
├── README.md
├── app
│   ├── [fonts]
│   │
│   ├── new
│   │   └── page.tsx
│   │
│   ├── components
│   │   ├── input-types
│   │   │   ├── checkbox.tsx
│   │   │   ├── dropdown.tsx
│   │   │   ├── radio-button.tsx
│   │   │
│   │   ├── form-preview.tsx
│   │   ├── formbuilder.tsx
│   │   ├── new-chat-initializer.tsx
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
    │
    ├──lib
│       ├── utils
│   │
│   ├
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│
│
│
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── tsconfig.tsbuildinfo
```

### Challenges

Due to limited time i didn't:-

- **Integrate the edit, and delete routes**: Though those endpoints i have already created them on the nodejs backend, i didnt have enough time to integrate them on the frontend. Though they work fine.
- **Finish up the correct choice logic**: I didn't manage to finish the api that checks if the user has selected the correct choice. But i know how to do it.

### Installation

1. Clone the repository:
   ```bash
   git@github.com:UwaoEvan/survey.git
   ```
2. Install dependencies:
   `npm install`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
