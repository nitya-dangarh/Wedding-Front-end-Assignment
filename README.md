README.md
Quiz Interface – Frontend Assignment
This project is a pixel-perfect implementation of the provided Figma design for a multi-step quiz interface. It is built using Next.js, React, TypeScript, and Tailwind CSS.
The UI replicates all screens from the Figma file, including the question pages, progress bar, navigation controls, and final score screen.
The application is optimized for desktop-only as required in the assignment.
🔗 Live Demo
https://wedding-front-end-assignment.vercel.app
📸 Preview Screens
Question Screen	Another Question	Final Result
(You may replace these with actual screenshots from your build.)
✨ Features
Core Features
Pixel-perfect UI based on the Figma design
Multi-step quiz flow
Question UI with gradient options
Navigation buttons (Previous / Next)
Live progress indicator bar
Final score calculation and display
Smooth transitions and clean UI
Desktop-optimized layout
Responsive container and well-structured components
Additional Enhancements
Subtle animations using Framer Motion (optional)
Hover effects for interactive elements
Reusable components (Buttons, Progress Bar, Option Card)
🛠️ Tech Stack
Category	Technology
Framework	Next.js 
package
Language	TypeScript 
tsconfig
UI	React 19 & Tailwind CSS
Animations	Framer Motion
Styling System	Tailwind + custom gradients & shadows
Build Tool	Next.js built-in compiler
Package Manager	npm
Your package.json shows these core dependencies:
next
react
react-dom
tailwindcss
typescript
framer-motion

package
📂 Folder Structure
project-root/
│── public/
│    ├── Result1.png
│    ├── result2.png
│    ├── result3.png
│── src/
│    ├── app/
│    │    ├── page.tsx
│    │    ├── results/
│    │    │     └── page.tsx
│    ├── components/
│    │    ├── ProgressBar.tsx
│    │    ├── QuizCard.tsx
│    │    ├── NavigationButtons.tsx
│    │    ├── ResultScreen.tsx
│    ├── styles/
│    │    └── globals.css
│── package.json
│── tailwind.config.ts
│── tsconfig.json
│── README.md
🚀 Running the Project Locally
1. Clone the Repository
git clone https://github.com/nitya-dangarh/Wedding-Front-end-Assignment.git
2. Install Dependencies
npm install
3. Start Development Server
npm run dev
The project runs on:
http://localhost:3000
📦 Production Build
npm run build
npm start
🧮 Score Calculation Logic (Summary)
Each question has predefined correct answers
When user selects an option, it's stored in state
After final submission, score is calculated as:
(correctAnswers / totalQuestions) * 100
User is navigated to the Final Score Screen
🧠 Assumptions Made
Quiz questions are static and stored locally
No backend or database is required for this assignment
Only desktop design was required (no mobile responsiveness per assignment)
A simple scoring system based on number of correct answers
Images inside /public are used as backgrounds and result previews
⏱️ Time Spent
Task	Time
UI layout & main page structure	~2 hours
Styling & gradients	~1.5 hours
Quiz logic + navigation	~1 hour
Final screen + score logic	~30 minutes
Error fixes, cleanup & deployment	~1 hour
Total	~6 hours