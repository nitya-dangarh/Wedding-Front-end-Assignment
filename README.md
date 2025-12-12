# Quiz Interface — Frontend Assignment

A pixel-perfect implementation of a multi-step quiz UI based on a provided Figma design. Built with Next.js, React, TypeScript and Tailwind CSS. Desktop-optimized as required by the assignment.

Live demo: https://wedding-front-end-assignment.vercel.app

Result screenshots: public/result1.png, public/result2.png, public/result3.png

## Key Features
- Pixel-perfect reproduction of Figma screens
- Multi-step quiz flow with Previous / Next navigation
- Gradient option cards and interactive hover states
- Live progress bar and smooth transitions
- Final result screen with score calculation
- Reusable components and clean component structure
- Optional Framer Motion animations

## Tech Stack
- Next.js (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Framer Motion (optional)
- npm

## Quick Start

1. Clone
   git clone https://github.com/nitya-dangarh/Wedding-Front-end-Assignment.git

2. Install
   npm install

3. Run (development)
   npm run dev
   Open: http://localhost:3000

4. Production
   npm run build
   npm start

## Scripts
- npm run dev — start dev server
- npm run build — build production bundle
- npm start — run production server

## Project Structure
project-root/
├── public/                  # static assets (Result1.png, result2.png, result3.png)
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── results/page.tsx
│   ├── components/
│   │   ├── ProgressBar.tsx
│   │   ├── QuizCard.tsx
│   │   ├── NavigationButtons.tsx
│   │   └── ResultScreen.tsx
│   └── styles/globals.css
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md

## Score Calculation
- Answers are stored in local component/state.
- Final score = (number of correct answers / total questions) * 100.
- After submission the user is navigated to the Results screen.

## Assumptions & Notes
- Questions are static and stored locally (no backend).
- Desktop-only layout per assignment requirements.
- Images in /public are used for backgrounds and result previews.
- Animations via Framer Motion are optional and can be toggled/extended.

## Suggestions
- Add unit tests for core components (QuizCard, ProgressBar).
- Move questions to a JSON file to decouple data from UI.
- Add accessibility enhancements (keyboard navigation, ARIA labels).

## Author / Time Spent
Project implemented as an assignment — ~6 hours total (UI, logic, polish, deployment).

---
