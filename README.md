# SARCcoord

here is the gdrive link for the website : https://drive.google.com/file/d/1eh2ltHotnvI_UDasUr4eVPZi-9Uymjf-/view?usp=drive_link
this stores my assignment for the SARC Coordinator assignment.

okay so file structure is as shown below:
frontend is stored inside my-react-app;

my-react-app/
│
├── .vite/ # Vite internal config/cache (auto-generated)
├── node_modules/ # Installed dependencies
│
├── public/
│ ├── fonts/
│ │ ├── canela.otf
│ │ ├── canela1.otf
│ │ └── headfont.otf # Custom fonts used in the app
│ └── vite.svg # Vite default icon
│
├── src/
│ ├── assets/ # Static media assets
│ │ ├── react.svg
│ │ ├── sarc.mp4 # Embedded video
│ │ ├── sarc.png
│ │ ├── sarcbw.png
│ │ └── tree.png
│ │
│ ├── components/ # Reusable UI components
│ │ ├── bgvid.tsx # Background video component
│ │ ├── EventCard.tsx # Card UI for displaying events
│ │ ├── homenav.tsx # Homepage navigation bar
│ │ └── PortfolioCard.tsx # Component for showing alumni portfolio
│ │
│ ├── pages/ # Full page views (home, about, etc.)
│ │ ├── Home.tsx # Main landing page
│ │ └── Events.tsx # Events admin page
│ │
│ ├── App.tsx # Root component
│ ├── App.css # Global styles for App
│ ├── main.tsx # App entry file (ReactDOM render)
│ ├── index.css # Global styles (tailwind or base)
│ └── vite-env.d.ts # Vite TypeScript env declarations
│
├── index.html # Main HTML template for Vite
├── vite.config.ts # Vite configuration file
├── package.json # Project dependencies and scripts
├── package-lock.json # Lock file for dependencies
├── tsconfig.json # TypeScript compiler options
├── tsconfig.app.json # TypeScript app-specific config
├── tsconfig.node.json # TypeScript config for node-related tools
├── eslint.config.js # ESLint configuration
├── .gitignore # Ignored files in Git
└── README.md # 📄 You're here

for the backend structure:

backend/
│
├── manage.py # Django's CLI utility for managing the project
├── db.sqlite3 # SQLite database file
│
├── backend/ # Root Django project folder
│ ├── **init**.py # Marks this directory as a Python package
│ ├── asgi.py # ASGI config (for async deployment)
│ ├── settings.py # Project settings (DB, apps, middleware)
│ ├── urls.py # Root URL router for the project
│ └── wsgi.py # WSGI config (for traditional deployment)
│
├── event_app/ # Custom Django app for event features
│ ├── **init**.py
│ ├── admin.py # Admin panel configuration
│ ├── apps.py # App config and metadata
│ ├── models.py # Database models
│ ├── serializers.py # Django REST Framework serializers
│ ├── urls.py # App-level URL routing
│ ├── views.py # API view logic (CBV/FBV)
│ ├── tests.py # Unit tests for this app
│ ├── migrations/ # Django migration files
│ │ ├── **init**.py
│ │ ├── 0001_initial.py # Initial migration script
│ │ └── **pycache**/
│ │
│ └── **pycache**/ # Python bytecode cache (auto-generated)
│
└── **pycache**/ # Project-level bytecode cache

myenv is a virtual environment created by me which was used to install any useful libraries required for this project.

now along with react and django frameworks i have also utilised my editing skills through
apple motion, with which i created the initial text animation which plays before the home page lands.
along with that i utilised several fonts for the text to look better for user experience.

as mentioned in the assignment i have used framer motion library also, thats for the tree image plus
the cards which animate one by one when you scroll down. i have used marquee text in the footer for the
text to look even better and moving.
