# Multi-Page React Dashboard

A responsive multi-page dashboard application built using React.js, React Router, Context API, Redux Toolkit, and TanStack Query. The project demonstrates page navigation, mock authentication, protected routes, global state management, API data fetching, caching, and custom user search.

## Features

- **Multi-page navigation:** Navigate between Dashboard, Users, Profile, and Settings using React Router.
- **Mock authentication:** Demonstrates login and logout functionality using React Context API.
- **Protected routes:** Restricts dashboard pages to users with an active demo login.
- **Global state management:** Uses Redux Toolkit to manage the shared user search term.
- **Server-state management:** Uses TanStack Query for fetching, caching, and managing API data.
- **Custom user data:** Displays user information from a local JavaScript array.
- **User search:** Search users by name, username, email, or company.
- **Reusable components:** Uses shared Button, Input, Loader, and ErrorMessage components.
- **Responsive design:** Includes a navbar, sidebar, cards, and mobile-friendly layouts.
- **Error handling:** Demonstrates loading and error states for API-driven pages.

## Technologies Used

- React.js
- JavaScript (ES6+)
- Vite
- React Router DOM
- Context API
- Redux Toolkit
- React Redux
- TanStack Query
- HTML5
- CSS3
- Git and GitHub

## Project Structure

```text
react-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ErrorMessage.jsx
│   │   └── layout/
│   │       ├── Navbar.jsx
│   │       ├── Sidebar.jsx
│   │       └── DashboardLayout.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── data/
│   │   └── users.js
│   ├── features/
│   │   └── users/
│   │       └── userSlice.js
│   ├── hooks/
│   │   └── useAuth.js
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Users.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   └── NotFound.jsx
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── userService.js
│   ├── store/
│   │   └── index.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Prerequisites

Before running the project, install:

- Node.js (LTS version recommended)
- npm
- Visual Studio Code (recommended)
- Git (for version control)

## Installation and Setup

### 1. Clone the repository

Replace `YOUR-USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR-USERNAME/react-dashboard.git
```

### 2. Navigate to the project directory

```bash
cd react-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

The Users page uses local custom data. The API URL is used by the API service for pages that fetch sample server data.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal, usually:

http://localhost:5173

## Application Pages

| Page | Route | Description |
|---|---|---|
| Login | `/login` | Demonstrates the login form |
| Dashboard | `/dashboard` | Displays dashboard overview and sample API statistics |
| Users | `/users` | Displays and searches custom user records |
| Profile | `/profile` | Displays the current demo user's information |
| Settings | `/settings` | Demonstrates interactive preferences |
| Not Found | Any unknown route | Displays a 404 page |

Dashboard routes require a demo login.

## Custom User Data

Custom users are maintained in:

`src/data/users.js`

Each user contains:

- `id`
- `name`
- `username`
- `email`
- `company`

You can add, edit, or remove records in this array. The Users page filters the local data using the search term stored in Redux.

## State Management

### Context API

Used to share authentication state and login/logout functions across components.

### Redux Toolkit

Stores the shared search term used by the Users page.

### TanStack Query

Fetches and caches server data, and provides loading, error, and refetch states.

These tools demonstrate different responsibilities: Context API handles demo authentication, Redux manages shared client state, and TanStack Query manages server state.

## Authentication Note

This project uses **mock authentication for learning and demonstration purposes only**. It does not verify credentials against a backend. The demo accepts any non-empty password when the email is valid.

The local storage session and frontend protected routes are not secure authentication mechanisms. A production application should use backend credential verification, secure session handling, and server-side authorization.

## Future Enhancements

- Connect a FastAPI backend.
- Integrate PostgreSQL for persistent user storage.
- Implement real registration, login, and logout APIs.
- Add form validation using Formik and Yup.
- Add pagination and sorting to the Users page.
- Add charts and analytics to the dashboard.
- Add automated tests.
- Deploy the application.

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
```

- `npm run dev` — starts the development server.
- `npm run build` — creates a production build.
- `npm run preview` — previews the production build locally.

## Version Control

To upload your latest changes to GitHub:

```bash
git add .
git commit -m "Add React dashboard README"
git push
```

## Author

**Your Name**

GitHub: https://github.com/vanaja4503
