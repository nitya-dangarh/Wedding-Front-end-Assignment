# Wedding Front-end Assignment

A pixel-perfect desktop-only web interface built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: 
  - DM Serif Display (for titles)
  - Manrope (for body text)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page (Quiz questions 1-4)
│   └── results/
│       └── page.tsx       # Results page
├── components/
│   ├── QuizCard.tsx      # Main quiz card container (reusable)
│   ├── QuestionBlock.tsx # Question display component
│   ├── AnswerOption.tsx  # Answer option button
│   ├── NavigationButtons.tsx # Navigation arrows
│   ├── DecorativePaw.tsx # Decorative cat paw element
│   ├── ResultsPage.tsx   # Results page component
│   └── RollingCounter.tsx # Animated rolling counter for score
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## Features Implemented

### Pages 1-4: Quiz Question Pages
- ✅ Pixel-perfect layout matching Figma design
- ✅ Gradient background (linear gradient from #BECFEE to #D9F4FA)
- ✅ Main quiz card with rounded corners (42px radius)
- ✅ Typography matching design specs:
  - Title: DM Serif Display, 90px, italic
  - Subtitle: Manrope, 20px, medium weight
- ✅ Question block with light blue gradient background
- ✅ Three answer options with hover states
- ✅ Progress indicator showing current question (5 segments)
- ✅ Navigation buttons (previous/next) with disabled states
- ✅ Decorative cat paw with speech bubble
- ✅ Smooth transitions and hover animations
- ✅ Answer state management across questions
- ✅ Accessibility features (ARIA labels, keyboard focus)

### Page 5-6: Results Page
- ✅ "Keep Learning!" badge at the top
- ✅ "Your Final score is" heading (DM Serif Display, 60px, italic)
- ✅ Animated rolling counter for score display
  - Two-digit rolling counter animation
  - DM Serif Display, 213.91px font size
  - Smooth spring animation
- ✅ Percentage symbol display
- ✅ "Start Again" button with hover states
- ✅ Score calculation based on correct answers
- ✅ Smooth page transitions and animations

## Design Specifications

### Colors
- Background Gradient: `#BECFEE` → `#71C6E2` → `#D9F4FA` → `#BECFEE`
- Card Background: `#F4FDFF`
- Primary Text: `#15313D`
- Accent Blue: `#96E5FF`
- Border Gray: `#E6E6E6`

### Typography
- **Title**: DM Serif Display, Italic, 90px, line-height 24px, letter-spacing -4px
- **Subtitle**: Manrope, Medium, 20px, line-height 24px, letter-spacing -0.31px
- **Results Heading**: DM Serif Display, Italic, 60px, line-height 24px, letter-spacing -4px
- **Score Display**: DM Serif Display, Regular, 213.91px, letter-spacing -2%

### Dimensions
- Main Card: 1542px × 856px
- Corner Radius: 42px
- Question Block: 896px × 78px
- Answer Options: 896px × 78px
- Navigation Buttons: 50px × 50px

## Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Alt text for decorative images

## Deployment

This project can be deployed to Vercel or Netlify:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'out' directory or use Netlify CLI
```

## Notes

- This is a desktop-only implementation
- All measurements are pixel-perfect based on Figma specifications
- Hover states and transitions are implemented using Framer Motion
- The design uses a fixed width layout optimized for 1920px screens

## Quiz Questions

1. **Question 1**: "What sound does a cat make?"
   - Answers: Bhau-Bhau, Meow-Meow, Oink-Oink
   - Correct: Meow-Meow

2. **Question 2**: "What would you probably find in your fridge?"
   - Answers: Shoes, Ice Cream, Books
   - Correct: Ice Cream

3. **Question 3**: "How many stars are in the sky?"
   - Answers: Two, Infinite, One Hundred
   - Correct: Infinite

4. **Question 4**: "What color are bananas?"
   - Answers: Blue, Yellow, Red
   - Correct: Yellow

## Status

- ✅ Pages 1-4: Quiz Question Pages - Complete
- ✅ Pages 5-6: Results Page with Rolling Counter - Complete
- ✅ Navigation between questions - Complete
- ✅ Score calculation - Complete
- ✅ Animations and transitions - Complete

## Author

Built as part of a frontend developer assignment.

