# Personal Portfolio Website

This is my personal portfolio website, built with React to showcase my skills, projects, and professional background as a BCA student and tech enthusiast.

## ✨ Features

* **Responsive Design**: Looks great on desktops, tablets, and mobile phones.
* **Component-Based Architecture**: Built with reusable React components for easy maintenance.
* **Project Showcase**: A dedicated portfolio section to display my work.
* [cite_start]**Dynamic Filtering**: Users can filter projects by type (Course, Personal) and domain (FS, DBMS).
* **Contact Form**: A simple, controlled form for visitors to get in touch.

## 🛠️ Technologies & Libraries Used

I chose to build this project with the following technologies:

* **React**: For building the user interface with a component-based structure.
* [cite_start]**Material-UI (MUI)**: I selected MUI for its high-quality, pre-styled components which allowed me to build a clean and modern UI quickly.
* [cite_start]**React Router**: To handle navigation and routing between the different pages of the application (Home, Portfolio, Contact)[cite: 1].
* **JavaScript (ES6+)**: The core language used for the application's logic.
* **CSS**: For custom styling where needed.

## 🧠 Concepts Applied

During the development of this website, I applied several key React concepts:

* **React Hooks**: Used `useState` to manage the state of the contact form and the project filters. `useEffect` was used to apply the filters and update the displayed projects.
* **Props**: Passed data from parent components (like `Portfolio`) to child components (like `ProjectCard`) to display project information dynamically.
* **Conditional Rendering**: Implemented in the `Portfolio` component to show projects that match the selected filters.

## 🚀 Getting Started

To run this project locally:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/YourUsername/your-portfolio-repo.git](https://github.com/YourUsername/your-portfolio-repo.git)
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm start
    ```