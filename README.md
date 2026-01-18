# Marketing App

Welcome to the **Marketing App**! This project is a modern web application designed to provide a seamless user experience for marketing-related tasks. It includes features like user authentication, dynamic routing, and a clean, responsive UI.

---

## Features

- **404 Page**: A custom "Not Found" page to handle invalid routes gracefully.
- **Authentication**: Login and Signup flows for user management.
- **Responsive Design**: Fully responsive layout using Tailwind CSS.
- **React Router**: Dynamic routing for seamless navigation.
- **Error Handling**: Logs errors for debugging purposes.

---

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Build Tool**: Vite

---

## File Structure
src/
├── components/
│   └── ui/          # Reusable UI components
├── pages/
│   ├── Login.tsx    # Login page
│   ├── Signup.tsx   # Signup page
│   ├── NotFound.tsx # 404 page
├── hooks/
│   └── useAuth.ts   # Custom authentication hook
├── lib/
│   └── api-client.ts # API client for backend communication
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Tailwind CSS styles


---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/marketing-app.git
   cd marketing-app```

2. Install dependencies:
  ```bash 
  npm install ```

3. Start the development server:
  ```bash
  npm run dev```

4. Open the app in your browser:
  ```bash
  http://localhost:5173```

### Scripts
npm run dev: Start the development server.
npm run build: Build the app for production.
npm run preview: Preview the production build.


### Custom 404 Page
The NotFound.tsx component handles invalid routes. It displays a user-friendly message and logs the error in the console for debugging.

### Contributing
Contributions are welcome! Please fork the repository and submit a pull request.


### License
This project is licensed under the MIT License. ```