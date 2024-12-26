portfolio-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/               # shadcn components
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── sections/        # Main page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   └── animations/      # Framer Motion animations
│   │       ├── FadeIn.tsx
│   │       └── ScrollAnimation.tsx
│   ├── store/              # Zustand store
│   │   ├── useThemeStore.ts
│   │   └── usePortfolioStore.ts
│   ├── lib/               # Utility functions
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── styles/            # Additional styles
│   │   └── animations.css
│   └── types/             # TypeScript types
│       └── index.ts
├── public/               # Static assets
│   ├── images/
│   └── fonts/
├── .env                  # Environment variables
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json