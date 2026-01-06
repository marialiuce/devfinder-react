# DevFinder

![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)

A responsive web application that utilizes the GitHub API to search for user profiles and display their most popular repositories. Built with React and Tailwind CSS, focusing on clean UI and efficient data handling.

[Live Demo](https://devfinder-react-five.vercel.app/)

## Technologies

 `React` `Tailwind CSS` `Vite` `JavaScript` `GitHub API` `React Icons`

## Features

- Real-time search for GitHub users via username
- Detailed profile display including avatar, location, followers, and following count
- Automatic filtering and sorting to display the top 5 repositories based on stars
- Fully responsive layout adapted for mobile and desktop
- Error handling for non-existent users

## The Process

This project started as a challenge to master API consumption and state management in React. The main goal was to move beyond static layouts and handle dynamic data from a real-world external source.

Initially built with standard CSS, the project underwent a complete refactoring to Tailwind CSS. This transition allowed for a cleaner codebase and faster styling iterations. The core logic involves asynchronous data fetching and client-side array manipulation specifically sorting repositories by star count and slicing the array to ensure the user sees the most relevant content immediately.

## Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open `http://localhost:5173` in your browser

## Preview

https://github.com/user-attachments/assets/224cabd1-5aa0-46db-9565-6afa1857face
