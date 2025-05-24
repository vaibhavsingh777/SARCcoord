# SARCcoord
this stores my assignment for the SARC Coordinator assignment.

okay so file structure is as shown below:
frontend is stored inside my-react-app;

my-react-app/
│
├── .vite/                       # Vite internal config/cache (auto-generated)
├── node_modules/                # Installed dependencies
│
├── public/
│   ├── fonts/
│   │   ├── canela.otf
│   │   ├── canela1.otf
│   │   └── headfont.otf         # Custom fonts used in the app
│   └── vite.svg                 # Vite default icon 
│
├── src/
│   ├── assets/                  # Static media assets
│   │   ├── react.svg
│   │   ├── sarc.mp4             # Embedded video
│   │   ├── sarc.png
│   │   ├── sarcbw.png
│   │   └── tree.png
│   │
│   ├── components/              # Reusable UI components
│   │   ├── bgvid.tsx            # Background video component
│   │   ├── EventCard.tsx        # Card UI for displaying events
│   │   ├── homenav.tsx          # Homepage navigation bar
│   │   └── PortfolioCard.tsx    # Component for showing alumni portfolio
│   │
│   ├── pages/                   # Full page views (home, about, etc.)
│   │   ├── Home.tsx             # Main landing page
│   │   └── Events.tsx           # Events admin page
│   │
│   ├── App.tsx                  # Root component
│   ├── App.css                  # Global styles for App
│   ├── main.tsx                 # App entry file (ReactDOM render)
│   ├── index.css                # Global styles (tailwind or base)
│   └── vite-env.d.ts            # Vite TypeScript env declarations
│
├── index.html                   # Main HTML template for Vite
├── vite.config.ts               # Vite configuration file
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Lock file for dependencies
├── tsconfig.json                # TypeScript compiler options
├── tsconfig.app.json            # TypeScript app-specific config
├── tsconfig.node.json           # TypeScript config for node-related tools
├── eslint.config.js             # ESLint configuration
├── .gitignore                   # Ignored files in Git
└── README.md                    # 📄 You're here

for the backend structure:

backend/
│
├── manage.py                       # Django's CLI utility for managing the project
├── db.sqlite3                      # SQLite database file
│
├── backend/                        # Root Django project folder
│   ├── __init__.py                 # Marks this directory as a Python package
│   ├── asgi.py                     # ASGI config (for async deployment)
│   ├── settings.py                 # Project settings (DB, apps, middleware)
│   ├── urls.py                     # Root URL router for the project
│   └── wsgi.py                     # WSGI config (for traditional deployment)
│
├── event_app/                      # Custom Django app for event features
│   ├── __init__.py
│   ├── admin.py                    # Admin panel configuration
│   ├── apps.py                     # App config and metadata
│   ├── models.py                   # Database models
│   ├── serializers.py              # Django REST Framework serializers
│   ├── urls.py                     # App-level URL routing
│   ├── views.py                    # API view logic (CBV/FBV)
│   ├── tests.py                    # Unit tests for this app
│   ├── migrations/                 # Django migration files
│   │   ├── __init__.py
│   │   ├── 0001_initial.py         # Initial migration script
│   │   └── __pycache__/
│   │
│   └── __pycache__/                # Python bytecode cache (auto-generated)
│
└── __pycache__/                    # Project-level bytecode cache

myenv is a virtual environment created by me which was used to install any useful libraries required for this project.

