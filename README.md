# DevFinder

![Project Status](https://img.shields.io/badge/status-complete-green)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)

A web application to search for GitHub users and list their top repositories.
Developed as a study project to practice API consumption and data manipulation on the Front-end.

**Live Demo:** https://devfinder-react-five.vercel.app/

## Technologies Used

This project was developed with the following technologies:

- **React** (Vite)
- **Tailwind CSS** (Utility-first CSS framework for rapid UI development)
- **JavaScript** (ES6+)
- **GitHub API** (Real data consumption)
- **React Icons**

## Features

- Search for GitHub users by username.
- Display profile data (Avatar, Name, Followers, Following, Location).
- Automatic listing of the 5 most popular repositories (sorted by stars).
- Error handling (User not found).
- Fully Responsive Design and Dark Mode (built with Tailwind).

## How to run the project locally

1. **Clone the repository:**
   ```bash
    git clone [https://github.com/SEU-USUARIO/devfinder-react.git](https://github.com/SEU-USUARIO/devfinder-react.git)

2. **Enter the project folder:**
   ```bash
   cd devfinder 

3. **Install dependencies:**
   ```bash
   npm install

4. **Run the development server:**
   ```bash
   npm run dev

5. **Open your browser:**
Access http://localhost:5173 in your browser.

## Key Concepts Applied

### During the development of this project, the following concepts were applied:

- Refactoring: Migrating from Vanilla CSS to Tailwind CSS.
- React Hooks: useState for state management.
- Asynchronous Requests: Fetch API and Async/Await.
- Data Manipulation: Sorting and slicing arrays to display top content.
